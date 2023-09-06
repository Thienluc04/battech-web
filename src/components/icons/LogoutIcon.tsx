import { ComponentProps } from 'react';

export interface LogoutIconProps extends ComponentProps<'span'> {
  variant?: 'white' | string;
}

export function LogoutIcon({ variant = 'white', className = '' }: LogoutIconProps) {
  return (
    <span className={className}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5312 7.53125C15.8125 7.25 15.8125 6.78125 15.5312 6.46875L10.2812 1.21875C9.78125 0.75 9 1.09375 9 1.75V4.75H4.75C4.3125 4.75 4 5.09375 4 5.5V8.5C4 8.9375 4.3125 9.25 4.75 9.25H9V12.25C9 12.9375 9.8125 13.25 10.2812 12.7812L15.5312 7.53125ZM6 12.625V11.375C6 11.1875 5.8125 11 5.625 11H3C2.4375 11 2 10.5625 2 10V4C2 3.46875 2.4375 3 3 3H5.625C5.8125 3 6 2.84375 6 2.625V1.375C6 1.1875 5.8125 1 5.625 1H3C1.34375 1 0 2.34375 0 4V10C0 11.6562 1.34375 13 3 13H5.625C5.8125 13 6 12.8438 6 12.625Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
