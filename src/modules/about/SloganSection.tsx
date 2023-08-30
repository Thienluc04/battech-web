import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';

export interface SloganSectionProps {}

export function SloganSection(props: SloganSectionProps) {
  const { t } = useTranslation();
  return (
    <section
      className="xl:mr-[20%] bg-[#E9F9D6] xl:rounded-r-[32px] py-[72px] mb-[92px]"
      {...props}
    >
      <div className="max-w-[1200px] xl:mx-auto mx-5 flex xl:flex-row flex-col xl:justify-end xl:items-start items-center xl:gap-8 gap-10">
        <div className="mt-5">
          <h2 className="mb-5 text-xl font-bold leading-7 text-orange">BAT</h2>
          {vn.introduce.SLOGAN_BAT_LIST.map((item, index) => (
            <div
              className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
              shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
              key={index}
            >
              {t(item)}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h2 className="mb-5 text-xl font-bold leading-7 text-orange">TECH</h2>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “T” - {t(vn.introduce.SLOGAN_TECH_LIST[0])}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “E” - {t(vn.introduce.SLOGAN_TECH_LIST[1])}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “C” - {t(vn.introduce.SLOGAN_TECH_LIST[2])}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “H” - {t(vn.introduce.SLOGAN_TECH_LIST[3])}
          </div>
        </div>
        <div>
          <h2 className="mb-8 text-xl font-bold leading-7 xl:text-2xl xl:mb-12 text-primary">
            {t(vn.introduce.SLOGAN_TITLE)}
          </h2>
          <div className="flex flex-col gap-6 text-textDesc max-w-[474px]">
            <p>{t(vn.introduce.SLOGAN_FIRST_DESC)}</p>
            <p>{t(vn.introduce.SLOGAN_SECOND_DESC)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
