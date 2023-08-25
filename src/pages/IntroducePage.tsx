import { PartnersSection, RegisterInfoSection } from '@/modules';
import {
  CredoSection,
  HeroSection,
  IntroSection,
  SloganSection,
  VisionSection,
} from '@/modules/about';

export default function IntroducePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <VisionSection></VisionSection>
      <SloganSection></SloganSection>
      <CredoSection></CredoSection>
      <RegisterInfoSection></RegisterInfoSection>
      <PartnersSection></PartnersSection>
    </>
  );
}
