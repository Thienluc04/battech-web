import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useAppSelector } from '@/app/hooks';
import { AdminSidebar } from '@/components/sidebar';
import { selectCurrentUser } from '@/features/auth/authSlice';
import { getSession, getToken } from '@/utils/auth';

export function AdminLayout() {
  const navigate = useNavigate();

  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const { accessToken } = getToken();
    const { accessToken: accessTokenSession } = getSession();
    if (!accessToken && !accessTokenSession && !currentUser) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) return null;

  return (
    <>
      <div className="flex">
        <AdminSidebar></AdminSidebar>
        <Outlet></Outlet>
      </div>
    </>
  );
}
