import React, { JSX } from "react";
import LoginComponent from "../../components/user/LoginComponent";

export default function LoginPage():JSX.Element{
  

  return(
    <div className="page-wrapper">
      <div className="page-inner">
        <React.Fragment>
          <LoginComponent/>
        </React.Fragment>
      </div>
      
      
      
    </div>
  );
}