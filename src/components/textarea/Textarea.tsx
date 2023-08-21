import { twMerge } from 'tailwind-merge';
import { Control, FieldValues, useController, Path, PathValue } from 'react-hook-form';

export interface TextareaProps<T extends FieldValues> {
  placeholder: string;
  className?: string;
  control: Control<T>;
  name: Path<T>;
  errorMessage?: string;
}

export function Textarea<T extends FieldValues>({
  control,
  name,
  placeholder,
  errorMessage,
  className = '',
}: TextareaProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  return (
    <>
      <textarea
        className={twMerge(
          'w-full h-[156px] py-2 px-3 border border-[rgba(0,_0,_0,_0.25)] rounded-md resize-none',
          className,
        )}
        placeholder={placeholder}
        {...field}
      ></textarea>
      {errorMessage && <p className="pt-1 text-sm font-bold text-red-500">{errorMessage}</p>}
    </>
  );
}
