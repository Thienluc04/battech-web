import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import {
  ArrowRightIcon,
  DiscordIcon,
  EmailIcon,
  FacebookIcon,
  HouseIcon,
  LinkinIcon,
  PhoneIcon,
  TagIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/icons';
import { vn } from '@/constants/languages';

interface FooterProps extends ComponentProps<'div'> {
  background?: 'footer' | 'primary';
}

const footerLinkList: string[] = vn.footer.LIST_LINK;

export function Footer({ background = 'footer', className = '' }: FooterProps) {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        `xl:pt-[140px] pt-[160px] pb-[60px] bg-${background} text-white flex justify-center xl:block`,
        className,
      )}
    >
      <div className="max-w-[1200px] xl:mx-auto mx-5 flex xl:flex-row xl:pl-0 flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <img src="/images/logo-white.png" alt="logo-white" />
          </div>
          <p className="leading-6  max-w-[380px]">{t(vn.footer.DESCRIPTION)}</p>
          {background === 'primary' && (
            <div className="flex items-center gap-4 xl:mt-[60px]">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <FacebookIcon variant="#008345"></FacebookIcon>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <TwitterIcon variant="#008345"></TwitterIcon>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <YoutubeIcon variant="#008345"></YoutubeIcon>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <LinkinIcon variant="#008345"></LinkinIcon>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <DiscordIcon variant="#008345"></DiscordIcon>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-[318px]">
          <h2 className="text-2xl font-bold leading-7 uppercase mb-[26px]">
            {t(vn.footer.CONTACT)}
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <PhoneIcon></PhoneIcon>
              <p className="leading-6 max-w-[280px]">{t(vn.footer.PHONE)}: 024 85 896 999</p>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon></EmailIcon>
              <p className="leading-6 max-w-[280px]">E-Mail: info@batgroup.vn</p>
            </div>
            <div className="flex items-center gap-2">
              <HouseIcon className="block w-5"></HouseIcon>
              <p className="leading-6 max-w-[280px]">
                {t(vn.footer.ADDRESS)}: {t(vn.footer.ADDRESS_CONTENT)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <TagIcon></TagIcon>
              <p className="leading-6 max-w-[280px]">{t(vn.footer.COMPANY)}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-7 uppercase mb-[26px]">{t(vn.footer.LINKS)}</h2>
          <div className="flex flex-col gap-2">
            {footerLinkList.map((item, index) => (
              <div key={index} className="flex gap-2">
                <ArrowRightIcon></ArrowRightIcon>
                <Link to={'/'} className="leading-6">
                  {t(item)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
