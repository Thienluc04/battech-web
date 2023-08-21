export interface IEmailIconProps {
  variant?: 'white' | 'green' | 'gray';
  className?: string;
  type?: 'primary' | 'outline';
}

export function EmailIcon({
  variant = 'white',
  className = '',
  type = 'primary',
}: IEmailIconProps) {
  return (
    <span className={className}>
      {type === 'primary' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M2.00391 6.00509L10.0009 10.0031L17.9979 6.00509C17.9683 5.49554 17.745 5.01658 17.3737 4.66632C17.0025 4.31606 16.5113 4.121 16.0009 4.12109H4.00091C3.49049 4.121 2.99935 4.31606 2.62808 4.66632C2.25681 5.01658 2.03351 5.49554 2.00391 6.00509Z"
            fill={variant}
          />
          <path
            d="M18 8.23914L10 12.2391L2 8.23914V14.1211C2 14.6516 2.21071 15.1603 2.58579 15.5353C2.96086 15.9104 3.46957 16.1211 4 16.1211H16C16.5304 16.1211 17.0391 15.9104 17.4142 15.5353C17.7893 15.1603 18 14.6516 18 14.1211V8.23914Z"
            fill={variant}
          />
        </svg>
      )}
      {type === 'outline' && (
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6671 4.32047L8.63406 9.8005L1.60107 4.32047M3.00767 1.71094H14.2605C15.0341 1.71094 15.6671 2.41551 15.6671 3.27666V12.671C15.6671 13.5321 15.0341 14.2367 14.2605 14.2367H3.00767C2.23404 14.2367 1.60107 13.5321 1.60107 12.671V3.27666C1.60107 2.41551 2.23404 1.71094 3.00767 1.71094Z"
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
