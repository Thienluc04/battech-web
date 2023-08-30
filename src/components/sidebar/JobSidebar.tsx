import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';

import {
  useGetWorkCategoriesQuery,
  useGetWorkLocationsQuery,
  useGetWorkTypesQuery,
} from '@/api/jobApi';
import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/button';
import { RadioBox } from '@/components/checkbox';
import { jobAddress, jobGroup, jobType } from '@/constants/job';
import { vn } from '@/constants/languages';
import { jobActions } from '@/features/job/jobSlice';
import { JobGroupField } from '@/modules/job';

interface FormData {
  category?: string;
  address?: string;
  type?: string;
}

export function JobSidebar() {
  const { control, handleSubmit, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      category: jobGroup.ALL,
      address: jobAddress.ALL,
      type: jobType.ALL,
    },
  });

  const { data: workCategories, isLoading: categoriesLoading } = useGetWorkCategoriesQuery({});
  const { data: workLocations, isLoading: locationsLoading } = useGetWorkLocationsQuery({});
  const { data: workTypes, isLoading: typesLoading } = useGetWorkTypesQuery({});

  const { t } = useTranslation();

  const [filter, setFilter] = useState<FormData>({});

  const dispatch = useAppDispatch();

  const watchCategory = watch('category');
  const watchAddress = watch('address');
  const watchType = watch('type');

  useEffect(() => {
    if (watchCategory !== jobGroup.ALL) {
      setFilter({ ...filter, category: watchCategory });
    } else {
      const temp: FormData = { ...filter };
      delete temp.category;
      setFilter({ ...temp });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchCategory]);

  useEffect(() => {
    if (watchAddress !== jobAddress.ALL) {
      setFilter({ ...filter, address: watchAddress });
    } else {
      const temp: FormData = { ...filter };
      delete temp.address;
      setFilter({ ...temp });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAddress]);

  useEffect(() => {
    if (watchType !== jobType.ALL) {
      setFilter({ ...filter, type: watchType });
    } else {
      const temp: FormData = { ...filter };
      delete temp.type;
      setFilter({ ...temp });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchType]);

  const handleFilterJob: SubmitHandler<FormData> = () => {
    dispatch(jobActions.setParams({ ...filter, _page: 1, _limit: 6 }));
  };

  return (
    <form onSubmit={handleSubmit(handleFilterJob)} className="flex flex-col gap-[68px] md:mx-auto">
      <div className="flex flex-col gap-8 border-r border-r-primary md:border-r-0">
        <JobGroupField title={t(vn.job.FILTER_GROUP_TITLE)}>
          {workCategories &&
            workCategories.map((item, index) => (
              <RadioBox
                key={index}
                name="category"
                control={control}
                checked={watchCategory === item.value}
                value={item.value}
              >
                {t(item.text)}
              </RadioBox>
            ))}
          {categoriesLoading && <Skeleton className="w-[150px] h-4" count={6}></Skeleton>}
        </JobGroupField>
        <JobGroupField title={t(vn.job.FILTER_ADDRESS_TITLE)}>
          {workLocations &&
            workLocations.map((item, index) => (
              <RadioBox
                key={index}
                name="address"
                control={control}
                checked={watchAddress === item.value}
                value={item.value}
              >
                {t(item.text)}
              </RadioBox>
            ))}
          {locationsLoading && <Skeleton className="w-[150px] h-4" count={6}></Skeleton>}
        </JobGroupField>
        <JobGroupField title={t(vn.job.FILTER_GROUP_TITLE)}>
          {workTypes &&
            workTypes.map((item, index) => (
              <RadioBox
                key={index}
                name="type"
                control={control}
                checked={watchType === item.value}
                value={item.value}
              >
                {t(item.text)}
              </RadioBox>
            ))}
          {typesLoading && <Skeleton className="w-[150px] h-4" count={6}></Skeleton>}
        </JobGroupField>
      </div>
      <Button variant="primary" className="xl:w-[276px] w-full mx-auto">
        {t(vn.job.FILTER_BUTTON_TEXT)}
      </Button>
    </form>
  );
}
