import { JSX } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import useEvent from "../../hooks/useEvent";
import SpreadMyArrays from "../../components/user/SpreadUserComponent";
import useAuthFireBase from "../../hooks/useAuthFireBase";
  

export default function JoinPage():JSX.Element{
  // firebase 회원가입기능 불러오기
  const { trySignup } = useAuthFireBase();
  // useEvent 구조분해
  const { 
    temp:change,
    setTemp:setChange,
    navigate,
    handleChange, 
    doNotRefreshSite,
    
  } = useEvent();
  // 회원가입을 해주는 함수 생성
  const handleUserInfo = () => {
    if( !change.email || !change.password ) {
      alert("아이디 또는 비밀번호가 빈칸.")
      return;
    }
    alert("회원가입이 완료되었습니다.")
    trySignup(change.email,change.password,change.name);
    setChange({email:"",password:""});
    navigate("/user/login")
  }
  
  
  
  return(
    <div className="page-wrapper">
      <div className="page-inner">
        <h2>firebase 회원가입 테스트</h2>
      <form>
        <SpreadMyArrays handleChange={handleChange} change={change}/>
        <div className="button-wrapper">
        <ButtonComponent 
          text="가입" 
          types="submit" 
          click={(event) => {handleUserInfo();doNotRefreshSite(event)}}
          classN="join"
          />
          <ButtonComponent
          text="로그인창으로"
          types="button"
          click={(event) => {navigate("/user/login"); doNotRefreshSite(event)}}
          classN="login"
          />
        </div>
        </form>
      </div>
    </div>
  )
}