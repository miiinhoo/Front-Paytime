import { JSX } from "react";
import { UserArrays } from "../../arrays/UserArrays";
import useEvent from "../../hooks/useEvent";
import ButtonComponent from "../common/ButtonComponent";
import useAuthFireBase from "../../hooks/useAuthFireBase";

export default function LoginComponent():JSX.Element{

  const { tryLogin } = useAuthFireBase();
  const { 
    temp:change,
    navigate,
    handleChange,
    doNotRefreshSite, 
  } = useEvent();

  return(
    <div className="login-form">
      <form>
        {UserArrays.slice(1,3).map((list,index)=> (
          <label key={index}>
            <span>{list.text}</span>
            <input type={list.name} 
            name={list.name}
            value={change?.[list.name] ?? ""}
            onChange={handleChange}
            />
          </label>
        ))}
        <ButtonComponent
        text="로그인하기"
        types="submit"
        click={(event) => {tryLogin(change.email, change.password);
          doNotRefreshSite(event);
        }}
        classN="login"
        />
        <ButtonComponent text={"회원가입창으로"} click={() => navigate("/user/signup")} classN="join"/>
      </form>
    </div>
  );
}