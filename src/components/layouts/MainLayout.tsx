import { Outlet } from 'react-router';

import { Footer, Header } from '@/modules';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
