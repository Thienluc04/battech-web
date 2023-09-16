import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import slugify from 'slugify';
import * as yup from 'yup';

import {
  useCreateTopicMutation,
  useLazyGetSingleTopicQuery,
  useUpdateTopicMutation,
} from '@/api/topicApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { ArrowLeftIcon } from '@/components/icons';
import { Input } from '@/components/input';
import { selectParamsTopic, topicActions } from '@/features/topic/topicSlice';
import { Topic } from '@/models';
import { PostField } from '@/modules/post';

const schema = yup.object({
  name: yup.string().required('Bạn phải nhập tên chủ đề vào trường này'),
  slug: yup.string().required('Chủ đề này phải có slug'),
});

export function DetailTopic() {
  const [topicId, setTopicId] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { slug } = useParams();
  const navigate = useNavigate();

  const watchName = watch('name');

  useEffect(() => {
    if (slug && slug.length > 0) {
      setTopicId(slug);
    }
  }, [slug]);

  const [handleCreateTopic, { data: responseCreate }] = useCreateTopicMutation();
  const [handleUpdateTopic, { data: responseUpdate }] = useUpdateTopicMutation();

  const [getSingleTopic, { data: singleTopic }] = useLazyGetSingleTopicQuery();

  const currentParams = useAppSelector(selectParamsTopic);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (topicId) {
      getSingleTopic(topicId);
    }
  }, [getSingleTopic, topicId]);

  useEffect(() => {
    if (singleTopic) {
      reset({
        name: singleTopic.name,
        slug: singleTopic.slug,
      });
    }
  }, [singleTopic]);

  useEffect(() => {
    if (responseCreate) {
      toast.success(responseCreate.message);
    }
    if (responseUpdate) {
      toast.success(responseUpdate.message);
    }
  }, [responseCreate, responseUpdate]);

  useEffect(() => {
    if (watchName && watchName.length > 0) {
      setValue('slug', slugify(watchName, { lower: true }));
    }
  }, [watchName]);

  const handleSubmitTopic: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    if (slug && slug.length > 0) {
      await handleUpdateTopic({ _id: slug, ...values } as Topic);
    } else {
      await handleCreateTopic(values as Topic);
    }
    reset({
      name: '',
      slug: '',
    });
    dispatch(topicActions.setParams({ ...currentParams, page: 1 }));
    navigate('/manage/topics');
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitTopic)} className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Link
            to={'/manage/topics'}
            onClick={() => {
              dispatch(topicActions.setParams({ ...currentParams, page: 1 }));
            }}
          >
            <ArrowLeftIcon variant="black"></ArrowLeftIcon>
          </Link>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">
            {slug && slug.length > 0 ? 'Cập nhật chủ đề' : 'Chủ đề mới'}
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
          <div className="flex gap-4">
            <PostField className="flex-1" title="Tên chủ đề" required>
              <Input
                control={control}
                name="name"
                className="w-full rounded border-borderAdmin font-fontRoboto"
                errorMessage={errors.name && String(errors.name.message)}
              ></Input>
            </PostField>
            <PostField className="flex-1" title="Slug" required>
              <Input
                control={control}
                name="slug"
                className="w-full rounded border-borderAdmin font-fontRoboto"
                errorMessage={errors.slug && String(errors.slug.message)}
              ></Input>
            </PostField>
          </div>
        </div>
      </div>
    </form>
  );
}
