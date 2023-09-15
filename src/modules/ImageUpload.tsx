import { ChangeEvent } from 'react';

import { UploadIcon } from '@/components/icons';

export interface ImageUploadProps {
  imgUrl: string;
  loading: boolean;
  removeImage?: () => void;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ errorMessage, onChange, imgUrl, loading }: ImageUploadProps) {
  return (
    <label className="block h-[85px] border rounded cursor-pointer border-borderAdmin">
      <input type="file" onChange={onChange} className="invisible hidden w-0 h-0 opacity-0" />
      {errorMessage && <p className="pt-1 text-sm font-bold text-red-500">{errorMessage}</p>}
      <div className="flex flex-col items-center justify-center h-full">
        {!imgUrl && !loading && (
          <>
            <UploadIcon></UploadIcon>
            <p className="text-[#5B5B5B] font-fontRoboto text-sm">Click để tải ảnh</p>
          </>
        )}
        {imgUrl && (
          <img
            src={imgUrl}
            alt="upload-image"
            className="object-cover object-center w-full h-full rounded"
          />
        )}
        {loading && (
          <div className="absolute z-10 w-8 h-8 border-[2px] border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        )}
      </div>
    </label>
  );
}
