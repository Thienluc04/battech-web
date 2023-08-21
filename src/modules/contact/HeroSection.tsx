import { listSocialNetwork } from '@/constants/general';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="xl:ml-8 pt-3 bg-hero-intro pb-5 relative mb-[84px]" {...props}>
      <div className="flex items-center justify-between mx-[82px]">
        <div className="max-w-[590px] mt-5 xl:mt-0">
          <h1 className="xl:text-[32px] text-2xl font-bold text-primary mb-6 uppercase xl:leading-9 leading-7 font-fontArial">
            {t('LIÊN HỆ')}
          </h1>
          <p className="font-medium leading-6 text-textDesc">
            {t(
              'Chúng tôi mang đến cho bạn một giải pháp CNTT hoàn chỉnh trong điều kiện cạnh tranh nhân sự ngày càng khắc nghiệt',
            )}
          </p>
        </div>
        <div className="pt-[95px] xl:block hidden">
          <img src="/images/hero-img-5.png" alt="hero-img" />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-center xl:gap-5 gap-3 top-2/4 xl:left-0 left-2">
        {listSocialNetwork.map((item, index) => (
          <Link key={index} to={item.path}>
            <img src={item.image} alt={item.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}
