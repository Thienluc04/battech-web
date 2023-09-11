import { ComponentProps, PropsWithChildren } from 'react';

export interface PostFieldProps extends ComponentProps<'div'> {
  title: string;
  required?: boolean;
}

export function PostField({
  className = '',
  required = false,
  title,
  children,
}: PropsWithChildren<PostFieldProps>) {
  return (
    <div className={className}>
      <h2 className="mb-2 font-fontRoboto">
        {title} {required && <span className="text-[#E32D1C]">*</span>}
      </h2>
      {children}
    </div>
  );
}
