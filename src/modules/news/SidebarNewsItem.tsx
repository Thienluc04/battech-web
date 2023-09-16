import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { DateIcon, UserIcon } from '@/components/icons';
import { Post } from '@/models';

export interface SidebarNewsItemProps {
  news?: Post;
  loading?: boolean;
}

export function SidebarNewsItem({ news, loading = false }: SidebarNewsItemProps) {
  return (
    <>
      {news && (
        <div className="flex items-center">
          <Link to={`/news/${news.slug}`} className="block xl:w-[136px] w-[100px]">
            <img
              className="w-[136px] h-[114px] rounded-l-xl"
              src={news.image}
              alt="news-sidebar-img"
            />
          </Link>
          <div className="flex-1 p-3">
            <Link to={`/news/${news.slug}`} className="font-medium leading-[18px] mb-2 block">
              {news.title}
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <UserIcon variant="green"></UserIcon>
                <p className="text-xs font-fontArial">{news.author}</p>
              </div>
              <div className="flex items-center gap-1">
                <DateIcon variant="gray"></DateIcon>
                <p className="text-xs text-gray92 font-fontArial">{news.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex items-center">
          <Skeleton className="block xl:w-[136px] w-[100px] h-[114px] rounded-l-xl"></Skeleton>
          <div className="flex-1 p-3">
            <Skeleton className="font-medium leading-[18px] mb-2 block"></Skeleton>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Skeleton className="w-6 h-6"></Skeleton>
                <Skeleton className="w-10"></Skeleton>
              </div>
              <div className="flex items-center gap-1">
                <Skeleton className="w-6 h-6"></Skeleton>
                <Skeleton className="w-10"></Skeleton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
