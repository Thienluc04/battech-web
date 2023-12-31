import clsx from 'clsx';
import { ComponentProps, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

import { EnglandFlag, VietnamFlag } from '@/components/icons';

export interface ChangeLanguageProps extends ComponentProps<'div'> {
  languageShow: boolean;
  language: 'en' | 'vn' | undefined;
  setLanguageShow: Dispatch<SetStateAction<boolean>>;
  setLanguage: Dispatch<SetStateAction<'vn' | 'en' | undefined>>;
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

      {languageShow && !language && (
        <div
          className={`absolute top-full flex items-center gap-2 cursor-pointer`}
          onClick={() => {
            setLanguage('en');
            setLanguageShow(false);
          }}
        >
          <EnglandFlag></EnglandFlag>
          <span className="text-xl uppercase">en</span>
        </div>
      )}
      {languageShow && language && (
        <>
          <div
            className={clsx(
              language !== 'vn' && 'absolute top-full',
              'flex items-center gap-2 cursor-pointer',
            )}
            onClick={() => {
              setLanguage('vn');
              setLanguageShow(false);
            }}
          >
            <VietnamFlag></VietnamFlag>
            <span className="text-xl uppercase">vn</span>
          </div>
          <div
            className={clsx(
              language !== 'en' && 'absolute top-full',
              'flex items-center gap-2 cursor-pointer',
            )}
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
