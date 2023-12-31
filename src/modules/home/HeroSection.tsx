import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '@/components/button';
import { listSocialNetwork } from '@/constants/general';
import { vn } from '@/constants/languages';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="xl:ml-8 pt-3 bg-hero xl:pb-[210px] pb-[180px] relative" {...props}>
      <div className="flex xl:flex-row flex-col items-center justify-between xl:ml-[82px]">
        <div className="max-w-[590px]">
          <h1 className="xl:text-[40px] text-3xl font-bold text-orange xl:mb-[26px] mb-4 uppercase text-center xl:text-left">
            BATTECH ERP
          </h1>
          <h2 className="px-5 mb-6 text-xl font-bold leading-6 text-center uppercase xl:px-0 xl:leading-7 xl:text-2xl text-primary xl:text-left">
            {t(vn.home.HERO_SEMI_TITLE)}
          </h2>
          <p className="font-medium leading-6 xl:mb-[52px] xl:text-left text-center xl:px-0 px-3 mb-10">
            {t(vn.home.HERO_DESCRIPTION)}
          </p>
          <div className="text-center xl:text-left">
            <Button variant="primary" to="/" className="px-5">
              {t(vn.home.HERO_BUTTON_TEXT)}
            </Button>
          </div>
        </div>
        <div className="mr-[58px] xl:block hidden">
          <img src="/images/hero-img.png" alt="hero-img" />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-center gap-5 top-2/4 xl:left-0 left-2">
        {listSocialNetwork.map((item, index) => (
          <Link key={index} to={item.path}>
            <img src={item.image} alt={item.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}
