import { useTranslation } from 'react-i18next';

import { useGetListPostQuery } from '@/api/postApi';
import { vn } from '@/constants/languages';

import { NewestItem } from '.';

export interface NewestSectionProps {}

export function NewestSection(props: NewestSectionProps) {
  const { t } = useTranslation();

  const { data: newestRes, isLoading } = useGetListPostQuery({
    page: 1,
    limit: 3,
  });

  return (
    <section className="max-w-[1200px] xl:mx-auto mx-5 mb-[96px] relative" {...props}>
      <h2 className="mb-6 text-xl font-bold leading-7 text-textDesc">{t(vn.news.NEWEST_TITLE)}</h2>
      {newestRes && newestRes.data.length > 0 && (
        <div className="flex md:flex-row flex-col justify-center items-center gap-[30px] relative">
          <NewestItem
            newest={newestRes.data[0]}
            className="xl:w-[688px] md:h-[564px] w-full  rounded-2xl"
          ></NewestItem>
          <div className="flex flex-col w-full gap-8 md:w-auto">
            {newestRes.data.map((item, index) => {
              if (index >= 1) {
                return (
                  <NewestItem
                    key={index}
                    newest={item}
                    className="xl:w-[484px] md:h-[265px] w-full rounded-2xl"
                  ></NewestItem>
                );
              }
            })}
          </div>
          {!isLoading && newestRes.data.length <= 0 && <p>{t(vn.news.NEWS_NO_LATEST)}</p>}
        </div>
      )}
      {isLoading && (
        <div className="flex md:flex-row flex-col justify-center items-center gap-[30px] relative">
          <div className="w-full md:max-w-[830px] xl:w-[688px] md:w-[600px]">
            <NewestItem loading className=" md:h-[564px] h-[176px] w-full rounded-2xl"></NewestItem>
          </div>
          <div className="flex flex-col flex-1 w-full gap-4 md:w-auto">
            {new Array(2).fill(0).map((_item, index) => (
              <NewestItem
                key={index}
                className="xl:w-[484px] md:h-[265px] md:w-full h-[176px] w-full rounded-2xl"
                loading
              ></NewestItem>
            ))}
          </div>
          {!isLoading && !newestRes && <p>{t(vn.news.NEWS_NO_LATEST)}</p>}
        </div>
      )}
    </section>
  );
}
