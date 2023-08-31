import { useTranslation } from 'react-i18next';

import { listCredoItems } from '@/constants/about';
import { vn } from '@/constants/languages';

export interface CredoSectionProps {}

export function CredoSection(props: CredoSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1200px] mx-auto mb-[92px]" {...props}>
      <h2 className="text-xl font-bold leading-7 text-center uppercase xl:text-2xl text- mb-9">
        {t(vn.introduce.CREDO_TITLE)}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {listCredoItems.map((item, index) => (
          <div
            key={index}
            className="rounded-[18px] bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)]"
          >
            <div
              className="w-[100px] h-[100px] rounded-full drop-shadow-md
              flex items-center justify-center mt-6 mx-auto mb-5 icon-fill bg-white"
            >
              <img src={item.image} alt={item.alt} />
            </div>
            <h3 className="mb-2 text-xl font-bold leading-7 text-center text-textPrimary">
              {item.name}
            </h3>
            <p className="font-medium leading-6 text-textDesc w-[338px] h-[110px] mx-5 text-center">
              {t(item.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
