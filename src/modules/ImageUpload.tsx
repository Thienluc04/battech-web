import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';

import { UploadIcon } from '@/components/icons';

export interface ImageUploadProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  errorMessage?: string;
}

export function ImageUpload<T extends FieldValues>({
  control,
  name,
  errorMessage,
}: ImageUploadProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });
  return (
    <label className="block rounded border border-borderAdmin py-5 cursor-pointer">
      <input type="file" {...field} className="invisible h-0 w-0 opacity-0 hidden" />
      {errorMessage && <p className="pt-1 text-sm font-bold text-red-500">{errorMessage}</p>}
      <div className="flex flex-col items-center justify-center">
        <UploadIcon></UploadIcon>
        <p className="text-[#5B5B5B] font-fontRoboto text-sm">Click để tải ảnh</p>
      </div>
    </label>
  );
}
