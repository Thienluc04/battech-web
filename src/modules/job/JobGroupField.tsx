import { PropsWithChildren } from 'react';

export interface JobGroupFieldProps {
  title: string;
}

export function JobGroupField({ title, children }: PropsWithChildren<JobGroupFieldProps>) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-bold leading-7 text-textBase">{title}</h2>
      {children}
    </div>
  );
}
