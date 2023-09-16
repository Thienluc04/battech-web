import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/button';
import { DateIcon, UserIcon } from '@/components/icons';
import { Post } from '@/models';

export interface NewestItemProps extends ComponentProps<'div'> {
  newest?: Post;
  loading?: boolean;
}

export function NewestItem({ newest, loading = false, className = '' }: NewestItemProps) {
  const { t } = useTranslation();

  return (
    <>
      {!loading && newest && (
        <div
          className={twMerge('p-6 flex flex-col justify-end rounded-[20px]', className)}
          style={{
            backgroundImage: `url(${newest.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <Button variant="secondary" className="mb-2 xl:text-xl text-base py-[6px] px-3">
              {t(newest.topic)}
            </Button>
            <Link
              to={`/news/${newest.slug}`}
              className="block mb-2 text-lg font-bold leading-7 text-white xl:text-2xl titleShort"
            >
              {newest.title}
            </Link>
            <div className="max-w-[252px] flex justify-between items-center text-white">
              <div className="flex gap-2">
                <UserIcon></UserIcon>
                <span className="text-sm leading-5 font-fontArial">{newest.author}</span>
              </div>
              <div className="flex gap-2">
                <DateIcon></DateIcon>
                <span className="text-sm leading-5 font-fontArial">{newest.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <Skeleton className={twMerge('p-6 flex flex-col justify-end', className)}></Skeleton>
      )}
    </>
  );
}
