import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import Slider from 'react-slick';

import { useLazyGetListPostQuery, useLazyGetSinglePostQuery } from '@/api/postApi';
import { NewsSidebar } from '@/components/sidebar';
import { vn } from '@/constants/languages';
import { NewsItem } from '@/modules/news';

export default function NewsDetailsPage() {
  const { slug } = useParams();

  const [getSinglePost, { data: singlePost }] = useLazyGetSinglePostQuery();

  const { t } = useTranslation();

  const [getListPost, { data: postSimilarRes, isLoading }] = useLazyGetListPostQuery();

  useEffect(() => {
    if (slug) {
      getSinglePost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (singlePost) {
      getListPost({
        limit: 6,
        page: 1,
        sort: 'asc',
        topic: singlePost.topic,
      });
    }
  }, [singlePost]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center mx-5 my-6 xl:mx-0 md:max-w-[790px] md:mx-auto xl:max-w-none md:px-5 xl:px-0">
        {singlePost && (
          <p className="font-medium leading-6">
            <span className="text-primary">{t(vn.news.DETAIL_BREADCRUMB)}</span> /{' '}
            <span className="text-primary">{t(singlePost?.topic)}</span> / {singlePost?.title}
          </p>
        )}
        {!singlePost && (
          <div className="w-full xl:w-2/4">
            <Skeleton className="w-full leading-6"></Skeleton>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 mb-16 xl:flex-row">
        {!singlePost && (
          <div className="md:w-[790px] w-full xl:mx-0 mx-auto px-5 xl:px-0">
            <Skeleton className="text-[32px] font-bold leading-9 mb-8"></Skeleton>
            <Skeleton className="mb-5 font-medium leading-6"></Skeleton>
            <Skeleton className="mb-12 w-full h-[300px]"></Skeleton>
            <div>
              <Skeleton className="mb-2 text-xl font-bold leading-7"></Skeleton>
              <Skeleton className="mb-2 font-medium leading-6" count={10}></Skeleton>
            </div>
            <div>
              <Skeleton className="mb-2 text-xl font-bold leading-7" count={10}></Skeleton>
              <Skeleton className="mb-12 font-medium leading-6"></Skeleton>
              <Skeleton className="mb-12 w-full h-[300px]"></Skeleton>
            </div>
            <div>
              <Skeleton className="mb-2 text-xl font-bold leading-7"></Skeleton>
              <Skeleton className="font-medium leading-6"></Skeleton>
            </div>
          </div>
        )}
        {singlePost && (
          <div className="max-w-[790px] xl:mx-0 mx-auto px-5 xl:px-0">
            <h1 className="text-[32px] font-fontArial font-bold leading-9 text-textPrimary mb-8">
              {singlePost?.title}
            </h1>
            <p className="mb-8 font-medium leading-6 text-textPrimary">{singlePost?.description}</p>
            <div className="news-content">{parse(singlePost.content)}</div>
          </div>
        )}
        <NewsSidebar></NewsSidebar>
      </div>
      <div className="h-[1px] bg-[#008346] mb-16 xl:mx-0 mx-5 md:max-w-[790px] md:mx-auto xl:max-w-none"></div>
      <section className="mx-5 xl:mx-0 md:max-w-[790px] md:mx-auto xl:max-w-none">
        <h2 className="text-[#0a0a0a] text-xl font-bold leading-7 mb-7">
          {t(vn.news.DETAIL_SIMILAR_TITLE)}
        </h2>
        {postSimilarRes && postSimilarRes?.data.length > 3 ? (
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            arrows={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            className="flex xl:mb-[144px] mb-20 xl:pb-10 pb-5 news"
          >
            {postSimilarRes?.data.map((item, index) => (
              <NewsItem key={index} post={item}></NewsItem>
            ))}
          </Slider>
        ) : (
          <>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 xl:mb-[144px] mb-20 xl:pb-10 pb-5">
              {postSimilarRes?.data.map((item, index) => (
                <NewsItem key={index} post={item}></NewsItem>
              ))}
            </div>
            {isLoading && (
              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 xl:mb-[144px] mb-20 xl:pb-10 pb-5">
                {new Array(4).fill(0).map((_, index) => (
                  <NewsItem key={index} loading></NewsItem>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
