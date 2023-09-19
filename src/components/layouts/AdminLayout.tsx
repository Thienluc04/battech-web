import { Navigate, Outlet } from 'react-router';

import { useAppSelector } from '@/app/hooks';
import { AdminSidebar } from '@/components/sidebar';
import { selectCurrentUser } from '@/features/auth/authSlice';
import { getSession, getToken } from '@/utils/auth';

export function AdminLayout() {
  const currentUser = useAppSelector(selectCurrentUser);

  const { accessToken } = getToken();
  const { accessToken: accessTokenSession } = getSession();

  if (!accessToken && !accessTokenSession && !currentUser)
    return <Navigate to={'/login'}></Navigate>;

  return (
    <>
      <div className="flex">
        <AdminSidebar></AdminSidebar>
        <Outlet></Outlet>
      </div>
    </>
  );
}
