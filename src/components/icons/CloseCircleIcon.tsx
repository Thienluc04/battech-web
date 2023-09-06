export interface CloseCircleIconProps {}

export function CloseCircleIcon(props: CloseCircleIconProps) {
  return (
    <span {...props}>
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
          fill="#C8CBD1"
        />
        <path
          d="M11.25 6.75L6.75 11.25"
          stroke="#5B5B5B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 11.25L6.75 6.75"
          stroke="#5B5B5B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
