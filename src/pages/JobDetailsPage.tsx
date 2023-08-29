import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';

import { useGetSimilarJobsQuery, useGetSingleJobQuery } from '@/api/jobApi';
import { useAppDispatch } from '@/app/hooks';
import { AddressIcon, ClockIcon } from '@/components/icons';
import { jobActions } from '@/features/job/jobSlice';
import { Job, JobContent } from '@/models';
import { HeroSection, RecruitmentForm, SimilarJobs } from '@/modules/job';

export default function JobDetailsPage() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  const { data: jobResponse, isLoading } = useGetSingleJobQuery(slug as string);

  const { t } = useTranslation();

  const [jobDetail, setJobDetail] = useState<Job>();
  const [jobContent, setJobContent] = useState<JobContent[]>();

  const { data: listSimilarJobs, isLoading: similarLoading } = useGetSimilarJobsQuery(
    jobDetail?.group as string,
  );

  useEffect(() => {
    if (jobResponse && jobResponse?.length > 0) {
      setJobDetail(jobResponse[0]);
    }
  }, [jobResponse]);

  useEffect(() => {
    if (jobDetail) {
      setJobContent(jobDetail.content);
    }
  }, [jobDetail]);

  useEffect(() => {
    if (listSimilarJobs && listSimilarJobs.length > 0) {
      dispatch(jobActions.setSimilarJobs(listSimilarJobs));
    }
  }, [dispatch, listSimilarJobs]);

  return (
    <>
      <HeroSection></HeroSection>
      <div className="max-w-[1200px] mx-auto mb-[102px]">
        {!jobDetail && (
          <div className="px-5 md:max-w-[700px] mx-auto xl:max-w-none xl:mx-0">
            <Skeleton className="mb-6 w-[300px] h-5 "></Skeleton>
          </div>
        )}
        {jobDetail && (
          <p className="px-5 pt-4 mb-6 xl:px-0 md:max-w-[700px] mx-auto xl:max-w-none xl:mx-0">
            <span className="text-primary">{t('Cơ hội việc làm')}</span> / {jobDetail?.title}
          </p>
        )}
        <div className="flex xl:flex-row flex-col xl:px-0 px-5 gap-[68px] md:max-w-[700px] mx-auto xl:max-w-none xl:mx-0">
          {jobDetail && (
            <div className="max-w-[745px]">
              <h2 className="mb-2 text-2xl font-bold text-textBase">{jobDetail?.title}</h2>
              <p className="mb-2 text-textBase">{jobDetail?.description}</p>
              <div className="flex items-center gap-[26px] mb-3">
                <div className="flex items-center gap-2">
                  <AddressIcon variant="gray"></AddressIcon>
                  <p className="text-sm leading-7 text-gray97">{jobDetail?.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon variant="gray"></ClockIcon>
                  <p className="text-sm leading-7 text-gray97">{jobDetail?.date}</p>
                </div>
              </div>
              {jobContent?.map((content, index) => (
                <div className="mb-8" key={index}>
                  <h2 className="mb-3 text-xl font-bold text-textBase">{content.title}</h2>
                  <ul className="pl-5 leading-5 list-disc">
                    {content.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {isLoading && (
            <div className="xl:w-[745px] w-full">
              <Skeleton className="mb-2 text-2xl font-bold text-textBase"></Skeleton>
              <Skeleton className="mb-2 text-textBase"></Skeleton>
              <div className="flex items-center gap-[26px] mb-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-6 h-6"></Skeleton>
                  <Skeleton className="w-[100px] text-sm leading-7"></Skeleton>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-6 h-6"></Skeleton>
                  <Skeleton className="w-[100px] text-sm leading-7"></Skeleton>
                </div>
              </div>
              {new Array(7).fill(0).map((_, index) => (
                <div className="mb-5" key={index}>
                  <Skeleton className="mb-3 text-xl font-bold w-[200px]"></Skeleton>
                  <ul className="leading-5 list-disc">
                    <Skeleton className="w-full" count={5}></Skeleton>
                  </ul>
                </div>
              ))}
            </div>
          )}
          <div className="flex-1">
            <RecruitmentForm></RecruitmentForm>
            <SimilarJobs loading={similarLoading}></SimilarJobs>
          </div>
        </div>
      </div>
    </>
  );
}
