import { useAppSelector } from '@/app/hooks';
import { NewestItem } from '.';
import { selectListNewestNews } from '@/features/news/newsSlice';
import { useGetNewestListQuery } from '@/api/newsApi';
import { useAppDispatch } from '@/app/hooks';
import { newsActions } from '@/features/news/newsSlice';
import { useEffect, useState } from 'react';
import { News } from '@/models';
import { useTranslation } from 'react-i18next';

export interface NewestSectionProps {}

export function NewestSection(props: NewestSectionProps) {
  const currentNewsList = useAppSelector(selectListNewestNews);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { data: newestResponse } = useGetNewestListQuery({
    _page: 1,
    _limit: 3,
  });

  useEffect(() => {
    if (newestResponse?.data) {
      dispatch(newsActions.setListNewest(newestResponse?.data));
    }
  }, [dispatch, newestResponse]);

  const [largeNewest, setLargeNewest] = useState<News>();
  const [newestList, setNewestList] = useState<News[]>();

  useEffect(() => {
    if (currentNewsList.length > 0) {
      setLargeNewest(currentNewsList[0]);
      setNewestList(currentNewsList.slice(1));
    }
  }, [currentNewsList]);

  return (
    <section className="max-w-[1200px] xl:mx-auto mx-5 mb-[96px] relative" {...props}>
      <h2 className="mb-6 text-xl font-bold leading-7 text-textDesc">{t('Tin tức mới')}</h2>
      {largeNewest && newestList && newestList.length > 0 && (
        <div className="flex xl:flex-row flex-col justify-center items-center gap-[30px] relative">
          <NewestItem
            newest={largeNewest}
            className="xl:w-[688px] xl:h-[564px] xl:rounded-none rounded-2xl"
          ></NewestItem>
          <div className="flex flex-col gap-8">
            {newestList.map((item, index) => (
              <NewestItem
                key={index}
                newest={item}
                className="xl:w-[484px] xl:h-[265px] xl:rounded-none rounded-2xl"
              ></NewestItem>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
