import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { useGetSimilarJobsQuery, useGetSingleJobQuery } from '@/api/jobApi';
import { useAppDispatch } from '@/app/hooks';
import { AddressIcon, ClockIcon } from '@/components/icons';
import { jobActions } from '@/features/job/jobSlice';
import { HeroSection, RecruitmentForm, SimilarJobs } from '@/modules/job';

export default function JobDetailsPage() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  const { data: jobResponse } = useGetSingleJobQuery(slug as string);

  const { t } = useTranslation();

  const jobDetails = jobResponse && jobResponse[0];

  const { data: listSimilarJobs } = useGetSimilarJobsQuery(jobDetails?.group as string);

  useEffect(() => {
    if (listSimilarJobs && listSimilarJobs.length > 0) {
      dispatch(jobActions.setSimilarJobs(listSimilarJobs));
    }
  }, [dispatch, listSimilarJobs]);

  if (!jobDetails)
    return (
      <>
        <div className="w-10 h-10 mx-auto my-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
      </>
    );

  return (
    <>
      <HeroSection></HeroSection>
      <div className="max-w-[1200px] mx-auto mb-[102px]">
        <p className="px-5 pt-4 mb-6 xl:px-0">
          <span className="text-primary">{t('Cơ hội việc làm')}</span> / {jobDetails?.title}
        </p>
        <div className="flex xl:flex-row flex-col xl:px-0 px-5 gap-[68px]">
          <div className="max-w-[745px]">
            <h2 className="mb-2 text-2xl font-bold text-textBase">{jobDetails?.title}</h2>
            <p className="mb-2 text-textBase">{jobDetails?.description}</p>
            <div className="flex items-center gap-[26px] mb-3">
              <div className="flex items-center gap-2">
                <AddressIcon variant="gray"></AddressIcon>
                <p className="text-sm leading-7 text-gray97">{jobDetails?.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon variant="gray"></ClockIcon>
                <p className="text-sm leading-7 text-gray97">{jobDetails?.date}</p>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="mb-3 text-xl font-bold text-textBase">Mô tả công việc</h2>
              <ul className="pl-5 leading-5 list-disc">
                <li>Lập trình ứng dụng, chức năng hệ thống với NodeJS</li>
                <li>
                  Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo
                  mô hình Microservice bằng NodeJs và các framework NodeJs.
                </li>
                <li>
                  Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng
                  được hoạt động ổn định và ngày càng tối ưu hơn.
                </li>
                <li>
                  Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.
                </li>
                <li>
                  Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ
                  khi được phân công.
                </li>
                <li>
                  Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm
                  để phát triển sản phẩm.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <h2 className="mb-3 text-xl font-bold text-textBase">Yêu cầu công việc</h2>
              <ul className="pl-5 leading-5 list-disc">
                <li>
                  Tốt nghiệp Cao đẳng, Đại học các chuyên ngành CNTT, Khoa học máy tính,… hoặc liên
                  quan.
                </li>
                <li>
                  Có từ 1 năm kinh nghiệm lập trình với NodeJS, sử dụng một trong các framework/thư
                  viện như Express.js, Meteor, socket.io, redis…
                </li>
                <li>Có kinh nghiệm làm việc với REST API</li>
                <li>Có kinh nghiệm với MongoDB, Database Postgresql, Redis.</li>
                <li>
                  Viết code rõ ràng, dễ hiểu, dễ bảo trì, tuân thủ chặt chẽ coding convention.
                </li>
                <li>Sử dụng thành thạo các công cụ quản lý code như SVN, Github.</li>
                <li>Có khả năng làm việc độc lập và làm việc nhóm, chịu được áp lực cao.</li>
                <li>Có khả năng tư duy và thuật toán tốt, phân tích và giải quyết vấn đề.</li>
              </ul>
            </div>
            <div className="mb-[18px]">
              <h2 className="mb-3 font-bold text-textBase">＊Điểm cộng</h2>
              <ul className="pl-5 list-disc">
                <li>
                  Hiểu biết và có kinh nghiệm thực tế với Angular, VueJS, ReactJS là một lợi thế.
                </li>
                <li>Có kinh nghiệm sử dụng các dịch vụ AWS, Heroku</li>
                <li>Hiểu biết và sử dụng Design Pattern.</li>
                <li>Có kinh nghiệm phân tích yêu cầu, thiết kế hệ thống web.</li>
                <li>Biết tiếng Nhật là một lợi thế.</li>
              </ul>
            </div>
            <div className="mb-5">
              <h2 className="mb-2 text-xl font-bold text-textBase">
                Lý do đồng hành với <span className="uppercase">battech</span>
              </h2>
              <div className="mb-4">
                <h3 className="mb-3 font-bold underline text-textBase">
                  Môi trường chuyên nghiệp, cởi mở, trao quyền và đề cao sự sáng tạo:
                </h3>
                <ul className="pl-5 list-disc">
                  <li>
                    Làm việc cùng những đồng nghiệp trẻ, các Leader và Mentor hỗ trợ sát sao, nhiệt
                    tình.
                  </li>
                  <li>Văn hóa học tập mạnh mẽ và thúc đẩy phát triển</li>
                  <li>Quy trình phát triển phần mềm chặt chẽ</li>
                  <li>
                    Tham gia vào các dự án lớn, tiếp cận, trực tiếp xây dựng và làm chủ những sản
                    phẩm trên nền công nghệ mới nhất.
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="mb-3 font-bold underline text-textBase">
                  Tập trung hỗ trợ sự phát triển cá nhân:
                </h3>
                <ul className="pl-5 list-disc">
                  <li>
                    Được tư vấn, đồng hành và hỗ trợ phát triển sự nghiệp cùng với hệ thống career
                    path (phát triển theo hướng chuyên gia hoặc hướng quản lý) đã được nghiên cứu,
                    thử nghiệm trong nhiều năm
                  </li>
                  <li>Được định hướng mục tiêu cá nhân, nhóm và tổ chức</li>
                  <li>Trao quyền làm chủ</li>
                  <li>Tham gia khóa học miễn phí, trợ cấp các khóa học chuyên nghành.</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-bold underline text-textBase">
                  Quan tâm đặc biệt tới nhân viên:
                </h3>
                <ul className="pl-5 list-disc">
                  <li>
                    Thu nhập up to $1500 cùng các khoản trợ cấp, phụ cấp khác (ăn trưa, đi lại,
                    tiếng Nhật, chứng chỉ IT,..v.v…)
                  </li>
                  <li>
                    Lương tháng 13 & thưởng hiệu quả sản xuất kinh doanh, 6 khoản thưởng cho các
                    ngày Lễ khác trong năm. Tổng thu nhập lên đến 15 tháng lương/ năm.
                  </li>
                  <li>Review thu nhập: 2 lần/năm</li>
                  <li>
                    Chế độ chăm sóc phụ nữ: nghỉ sau sinh cho nhân viên nữ có con dưới 18 tháng:
                    1h/ngày, trợ cấp thai sản.
                  </li>
                  <li>
                    Chính sách hỗ trợ các hoạt động học tập, trao đổi, chia sẻ kiến thức, giao lưu
                    văn hoá (Seminar công nghệ – Tech Expert, CLB: tiếng Nhật, CLB âm nhạc, CTB Nghệ
                    thuật…)
                  </li>
                  <li>Du lịch thường niên, hoạt động team building hàng quý.</li>
                  <li>Thời gian làm việc: Từ thứ 2 - thứ 6.</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-textBase">Thông tin liên hệ</h2>
              <ul className="pl-5 list-disc">
                <li>Email: tuyendung@battech.com</li>
                <li>Hotline: 0123456789</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <RecruitmentForm></RecruitmentForm>
            <SimilarJobs></SimilarJobs>
          </div>
        </div>
      </div>
    </>
  );
}
