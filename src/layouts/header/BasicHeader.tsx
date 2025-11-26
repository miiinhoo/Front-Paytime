import { JSX } from "react";
import { Link } from "react-router-dom";
import { MainArrays } from "../../arrays/MainArrays";
import useEvent from "../../hooks/useEvent";
import { auth } from "../../firebase";
import ButtonComponent from "../../components/common/ButtonComponent";
import useAuthFireBase from "../../hooks/useAuthFireBase";

export function BasicHeader():JSX.Element{
  const {
    doNotRefreshSite,
  } = useEvent();

  const {
    tryLogout
  } = useAuthFireBase();
  
  return(
    <div className="header-inner">
      <div className="header-logo">
        <h1>
          <Link to = "/">
            <img src="" alt="paytime" />
          </Link>
        </h1>
      </div>
      <div id="gnb">
        <nav>
          <ul>
            {MainArrays.map((list,index) => (
              <li key={index} 
              className={"nav-items"+list.id}
              >
                <Link to={list.pathname}
                >
                  {list.emoji+list.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav> 
      </div>
      <div className="user-table">
        <div className="user-content">
          {
            auth.currentUser ? 
            <div>
              <p>
                {auth.currentUser.displayName}님 안녕하세요!
              </p>
              
              <ButtonComponent
              text={"로그아웃"}
              click={(event)=>{doNotRefreshSite(event);
                tryLogout();
              }}
              classN="logout"
              />
            </div>
            :
            <div>

            </div>
          }
        </div>
      </div>
    </div>
  )
}
