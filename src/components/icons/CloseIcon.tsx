import { twMerge } from 'tailwind-merge';

export interface CloseIconProps {
  onClick?: () => void;
  className?: string;
}

export function CloseIcon({ onClick, className }: CloseIconProps) {
  return (
    <span className={twMerge('cursor-pointer', className)} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
        style={{ fill: 'currentColor', transform: '' }}
      >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
      </svg>
    </span>
  );
}
