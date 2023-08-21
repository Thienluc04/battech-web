import { useTranslation } from 'react-i18next';
export interface OrientationSectionProps {}

interface Orientation {
  number: string;
  title: string;
  description: string;
}

const listOrientations: Orientation[] = [
  {
    number: '01',
    title: 'Tư duy phát triển sản phẩm',
    description:
      'Tạo ra môi trường làm việc trực tuyến cho doanh nghiệp. Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.',
  },
  {
    number: '02',
    title: 'Khả năng tích hợp và mở rộng',
    description: 'Cung cấp các giải pháp, mở rộng thêm phần mềm theo yêu cầu của doanh nghiệp.',
  },
  {
    number: '03',
    title: 'Khả năng tùy biến và tự động',
    description:
      'Battech luôn nghiên cứu đặc thù khác nhau của từng doanh nghiệp để đưa ra lời giải cho bài toán tổng quát.',
  },
  {
    number: '04',
    title: 'Chi phí hợp lý và linh hoạt',
    description:
      'Khách hàng chỉ chi trả cho những dịch vụ mình sử dụng. Cam kết không phát sinh thêm các khoản phụ thu.',
  },
];

export function OrientationSection(props: OrientationSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex flex-col items-center justify-center orientation-bg pt-[370px] pb-[400px] -mb-[400px] -mt-[370px]"
      {...props}
    >
      <h2 className="xl:text-2xl text-xl font-bold leading-7 uppercase mb-[76px]">
        <span className="text-orange">{t('KHÁC BIỆT')} </span>
        <span className="text-primary">{t('VÀ TIÊN PHONG')}</span>
      </h2>
      <div className="grid xl:grid-cols-4 grid-cols-1 xl:gap-8 gap-14 max-w-[1200px] xl:mx-auto mx-5">
        {listOrientations.map((item, index) => (
          <div
            key={index}
            className="shadow-[2px_2px_8px_0px_rgba(0,_0,_0,_0.15)] bg-white rounded-2xl xl:pt-5 xl:px-3 xl:pb-4 p-5"
          >
            <h2 className="xl:text-[64px] text-[50px] font-bold leading-6 font-fontArial text-primary block xl:-translate-y-9 -translate-y-7">
              {item.number}
            </h2>
            <h2 className="mb-4 text-xl font-bold leading-6 text-center text-textPrimary">
              {t(item.title)}
            </h2>
            <p className="leading-6 text-center text-textPrimary min-h-[132px]">
              {t(item.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
