import { EnglandFlag, VietnamFlag } from '@/components/icons';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ChangeLanguageProps {
  languageShow: boolean;
  language: 'en' | 'vn' | undefined;
  setLanguageShow: Dispatch<SetStateAction<boolean>>;
  setLanguage: Dispatch<SetStateAction<'vn' | 'en' | undefined>>;
  className?: string;
}

export function ChangeLanguage({
  languageShow,
  language,
  setLanguageShow,
  setLanguage,
  className = '',
}: ChangeLanguageProps) {
  return (
    <div className={twMerge('relative', className)}>
      {!language && (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setLanguageShow(true)}
        >
          <VietnamFlag></VietnamFlag>
          <span className="text-xl uppercase">vn</span>
        </div>
      )}
      {!languageShow && language === 'vn' && (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setLanguageShow(true)}
        >
          <VietnamFlag></VietnamFlag>
          <span className="text-xl uppercase">vn</span>
        </div>
      )}
      {!languageShow && language === 'en' && (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setLanguageShow(true)}
        >
          <EnglandFlag></EnglandFlag>
          <span className="text-xl uppercase">en</span>
        </div>
      )}
      {languageShow && (
        <>
          <div
            className={`${
              language !== 'vn' ? 'absolute top-full' : ''
            } flex items-center gap-2 cursor-pointer`}
            onClick={() => {
              setLanguage('vn');
              setLanguageShow(false);
            }}
          >
            <VietnamFlag></VietnamFlag>
            <span className="text-xl uppercase">vn</span>
          </div>
          <div
            className={`${
              language !== 'en' ? 'absolute top-full' : ''
            } flex items-center gap-2 cursor-pointer`}
            onClick={() => {
              setLanguage('en');
              setLanguageShow(false);
            }}
          >
            <EnglandFlag></EnglandFlag>
            <span className="text-xl uppercase">en</span>
          </div>
        </>
      )}
    </div>
  );
}
