import { useTranslation } from 'react-i18next';

import { useGetListPostQuery } from '@/api/postApi';
import { vn } from '@/constants/languages';
import { SidebarNewsItem } from '@/modules/news';

export interface NewsSidebarProps {}

export function NewsSidebar(props: NewsSidebarProps) {
  const { data: listPost, isLoading } = useGetListPostQuery({
    sort: 'asc',
    limit: 6,
    page: 1,
  });

  const { t } = useTranslation();

  return (
    <div className="flex-1 mx-5 xl:mx-0" {...props}>
      <h2 className="text-xl font-bold leading-7 text-[#0A0A0A] mb-3 md:max-w-[790px] xl:max-w-none mx-auto">
        {t(vn.news.DETAIL_SIDEBAR_TITLE)}
      </h2>
      <div className="flex flex-col gap-5 shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] md:max-w-[790px] xl:max-w-none mx-auto">
        {listPost &&
          listPost?.data.length > 0 &&
          listPost?.data.map((item, index) => (
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
