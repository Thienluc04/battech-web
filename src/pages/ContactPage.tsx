import { useTranslation } from 'react-i18next';

import { vn } from '@/constants/languages';
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
          {t(vn.contact.FORM_TITLE)}
        </h2>
        <p className="px-5 font-medium leading-6 text-center">
          {t(vn.contact.FORM_DESCRIPTION)}
          <span className="text-[#F92323]">*</span>
        </p>
        <ContactForm></ContactForm>
      </section>
    </>
  );
}
