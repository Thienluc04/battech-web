import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import {
  useCreateAuthorMutation,
  useLazyGetSingleAuthorQuery,
  useUpdateAuthorMutation,
} from '@/api/authorApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { ArrowLeftIcon } from '@/components/icons';
import { Input } from '@/components/input';
import { authorActions, selectParamsAuthor } from '@/features/author/authorSlice';
import { Author } from '@/models';

import { PostField } from '../post';

const schema = yup.object({
  name: yup.string().required('Bạn phải nhập tên tác giả vào trường này'),
});

export function DetailAuthor() {
  const [authorId, setAuthorId] = useState<string>('');

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

  const [handleCreateAuthor, { data: responseCreate }] = useCreateAuthorMutation();
  const [handleUpdateAuthor, { data: responseUpdate }] = useUpdateAuthorMutation();

  const [getSingleAuthor, { data: singleAuthor }] = useLazyGetSingleAuthorQuery();

  const currentParams = useAppSelector(selectParamsAuthor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (slug && slug.length > 0) {
      setAuthorId(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (authorId) {
      getSingleAuthor(authorId);
    }
  }, [authorId]);

  useEffect(() => {
    if (singleAuthor) {
      reset({
        name: singleAuthor.name,
      });
    }
  }, [singleAuthor]);

  useEffect(() => {
    if (responseCreate) {
      toast.success(responseCreate.message);
    }
    if (responseUpdate) {
      toast.success(responseUpdate.message);
    }
  }, [responseCreate, responseUpdate]);

  const handleSubmitAuthor: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    if (slug && slug.length > 0) {
      await handleUpdateAuthor({ _id: slug, ...values } as Author);
    } else {
      await handleCreateAuthor(values as Author);
    }
    reset({
      name: '',
    });
    dispatch(authorActions.setParams({ ...currentParams, page: 1 }));
    navigate('/manage/authors');
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitAuthor)} className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Link to={'/manage/authors'}>
            <ArrowLeftIcon variant="black"></ArrowLeftIcon>
          </Link>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">
            {slug && slug.length > 0 ? 'Cập nhật tác giả' : 'Tác giả mới'}
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
          <PostField className="flex-1" title="Tên tác giả" required>
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
