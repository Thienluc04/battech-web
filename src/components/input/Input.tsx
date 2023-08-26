import { ComponentProps } from 'react';
import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export interface InputProps<T extends FieldValues> extends ComponentProps<'input'> {
  control: Control<T>;
  name: Path<T>;
  errorMessage?: string;
}

export function Input<T extends FieldValues>({
  name,
  control,
  placeholder,
  errorMessage,
  type = 'text',
  className = '',
}: InputProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  return (
    <>
      <input
        type={type}
        className={twMerge('h-12 p-3 border rounded-xl border-grayC4', className)}
        placeholder={placeholder}
        {...field}
      />
      {errorMessage && <p className="pt-1 text-sm font-bold text-red-500">{errorMessage}</p>}
    </>
  );
}
