/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AdminLayout, MainLayout } from '@/components/layouts';
import { Footer, Header } from '@/modules';
import { CreatePost, ManagePost } from '@/modules/post';
import { DetailTopic, ManageTopic } from '@/modules/topic';

const HomePage = lazy(() => import('@/pages/HomePage'));
const IntroducePage = lazy(() => import('@/pages/IntroducePage'));
const NewsListPage = lazy(() => import('@/pages/NewsListPage'));
const NewsDetailsPage = lazy(() => import('@/pages/NewsDetailsPage'));
const RecruitmentJobPage = lazy(() => import('@/pages/RecruitmentJobPage'));
const JobDetailsPage = lazy(() => import('@/pages/JobDetailsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));

export const routerBrowser = createBrowserRouter([
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
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: '/manage/posts',
        element: (
          <Suspense>
            <ManagePost></ManagePost>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics',
        element: (
          <Suspense>
            <ManageTopic></ManageTopic>
          </Suspense>
        ),
      },
      {
        path: '/manage/posts/create',
        element: (
          <Suspense>
            <CreatePost></CreatePost>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics/create',
        element: (
          <Suspense>
            <DetailTopic mode="create"></DetailTopic>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics/:slug',
        element: (
          <Suspense>
            <DetailTopic mode="update"></DetailTopic>
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
  {
    path: '/login',
    element: (
      <Suspense>
        <LoginPage></LoginPage>
      </Suspense>
    ),
  },
]);
