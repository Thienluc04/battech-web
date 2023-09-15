import { ComponentProps, HTMLInputTypeAttribute } from 'react';
import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export interface LoginFieldProps<T extends FieldValues> extends ComponentProps<'div'> {
  title: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
}

export function LoginField<T extends FieldValues>({
  className = '',
  name,
  control,
  placeholder = '',
  errorMessage = '',
  type = 'text',
  title,
}: LoginFieldProps<T>) {
  const { field } = useController({
    control,
    name,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  return (
    <div className={twMerge('', className)}>
      <label className="block pl-4 mb-1 leading-6 font-fontRoboto">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[50px] w-full rounded-3xl border border-[#3F4D63] px-5"
        {...field}
      />
      {errorMessage && <span className="text-sm font-bold text-red-500">{errorMessage}</span>}
    </div>
  );
}
