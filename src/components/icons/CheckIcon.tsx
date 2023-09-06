import { ComponentProps } from 'react';

export interface CheckIconProps extends ComponentProps<'span'> {}

export function CheckIcon({ className = '' }: CheckIconProps) {
  return (
    <span className={className}>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.875 5.625L8.125 14.375L3.75 10"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
