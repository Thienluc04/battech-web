import { ComponentProps } from 'react';

export interface SquaresFourIconProps extends ComponentProps<'span'> {}

export function SquaresFourIcon({ className = '' }: SquaresFourIconProps) {
  return (
    <span className={className}>
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.875 3.375H3.375V7.875H7.875V3.375Z"
          stroke="#393939"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.625 3.375H10.125V7.875H14.625V3.375Z"
          stroke="#393939"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.875 10.125H3.375V14.625H7.875V10.125Z"
          stroke="#393939"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.625 10.125H10.125V14.625H14.625V10.125Z"
          stroke="#393939"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
