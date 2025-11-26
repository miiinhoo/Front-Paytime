import { JSX } from "react";
import { Outlet } from "react-router-dom";
import { BasicHeader } from "./header/BasicHeader";

const BasicLayout = ():JSX.Element => {


  return(
    <div>
      {/* 헤더 */}
      <header>
        <BasicHeader/>
      </header>
      <div className="main-content">
        <div className="main-wrapper">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default BasicLayout;