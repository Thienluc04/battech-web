export interface ImageIconProps {}

export function ImageIcon(props: ImageIconProps) {
  return (
    <span {...props}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 15.75L7.71563 11.0344C7.78541 10.9636 7.8686 10.9073 7.96034 10.8689C8.05208 10.8305 8.15054 10.8107 8.25 10.8107C8.34946 10.8107 8.44792 10.8305 8.53966 10.8689C8.6314 10.9073 8.71459 10.9636 8.78437 11.0344L12.9656 15.2157C13.0354 15.2865 13.1186 15.3428 13.2103 15.3812C13.3021 15.4196 13.4005 15.4394 13.5 15.4394C13.5995 15.4394 13.6979 15.4196 13.7897 15.3812C13.8814 15.3428 13.9646 15.2865 14.0344 15.2157L15.9656 13.2844C16.0354 13.2136 16.1186 13.1573 16.2103 13.1189C16.3021 13.0805 16.4005 13.0607 16.5 13.0607C16.5995 13.0607 16.6979 13.0805 16.7897 13.1189C16.8814 13.1573 16.9646 13.2136 17.0344 13.2844L21 17.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.625 10.5C15.2463 10.5 15.75 9.99632 15.75 9.375C15.75 8.75368 15.2463 8.25 14.625 8.25C14.0037 8.25 13.5 8.75368 13.5 9.375C13.5 9.99632 14.0037 10.5 14.625 10.5Z"
          fill="white"
        />
      </svg>
    </span>
  );
}