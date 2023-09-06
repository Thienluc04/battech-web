import { ComponentProps } from 'react';

export interface PlusIconProps extends ComponentProps<'span'> {}

export function PlusIcon({ className = '' }: PlusIconProps) {
  return (
    <span className={className}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8334 10.8333H10.8334V15.8333H9.16675V10.8333H4.16675V9.16663H9.16675V4.16663H10.8334V9.16663H15.8334V10.8333Z"
          fill="#F2F5F9"
        />
      </svg>
    </span>
  );
}
