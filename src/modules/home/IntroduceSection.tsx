import { useTranslation } from 'react-i18next';
export interface IntroduceSectionProps {}

interface Item {
  image: string;
  alt: string;
  title: string;
}

const listItems: Item[] = [
  {
    image: '/images/clock-icon.png',
    alt: 'clock-icon',
    title: 'Phản hồi nhanh',
  },
  {
    image: '/images/dev-icon.png',
    alt: 'dev-icon',
    title: 'Hệ thống phát triển',
  },
  {
    image: '/images/padlock-icon.png',
    alt: 'padlock-icon',
    title: 'Bảo mật thông tin',
  },
  {
    image: '/images/secure-shield-icon.png',
    alt: 'secure-shield-icon',
    title: 'Tự động hóa',
  },
];

export function IntroduceSection(props: IntroduceSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-[56px] xl:mb-[144px] mb-20"
      {...props}
    >
      <div className="mx-5 xl:mx-0">
        <img src="/images/introduce-img.png" alt="introduce-img" />
      </div>
      <div className="max-w-[586px]">
        <h2 className="mb-4 text-xl font-bold leading-7 text-center uppercase xl:mb-6 xl:text-2xl text-primary xl:text-left">
          {t('GIỚI THIỆU VỀ BATTECH')}
        </h2>
        <p className="px-5 leading-6 text-center text-textPrimary xl:text-left xl:px-0">
          {t(
            'Với gần 15 năm kinh nghiệm, Công ty cổ phần Quốc tế BATTECH là nhà cung cấp các giải pháp quản trị nguồn lực doanh nghiệp chuyên nghiệp. Hỗ trợ Ban lãnh đạo hoạch định và điều hành toàn bộ nguồn lực của doanh nghiệp bao gồm Hàng hóa - Tài chính - Nhân sự - Truyền thông và kết nối các bộ phận thao tác nghiệp vụ hiệu quả thông qua những quy trình được thiết kế theo quy chuẩn quốc tế.',
          )}
        </p>
        <div className="grid items-center grid-cols-2 gap-8 mt-8 xl:flex">
          {listItems.map((item, index) => (
            <div
              className="w-[123px] h-[144px] flex flex-col items-center justify-center gap-3 
                shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] border rounded-2xl border-primary mx-auto"
              key={index}
            >
              <img src={item.image} alt={item.alt} />
              <p className="px-5 leading-6 text-center text-textPrimary">{t(item.title)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
