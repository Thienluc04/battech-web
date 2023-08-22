import { useGetNewsWithCategoryQuery, useGetSingleNewsQuery } from '@/api/newsApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { NewsSidebar } from '@/components/sidebar';
import { newsActions, selectListSimilarNews } from '@/features/news/newsSlice';
import { NewsItem } from '@/modules/news';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Slider from 'react-slick';

export default function NewsDetailsPage() {
  const { slug } = useParams();

  const { data: singleNews } = useGetSingleNewsQuery(String(slug));

  const newsDetails = singleNews && singleNews[0];
  const listSimilarNews = useAppSelector(selectListSimilarNews);

  const dispatch = useAppDispatch();

  const { data: similarNewsData } = useGetNewsWithCategoryQuery(newsDetails?.category as string);

  useEffect(() => {
    if (similarNewsData && similarNewsData.length > 0) {
      dispatch(newsActions.setListNewsSimilar(similarNewsData));
    }
  }, [dispatch, similarNewsData]);

  if (!newsDetails)
    return (
      <>
        <div className="w-10 h-10 mx-auto my-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
      </>
    );

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center mx-5 my-6 xl:mx-0">
        <p className="font-medium leading-6">
          <span className="text-primary">Tin tức</span> /{' '}
          <span className="text-primary">{newsDetails?.category}</span> / {newsDetails?.title}
        </p>
      </div>
      <div className="flex flex-col gap-8 mb-16 xl:flex-row">
        <div className="max-w-[790px] xl:mx-0 mx-5">
          <h1 className="text-[32px] font-fontArial font-bold leading-9 text-textPrimary mb-8">
            {newsDetails?.title}
          </h1>
          <p className="mb-12 font-medium leading-6 text-textPrimary">{newsDetails?.description}</p>
          <div className="mb-12">
            <img src="/images/news-details-1.png" alt="news-details-img" />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold leading-7 text-textPrimary">
              Chuyển đổi số trong ngân hàng là gì?
            </h2>
            <p className="mb-2 font-medium leading-6">
              Ngành ngân hàng là một trong những ngành có khả năng chống thay đổi cao nhất khi nói
              đến số hóa. Trước đây, điều này có thể hiểu được do tính nhạy cảm của các dịch vụ ngân
              hàng và nhu cầu tương tác trực tiếp đối với những việc như mở tài khoản hoặc vay tiền.
              Tuy nhiên, trong những năm gần đây đã có sự thay đổi trong kỳ vọng và hành vi của
              khách hàng, với ngày càng nhiều người thực hiện các giao dịch ngân hàng trực tuyến
              hoặc thông qua các ứng dụng dành cho thiết bị di động. Kết quả là, các ngân hàng đã
              phải thích nghi hoặc có nguy cơ bị bỏ lại phía sau. Quá trình chuyển đổi kỹ thuật số
              trong lĩnh vực ngân hàng này đã diễn ra được vài năm nay và không có dấu hiệu chậm
              lại. Các ngân hàng liên tục phải cập nhật hệ thống và quy trình của họ để theo kịp các
              xu hướng công nghệ mới nhất. Ngoài ra, họ chịu áp lực phải cung cấp trải nghiệm liền
              mạch cho khách hàng trên tất cả các kênh, cho dù đó là trực tiếp, trực tuyến hay thông
              qua ứng dụng dành cho thiết bị di động. Tin tốt là, bất chấp những thách thức, các
              ngân hàng đang bắt đầu thực hiện chuyển đổi kỹ thuật số và đang gặt hái những lợi ích
              về việc tăng sự hài lòng và lòng trung thành của khách hàng.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold leading-7">
              Lợi ích của số hóa trong ngành ngân hàng
            </h2>
            <p className="mb-12 font-medium leading-6">
              Ngân hàng chuyển đổi số mang lại nhiều lợi ích cho cả ngân hàng và khách hàng. Dưới
              đây là một số lợi thế tốt nhất của nó:
            </p>
            <div className="mb-12">
              <img src="/images/news-details-2.png" alt="news-details-img" />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold leading-7">Tiết kiệm chi phí</h2>
            <p className="font-medium leading-6">
              Các ngân hàng truyền thống từ lâu đã dựa vào một hệ thống kiểm tra và số dư phức tạp
              để xử lý các giao dịch và quản lý tài khoản. Tuy nhiên, hệ thống này không hiệu quả và
              tốn kém, đồng thời có thể khiến các ngân hàng dễ mắc phải các sai sót tài chính. Phần
              mềm ngân hàng số cung cấp giải pháp thay thế hiệu quả hơn bằng cách tự động hóa nhiều
              quy trình liên quan đến giao dịch. Quá trình tự động hóa này có thể giảm đáng kể thời
              gian và nguồn lực cần thiết để xử lý các giao dịch, giảm thiểu nguy cơ xảy ra những
              sai lầm tốn kém. Ngoài ra, các hệ thống ngân hàng kỹ thuật số cung cấp khả năng hiển
              thị thời gian thực vào hoạt động của tài khoản, giúp các ngân hàng dễ dàng xác định và
              ngăn chặn gian lận hơn. Do đó, số hóa có thể giúp các ngân hàng cải thiện lợi nhuận
              bằng cách giảm chi phí hoạt động và tăng cường bảo mật.
            </p>
          </div>
        </div>
        <NewsSidebar></NewsSidebar>
      </div>
      <div className="h-[1px] bg-[#008346] mb-16 xl:mx-0 mx-5"></div>
      <section className="mx-5 xl:mx-0">
        <h2 className="text-[#0a0a0a] text-xl font-bold leading-7 mb-7">Tin tức liên quan</h2>
        {listSimilarNews.length > 3 ? (
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            arrows={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            className="flex xl:mb-[144px] mb-20 xl:pb-10 pb-5 news"
          >
            {listSimilarNews.map((item, index) => (
              <NewsItem key={index} news={item}></NewsItem>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-4 gap-8 xl:mb-[144px] mb-20 xl:pb-10 pb-5">
            {listSimilarNews.map((item, index) => (
              <NewsItem key={index} news={item}></NewsItem>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
