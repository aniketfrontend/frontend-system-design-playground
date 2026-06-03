import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import PaginationPage from "../pages/PaginationPage";
import InfiniteScrollPage from "../pages/InfiniteScrollPage";
import DebouncingPage from "../pages/DebouncingPage";
import CachingPage from "../pages/CachingPage";
import VirtualizationPage from "../pages/VirtualizationPage";
import LazyLoadingPage from "../pages/LazyLoadingPage";
import CodeSplittingPage from "../pages/CodeSplittingPage";
import WebSocketPage from "../pages/WebSocketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "pagination",
        element: <PaginationPage />,
      },
      {
        path: "infinite-scroll",
        element: <InfiniteScrollPage />,
      },
      {
        path: "debouncing",
        element: <DebouncingPage />,
      },
      {
        path: "caching",
        element: <CachingPage />,
      },
      {
        path: "virtualization",
        element: <VirtualizationPage />,
      },
      {
        path: "lazy-loading",
        element: <LazyLoadingPage />,
      },
      {
        path: "code-splitting",
        element: <CodeSplittingPage />,
      },
      {
        path: "websocket",
        element: <WebSocketPage />,
      },
    ],
  },
]);
