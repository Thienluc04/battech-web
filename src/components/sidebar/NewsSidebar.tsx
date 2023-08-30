import { useTranslation } from 'react-i18next';

import { useGetAllNewsQuery } from '@/api/newsApi';
import { vn } from '@/constants/languages';
import { SidebarNewsItem } from '@/modules/news';

export interface NewsSidebarProps {}

export function NewsSidebar(props: NewsSidebarProps) {
  const { data: listNews, isLoading } = useGetAllNewsQuery({
    isNewest: false,
    isEvent: false,
    _page: 1,
    _limit: 6,
  });

  const { t } = useTranslation();

  return (
    <div className="flex-1 mx-5 xl:mx-0" {...props}>
      <h2 className="text-xl font-bold leading-7 text-[#0A0A0A] mb-3 md:max-w-[790px] xl:max-w-none mx-auto">
        {t(vn.news.DETAIL_SIDEBAR_TITLE)}
      </h2>
      <div className="flex flex-col gap-5 shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] md:max-w-[790px] xl:max-w-none mx-auto">
        {listNews &&
          listNews?.data.length > 0 &&
          listNews?.data.map((item, index) => (
            <SidebarNewsItem key={index} news={item}></SidebarNewsItem>
          ))}
        {isLoading &&
          new Array(6)
            .fill(0)
            .map((_item, index) => <SidebarNewsItem key={index} loading></SidebarNewsItem>)}
      </div>
    </div>
  );
}
