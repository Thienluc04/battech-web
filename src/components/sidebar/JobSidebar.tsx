import { RadioBox } from '@/components/checkbox';
import { Button } from '@/components/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { jobAddress, jobGroup, jobType } from '@/constants/general';
import { useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { jobActions, selectParamsJob } from '@/features/job/jobSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface JobSidebarProps {}

interface FormData {
  group?: string;
  address?: string;
  type?: string;
}

const listGroup = [
  {
    text: 'Tất cả',
    group: jobGroup.ALL,
  },
  {
    text: 'Frontend',
    group: jobGroup.FRONTEND,
  },
  {
    text: 'Backend',
    group: jobGroup.BACKEND,
  },
  {
    text: 'Product Design',
    group: jobGroup.PRODUCT_DESIGN,
  },
  {
    text: 'Tester',
    group: jobGroup.TESTER,
  },
  {
    text: 'HR',
    group: jobGroup.HR,
  },
];

const listAddress = [
  {
    text: 'Tất cả',
    address: jobAddress.ALL,
  },
  {
    text: 'Hà Nội',
    address: jobAddress.HANOI,
  },
  {
    text: 'Hồ Chí Minh',
    address: jobAddress.HCM,
  },
];

const listType = [
  {
    text: 'Tất cả',
    type: jobType.ALL,
  },
  {
    text: 'Toàn thời gian',
    type: jobType.FULLTIME,
  },
  {
    text: 'Bán thời gian',
    type: jobType.PARTTIME,
  },
  {
    text: 'Thực tập sinh',
    type: jobType.INTERN,
  },
];

export function JobSidebar(props: JobSidebarProps) {
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
      dispatch(jobActions.setParams({ ...params, ...filter }));
    } else {
      if (!filter.address) {
        delete params.address;
        dispatch(jobActions.setParams({ ...params, ...filter }));
        if (!filter.group) {
          delete params.group;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
        if (!filter.type) {
          delete params.type;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
      }
      if (!filter.group) {
        delete params.group;
        dispatch(jobActions.setParams({ ...params, ...filter }));
        if (!filter.address) {
          delete params.address;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
        if (!filter.type) {
          delete params.type;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
      }
      if (!filter.type) {
        delete params.type;
        dispatch(jobActions.setParams({ ...params, ...filter }));
        if (!filter.address) {
          delete params.address;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
        if (!filter.group) {
          delete params.group;
          dispatch(jobActions.setParams({ ...params, ...filter }));
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilterJob)}
      className="flex flex-col gap-[68px] md:mx-auto"
      {...props}
    >
      <div className="flex flex-col gap-8 border-r border-r-primary md:border-r-0">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold leading-7 text-textBase">{t('Nhóm công việc')}</h2>
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
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold leading-7 text-textBase">{t('Địa điểm làm việc')}</h2>
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
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold leading-7 text-textBase">{t('Loại công việc')}</h2>
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
        </div>
      </div>
      <Button variant="primary" className="w-[276px] mx-auto">
        {t('Áp dụng bộ lọc')}
      </Button>
    </form>
  );
}
