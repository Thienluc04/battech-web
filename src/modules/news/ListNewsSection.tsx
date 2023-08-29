import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetAllNewsQuery } from '@/api/newsApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { listCategories } from '@/constants/general';
import { newsActions, selectListNews, selectParamsNews } from '@/features/news/newsSlice';
import { Category } from '@/models';

import { ListNews, NewsItem } from '.';
import { Pagination } from '..';

export interface ListNewsSectionProps {}

const NEWS_PER_PAGE = 8;

export function ListNewsSection(props: ListNewsSectionProps) {
  const [totalPage, setTotalPage] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCategory, setCurrentCategory] = useState<Category>('');

  const currentParams = useAppSelector(selectParamsNews);

  const { t } = useTranslation();

  const { data: newsResponse, isLoading } = useGetAllNewsQuery(currentParams);

  const dispatch = useAppDispatch();
  const listNews = useAppSelector(selectListNews);

  useEffect(() => {
    if (currentParams.category) {
      const params = { ...currentParams };
      delete params.category;
      dispatch(newsActions.setParams({ ...params }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (newsResponse?.data) {
      dispatch(newsActions.setListNews(newsResponse?.data));
    }
  }, [dispatch, newsResponse]);

  useEffect(() => {
    if (newsResponse?.pagination) {
      setTotalPage(Math.ceil(newsResponse.pagination._totalRows / NEWS_PER_PAGE));
    }
  }, [newsResponse?.pagination]);

  useEffect(() => {
    dispatch(newsActions.setParams({ ...currentParams, _page: currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (currentCategory.length > 0) {
      dispatch(newsActions.setParams({ ...currentParams, category: currentCategory, _page: 1 }));
    } else if (currentCategory === '') {
      const params = { ...currentParams };
      delete params.category;
      dispatch(newsActions.setParams({ ...params }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  return (
    <section className="max-w-[1200px] mx-auto mb-[130px]" {...props}>
      <div className="flex flex-wrap justify-between gap-3 mx-5 mb-10 xl:gap-8 xl:mx-0 xl:justify-normal">
        {listCategories.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item === currentCategory) {
                setCurrentCategory('');
              } else {
                setCurrentCategory(item as Category);
              }
            }}
            className={`xl:text-2xl text-xl font-bold leading-7 cursor-pointer ${
              item === currentCategory ? 'text-primary' : 'text-gray7A'
            }`}
          >
            {t(item)}
          </div>
        ))}
      </div>
      <ListNews>
        {listNews.length > 0 &&
          listNews?.map((item, index) => <NewsItem key={index} news={item}></NewsItem>)}
      </ListNews>
      {listNews.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      )}
      {!isLoading && listNews.length <= 0 && (
        <p className="text-center">Không tìm thấy bài viết nào phù hợp</p>
      )}

      {isLoading && (
        <ListNews>
          {new Array(8).fill(0).map((_item, index) => (
            <NewsItem key={index} loading></NewsItem>
          ))}
        </ListNews>
      )}
    </section>
  );
}
