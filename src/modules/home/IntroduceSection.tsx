import { useTranslation } from 'react-i18next';

import { introListItem } from '@/constants/home';
import { vn } from '@/constants/languages';

export interface IntroduceSectionProps {}

export function IntroduceSection(props: IntroduceSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-[56px] xl:mb-[144px] mb-20"
      {...props}
    >
      <div className="mx-5 xl:mx-0">
        <img src="/images/introduce-img.png" alt="introduce-img" />
      </div>
      <div className="max-w-[586px]">
        <h2 className="mb-4 text-xl font-bold leading-7 text-center uppercase xl:mb-6 xl:text-2xl text-primary xl:text-left">
          {t(vn.home.ABOUT_TITLE)}
        </h2>
        <p className="px-5 leading-6 text-center text-textPrimary xl:text-left xl:px-0">
          {t(vn.home.ABOUT_DESCRIPTION)}
        </p>
        <div className="grid items-center grid-cols-2 gap-8 mt-8 xl:flex">
          {introListItem.map((item, index) => (
            <div
              className="w-[123px] h-[144px] flex flex-col items-center justify-center gap-3 
                shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] border rounded-2xl border-primary mx-auto"
              key={index}
            >
              <img src={item.image} alt={item.alt} />
              <p className="px-5 leading-6 text-center text-textPrimary">{t(item.title)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
