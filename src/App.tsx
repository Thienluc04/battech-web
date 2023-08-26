import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components/layouts';

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
        {
          path: '/jobs',
          element: <RecruitmentJobPage></RecruitmentJobPage>,
        },
        {
          path: '/jobs/:slug',
          element: <JobDetailsPage></JobDetailsPage>,
        },
      ],
    },

    {
      path: '/contact',
      element: <ContactPage></ContactPage>,
    },
  ]);
  return (
    <Suspense
      fallback={
        <>
          <div className="w-10 h-10 mx-auto mt-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
        </>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
