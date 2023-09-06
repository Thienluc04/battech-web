import { ComponentProps } from 'react';

export interface ArrowTopIconProps extends ComponentProps<'span'> {
  variant?: 'white' | string;
}

export function ArrowTopIcon({ variant = 'white', className = '' }: ArrowTopIconProps) {
  return (
    <span className={className}>
      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.95703 0.289062L8.76563 4.07812C8.94141 4.27344 8.94141 4.56641 8.76563 4.74219L8.31641 5.19141C8.14063 5.36719 7.84766 5.36719 7.65234 5.19141L4.625 2.18359L1.61719 5.19141C1.42188 5.36719 1.12891 5.36719 0.953125 5.19141L0.503906 4.74219C0.328125 4.56641 0.328125 4.27344 0.503906 4.07812L4.3125 0.289062C4.48828 0.113281 4.78125 0.113281 4.95703 0.289062Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
