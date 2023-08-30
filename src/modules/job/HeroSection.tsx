import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="xl:ml-8 pt-3 bg-hero-intro pb-5 relative mb-[35px]" {...props}>
      <div className="flex items-center justify-between xl:mx-[82px] mx-5">
        <div className="max-w-[590px] xl:mx-0 mx-auto">
          <h1 className="xl:text-[32px] text-2xl font-bold text-primary xl:mb-6 mb-4 xl:leading-9 leading-7 font-fontArial xl:text-left text-center">
            {t(vn.job.HERO_TITLE)}
          </h1>
          <p className="font-medium leading-6 text-center text-textDesc xl:text-left">
            {t(vn.job.HERO_DESCRIPTION)}
          </p>
        </div>
        <div className="pt-[95px] xl:block hidden">
          <img src="/images/hero-img-4.png" alt="hero-img" />
        </div>
      </div>
    </section>
  );
}
