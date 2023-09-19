import { Navigate, Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import { getSession, getToken } from '@/utils/auth';

export function AuthLayout() {
  const { accessToken } = getToken();
  const { accessToken: accessTokenSession } = getSession();

  if (accessToken || accessTokenSession) return <Navigate to={'/manage/posts'}></Navigate>;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blueBg">
      <div className="absolute">
        <img src="/images/login-bg.png" alt="logo-bg" />
      </div>
      <div className="z-10 md:w-[508px] w-full mx-3 rounded-3xl bg-white shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <Link to={'/'} className="my-5 xl:my-[58px] flex justify-center">
          <img src="/images/login-logo.png" className="w-[200px] xl:w-auto" alt="login-logo" />
        </Link>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
