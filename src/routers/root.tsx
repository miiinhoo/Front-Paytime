import { lazy, Suspense } from "react";
import "../pages/Pages.scss";
import { createBrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";
import MainPage from "../pages/MainPage";

const ProtectedRouter = lazy(() => import("../routers/protected/ProtectedRouter"));
// 레이아웃 틀 import
const BasicLayout = lazy(() => import('../layouts/BasicLayout'));


// 리스트 페이지
const ListPage = lazy(() => import("../pages/ListPage"));

// 등록 페이지
const AddPage = lazy(() => import("../pages/AddPage"));

// 달력 페이지
const CalendarPage = lazy(() => import("../pages/CalendarPage"));

// 예정항목 페이지
const UpcomingPage = lazy(() => import("../pages/UpcomingPage"));

export const loading = <div>로딩중...</div>


const root = createBrowserRouter([
  {
    path:"/",
    element: <ProtectedRouter><BasicLayout/></ProtectedRouter>,
    children: [
      {
        index:true,
        element: (
          <Suspense fallback={loading}>
            <MainPage/>
          </Suspense>
        ),
      },
      {
        path:"user",
        children: [...UserRouter()],
      },
      {
        path:'list',
        element: (
          <Suspense fallback={loading}>
            <ListPage/>
          </Suspense>
        ),
      },
      {
        path:"add",
        element: (
          <Suspense fallback={loading}>
            <AddPage/>
          </Suspense>
        )
      },
      {
        path:"calendar",
        element: (
          <Suspense fallback={loading}>
            <CalendarPage/>
          </Suspense>
        )
      },
      {
        path:"upcoming",
        element: (
          <Suspense fallback={loading}>
            <UpcomingPage/>
          </Suspense>
        )
      }
    ],
  }
]);

export default root;