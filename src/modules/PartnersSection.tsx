import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { listImgPartners } from '@/constants/general';
import { vn } from '@/constants/languages';

export interface PartnerSectionProps {}

export function PartnersSection(props: PartnerSectionProps) {
  const { t } = useTranslation();
  return (
    <section className="max-w-[1200px] mx-auto mb-[144px]" {...props}>
      <h2 className="uppercase text-2xl font-bold leading-7 text-primary mb-[26px] text-center">
        {t(vn.home.PARTNER_TITLE)}
      </h2>
      <Slider
        dots
        infinite
        slidesToShow={4}
        slidesToScroll={4}
        arrows={false}
        autoplay
        autoplaySpeed={3000}
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
