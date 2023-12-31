import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetAllJobQuery } from '@/api/jobApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { JobSidebar } from '@/components/sidebar';
import { vn } from '@/constants/languages';
import { jobActions, selectListJob, selectParamsJob } from '@/features/job/jobSlice';
import { Pagination } from '@/modules';
import { HeroSection, JobItem, JobList, SearchJobs } from '@/modules/job';

const JOB_PER_PAGE = 6;

export default function RecruitmentJobPage() {
  const [totalPage, setTotalPage] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentJobList = useAppSelector(selectListJob);
  const currentParams = useAppSelector(selectParamsJob);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { data: listJobResponse, isLoading } = useGetAllJobQuery(currentParams);

  useEffect(() => {
    if (listJobResponse) {
      dispatch(jobActions.setListJob(listJobResponse?.data));
    }
  }, [dispatch, listJobResponse]);

  useEffect(() => {
    if (listJobResponse?.pagination) {
      setTotalPage(Math.ceil(listJobResponse.pagination._totalRows / JOB_PER_PAGE));
    }
  }, [listJobResponse?.pagination]);

  useEffect(() => {
    dispatch(jobActions.setParams({ ...currentParams, _page: currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <HeroSection></HeroSection>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="mb-5 text-xl font-bold leading-7 text-center xl:mb-10 xl:text-2xl text-textBase">
          {t(vn.job.TITLE)}
        </h2>
        <SearchJobs></SearchJobs>
        <div className="flex xl:flex-row flex-col gap-8 mb-[54px] xl:mx-0 mx-5">
          <JobSidebar></JobSidebar>
          {!isLoading && currentJobList.length > 0 && (
            <JobList>
              {currentJobList.map((item, index) => (
                <JobItem key={index} job={item}></JobItem>
              ))}
            </JobList>
          )}
          {!isLoading && currentJobList.length <= 0 && (
            <p className="flex-1 text-center">{t(vn.job.FILTER_NOT_MATCH)}</p>
          )}
          {isLoading && currentJobList.length <= 0 && (
            <div className="flex-1">
              <JobList>
                {new Array(6).fill(0).map((_item, index) => (
                  <JobItem key={index} loading></JobItem>
                ))}
              </JobList>
            </div>
          )}
        </div>
        {!isLoading && currentJobList.length > 0 && (
          <Pagination
            type="job"
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          ></Pagination>
        )}
      </div>
    </>
  );
}
