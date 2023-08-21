import { AddressIcon, EmailIcon, PhoneIcon } from '@/components/icons';
import { useTranslation } from 'react-i18next';

export interface ContactUsSectionProps {}

export function ContactUsSection(props: ContactUsSectionProps) {
  const { t } = useTranslation();
  return (
    <section
      className="max-w-[1200px] xl:mx-auto mx-5 flex xl:flex-row flex-col items-center gap-8 mb-[160px]"
      {...props}
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.517822979981!2d105.83589497595402!3d20.971870189728715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac505ae03e7b%3A0x24d4dd0b772f047a!2zQ2h1bmcgQ8awIEVjbyBMYWtlIFZpZXcsIDMyIFAuIMSQ4bqhaSBU4burLCDEkOG6oWkgS2ltLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1692087084348!5m2!1svi!2s"
          width={600}
          height={450}
          style={{ border: 0 }}
          className="xl:w-[580px] md:w-[500px] w-[350px] rounded-[18px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div>
        <h2 className="mb-2 text-2xl font-bold leading-7 text-primary">
          {t('LIÊN HỆ VỚI CHÚNG TÔI')}
        </h2>
        <p className="mb-4 font-medium leading-6">
          {t(
            'Hãy gọi cho chúng tôi hoặc ghé qua bất cứ lúc nào, chúng tôi sẽ cố gắng giải đáp mọi thắc mắc trong vòng 24 giờ vào các ngày làm việc. Rất hân hạnh được trả lời câu hỏi của bạn.',
          )}
        </p>
        <div className="p-3 rounded-xl bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-8">
          <div className="flex gap-2">
            <AddressIcon variant="green"></AddressIcon>
            <span className="font-medium leading-6 text-gray7A">{t('Địa chỉ')}</span>
          </div>
          <p className="text-[#0a0a0a] font-medium leading-6">
            {t('Tầng 2, Tòa HH02, Eco Lakeview, 32 Đại Từ, P. Đại Kim, Q. Hoàng Mai, TP. Hà Nội')}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-8">
          <div className="flex gap-2">
            <EmailIcon variant="green"></EmailIcon>
            <span className="font-medium leading-6 text-gray7A">Email</span>
          </div>
          <p className="text-[#0a0a0a] font-medium leading-6">cskh@battech.vn</p>
        </div>
        <div className="p-3 rounded-xl bg-white shadow-[4px_2px_15px_0px_rgba(0,_0,_0,_0.05)] mb-8">
          <div className="flex gap-2">
            <PhoneIcon variant="green"></PhoneIcon>
            <span className="font-medium leading-6 text-gray7A">{t('Số điện thoại')}</span>
          </div>
          <p className="text-[#0a0a0a] font-medium leading-6">024 85 896 999</p>
        </div>
      </div>
    </section>
  );
}
