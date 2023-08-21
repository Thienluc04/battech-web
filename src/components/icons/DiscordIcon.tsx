export interface DiscordIconProps {
  variant?: 'white' | 'green' | 'gray' | string;
  className?: string;
}

export function DiscordIcon({ variant = 'white', className = '' }: DiscordIconProps) {
  return (
    <span className={className}>
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6937 1.37211C17.6937 1.37211 17.6937 1.37211 17.6608 1.37211C16.4139 0.781484 15.1014 0.387734 13.7562 0.158046C13.7233 0.125234 13.6906 0.158046 13.6906 0.158046C13.4937 0.486171 13.3296 0.847109 13.1983 1.17524C11.7218 0.945546 10.2452 0.945546 8.76865 1.17524C8.6374 0.847109 8.47333 0.486171 8.27646 0.158046C8.27646 0.158046 8.24365 0.125234 8.21083 0.158046C6.86552 0.387734 5.55302 0.781484 4.30614 1.37211C4.27333 1.37211 4.27333 1.37211 4.27333 1.37211C1.77958 5.11274 1.09052 8.75492 1.41864 12.3643C1.41864 12.3643 1.41864 12.3971 1.45145 12.3971C2.89521 13.48 4.53583 14.3002 6.2749 14.8252C6.2749 14.8581 6.30771 14.8252 6.34052 14.8252C6.70146 14.3002 7.02958 13.7752 7.32489 13.2175C7.32489 13.1846 7.32489 13.1518 7.29208 13.119C6.76708 12.9221 6.24208 12.6925 5.78271 12.3971C5.7499 12.3971 5.71708 12.3315 5.78271 12.2987C5.88115 12.2331 5.97958 12.1675 6.07802 12.069C6.07802 12.069 6.11083 12.069 6.14364 12.069C9.29365 13.5127 12.7062 13.5127 15.8233 12.069C15.8562 12.069 15.8562 12.069 15.8889 12.069C15.9874 12.1675 16.0858 12.2331 16.1843 12.2987C16.2171 12.3315 16.2171 12.3971 16.1843 12.3971C15.6921 12.6925 15.1999 12.9221 14.6749 13.119C14.6421 13.1518 14.6421 13.1846 14.6421 13.2175C14.9374 13.7752 15.2656 14.3002 15.6264 14.8252C15.6593 14.8252 15.6593 14.8581 15.6921 14.8252C17.4312 14.3002 19.0718 13.48 20.5156 12.3971C20.5483 12.3971 20.5483 12.3643 20.5483 12.3643C20.9421 8.19711 19.8593 4.58774 17.6937 1.37211ZM7.78427 10.1659C6.83271 10.1659 6.04521 9.27992 6.04521 8.22992C6.04521 7.14711 6.83271 6.29399 7.78427 6.29399C8.76865 6.29399 9.52333 7.14711 9.52333 8.22992C9.52333 9.27992 8.73583 10.1659 7.78427 10.1659ZM14.1827 10.1659C13.2312 10.1659 12.4764 9.27992 12.4764 8.22992C12.4764 7.14711 13.2312 6.29399 14.1827 6.29399C15.1671 6.29399 15.9546 7.14711 15.9218 8.22992C15.9218 9.27992 15.1671 10.1659 14.1827 10.1659Z"
          fill={variant}
        />
      </svg>
    </span>
  );
}
