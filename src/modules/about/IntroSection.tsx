import { useTranslation } from 'react-i18next';

export interface IntroSectionProps {}

export function IntroSection(props: IntroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-8 xl:mb-[92px] mb-10 xl:mx-0 px-5"
      {...props}
    >
      <img src="/images/introduce-img-2.png" alt="intro-img" />
      <div className="max-w-[580px]">
        <h2 className="mb-3 text-2xl font-bold leading-7 text-primary">
          {t('GIỚI THIỆU VỀ BATTECH')}
        </h2>
        <p className="font-medium leading-6 text-textDesc">
          {t(
            'BATTECH được thành lập vào đầu năm 2009, trong bối cảnh nền kinh tế nước ta đang gặp nhiều khó khăn, thách thức. Với khát vọng thành công và ý chí mạnh mẽ đội ngũ lãnh đạo trẻ, BATTECH xác định lấy hoạt động đầu tư kinh doanh bất động sản, thi công cơ điện, phòng cháy chữa cháy làm nòng cốt trong giai đoạn đầu.',
          )}
        </p>
        <p className="py-6 font-medium leading-6 text-textDesc">
          {t(
            'Sau hơn một thập kỷ xây dựng và trưởng thành, BATTECH đã vươn mình trở thành doanh nghiệp đa lĩnh vực, có tốc độ phát triển thần tốc.',
          )}
        </p>
        <p className="font-medium leading-6 text-textDesc">
          {t(
            'Với số lượng 10 nhân viên từ lúc thành lập đến nay đã tăng lên con số hơn 300 nhân sự chính thức và gần 400 nhân sự thời vụ tại các dự án trong và ngoài nước. Từng bước khẳng định tầm vóc trên thương trường với hàng loạt công trình, dự án lớn tại Việt Nam, Lào, Cam-pu-chia, Trung Quốc, cùng nhiều bạn hàng, đối tác cung ứng thiết bị từ Nhật, Đài Loan, Pháp, Đức, Italy',
          )}
        </p>
      </div>
    </section>
  );
}
