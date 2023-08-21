import { Button } from '@/components/button';
import { AddressIcon, ClockIcon, DollarIcon } from '@/components/icons';
import { Job } from '@/models';
import { useTranslation } from 'react-i18next';

export interface JobItemProps {
  job: Job;
}

export function JobItem({ job }: JobItemProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-end justify-between w-full rounded-md bg-[#EEE] p-3">
      <div>
        <h2 className="text-xl font-bold text-textBase mb-[6px]">{job.title}</h2>
        <p className="mb-1 text-textBase">{job.description}</p>
        <div className="flex flex-col xl:gap-5 gap-3 xl:items-center xl:flex-row">
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
        className="xl:text-xs text-xs xl:leading-[25px] uppercase rounded-md"
      >
        {t('Ứng tuyển')}
      </Button>
    </div>
  );
}
