import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form';
import ReactQuill from 'react-quill';
import slugify from 'slugify';

import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { storage } from '@/constants/firebase';
import { ImageUpload } from '@/modules';
import { PostField } from '@/modules/post';

// Quill.register('modules/imageUploader', ImageUploader);

export interface DetailPostContentProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  setValue: UseFormSetValue<T>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export function DetailPostContent<T extends FieldValues>({
  control,
  errors,
  setValue,
  content,
  setContent,
  imageUrl,
  setImageUrl,
}: DetailPostContentProps<T>) {
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  const handleChangeTitlePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue('slug' as Path<T>, slugify(e.target.value, { lower: true }) as PathValue<T, Path<T>>);
  };

  const handleUploadImage = async (file: File | null) => {
    if (!file) return;
    const imageRef = ref(storage, `list/${file.name}`);
    await uploadBytes(imageRef, file).then(() => {
      setLoadingImage(true);
    });

    await getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
      setLoadingImage(false);
    });
  };
  return (
    <div className="flex-1 flex gap-[18px] pr-4">
      <div className="flex-1 p-4 bg-white rounded-md">
        <div className="flex gap-4 mb-5">
          <PostField className="flex-1" title="Tên bài viết" required>
            <Textarea
              control={control}
              name={'title' as Path<T>}
              className="h-[85px] w-full border border-borderAdmin resize-none p-3 rounded font-fontRoboto"
              errorMessage={errors.title && String(errors.title.message)}
              onChange={handleChangeTitlePost}
            ></Textarea>
          </PostField>
          <PostField className="flex-1" title="Mô tả" required>
            <Textarea
              control={control}
              name={'description' as Path<T>}
              className="h-[85px] w-full border border-borderAdmin resize-none p-3 rounded font-fontRoboto"
              errorMessage={errors.description && String(errors.description.message)}
            ></Textarea>
          </PostField>
        </div>
        <PostField title="Nội dung" required>
          <div className="h-[552px] max-w-full entry-content">
            <ReactQuill
              // modules={modulesImageUpload}
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
              name={'slug' as Path<T>}
              className="w-full rounded border-borderAdmin font-fontRoboto"
              errorMessage={errors.slug && String(errors.slug.message)}
            ></Input>
          </PostField>
          <PostField title="Ảnh" className="flex-1">
            <ImageUpload
              imgUrl={imageUrl}
              loading={loadingImage}
              onChange={(e) => {
                if (e.target.files) handleUploadImage(e.target.files[0]);
              }}
            ></ImageUpload>
          </PostField>
        </div>
      </div>
    </div>
  );
}
