export interface LinkinIconProps {
  variant?: 'white' | 'green' | 'gray' | string;
  className?: string;
}

export function LinkinIcon({ variant = 'white', className = '' }: LinkinIconProps) {
  return (
    <span className={className}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.57143 16.0001H0.25V5.32161H3.57143V16.0001ZM1.89286 3.89304C0.857143 3.89304 0 3.00018 0 1.92875C0 0.464464 1.57143 -0.464108 2.85714 0.285892C3.46429 0.607321 3.82143 1.25018 3.82143 1.92875C3.82143 3.00018 2.96429 3.89304 1.89286 3.89304ZM15.9643 16.0001H12.6786V10.8216C12.6786 9.57161 12.6429 8.00018 10.9286 8.00018C9.21429 8.00018 8.96429 9.32161 8.96429 10.7145V16.0001H5.64286V5.32161H8.82143V6.78589H8.85714C9.32143 5.96446 10.3929 5.07161 12 5.07161C15.3571 5.07161 16 7.28589 16 10.143V16.0001H15.9643Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
