export interface UserIconProps {
  variant?: 'white' | 'green' | 'gray';
  className?: string;
  type?: 'primary' | 'outline';
}

export function UserIcon({ variant = 'white', className = '', type = 'primary' }: UserIconProps) {
  return (
    <span className={className}>
      {type === 'primary' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            d="M7 8C9.1875 8 11 6.21875 11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4C3 6.21875 4.78125 8 7 8ZM9.78125 9H9.25C8.5625 9.34375 7.8125 9.5 7 9.5C6.1875 9.5 5.40625 9.34375 4.71875 9H4.1875C1.875 9 0 10.9062 0 13.2188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.2188C14 10.9062 12.0938 9 9.78125 9Z"
            fill={variant}
          />
        </svg>
      )}
      {type === 'outline' && (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.105 15.2467V13.6693C13.105 12.8327 12.7962 12.0303 12.2467 11.4387C11.6971 10.8471 10.9517 10.5147 10.1745 10.5147H4.31371C3.53652 10.5147 2.79116 10.8471 2.2416 11.4387C1.69204 12.0303 1.3833 12.8327 1.3833 13.6693V15.2467M10.1745 4.20542C10.1745 5.94768 8.86255 7.36006 7.24413 7.36006C5.6257 7.36006 4.31371 5.94768 4.31371 4.20542C4.31371 2.46316 5.6257 1.05078 7.24413 1.05078C8.86255 1.05078 10.1745 2.46316 10.1745 4.20542Z"
            stroke="#969696"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
