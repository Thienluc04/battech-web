import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { useAppSelector } from '@/app/hooks';
import { selectListEventNews, selectListNewestNews } from '@/features/news/newsSlice';
import { News } from '@/models';
import { NewestItem, NewsItem } from '@/modules/news';

export interface NewsSectionProps {}

export function NewsSection(props: NewsSectionProps) {
  const currentNewsList = useAppSelector(selectListNewestNews);
  const eventNewsList = useAppSelector(selectListEventNews);

  const [largeNewest, setLargeNewest] = useState<News>();
  const [newestItem, setNewestItem] = useState<News>();

  const { t } = useTranslation();

  useEffect(() => {
    if (currentNewsList.length > 0) {
      setLargeNewest(currentNewsList[0]);
      setNewestItem(currentNewsList[1]);
    }
  }, [currentNewsList]);

  return (
    <section className="max-w-[1200px] xl:mx-auto mx-3 xl:mt-[144px] mt-20" {...props}>
      <h2 className="mb-8 text-xl font-bold leading-7 text-center uppercase xl:mb-2 xl:text-2xl text-primary">
        {t('TIN TỨC')}
      </h2>
      <h3 className="mb-4 text-xl font-bold leading-7 text-textDesc">{t('Tin tức mới')}</h3>
      <div className="flex flex-col gap-4 mb-8 md:flex-row xl:mb-0">
        {largeNewest ? (
          <NewestItem
            newest={largeNewest}
            className="xl:w-[780px] md:flex-1 xl:flex-none xl:h-[358px] rounded-xl"
          ></NewestItem>
        ) : (
          <NewestItem
            className="xl:w-[780px] md:flex-1 xl:flex-none xl:h-[358px] h-[176px] rounded-xl"
            loading
          ></NewestItem>
        )}
        {newestItem ? (
          <NewestItem newest={newestItem} className="flex-1 xl:h-[358px] rounded-xl"></NewestItem>
        ) : (
          <div className="flex-1">
            <NewestItem className="w-full xl:h-[358px] h-[176px] rounded-xl" loading></NewestItem>
          </div>
        )}
      </div>
      <h3 className="mt-6 mb-4 text-xl font-bold leading-7 text-textDesc">
        {t('Tin tức và sự kiện')}
      </h3>
      {eventNewsList.length > 0 && (
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          arrows={false}
          autoplay
          autoplaySpeed={3000}
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
          {eventNewsList.map((item, index) => (
            <NewsItem key={index} news={item} hideDesc></NewsItem>
          ))}
        </Slider>
      )}

      {eventNewsList.length <= 0 && (
        <div className="flex xl:flex-row flex-col flex-wrap xl:mb-[144px] mb-20 xl:pb-10 pb-5 gap-8">
          {new Array(3).fill(0).map((_item, index) => (
            <NewsItem className="flex-1" key={index} loading></NewsItem>
          ))}
        </div>
      )}
    </section>
  );
}
