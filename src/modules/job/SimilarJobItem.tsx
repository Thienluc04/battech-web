import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { AddressIcon, ClockIcon, DollarIcon } from '@/components/icons';
import { Job } from '@/models';

export interface SimilarJobItemProps {
  similarJob?: Job;
  loading?: boolean;
}

export function SimilarJobItem({ similarJob, loading }: SimilarJobItemProps) {
  return (
    <>
      {similarJob && (
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
      )}
      {loading && (
        <div>
          <Skeleton className="w-[150px] h-5 mb-2"></Skeleton>
          <Skeleton className="w-[200px] mb-3"></Skeleton>
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center gap-[6px] flex-1">
              <Skeleton className="w-6 h-6"></Skeleton>
              <Skeleton className="w-14 md:w-20 xl:w-14"></Skeleton>
            </div>
            <div className="flex items-center gap-[6px] flex-1">
              <Skeleton className="w-6 h-6"></Skeleton>
              <Skeleton className="w-14 md:w-20 xl:w-14"></Skeleton>
            </div>
            <div className="flex items-center gap-[6px] flex-1">
              <Skeleton className="w-6 h-6"></Skeleton>
              <Skeleton className="w-14 md:w-20 xl:w-14"></Skeleton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
