import { yupResolver } from '@hookform/resolvers/yup';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button } from '@/components/button';
import { ArrowLeftIcon, CheckIcon } from '@/components/icons';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { modulesImageUpload } from '@/constants/general';
import { ImageUpload } from '@/modules';

import { PostField, PostSidebar } from '.';

const schema = yup.object({
  title: yup.string().required('Bạn cần phải nhập tiêu đề bài viết'),
  description: yup.string().required('Bạn cần phải nhập mô tả bài viết'),
  content: yup.string().required('Bài viết không được để trống nội dung'),
  slug: yup.string().required('Bài viết này chưa có slug'),
  image: yup.string(),
  category: yup.string(),
  author: yup.string(),
  tag: yup.array(),
  date: yup.string(),
});

// Quill.register('modules/imageUploader', ImageUploader);

export function CreatePost() {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (content.length > 0) {
      setValue('content', content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const handleAddNewPost: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleAddNewPost)} className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Link to={'/manage/posts'}>
            <ArrowLeftIcon variant="black"></ArrowLeftIcon>
          </Link>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Bài viết mới</h1>
        </div>
        <div className="flex gap-p10">
          <Button
            variant="secondary"
            className="flex items-center gap-[6px] px-p10 bg-[#C8CBD1] rounded h-8"
          >
            <CheckIcon></CheckIcon>
            <span className="text-base text-textAdmin font-fontRoboto">Publish</span>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center gap-[6px] px-p10 bg-primaryAdmin rounded h-8"
          >
            <span className="text-base text-white font-fontRoboto">Lưu bài viết</span>
          </Button>
        </div>
      </div>
      <div className="flex gap-[18px]">
        <div className="flex-1 p-4 bg-white rounded-md">
          <div className="flex gap-4 mb-5">
            <PostField className="flex-1" title="Tên bài viết" required>
              <Textarea
                control={control}
                name="title"
                className="h-[85px] w-full border border-borderAdmin resize-none p-3 rounded font-fontRoboto"
                errorMessage={errors.title && String(errors.title.message)}
              ></Textarea>
            </PostField>
            <PostField className="flex-1" title="Mô tả" required>
              <Textarea
                control={control}
                name="description"
                className="h-[85px] w-full border border-borderAdmin resize-none p-3 rounded font-fontRoboto"
                errorMessage={errors.description && String(errors.description.message)}
              ></Textarea>
            </PostField>
          </div>
          <PostField title="Nội dung" required>
            <div className="h-[552px] max-w-full entry-content">
              <ReactQuill
                modules={modulesImageUpload}
                theme="snow"
                value={content}
                onChange={setContent}
                className="max-h-full h-[90%] font-fontRoboto max-w-full resize-none"
              ></ReactQuill>
            </div>
            {errors.content && (
              <p className="pt-1 mb-2 text-sm font-bold text-red-500">
                {String(errors.content.message)}
              </p>
            )}
          </PostField>
          <div className="flex gap-4">
            <PostField title="Slug" required className="flex-1">
              <Input
                control={control}
                name="slug"
                className="w-full rounded border-borderAdmin font-fontRoboto"
                errorMessage={errors.slug && String(errors.slug.message)}
              ></Input>
            </PostField>
            <PostField title="Ảnh" className="flex-1">
              <ImageUpload control={control} name="image"></ImageUpload>
            </PostField>
          </div>
        </div>
        <PostSidebar></PostSidebar>
      </div>
    </form>
  );
}
