import clsx from 'clsx';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  ArrowDownIcon,
  ArrowTopIcon,
  ImageIcon,
  LogoutIcon,
  NotepadIcon,
  SettingIcon,
} from '@/components/icons';
import { listLinkAdmin } from '@/constants/general';
import { authAction, selectCurrentUser, selectShowSidebar } from '@/features/auth/authSlice';
import { logOut } from '@/utils/auth';

export interface AdminSidebarProps {}

export function AdminSidebar(props: AdminSidebarProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState<boolean>(true);

  const currentUser = useAppSelector(selectCurrentUser);
  const showSidebar = useAppSelector(selectShowSidebar);

  const handleLogOut = () => {
    dispatch(authAction.logOut());
    logOut();
    navigate('/login');
  };

  return (
    <>
      <div
        {...props}
        className={clsx(
          'overflow-hidden fixed max-w-[260px] w-full xl:sticky top-0 left-0 bottom-0 min-h-screen flex flex-col z-10 transition-all xl:translate-x-0 -translate-x-full',
          showSidebar && 'translate-x-0',
        )}
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
              <div
                className="flex items-center justify-between py-4 cursor-pointer px-p10"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="flex gap-p10">
                  <NotepadIcon></NotepadIcon>
                  <span className="font-semibold text-white font-fontRoboto ">Viết bài</span>
                </div>
                {showMenu ? (
                  <ArrowTopIcon></ArrowTopIcon>
                ) : (
                  <ArrowDownIcon kind="white"></ArrowDownIcon>
                )}
              </div>
              {showMenu && (
                <div className="flex flex-col gap-2">
                  {listLinkAdmin.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className={`${
                        item.url === location.pathname ? 'bg-[#3F4D63]' : ''
                      } rounded-md text-white font-medium px-11 h-10 leading-10 font-fontRoboto cursor-pointer`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between py-4 cursor-pointer px-p10">
                <div className="flex gap-p10">
                  <ImageIcon></ImageIcon>
                  <span className="font-semibold text-white font-fontRoboto ">Ảnh</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 cursor-pointer px-p10">
                <div className="flex gap-p10">
                  <SettingIcon></SettingIcon>
                  <span className="font-semibold text-white font-fontRoboto ">Cài đặt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2A3444] px-4">
          <div className="flex items-center mb-4 gap-p10">
            <img src={currentUser?.avatar} className="w-10 h-10 rounded-full" alt="admin-author" />
            <div>
              <p className="font-semibold text-white font-fontRoboto">{currentUser?.username}</p>
              <span className="text-[#939393] text-sm font-fontRoboto">{currentUser?.role}</span>
            </div>
          </div>
          <button
            onClick={handleLogOut}
            className="flex items-center h-10 gap-p10 rounded-md bg-[#3F4D63] w-full px-3 mb-4"
          >
            <LogoutIcon></LogoutIcon>
            <span className="leading-10 text-white">Log out</span>
          </button>
        </div>
      </div>
      <div
        onClick={() => dispatch(authAction.setShowSidebar(!showSidebar))}
        className={clsx(
          !showSidebar && 'hidden',
          'fixed top-0 bottom-0 left-0 right-0 flex-1 w-full h-screen bg-black z-1 opacity-70',
        )}
      ></div>
    </>
  );
}
