import { ComponentProps } from 'react';

export interface HouseIconProps extends ComponentProps<'span'> {
  variant?: 'white' | 'green' | 'gray';
}

export function HouseIcon({ variant = 'white', className = '' }: HouseIconProps) {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M9.70643 2.41412C9.5189 2.22665 9.2646 2.12134 8.99943 2.12134C8.73427 2.12134 8.47996 2.22665 8.29243 2.41412L1.29243 9.41412C1.11027 9.60273 1.00948 9.85533 1.01176 10.1175C1.01403 10.3797 1.1192 10.6305 1.30461 10.8159C1.49002 11.0014 1.74083 11.1065 2.00303 11.1088C2.26523 11.1111 2.51783 11.0103 2.70643 10.8281L2.99943 10.5351V17.1211C2.99943 17.3863 3.10479 17.6407 3.29232 17.8282C3.47986 18.0158 3.73421 18.1211 3.99943 18.1211H5.99943C6.26465 18.1211 6.519 18.0158 6.70654 17.8282C6.89407 17.6407 6.99943 17.3863 6.99943 17.1211V15.1211C6.99943 14.8559 7.10479 14.6016 7.29232 14.414C7.47986 14.2265 7.73421 14.1211 7.99943 14.1211H9.99943C10.2646 14.1211 10.519 14.2265 10.7065 14.414C10.8941 14.6016 10.9994 14.8559 10.9994 15.1211V17.1211C10.9994 17.3863 11.1048 17.6407 11.2923 17.8282C11.4799 18.0158 11.7342 18.1211 11.9994 18.1211H13.9994C14.2646 18.1211 14.519 18.0158 14.7065 17.8282C14.8941 17.6407 14.9994 17.3863 14.9994 17.1211V10.5351L15.2924 10.8281C15.481 11.0103 15.7336 11.1111 15.9958 11.1088C16.258 11.1065 16.5088 11.0014 16.6942 10.8159C16.8797 10.6305 16.9848 10.3797 16.9871 10.1175C16.9894 9.85533 16.8886 9.60273 16.7064 9.41412L9.70643 2.41412Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
