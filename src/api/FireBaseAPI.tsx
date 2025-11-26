import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

// 회원가입
export const UserSignup = async (email:string, password:string):Promise<UserCredential> => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

// 로그인
export const UserLogin = async (email:string ,password:string):Promise<UserCredential> => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

// 로그아웃
export const UserLogout = async () => {
  return await signOut(auth);
};

