import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { listSocialNetwork } from '@/constants/general';
import { vn } from '@/constants/languages';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="xl:ml-8 pt-3 bg-hero-intro pb-5 relative xl:mb-[80px] mb-[100px]"
      {...props}
    >
      <div className="flex items-center justify-between xl:mx-[82px]">
        <div className="max-w-[590px] xl:mx-0 mx-auto">
          <h1
            className="xl:text-[32px] text-2xl font-bold text-primary xl:mb-6 mb-4 uppercase xl:leading-9 leading-7 font-fontArial 
            xl:text-left text-center"
          >
            {t(vn.news.HERO_NEWS)} - {t(vn.news.HERO_EVENT)}
          </h1>
          <p className="font-medium leading-6 text-textDesc max-w-[375px] xl:text-left text-center">
            {t(vn.news.HERO_DESCRIPTION)}
          </p>
        </div>
        <div className="pt-[95px] xl:block hidden">
          <img src="/images/hero-img-3.png" alt="hero-img" />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-center gap-3 xl:gap-5 top-2/4 xl:left-0 left-2">
        {listSocialNetwork.map((item, index) => (
          <Link key={index} to={item.path}>
            <img src={item.image} alt={item.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}
