import { ComponentProps } from 'react';

export interface LiveHelpIconProps extends ComponentProps<'span'> {
  variant?: 'white' | 'green' | 'gray' | string;
}

export function LiveHelpIcon({ variant = 'white', className = '' }: LiveHelpIconProps) {
  return (
    <span className={className}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1051 2.50598H4.16494C3.29754 2.50598 2.60205 3.25753 2.60205 4.17608V15.8668C2.60205 16.7854 3.29754 17.5369 4.16494 17.5369H7.29071L9.63504 20.0421L11.9794 17.5369H15.1051C15.9647 17.5369 16.668 16.7854 16.668 15.8668V4.17608C16.668 3.25753 15.9647 2.50598 15.1051 2.50598ZM10.4165 14.1967V15.8668H8.8536V14.1967H10.4165ZM11.3308 10.1634L12.0341 9.39516C12.4795 8.91918 12.7608 8.25114 12.7608 7.51629C12.7608 5.67083 11.362 4.17608 9.63504 4.17608C7.90805 4.17608 6.50927 5.67083 6.50927 7.51629H8.07215C8.07215 6.59773 8.77545 5.84619 9.63504 5.84619C10.4946 5.84619 11.1979 6.59773 11.1979 7.51629C11.1979 7.97557 11.026 8.39309 10.7369 8.69371L9.76789 9.74588C9.20525 10.3555 8.8536 11.1905 8.8536 12.1091V12.5266H10.4165C10.4165 11.274 10.7681 10.773 11.3308 10.1634Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
