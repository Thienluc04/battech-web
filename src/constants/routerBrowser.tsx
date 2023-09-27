/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AdminLayout, MainLayout } from '@/components/layouts';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Footer, Header } from '@/modules';
import { ForgotPass, ForgotPassConfirm, ResetPass } from '@/modules/auth';

const HomePage = lazy(() => import('@/pages/HomePage'));
const IntroducePage = lazy(() => import('@/pages/IntroducePage'));
const NewsListPage = lazy(() => import('@/pages/NewsListPage'));
const NewsDetailsPage = lazy(() => import('@/pages/NewsDetailsPage'));
const RecruitmentJobPage = lazy(() => import('@/pages/RecruitmentJobPage'));
const JobDetailsPage = lazy(() => import('@/pages/JobDetailsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const ManagePost = lazy(() => import('@/modules/post/ManagePost'));
const ManageTopic = lazy(() => import('@/modules/topic/ManageTopic'));
const ManageAuthor = lazy(() => import('@/modules/author/ManageAuthor'));
const ManageTag = lazy(() => import('@/modules/tag/ManageTag'));
const DetailPost = lazy(() => import('@/modules/post/DetailPost'));
const DetailTopic = lazy(() => import('@/modules/topic/DetailTopic'));
const DetailAuthor = lazy(() => import('@/modules/author/DetailAuthor'));
const DetailTag = lazy(() => import('@/modules/tag/DetailTag'));

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
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ManagePost></ManagePost>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ManageTopic></ManageTopic>
          </Suspense>
        ),
      },
      {
        path: '/manage/authors',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ManageAuthor></ManageAuthor>
          </Suspense>
        ),
      },
      {
        path: '/manage/tags',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ManageTag></ManageTag>
          </Suspense>
        ),
      },
      {
        path: '/manage/posts/create',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailPost></DetailPost>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics/create',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailTopic></DetailTopic>
          </Suspense>
        ),
      },
      {
        path: '/manage/authors/create',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailAuthor></DetailAuthor>
          </Suspense>
        ),
      },
      {
        path: '/manage/tags/create',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailTag></DetailTag>
          </Suspense>
        ),
      },
      {
        path: '/manage/posts/:slug',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailPost></DetailPost>
          </Suspense>
        ),
      },
      {
        path: '/manage/topics/:slug',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailTopic></DetailTopic>
          </Suspense>
        ),
      },
      {
        path: '/manage/authors/:slug',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailAuthor></DetailAuthor>
          </Suspense>
        ),
      },
      {
        path: '/manage/tags/:slug',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mt-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <DetailTag></DetailTag>
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/login',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mb-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <LoginPage></LoginPage>
          </Suspense>
        ),
      },
      {
        path: '/forgot-pass',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mb-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ForgotPass></ForgotPass>
          </Suspense>
        ),
      },
      {
        path: '/forgot-pass/:email',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mb-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ForgotPassConfirm></ForgotPassConfirm>
          </Suspense>
        ),
      },
      {
        path: '/reset-pass/:email',
        element: (
          <Suspense
            fallback={
              <>
                <div className="w-10 h-10 mx-auto mb-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
              </>
            }
          >
            <ResetPass></ResetPass>
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
