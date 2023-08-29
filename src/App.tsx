import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/components/layouts';
import { Footer, Header } from '@/modules';

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
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <HomePage></HomePage>
            </Suspense>
          ),
        },
        {
          path: '/introduce',
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <IntroducePage></IntroducePage>,
            </Suspense>
          ),
        },
        {
          path: '/news',
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <NewsListPage></NewsListPage>,
            </Suspense>
          ),
        },
        {
          path: '/news/:slug',
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <NewsDetailsPage></NewsDetailsPage>,
            </Suspense>
          ),
        },
        {
          path: '/jobs',
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <RecruitmentJobPage></RecruitmentJobPage>,
            </Suspense>
          ),
        },
        {
          path: '/jobs/:slug',
          element: (
            <Suspense
              fallback={
                <>
                  <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
                </>
              }
            >
              <JobDetailsPage></JobDetailsPage>,
            </Suspense>
          ),
        },
      ],
    },

    {
      path: '/contact',
      element: (
        <Suspense
          fallback={
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1">
                <div className="w-10 h-10 mx-auto my-20 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
              </div>
              <Footer />
            </div>
          }
        >
          <ContactPage></ContactPage>,
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
