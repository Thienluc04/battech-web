import { AddressIcon, ClockIcon, DollarIcon } from '@/components/icons';
import { Job } from '@/models';
import { Link } from 'react-router-dom';

export interface SimilarJobItemProps {
  similarJob: Job;
}

export function SimilarJobItem({ similarJob }: SimilarJobItemProps) {
  return (
    <div>
      <Link to={`/jobs/${similarJob.slug}`} className="mb-2 text-xl font-bold text-textBase">
        {similarJob.title}
      </Link>
      <p className="mb-1 text-textBase">{similarJob.description}</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-[6px]">
          <DollarIcon variant="gray"></DollarIcon>
          <span className="text-sm leading-7 text-gray97">{similarJob.wage}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <AddressIcon variant="gray"></AddressIcon>
          <span className="text-sm leading-7 text-gray97">{similarJob.address}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <ClockIcon variant="gray"></ClockIcon>
          <span className="text-sm leading-7 text-gray97">{similarJob.date}</span>
        </div>
      </div>
    </div>
  );
}
