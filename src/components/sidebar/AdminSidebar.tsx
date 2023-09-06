import { Link } from 'react-router-dom';

import { ArrowTopIcon, LogoutIcon, NotepadIcon } from '@/components/icons';

export interface AdminSidebarProps {}

export function AdminSidebar(props: AdminSidebarProps) {
  return (
    <div
      {...props}
      className="max-w-[260px] w-full sticky top-0 left-0 bottom-0 min-h-screen flex flex-col"
    >
      <Link
        to={'/manage/posts'}
        className="bg-primaryAdmin h-[124px] flex items-center justify-center"
      >
        <img src="/images/admin-logo.png" alt="admin-logo" />
      </Link>
      <div className="bg-[#2A3444] flex-1 h-full">
        <div className="mx-4 my-10">
          <div>
            <div className="flex items-center justify-between py-4 px-p10">
              <div className="flex gap-p10">
                <NotepadIcon></NotepadIcon>
                <span className="font-semibold text-white font-fontRoboto">Viết bài</span>
              </div>
              <ArrowTopIcon></ArrowTopIcon>
            </div>
            <div className="bg-[#3F4D63] rounded-md text-white font-medium px-11 h-10 leading-10 font-fontRoboto">
              Bài viết
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2A3444] px-4">
        <div className="flex items-center mb-4 gap-p10">
          <img src="/images/admin-author.png" alt="admin-author" />
          <div>
            <p className="font-semibold text-white font-fontRoboto">TuyenPhan</p>
            <span className="text-[#939393] text-sm font-fontRoboto">Admin</span>
          </div>
        </div>
        <button className="flex items-center h-10 gap-p10 rounded-md bg-[#3F4D63] w-full px-3 mb-4">
          <LogoutIcon></LogoutIcon>
          <Link to={'/login'} className="leading-10 text-white">
            Log out
          </Link>
        </button>
      </div>
    </div>
  );
}
