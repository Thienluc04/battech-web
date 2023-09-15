import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useCreateTagMutation, useLazyGetSingleTagQuery, useUpdateTagMutation } from '@/api/tagApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { ArrowLeftIcon } from '@/components/icons';
import { Input } from '@/components/input';
import { selectParamsTag, tagActions } from '@/features/tag/tagSlice';
import { Tag } from '@/models';

import { PostField } from '../post';

const schema = yup.object({
  name: yup.string().required('Bạn phải nhập tên tag vào trường này'),
});

export function DetailTag() {
  const [tagId, setTagId] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { slug } = useParams();
  const navigate = useNavigate();

  const [handleCreateTag, { data: responseCreate }] = useCreateTagMutation();
  const [handleUpdateTag, { data: responseUpdate }] = useUpdateTagMutation();

  const [getSingleTag, { data: singleTag }] = useLazyGetSingleTagQuery();

  const currentParams = useAppSelector(selectParamsTag);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug && slug.length > 0) {
      setTagId(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (tagId) {
      getSingleTag(tagId);
    }
  }, [tagId]);

  useEffect(() => {
    if (singleTag) {
      reset({
        name: singleTag.name,
      });
    }
  }, [singleTag]);

  useEffect(() => {
    if (responseCreate) {
      toast.success(responseCreate.message);
    }
    if (responseUpdate) {
      toast.success(responseUpdate.message);
    }
  }, [responseCreate, responseUpdate]);

  const handleSubmitTag: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    if (slug && slug.length > 0) {
      await handleUpdateTag({ _id: slug, ...values } as Tag);
    } else {
      await handleCreateTag(values as Tag);
    }
    reset({
      name: '',
    });
    dispatch(tagActions.setParams({ ...currentParams, page: 1 }));
    navigate('/manage/tags');
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitTag)} className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Link to={'/manage/tags'}>
            <ArrowLeftIcon variant="black"></ArrowLeftIcon>
          </Link>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">
            {slug && slug.length > 0 ? 'Cập nhật tag' : 'Tag mới'}
          </h1>
        </div>
        <div className="flex gap-p10">
          <Button
            variant="secondary"
            className="flex items-center gap-[6px] px-p10 bg-primaryAdmin rounded h-8"
          >
            <span className="text-base text-white font-fontRoboto">
              {slug && slug.length > 0 ? 'Lưu' : 'Thêm'}
            </span>
          </Button>
        </div>
      </div>
      <div className="flex gap-[18px]">
        <div className="flex-1 p-4 bg-white rounded-md">
          <PostField className="flex-1" title="Tên tag" required>
            <Input
              control={control}
              name="name"
              className="w-full rounded border-borderAdmin font-fontRoboto"
              errorMessage={errors.name && String(errors.name.message)}
            ></Input>
          </PostField>
        </div>
      </div>
    </form>
  );
}
