import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';

export interface VistionSectionProps {}

export function VisionSection(props: VistionSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-10 vision-bg xl:py-[200px] py-[100px] mb-[92px]"
      {...props}
    >
      <div className="max-w-[580px] xl:mx-0 mx-5">
        <h2 className="mb-5 text-2xl font-bold leading-7 text-primary">
          {t(vn.introduce.VISION_TITLE)}
        </h2>
        <p className="text-textPrimary">
          <span className="font-bold">{t(vn.introduce.VISION_KEY)}</span>{' '}
          {t(vn.introduce.VISION_DESCRIPTION)}
        </p>
      </div>
      <img src="/images/vision-img.png" alt="vision-img" />
    </section>
  );
}
