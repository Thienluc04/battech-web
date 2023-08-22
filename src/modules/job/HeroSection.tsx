import { useTranslation } from 'react-i18next';

export interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="xl:ml-8 pt-3 bg-hero-intro pb-5 relative mb-[35px]" {...props}>
      <div className="flex items-center justify-between xl:mx-[82px] mx-5">
        <div className="max-w-[590px] xl:mx-0 mx-auto">
          <h1 className="xl:text-[32px] text-2xl font-bold text-primary xl:mb-6 mb-4 xl:leading-9 leading-7 font-fontArial xl:text-left text-center">
            {t('Công việc giấc mơ của bạn là đây')}
          </h1>
          <p className="font-medium leading-6 text-center text-textDesc xl:text-left">
            {t(
              'BATTECH tin tưởng vào tiềm năng và sự vĩ đại của mỗi người. Chúng tôi coi trọng việc học hỏi, hợp tác và hỗ trợ lẫn nhau. Khám phá bản thân. Hãy cho chúng tôi biết bạn đã có những gì và chúng tôi sẽ liên hệ với bạn nếu có một vai trò nào đó có vẻ phù hợp.',
            )}
          </p>
        </div>
        <div className="pt-[95px] xl:block hidden">
          <img src="/images/hero-img-4.png" alt="hero-img" />
        </div>
      </div>
    </section>
  );
}
