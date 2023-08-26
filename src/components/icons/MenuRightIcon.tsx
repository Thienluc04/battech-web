import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface MenuRightIconProps extends ComponentProps<'span'> {}

export function MenuRightIcon({ onClick, className }: MenuRightIconProps) {
  return (
    <span onClick={onClick} className={twMerge('cursor-pointer', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 24 24"
        style={{ fill: 'currentColor', transform: '' }}
      >
        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
      </svg>
    </span>
  );
}
