import { PartnersSection, RegisterInfoSection } from '@/modules';
import { HeroSection, IntroduceSection, NewsSection, OrientationSection } from '@/modules/home';

export default function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <IntroduceSection></IntroduceSection>
      <OrientationSection></OrientationSection>
      <NewsSection></NewsSection>
      <RegisterInfoSection></RegisterInfoSection>
      <PartnersSection></PartnersSection>
    </>
  );
}
