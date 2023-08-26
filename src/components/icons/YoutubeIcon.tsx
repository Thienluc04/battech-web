import { ComponentProps } from 'react';

export interface YoutubeIconProps extends ComponentProps<'span'> {
  variant?: 'white' | 'green' | 'gray' | string;
}

export function YoutubeIcon({ variant = 'white', className = '' }: YoutubeIconProps) {
  return (
    <span className={className}>
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0624 2.45138C18.8542 1.61805 18.1944 0.958328 17.3958 0.749995C15.9028 0.333328 9.99997 0.333328 9.99997 0.333328C9.99997 0.333328 4.06247 0.333328 2.56942 0.749995C1.77081 0.958328 1.11108 1.61805 0.902751 2.45138C0.486084 3.90972 0.486084 7.03472 0.486084 7.03472C0.486084 7.03472 0.486084 10.125 0.902751 11.618C1.11108 12.4513 1.77081 13.0764 2.56942 13.2847C4.06247 13.6667 9.99997 13.6667 9.99997 13.6667C9.99997 13.6667 15.9028 13.6667 17.3958 13.2847C18.1944 13.0764 18.8542 12.4513 19.0624 11.618C19.4791 10.125 19.4791 7.03472 19.4791 7.03472C19.4791 7.03472 19.4791 3.90972 19.0624 2.45138ZM8.05553 9.84722V4.22222L12.9861 7.03472L8.05553 9.84722Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
