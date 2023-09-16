import { ComponentProps } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { DateIcon, UserIcon } from '@/components/icons';
import { Post } from '@/models';

export interface NewsItemProps extends ComponentProps<'div'> {
  post?: Post;
  hideDesc?: boolean;
  loading?: boolean;
}

export function NewsItem({
  post,
  hideDesc = false,
  loading = false,
  className = '',
}: NewsItemProps) {
  return (
    <>
      {!loading && post && (
        <div
          className={twMerge(
            'shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] rounded-2xl',
            className,
          )}
        >
          <Link to={`/news/${post.slug}`} className="flex justify-center">
            <img
              src={post.image}
              className="rounded-xl bg-[#ddd] mb-3 xl:object-contain object-contain h-[165px] max-h-[165px] xl:mx-0 mx-auto"
              alt="post-item-img"
            />
          </Link>
          <div className="flex justify-between px-4 mb-2">
            <div className="flex items-center gap-3 rounded-2xl">
              <UserIcon variant="green"></UserIcon>
              <span className="leading-6">{post.author}</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl">
              <DateIcon variant="gray"></DateIcon>
              <span className="leading-6 text-gray92">
                <span className="leading-6 text-gray92">{post.date}</span>
              </span>
            </div>
          </div>
          <Link
            to={`/post/${post.slug}`}
            className="px-3 mb-2 text-lg font-bold leading-7 xl:text-xl text-textPrimary titleShort min-h-[56px]"
          >
            {post.title}
          </Link>
          {!hideDesc && (
            <p className="mx-3 mb-4 font-medium leading-6 text-gray92 descShort">
              {post.description}
            </p>
          )}
        </div>
      )}
      {loading && (
        <div
          className={twMerge(
            'shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] rounded-2xl pb-4',
            className,
          )}
        >
          <Skeleton className="h-[165px] rounded-xl mb-3" />
          <div className="flex justify-between px-4 mb-2">
            <div className="flex items-center gap-3 rounded-2xl">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-20"></Skeleton>
            </div>
            <div className="flex items-center gap-3 rounded-2xl">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-20"></Skeleton>
            </div>
          </div>
          <Skeleton className="h-6 mb-2" count={2} />
          {hideDesc && <Skeleton className="text-gray92" count={4} />}
        </div>
      )}
    </>
  );
}
