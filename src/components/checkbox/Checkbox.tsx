import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps extends ComponentProps<'input'> {}

export function Checkbox({ children, className = '' }: PropsWithChildren<CheckboxProps>) {
  return (
    <label className={twMerge('flex gap-2', className)}>
      <input type="checkbox" className="w-5 h-5 rounded-lg border border-[#3F4D63]" />
      <span className="leading-6 font-fontRoboto">{children}</span>
    </label>
  );
}
