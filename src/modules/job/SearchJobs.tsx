import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { vn } from '@/constants/languages';
import { jobActions, selectParamsJob } from '@/features/job/jobSlice';

export interface SearchJobsProps {}

export function SearchJobs(props: SearchJobsProps) {
  const currentParams = useAppSelector(selectParamsJob);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { control, handleSubmit, watch } = useForm({
    mode: 'onSubmit',
  });

  const nameJob = watch('nameJob');

  const handleSearchJob: SubmitHandler<FieldValues> = (values) => {
    dispatch(jobActions.setParams({ ...currentParams, title_like: values.nameJob }));
  };

  useEffect(() => {
    if (nameJob === '') {
      dispatch(jobActions.setParams({ ...currentParams, title_like: '' }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameJob]);

  return (
    <form
      onSubmit={handleSubmit(handleSearchJob)}
      className="flex xl:flex-row flex-col xl:gap-0 gap-5 xl:h-12 xl:mb-[54px] mb-10 xl:mx-0 mx-5"
      {...props}
    >
      <Input
        name="nameJob"
        placeholder={t(vn.job.SEARCH_PLACEHOLDER)}
        control={control}
        className="flex-1 h-full pr-5 xl:border-r-0 border-primary xl:border-r-transparent"
      ></Input>
      <Button variant="primary" className="xl:w-[276px] w-full xl:-ml-4 mx-auto">
        {t(vn.job.SEARCH_BUTTON_TEXT)}
      </Button>
    </form>
  );
}
