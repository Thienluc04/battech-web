import { ComponentProps } from 'react';

export interface MenuLeftIconProps extends ComponentProps<'span'> {}

export function MenuLeftIcon({ className, onClick }: MenuLeftIconProps) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
        style={{ fill: 'rgba(0, 0, 0, 1)', transform: '' }}
      >
        <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
      </svg>
    </span>
  );
}
