import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { listSocialNetwork } from '@/constants/general';
import { vn } from '@/constants/languages';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="xl:ml-8 pt-3 bg-hero-intro pb-5 relative xl:mb-[92px] mb-[88px]" {...props}>
      <div className="flex items-center justify-between xl:mx-[82px] mx-12">
        <div className="max-w-[590px] mx-auto xl:mx-0">
          <h1
            className="xl:text-[32px] text-2xl font-bold text-primary xl:mb-6 mb-4 uppercase xl:leading-9 leading-7 font-fontArial 
            xl:text-left text-center"
          >
            {t(vn.introduce.HERO_TITLE)} <span className="text-orange">BATTECH</span>
          </h1>
          <p className="font-medium leading-6 text-center text-textDesc xl:text-left">
            {t(vn.introduce.HERO_DESCRIPTION)}
          </p>
        </div>
        <div className="hidden pt-5 xl:block">
          <img src="/images/hero-img-2.png" alt="hero-img" />
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
