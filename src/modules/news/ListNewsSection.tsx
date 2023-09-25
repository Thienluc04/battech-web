import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetListPostQuery } from '@/api/postApi';
import { useGetListTopicQuery } from '@/api/topicApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { vn } from '@/constants/languages';
import { postActions, selectListPost, selectParamsPost } from '@/features/post/postSlice';
import { Topic } from '@/models';

import { ListNews, NewsItem } from '.';
import { Pagination } from '..';

export interface ListNewsSectionProps {}

const NEWS_PER_PAGE = 8;

export function ListNewsSection(props: ListNewsSectionProps) {
  const [totalPage, setTotalPage] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const currentParams = useAppSelector(selectParamsPost);

  const { t } = useTranslation();

  const { data: postResponse, isLoading } = useGetListPostQuery({ ...currentParams, limit: 8 });
  const { data: listTopic } = useGetListTopicQuery({
    sort: 'desc',
  });

  const dispatch = useAppDispatch();
  const listNews = useAppSelector(selectListPost);

  useEffect(() => {
    if (currentParams.topic) {
      const params = { ...currentParams };
      delete params.topic;
      dispatch(postActions.setParams({ ...params }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postResponse?.data) {
      dispatch(postActions.setListPost(postResponse?.data));
    }
  }, [dispatch, postResponse]);

  useEffect(() => {
    if (postResponse?.pagination) {
      setTotalPage(Math.ceil(postResponse.pagination.totalRows / NEWS_PER_PAGE));
    }
  }, [postResponse?.pagination]);

  useEffect(() => {
    dispatch(postActions.setParams({ ...currentParams, page: currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (currentCategory.length > 0) {
      dispatch(postActions.setParams({ ...currentParams, topic: currentCategory, page: 1 }));
    } else if (currentCategory === '') {
      const params = { ...currentParams };
      delete params.topic;
      dispatch(postActions.setParams({ ...params }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  return (
    <section className="max-w-[1200px] mx-auto mb-[130px]" {...props}>
      <div className="flex flex-wrap justify-between gap-3 mx-5 mb-10 xl:gap-8 xl:mx-0 xl:justify-normal">
        {listTopic?.length > 0 &&
          listTopic?.map((item: Topic, index: number) => (
            <div
              key={index}
              onClick={() => {
                if (item.name === currentCategory) {
                  setCurrentCategory('');
                  setCurrentPage(1);
                } else {
                  setCurrentCategory(item.name);
                  setCurrentPage(1);
                }
              }}
              className={`xl:text-2xl text-xl font-bold leading-7 cursor-pointer ${
                item.name === currentCategory ? 'text-primary' : 'text-gray7A'
              }`}
            >
              {t(item.name)}
            </div>
          ))}
      </div>
      <ListNews>
        {listNews.length > 0 &&
          listNews?.map((item, index) => <NewsItem key={index} post={item}></NewsItem>)}
      </ListNews>
      {listNews.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      )}
      {!isLoading && listNews.length <= 0 && (
        <p className="text-center">{t(vn.news.NEWS_NOT_MATCH)}</p>
      )}

      {isLoading && listNews.length <= 0 && (
        <ListNews>
          {new Array(8).fill(0).map((_item, index) => (
            <NewsItem key={index} loading></NewsItem>
          ))}
        </ListNews>
      )}
    </section>
  );
}
