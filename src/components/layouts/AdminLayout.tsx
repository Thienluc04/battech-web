import { Outlet } from 'react-router';

import { AdminSidebar } from '@/components/sidebar';

export function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <Outlet></Outlet>
    </div>
  );
}
