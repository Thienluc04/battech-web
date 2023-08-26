import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentProps<'button'> {
  to?: string;
  variant: 'primary' | 'secondary';
}

export function Button({
  onClick = () => {},
  className = '',
  to = '',
  variant = 'primary',
  children,
}: React.PropsWithChildren<ButtonProps>) {
  if (to.length > 0) {
    if (variant === 'primary') {
      return (
        <Link
          to={to}
          className={twMerge(
            'px-3 py-2 xl:text-2xl text-xl bg-primary text-white rounded-xl',
            className,
          )}
        >
          {children}
        </Link>
      );
    } else if (variant === 'secondary') {
      return (
        <Link
          to={to}
          className={twMerge(
            'px-3 py-2 xl:text-2xl text-xl bg-secondary text-white rounded-xl',
            className,
          )}
        >
          {children}
        </Link>
      );
    }
  } else {
    if (variant === 'primary') {
      return (
        <button
          type="submit"
          onClick={onClick}
          className={twMerge(
            'px-3 py-2 xl:text-2xl text-xl bg-primary text-white rounded-xl',
            className,
          )}
        >
          {children}
        </button>
      );
    } else if (variant === 'secondary') {
      return (
        <button
          type="submit"
          onClick={onClick}
          className={twMerge(
            'px-3 py-2 xl:text-2xl text-xl bg-secondary text-white rounded-xl',
            className,
          )}
        >
          {children}
        </button>
      );
    }
  }
}
