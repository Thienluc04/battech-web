import i18n from 'i18next';
import { useEffect, useRef, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { CloseIcon, MenuRightIcon } from '@/components/icons';
import { listLink } from '@/constants/header';
import { i18nInit } from '@/constants/i18n';

import { ChangeLanguage } from '.';

i18n.use(initReactI18next).init(i18nInit);

export function Header() {
  const [language, setLanguage] = useState<'vn' | 'en'>();
  const [languageShow, setLanguageShow] = useState<boolean>(false);
  const [menuShow, setMenuShow] = useState<boolean>(false);

  const path = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language') as 'vn' | 'en');
    }
  }, []);

  useEffect(() => {
    setMenuShow(false);
    menuRef.current?.classList.remove('translate-x-full');
  }, []);

  useEffect(() => {
    if (menuShow) {
      menuRef.current?.classList.remove('translate-x-full');
    } else {
      menuRef.current?.classList.add('translate-x-full');
    }
  }, [menuShow]);

  useEffect(() => {
    if (menuShow) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [menuShow]);

  return (
    <div className="flex items-center justify-between p-5 bg-white xl:p-8 shadow-headerShadow">
      <Link to={'/'}>
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <div className="xl:hidden">
        <MenuRightIcon
          onClick={() => setMenuShow(!menuShow)}
          className="text-textDesc"
        ></MenuRightIcon>
      </div>
      <div
        ref={menuRef}
        className="xl:hidden md:w-[400px] w-full fixed top-0 right-0 bottom-0 bg-green-200 z-50 p-5 transition-all duration-200 translate-x-full"
      >
        <div className="flex justify-between">
          <Link to={'/'}>
            <img src="/images/logo.png" className="max-w-[100px]" alt="logo" />
          </Link>
          <CloseIcon className="text-primary" onClick={() => setMenuShow(false)}></CloseIcon>
        </div>
        <div className="flex flex-col justify-center gap-5 mt-10 text-lg text-textDesc">
          {listLink.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuShow(false)}
              className={`pb-1 border-b ${
                path.pathname === item.path ? 'text-primary border-b-primary' : ' border-b-gray97'
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <ChangeLanguage
          language={language}
          languageShow={languageShow}
          setLanguage={setLanguage}
          setLanguageShow={setLanguageShow}
          className="flex justify-center mt-10"
        ></ChangeLanguage>
      </div>
      <div className="items-center hidden xl:flex">
        <div className="flex items-center gap-[26px]">
          {listLink.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl ${path.pathname === item.path ? 'text-primary font-bold' : ''}`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="w-[1px] h-8 bg-[#9CA3AF] mx-p10"></div>
        <ChangeLanguage
          language={language}
          languageShow={languageShow}
          setLanguage={setLanguage}
          setLanguageShow={setLanguageShow}
        ></ChangeLanguage>
      </div>
    </div>
  );
}
