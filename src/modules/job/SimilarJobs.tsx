import { useAppSelector } from '@/app/hooks';
import { selectSimilarJobs } from '@/features/job/jobSlice';
import { SimilarJobItem } from '.';

export interface SimilarJobsProps {}

export function SimilarJobs(props: SimilarJobsProps) {
  const similarJobs = useAppSelector(selectSimilarJobs);

  return (
    <div className="border rounded-lg border-primary" {...props}>
      <div className="p-6 border-b border-b-primary">
        <h2 className="text-2xl font-bold text-textBase">Công việc tương tự</h2>
      </div>
      <div className="flex flex-col gap-6 p-6">
        {similarJobs.length > 0 &&
          similarJobs.map((item, index) => (
            <SimilarJobItem key={index} similarJob={item}></SimilarJobItem>
          ))}
      </div>
    </div>
  );
}
