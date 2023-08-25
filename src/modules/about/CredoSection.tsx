import { useTranslation } from 'react-i18next';

export interface CredoSectionProps {}

interface CredoItem {
  image: string;
  alt: string;
  name: string;
  description: string;
}

const listCredoItems: CredoItem[] = [
  {
    image: '/images/support-icon.png',
    alt: 'support-icon',
    name: 'Teamwork',
    description:
      'Tinh thần đồng đội - mỗi cá nhân nhỏ tập hợp gắn kết, nâng đỡ đoàn kết vì mục tiêu chung xây dựng công ty phát triển vững mạnh.',
  },
  {
    image: '/images/trust-icon.png',
    alt: 'trust-icon',
    name: 'Trust',
    description: 'Tin cậy - giữ chữ tín, giữ đúng lời hứa.',
  },
  {
    image: '/images/innovation-icon.png',
    alt: 'innovation-icon',
    name: 'Innovation',
    description:
      'Sáng tạo, đổi mới - luôn học tập trao đổi cập nhật kiến thức mới để đưa vào ứng dụng trong công việc, luôn cải tiến áp dụng những công nghệ mới nhất để tạo ra sản phẩm tốt nhất.',
  },
  {
    image: '/images/ethics-icon.png',
    alt: 'ethics-icon',
    name: 'Ethics',
    description:
      'Đạo đức - trung thực khi phục vụ khách hàng, hiểu và tuân thủ các quy định của công ty, trách nhiệm với công việc, bình đẳng và tôn trọng mọi người.',
  },
  {
    image: '/images/community-icon.png',
    alt: 'community-icon',
    name: 'Customers',
    description:
      'Khách hàng - đặt khách hàng là trung tâm phát triển, Battech luôn sẵn sàng lắng nghe và thay đổi theo chiều hướng tích cực để đưa ra sản phẩm phù hợp',
  },
  {
    image: '/images/archery-icon.png',
    alt: 'archery-icon',
    name: 'Goals',
    description:
      'Mục tiêu - hoàn thành sản phẩm phòng họp ảo và đưa ra thị trường. Được các doanh nghiệp lớn tin cậy sử dụng rộng rãi.',
  },
];

export function CredoSection(props: CredoSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1200px] mx-auto mb-[92px]" {...props}>
      <h2 className="text-xl font-bold leading-7 text-center uppercase xl:text-2xl text- mb-9">
        {t('TÔN CHỈ LÀM VIỆC')}
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
