import { ComponentProps } from 'react';

export interface AddressIconProps extends ComponentProps<'span'> {
  variant?: 'white' | 'green' | 'gray';
}

export function AddressIcon({ variant = 'white', className = '' }: AddressIconProps) {
  return (
    <span className={className}>
      <svg
        width="11"
        height="15"
        viewBox="0 0 11 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.70312 14.4766C0.710938 8.73438 0 8.13281 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.13281 9.76172 8.73438 5.76953 14.4766C5.52344 14.8594 4.94922 14.8594 4.70312 14.4766ZM5.25 8.1875C6.45312 8.1875 7.4375 7.23047 7.4375 6C7.4375 4.79688 6.45312 3.8125 5.25 3.8125C4.01953 3.8125 3.0625 4.79688 3.0625 6C3.0625 7.23047 4.01953 8.1875 5.25 8.1875Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
