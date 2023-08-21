import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

export interface PartnerSectionProps {}

const listImgPartners: string[] = [
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/partner-3.png',
  '/images/partner-4.png',
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/partner-3.png',
  '/images/partner-4.png',
];

export function PartnersSection(props: PartnerSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="max-w-[1200px] mx-auto mb-[144px]" {...props}>
      <h2 className="uppercase text-2xl font-bold leading-7 text-primary mb-[26px] text-center">
        {t('ĐỐI TÁC')}
      </h2>
      <Slider
        dots
        infinite
        slidesToShow={4}
        slidesToScroll={4}
        arrows={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
        speed={500}
        className="flex items-center gap-8 pb-8 partners"
      >
        {listImgPartners.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] xl:px-[63px] px-5"
          >
            <img src={item} alt="partners-img" className="block" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
