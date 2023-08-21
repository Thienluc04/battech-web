import { Footer, Header } from '@/modules';
import { Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
