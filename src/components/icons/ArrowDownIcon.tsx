import { ComponentProps } from 'react';

export interface ArrowDownIconProps extends ComponentProps<'span'> {
  kind?: string;
}

export function ArrowDownIcon({ className = '', kind }: ArrowDownIconProps) {
  return (
    <span className={className}>
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.55994 5.13953C4.73572 5.31531 5.02869 5.31531 5.20447 5.13953L9.01306 1.35046C9.18884 1.15515 9.18884 0.862183 9.01306 0.686401L8.56384 0.237183C8.38806 0.0614014 8.09509 0.0614014 7.89978 0.237183L4.89197 3.245L1.86462 0.237183C1.66931 0.0614014 1.37634 0.0614014 1.20056 0.237183L0.751343 0.686401C0.575562 0.862183 0.575562 1.15515 0.751343 1.35046L4.55994 5.13953Z"
          fill={kind || '#393939'}
        />
      </svg>
    </span>
  );
}
