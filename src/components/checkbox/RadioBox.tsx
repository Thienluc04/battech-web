import { ComponentProps, PropsWithChildren } from 'react';
import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export interface RadioBoxProps<T extends FieldValues> extends ComponentProps<'input'> {
  name: Path<T>;
  control: Control<T>;
}

export function RadioBox<T extends FieldValues>({
  name,
  control,
  children,
  className = '',
  ...props
}: PropsWithChildren<RadioBoxProps<T>>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  return (
    <label className="flex items-center gap-2">
      <input type="radio" className={twMerge('accent-primary', className)} {...field} {...props} />
      <span className="font-medium leading-6 text-[#0a0a0a]">{children}</span>
    </label>
  );
}
