import { useGetAllJobQuery } from '@/api/jobApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { JobSidebar } from '@/components/sidebar';
import { jobActions, selectListJob, selectParamsJob } from '@/features/job/jobSlice';
import { Pagination } from '@/modules';
import { HeroSection, JobItem, JobList, SearchJobs } from '@/modules/job';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
          {t('CƠ HỘI LÀM VIỆC HIỆN TẠI')}
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
            <p className="flex-1 text-center">{t('Không tìm thấy công việc nào phù hợp')}</p>
          )}
          {isLoading && (
            <div className="flex-1">
              <div className="w-10 h-10 mx-auto border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
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
