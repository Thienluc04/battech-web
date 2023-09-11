import { ComponentProps } from 'react';

export interface ArrowRightIconProps extends ComponentProps<'span'> {
  variant?: 'white' | 'green' | 'gray' | string;
}

export function ArrowRightIcon({
  variant = 'white',
  className = '',
  onClick = () => {},
}: ArrowRightIconProps) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.29279 14.8285C7.10532 14.641 7 14.3867 7 14.1215C7 13.8563 7.10532 13.602 7.29279 13.4145L10.5858 10.1215L7.29279 6.8285C7.11063 6.6399 7.00983 6.3873 7.01211 6.1251C7.01439 5.8629 7.11956 5.61209 7.30497 5.42668C7.49038 5.24127 7.74119 5.13611 8.00339 5.13383C8.26558 5.13155 8.51818 5.23234 8.70679 5.4145L12.7068 9.4145C12.8943 9.60203 12.9996 9.85634 12.9996 10.1215C12.9996 10.3867 12.8943 10.641 12.7068 10.8285L8.70679 14.8285C8.51926 15.016 8.26495 15.1213 7.99979 15.1213C7.73462 15.1213 7.48031 15.016 7.29279 14.8285Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
