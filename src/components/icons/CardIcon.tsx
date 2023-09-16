import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardIconProps extends ComponentProps<'span'> {}

export function CardIcon({ className = '' }: CardIconProps) {
  return (
    <span className={twMerge('block', className)}>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M14.375 6.25H3.125C2.77982 6.25 2.5 6.52982 2.5 6.875V15.625C2.5 15.9702 2.77982 16.25 3.125 16.25H14.375C14.7202 16.25 15 15.9702 15 15.625V6.875C15 6.52982 14.7202 6.25 14.375 6.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375V13.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
}
