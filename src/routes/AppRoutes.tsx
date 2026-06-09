import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { lazy, Suspense } from "react";

import PageLoader from "../components/common/PageLoader";

const HomePage = lazy(() => import("../pages/HomePage"));

const PaginationPage = lazy(() => import("../pages/PaginationPage"));

const InfiniteScrollPage = lazy(() => import("../pages/InfiniteScrollPage"));

const DebouncingPage = lazy(() => import("../pages/DebouncingPage"));

const CachingPage = lazy(() => import("../pages/CachingPage"));

const VirtualizationPage = lazy(() => import("../pages/VirtualizationPage"));

const LazyLoadingPage = lazy(() => import("../pages/LazyLoadingPage"));

const CodeSplittingPage = lazy(() => import("../pages/CodeSplittingPage"));

const WebSocketPage = lazy(() => import("../pages/WebSocketPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "pagination",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PaginationPage />
          </Suspense>
        ),
      },
      {
        path: "infinite-scroll",
        element: (
          <Suspense fallback={<PageLoader />}>
            <InfiniteScrollPage />
          </Suspense>
        ),
      },
      {
        path: "debouncing",
        element: (
          <Suspense fallback={<PageLoader />}>
            <DebouncingPage />
          </Suspense>
        ),
      },
      {
        path: "caching",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CachingPage />
          </Suspense>
        ),
      },
      {
        path: "virtualization",
        element: (
          <Suspense fallback={<PageLoader />}>
            <VirtualizationPage />
          </Suspense>
        ),
      },
      {
        path: "lazy-loading",
        element: (
          <Suspense fallback={<PageLoader />}>
            <LazyLoadingPage />
          </Suspense>
        ),
      },
      {
        path: "code-splitting",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CodeSplittingPage />
          </Suspense>
        ),
      },
      {
        path: "websocket",
        element: (
          <Suspense fallback={<PageLoader />}>
            <WebSocketPage />
          </Suspense>
        ),
      },
    ],
  },
]);
