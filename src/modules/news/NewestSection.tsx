import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetNewestListQuery } from '@/api/newsApi';
import { useAppSelector } from '@/app/hooks';
import { useAppDispatch } from '@/app/hooks';
import { vn } from '@/constants/languages';
import { selectListNewestNews } from '@/features/news/newsSlice';
import { newsActions } from '@/features/news/newsSlice';
import { News } from '@/models';

import { NewestItem } from '.';

export interface NewestSectionProps {}

export function NewestSection(props: NewestSectionProps) {
  const currentNewsList = useAppSelector(selectListNewestNews);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { data: newestResponse, isLoading } = useGetNewestListQuery({
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
      <h2 className="mb-6 text-xl font-bold leading-7 text-textDesc">{t(vn.news.NEWEST_TITLE)}</h2>
      {largeNewest && newestList && newestList.length > 0 && (
        <div className="flex md:flex-row flex-col justify-center items-center gap-[30px] relative">
          <NewestItem
            newest={largeNewest}
            className="xl:w-[688px] md:h-[564px] w-full xl:rounded-none rounded-2xl"
          ></NewestItem>
          <div className="flex flex-col w-full gap-8 md:w-auto">
            {newestList.map((item, index) => (
              <NewestItem
                key={index}
                newest={item}
                className="xl:w-[484px] md:h-[265px] w-full xl:rounded-none rounded-2xl"
              ></NewestItem>
            ))}
          </div>
          {!isLoading && currentNewsList.length <= 0 && <p>{t(vn.news.NEWS_NO_LATEST)}</p>}
        </div>
      )}
      {isLoading && (
        <div className="flex md:flex-row flex-col justify-center items-center gap-[30px] relative">
          <div className="w-full md:max-w-[830px] xl:w-[688px] md:w-[600px]">
            <NewestItem loading className=" md:h-[564px] h-[176px] w-full rounded-2xl"></NewestItem>
          </div>
          <div className="flex flex-col flex-1 w-full gap-4 md:w-auto">
            {new Array(2).fill(0).map((_item, index) => (
              <NewestItem
                key={index}
                className="xl:w-[484px] md:h-[265px] md:w-full h-[176px] w-full rounded-2xl"
                loading
              ></NewestItem>
            ))}
          </div>
          {!isLoading && currentNewsList.length <= 0 && <p>{t(vn.news.NEWS_NO_LATEST)}</p>}
        </div>
      )}
    </section>
  );
}
