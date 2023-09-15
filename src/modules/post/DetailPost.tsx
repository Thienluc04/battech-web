import { yupResolver } from '@hookform/resolvers/yup';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import {
  useCreatePostMutation,
  useLazyGetSinglePostQuery,
  useUpdatePostMutation,
} from '@/api/postApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { ArrowLeftIcon } from '@/components/icons';
import { postActions, selectParamsPost } from '@/features/post/postSlice';
import { Post } from '@/models';
import { DetailPostContent, PostSidebar } from '@/modules/post';

const schema = yup.object({
  title: yup.string().required('Bạn cần phải nhập tiêu đề bài viết'),
  description: yup.string().required('Bạn cần phải nhập mô tả bài viết'),
  content: yup.string().required('Bài viết không được để trống nội dung'),
  slug: yup.string().required('Bài viết này chưa có slug'),
  image: yup.string(),
  topic: yup.string(),
  author: yup.string(),
  tag: yup.array(),
  date: yup.string(),
});

export function DetailPost() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const { slug } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const [handleCreatePost, { data: createResponse }] = useCreatePostMutation();
  const [handleUpdatePost, { data: updateResponse }] = useUpdatePostMutation();

  const [getSinglePost, { data: singlePost }] = useLazyGetSinglePostQuery();

  const currentParams = useAppSelector(selectParamsPost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (createResponse) {
      toast.success(createResponse.message);
    }
    if (updateResponse) {
      toast.success(updateResponse.message);
    }
  }, [createResponse, updateResponse]);

  useEffect(() => {
    if (singlePost) {
      reset({ ...singlePost });
      setContent(singlePost.content);
      setImageUrl(singlePost.image);
      setDate(singlePost.date);
    }
  }, [singlePost]);

  useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleDateString('en-GB'));
    if (slug) {
      getSinglePost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (content.length > 0) {
      setValue('content', content);
    }
  }, [content]);

  useEffect(() => {
    if (imageUrl.length > 0) {
      setValue('image', imageUrl);
    }
  }, [imageUrl]);

  const handleSubmitPost: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    values.date = date;
    if (!values.tags) return toast.error('Bạn chưa chọn tag cho bài viết');
    if (!slug) {
      await handleCreatePost(values as Post);
    } else {
      await handleUpdatePost({ _id: singlePost?._id, ...values } as Post);
    }
    reset({
      author: '',
      content: '',
      description: '',
      image: '',
      date: '',
      tag: [],
      title: '',
      topic: '',
    });
    dispatch(postActions.setParams({ ...currentParams, page: 1 }));
    setContent('');
    setImageUrl('');
    navigate('/manage/posts');
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitPost)} className="flex-1 px-3 py-5 bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Link to={'/manage/posts'}>
            <ArrowLeftIcon variant="black"></ArrowLeftIcon>
          </Link>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Bài viết mới</h1>
        </div>
        <div className="flex gap-p10">
          <Button
            type="submit"
            variant="secondary"
            className="flex items-center gap-[6px] px-p10 bg-primaryAdmin rounded h-8"
          >
            <span className="text-base text-white font-fontRoboto">
              {slug ? 'Lưu' : 'Thêm'} bài viết
            </span>
          </Button>
        </div>
      </div>
      <div className="flex">
        <DetailPostContent
          control={control}
          errors={errors}
          setValue={setValue}
          content={content}
          imageUrl={imageUrl}
          setContent={setContent}
          setImageUrl={setImageUrl}
        ></DetailPostContent>
        <PostSidebar
          setValue={setValue}
          date={date}
          control={control}
          nameAuthor="author"
          nameTopic="topic"
          listTag={singlePost?.tags}
        ></PostSidebar>
      </div>
    </form>
  );
}
