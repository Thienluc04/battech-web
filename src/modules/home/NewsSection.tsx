import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { useGetListPostQuery } from '@/api/postApi';
import { vn } from '@/constants/languages';
import { NewestItem, NewsItem } from '@/modules/news';

export interface NewsSectionProps {}

export function NewsSection(props: NewsSectionProps) {
  const { t } = useTranslation();

  const { data: listPost, isLoading } = useGetListPostQuery({
    sort: 'asc',
    limit: 6,
    page: 1,
  });

  return (
    <section className="max-w-[1200px] xl:mx-auto mx-3 xl:mt-[144px] mt-20" {...props}>
      <h2 className="mb-8 text-xl font-bold leading-7 text-center uppercase xl:mb-2 xl:text-2xl text-primary">
        {t(vn.home.NEWS_TITLE)}
      </h2>
      <h3 className="mb-4 text-xl font-bold leading-7 text-textDesc">{t(vn.home.NEWEST_TITLE)}</h3>
      <div className="flex flex-col gap-4 mb-8 md:flex-row xl:mb-0">
        {listPost?.data[0] ? (
          <NewestItem
            newest={listPost.data[0]}
            className="xl:w-[780px] md:flex-1 xl:flex-none xl:h-[358px] rounded-xl"
          ></NewestItem>
        ) : (
          <NewestItem
            className="xl:w-[780px] md:flex-1 xl:flex-none xl:h-[358px] h-[176px] rounded-xl"
            loading
          ></NewestItem>
        )}
        {listPost?.data[1] ? (
          <NewestItem
            newest={listPost.data[1]}
            className="flex-1 xl:h-[358px] rounded-xl"
          ></NewestItem>
        ) : (
          <div className="flex-1">
            <NewestItem className="w-full xl:h-[358px] h-[176px] rounded-xl" loading></NewestItem>
          </div>
        )}
      </div>
      <h3 className="mt-6 mb-4 text-xl font-bold leading-7 text-textDesc">
        {t(vn.home.NEWS_EVENT_TITLE)}
      </h3>
      {listPost && listPost?.data.length > 0 && (
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
          {listPost?.data.map((item, index) => (
            <NewsItem key={index} post={item} hideDesc></NewsItem>
          ))}
        </Slider>
      )}

      {isLoading && !listPost && (
        <div className="flex xl:flex-row flex-col flex-wrap xl:mb-[144px] mb-20 xl:pb-10 pb-5 gap-8">
          {new Array(3).fill(0).map((_item, index) => (
            <NewsItem className="flex-1" key={index} loading></NewsItem>
          ))}
        </div>
      )}
    </section>
  );
}
