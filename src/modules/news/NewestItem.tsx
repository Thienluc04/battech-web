import { Button } from '@/components/button';
import { DateIcon, UserIcon } from '@/components/icons';
import { News } from '@/models';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export interface NewestItemProps {
  className?: string;
  newest: News;
}

export function NewestItem({ newest, className = '' }: NewestItemProps) {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge('p-6 flex flex-col justify-end', className)}
      style={{
        backgroundImage: `url(${newest.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <Button variant="secondary" className="mb-2 xl:text-xl text-base py-[6px] px-3">
          {t(newest.category)}
        </Button>
        <Link
          to={`/news/${newest.slug}`}
          className="block mb-2 text-lg font-bold leading-7 text-white xl:text-2xl"
        >
          {newest.title}
        </Link>
        <div className="max-w-[252px] flex justify-between items-center text-white">
          <div className="flex gap-2">
            <UserIcon></UserIcon>
            <span className="text-sm leading-5 font-fontArial">{newest.authorName}</span>
          </div>
          <div className="flex gap-2">
            <DateIcon></DateIcon>
            <span className="text-sm leading-5 font-fontArial">{newest.datePublished}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
