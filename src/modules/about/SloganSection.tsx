import { useTranslation } from 'react-i18next';

export interface SloganSectionProps {}

export function SloganSection(props: SloganSectionProps) {
  const { t } = useTranslation();
  return (
    <section
      className="xl:mr-[20%] bg-[#E9F9D6] xl:rounded-r-[32px] py-[72px] mb-[92px]"
      {...props}
    >
      <div className="max-w-[1200px] xl:mx-auto mx-5 flex xl:flex-row flex-col xl:justify-end xl:items-start items-center xl:gap-8 gap-10">
        <div className="mt-5">
          <h2 className="mb-5 text-xl font-bold leading-7 text-orange">BAT</h2>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            {t('Tận tâm với khách hàng')}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            {t('Tận tụy với công việc')}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            {t('Đoàn kết làm nên sức mạnh')}
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-5 text-xl font-bold leading-7 text-orange">TECH</h2>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “T” - {t('Technology: Công nghệ')}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “E” - {t('Ecosystem: Hệ sinh thái')}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “C” - {t('Connect: Kết nối')}
          </div>
          <div
            className="px-4 w-[276px] h-[42px] bg-white text-textDesc leading-[52px] rounded-lg 
            shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-3"
          >
            “H” - {t('Happiness: Hạnh phúc')}
          </div>
        </div>
        <div>
          <h2 className="mb-8 text-xl font-bold leading-7 xl:text-2xl xl:mb-12 text-primary">
            {t('GIÁ TRỊ CỐT LÕI')}
          </h2>
          <div className="flex flex-col gap-6 text-textDesc max-w-[474px]">
            <p>
              {t(
                'BATTECH hay còn gọi là Công ty công nghệ BATTECH, là một công ty trực thuộc BATGROUP ra đời trong giá trị cốt lõi của chữ “TÂM”',
              )}
            </p>
            <p>
              {t(
                'Công nghệ ngày càng phát triển, với sự ra đời của thế giới ảo metaverse giúp con người gắn kết gần nhau hơn, BATTECH mong muốn sẽ mở ra không gian trực tuyến tương tác của người dùng đa chiều hơn so với các công nghệ hiện tại, thay vì chỉ xem nội dung kỹ thuật số, người dùng trong Metaverse sẽ có thể đắm mình trong không gian của thế giới kỹ thuật số ảo.',
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
