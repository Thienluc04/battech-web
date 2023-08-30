import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';

export interface IntroSectionProps {}

export function IntroSection(props: IntroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-8 xl:mb-[92px] mb-10 xl:mx-0 px-5"
      {...props}
    >
      <img src="/images/introduce-img-2.png" alt="intro-img" />
      <div className="max-w-[580px]">
        <h2 className="mb-3 text-2xl font-bold leading-7 text-primary">
          {t(vn.introduce.ABOUT_TITLE)}
        </h2>
        <p className="font-medium leading-6 text-textDesc">{t(vn.introduce.ABOUT_DESC_1)}</p>
        <p className="py-6 font-medium leading-6 text-textDesc">{t(vn.introduce.ABOUT_DESC_2)}</p>
        <p className="font-medium leading-6 text-textDesc">{t(vn.introduce.ABOUT_DESC_3)}</p>
      </div>
    </section>
  );
}
