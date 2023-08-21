import { useTranslation } from 'react-i18next';

export interface VistionSectionProps {}

export function VisionSection(props: VistionSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="flex xl:flex-row flex-col items-center justify-center gap-10 vision-bg xl:py-[200px] py-[100px] mb-[92px]"
      {...props}
    >
      <div className="max-w-[580px] xl:mx-0 mx-5">
        <h2 className="mb-5 text-2xl font-bold leading-7 text-primary">
          {t('TẦM NHÌN VÀ SỨ MỆNH')}
        </h2>
        <p className="text-textPrimary">
          <span className="font-bold">{t('"Vì một xã hội không có rào cản"')}</span>{' '}
          {t(
            'Dựa vào công nghệ phát triển, nhu cầu sử dụng của tất cả mọi người. BATTECH mong muốn đem tới mạng lưới thế giới ảo rộng lớn ra thị trường. Để cho tất cả mọi người có thể chia sẻ, tâm sự và gắn kết trong không gian ảo, vượt qua mọi rào cản về vị trí địa lý, dịch bệnh. Mục tiêu năm 2022-2023 công ty sẽ phát triển rộng lớn với quy mô 159 - 200 nhân sự. Ngoài phát triển xây dựng phần mềm phòng họp ảo còn bắt tay vào làm các games 3D như golf, câu cá, đua xe... Đưa công ty trở thành công ty công nghệ thuộc top đầu phát triển metaverse tại Việt Nam.',
          )}
        </p>
      </div>
      <img src="/images/vision-img.png" alt="vision-img" />
    </section>
  );
}
