import { lazy, Suspense } from "react";
import { loading } from "./root";
import JoinPage from "../pages/user/SignupPage";

const LoginPage = lazy(() => import("../pages/user/LoginPage"));

export default function UserRouter(){
  return[
    {
      path:"login",
      element:(
        <Suspense fallback={loading}>
          <LoginPage/>
        </Suspense>
      )
    },
    {
      path:"signup",
      element:(
        <Suspense fallback={loading}>
          <JoinPage/>
        </Suspense>
      )
    },
  ];
}