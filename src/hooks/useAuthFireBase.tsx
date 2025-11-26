import { useState } from "react";
import { UserLogin, UserLogout, UserSignup } from "../api/FireBaseAPI";
import useEvent from "./useEvent";
import { updateProfile } from "firebase/auth";

export default function useAuthFireBase (){

  const { navigate } = useEvent();

  const [ user,setUser ] = useState<any>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);


   // firebase 로그인
  const tryLogin = async(email:string,password:string) => {
    try{
      setLoading(true);
      const res = await UserLogin(email,password);
      setUser(res.user);
      console.log("로그인 성공");
      navigate("/#firstPage");
    }catch (err: any) {
      if (err.code === "auth/user-not-found") alert("해당 이메일의 계정이 없습니다.");
      else if (err.code === "auth/wrong-password") alert("비밀번호가 잘못되었습니다.");
      else alert("로그인 실패: " + err.message);
      setError(err.message);
    }
    finally{
      setLoading(false);
    }
  }

  // firebase 회원가입
  const trySignup = async(email:string,password:string,name?:string) => {
    try{
      setLoading(true);
      const res = await UserSignup(email,password);
      const user = res.user;

      await updateProfile(user, {displayName : name});

      setUser(res.user);
      console.log("회원가입 성공")
    }catch(err:any){
      if(err.code === "auth/invalid-email") alert("이메일의 형식이 잘못되었습니다.");
      else if(err.code === "auth/weak-password") alert("비밀번호는 6자 이상이여야 합니다.");
      else alert("서버 에러.");
      console.error(err);
      setError(err)
    }finally{
      setLoading(false);
    }
  }
  // 로그아웃 기능
  const tryLogout = async() => {
    try{
      setLoading(true);
      await UserLogout();
      setUser(null);
      console.log("로그아웃 성공");
    }catch(err:any){
      console.log("로그아웃 실패!" + err);
      setError(err);
    }finally{
      setLoading(false);
    }
  }


  return{
    user,
    error,
    tryLogin,
    trySignup,
    tryLogout,
  }
}