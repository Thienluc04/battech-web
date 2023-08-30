import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/app/hooks';
import { vn } from '@/constants/languages';
import { selectSimilarJobs } from '@/features/job/jobSlice';

import { SimilarJobItem } from '.';

export interface SimilarJobsProps {
  loading: boolean;
}

export function SimilarJobs({ loading }: SimilarJobsProps) {
  const similarJobs = useAppSelector(selectSimilarJobs);

  const { t } = useTranslation();

  return (
    <div className="border rounded-lg border-primary">
      <div className="p-6 border-b border-b-primary">
        <h2 className="text-2xl font-bold text-textBase">{t(vn.job.DETAIL_SIMILAR_TITLE)}</h2>
      </div>
      <div className="flex flex-col gap-6 p-6">
        {similarJobs.length > 0 &&
          similarJobs.map((item, index) => (
            <SimilarJobItem key={index} similarJob={item}></SimilarJobItem>
          ))}
        {!loading && similarJobs.length <= 0 && <p>{t(vn.job.DETAIL_NO_SIMILAR)}</p>}
        {loading &&
          new Array(3)
            .fill(0)
            .map((_item, index) => <SimilarJobItem key={index} loading></SimilarJobItem>)}
      </div>
    </div>
  );
}
