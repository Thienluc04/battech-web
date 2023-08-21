import { MainLayout } from '@/components/layouts';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

const HomePage = lazy(() => import('@/pages/HomePage'));
const IntroducePage = lazy(() => import('@/pages/IntroducePage'));
const NewsListPage = lazy(() => import('@/pages/NewsListPage'));
const NewsDetailsPage = lazy(() => import('@/pages/NewsDetailsPage'));
const RecruitmentJobPage = lazy(() => import('@/pages/RecruitmentJobPage'));
const JobDetailsPage = lazy(() => import('@/pages/JobDetailsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/introduce',
          element: <IntroducePage></IntroducePage>,
        },
        {
          path: '/news',
          element: <NewsListPage></NewsListPage>,
        },
        {
          path: '/news/:slug',
          element: <NewsDetailsPage></NewsDetailsPage>,
        },
      ],
    },
    {
      path: '/jobs',
      element: <RecruitmentJobPage></RecruitmentJobPage>,
    },
    {
      path: '/jobs/:slug',
      element: <JobDetailsPage></JobDetailsPage>,
    },
    {
      path: '/contact',
      element: <ContactPage></ContactPage>,
    },
  ]);
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
