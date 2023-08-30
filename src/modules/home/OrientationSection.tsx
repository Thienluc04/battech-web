import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';

export interface OrientationSectionProps {}

interface Orientation {
  title: string;
  description: string;
}

const listOrientations: Orientation[] = vn.home.DISTINCT_ITEMS;

export function OrientationSection(props: OrientationSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col items-center justify-center orientation-bg pt-[370px] pb-[400px] -mb-[400px] -mt-[370px]"
      {...props}
    >
      <h2 className="xl:text-2xl text-xl font-bold leading-7 uppercase mb-[76px]">
        <span className="text-orange">{t(vn.home.DISTINCT)} </span>
        <span className="text-primary">{t(vn.home.PIONEER)}</span>
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-14 max-w-[1200px] xl:mx-auto mx-5">
        {listOrientations.map((item, index) => (
          <div
            key={index}
            className="shadow-[2px_2px_8px_0px_rgba(0,_0,_0,_0.15)] bg-white rounded-2xl xl:pt-5 xl:px-3 xl:pb-4 p-5"
          >
            <h2 className="xl:text-[64px] text-[50px] font-bold leading-6 font-fontArial text-primary block xl:-translate-y-9 -translate-y-7">
              0{index + 1}
            </h2>
            <h2 className="mb-4 text-xl font-bold leading-6 text-center text-textPrimary">
              {t(item.title)}
            </h2>
            <p className="leading-6 text-center text-textPrimary min-h-[132px]">
              {t(item.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
