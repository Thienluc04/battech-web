import { useTranslation } from 'react-i18next';

import { Header } from '@/modules';
import { ContactForm, ContactUsSection, HeroSection } from '@/modules/contact';

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <ContactUsSection></ContactUsSection>
      <section className="max-w-[1200px] mx-auto mb-[120px]">
        <h2 className="mb-1 text-2xl font-bold leading-7 text-center text-textBase">
          {t('SẴN SÀNG ĐỂ BẮT ĐẦU')}
        </h2>
        <p className="px-5 font-medium leading-6 text-center">
          {t('Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc đánh dấu')}
          <span className="text-[#F92323]">*</span>
        </p>
        <ContactForm></ContactForm>
      </section>
    </>
  );
}
