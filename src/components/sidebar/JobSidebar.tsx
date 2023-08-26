import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/button';
import { RadioBox } from '@/components/checkbox';
import { jobAddress, jobGroup, jobType, listAddress, listGroup, listType } from '@/constants/job';
import { jobActions, selectParamsJob } from '@/features/job/jobSlice';
import { JobGroupField } from '@/modules/job';

interface FormData {
  group?: string;
  address?: string;
  type?: string;
}

export function JobSidebar() {
  const { control, handleSubmit, watch } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      group: jobGroup.ALL,
      address: jobAddress.ALL,
      type: jobType.ALL,
    },
  });

  const { t } = useTranslation();

  const [filter, setFilter] = useState<FormData>({});

  const currentParams = useSelector(selectParamsJob);

  const dispatch = useAppDispatch();

  const watchGroup = watch('group');
  const watchAddress = watch('address');
  const watchType = watch('type');

  useEffect(() => {
    if (watchGroup !== jobGroup.ALL) {
      setFilter({ ...filter, group: watchGroup });
    } else {
      const temp: FormData = { ...filter };
      delete temp.group;
      setFilter({ ...temp });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchGroup]);

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
    const params = { ...currentParams };
    if (filter.address && filter.group && filter.type) {
      dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
    } else {
      if (!filter.address) {
        delete params.address;
        dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        if (!filter.group) {
          delete params.group;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
        if (!filter.type) {
          delete params.type;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
      }
      if (!filter.group) {
        delete params.group;
        dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        if (!filter.address) {
          delete params.address;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
        if (!filter.type) {
          delete params.type;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
      }
      if (!filter.type) {
        delete params.type;
        dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        if (!filter.address) {
          delete params.address;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
        if (!filter.group) {
          delete params.group;
          dispatch(jobActions.setParams({ ...params, ...filter, _page: 1 }));
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFilterJob)} className="flex flex-col gap-[68px] md:mx-auto">
      <div className="flex flex-col gap-8 border-r border-r-primary md:border-r-0">
        <JobGroupField title={t('Nhóm công việc')}>
          {listGroup.map((item, index) => (
            <RadioBox
              key={index}
              name="group"
              control={control}
              checked={watchGroup === item.group}
              value={item.group}
            >
              {t(item.text)}
            </RadioBox>
          ))}
        </JobGroupField>
        <JobGroupField title={t('Địa điểm làm việc')}>
          {listAddress.map((item, index) => (
            <RadioBox
              key={index}
              name="address"
              control={control}
              checked={watchAddress === item.address}
              value={item.address}
            >
              {t(item.text)}
            </RadioBox>
          ))}
        </JobGroupField>
        <JobGroupField title={t('Loại công việc')}>
          {listType.map((item, index) => (
            <RadioBox
              key={index}
              name="type"
              control={control}
              checked={watchType === item.type}
              value={item.type}
            >
              {t(item.text)}
            </RadioBox>
          ))}
        </JobGroupField>
      </div>
      <Button variant="primary" className="xl:w-[276px] w-full mx-auto">
        {t('Áp dụng bộ lọc')}
      </Button>
    </form>
  );
}
