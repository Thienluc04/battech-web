export interface JobListProps {}

export function JobList({ children }: React.PropsWithChildren<JobListProps>) {
  return <div className="flex-1 flex flex-col gap-[22px]">{children}</div>;
}
