export interface ArrowLeftIconProps {
  variant?: 'white' | 'green' | 'gray';
  className?: string;
  onClick?: () => void;
}

export function ArrowLeftIcon({
  variant = 'white',
  className = '',
  onClick = () => {},
}: ArrowLeftIconProps) {
  return (
    <span className={className} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.41 16.59L10.83 12L15.41 7.41L14 6L7.99997 12L14 18L15.41 16.59Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
