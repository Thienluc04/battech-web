import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';

import { Button } from '@/components/button';
import { AddressIcon, ClockIcon, DollarIcon } from '@/components/icons';
import { Job } from '@/models';

export interface JobItemProps {
  job?: Job;
  loading?: boolean;
}

export function JobItem({ job, loading = false }: JobItemProps) {
  const { t } = useTranslation();

  return (
    <>
      {job && (
        <div className="flex items-end justify-between w-full rounded-md bg-[#EEE] p-3">
          <div>
            <h2 className="xl:text-xl md:text-lg text-sm font-bold text-textBase mb-[6px]">
              {job.title}
            </h2>
            <p className="mb-1 text-xs md:text-base text-textBase">{job.description}</p>
            <div className="flex flex-col gap-3 xl:gap-5 xl:items-center xl:flex-row">
              <div className="flex items-center gap-2">
                <DollarIcon variant="gray"></DollarIcon>
                <span className="text-sm leading-7 text-gray97">{job.wage}</span>
              </div>
              <div className="flex items-center gap-2">
                <AddressIcon variant="gray"></AddressIcon>
                <span className="text-sm leading-7 text-gray97">{job.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon variant="gray"></ClockIcon>
                <span className="text-sm leading-7 text-gray97">{job.date}</span>
              </div>
            </div>
          </div>
          <Button
            to={`/jobs/${job.slug}`}
            variant="primary"
            className="xl:text-xs text-xs xl:leading-[25px] uppercase rounded-md block"
          >
            {t('Ứng tuyển')}
          </Button>
        </div>
      )}
      {loading && <Skeleton className="w-full p-3 rounded-md h-[114px]"></Skeleton>}
    </>
  );
}
