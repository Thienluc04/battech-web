export interface VietnamFlagProps {}

export function VietnamFlag(props: VietnamFlagProps) {
  return (
    <span {...props}>
      <svg
        width={31}
        height={20}
        viewBox="0 0 31 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2490)">
          <path
            d="M11.6313 0.000244141H0.109375V19.9998H30.1094V0.000244141H11.6313Z"
            fill="#D80027"
          />
          <path
            d="M15.1094 4.21558L16.4373 8.30231H20.7344L17.2579 10.8281L18.5859 14.9149L15.1094 12.3891L11.6329 14.9149L12.9609 10.8281L9.48438 8.30231H13.7815L15.1094 4.21558Z"
            fill="#FFDA44"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2490">
            <rect width={30} height={20} fill="white" transform="translate(0.109375)" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}
