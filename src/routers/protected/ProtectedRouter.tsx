import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import useEvent from "../../hooks/useEvent";

export type Node = { children: React.ReactNode };

export default function ProtectedRouter({ children }: Node) {
  const { location } = useEvent();
  const navigate = useNavigate();

  // Firebase 인증 감시 상태
  const [loading, setLoading] = useState(true);          // 로딩 중인지
  const [unauthorized, setUnauthorized] = useState(false); // 인증 실패 여부

  useEffect(() => {
    // Firebase에서 인증 상태 변경 감시
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false); // Firebase가 한 번이라도 응답하면 로딩 종료

      if (
        !user &&
        location.pathname !== "/user/login" &&
        location.pathname !== "/user/signup" &&
        location.pathname !== "/#firstpage"
      ) {
        setUnauthorized(true);
      } else {
        setUnauthorized(false);
      }
    });

    return () => unsubscribe();
  }, [location.pathname]);

  useEffect(() => {
    if (unauthorized) {
      alert("로그인을 먼저 해주세요.");
      navigate("/user/login", { replace: true });
    }
  }, [unauthorized, navigate]);

  if (loading) return <div>로딩중...</div>;

  return <>{children}</>;
}
