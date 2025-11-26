
import { JSX, useEffect } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import useEvent from "../hooks/useEvent";
import useFireBase from "../hooks/useFireBase";
import { getPayments } from "../api/AddPageAPI";

const api = {
  get : getPayments
}
const keyLabel: Record<string,string> = {
  title: "품목명",
  payDate: "결제일",
  
}
function ListPage():JSX.Element{
  const { 
    bool:openModal,
    setBool:setOpenModal,

  } = useEvent();
  
  const {
    formData,
    setFormData,
    getData,
  }= useFireBase({
    api});

    useEffect(() => {
      const responseData = async() => {
        console.log("폼데이터 타입 : " , typeof formData);
        console.log("폼데이터 : " ,formData);
        const res = await api.get();
        setFormData(res as any);
      }
      responseData();
    },[])
  return(
    <div className="page-wrapper">
      <div className="page-inner">
        <div className="page-content">
          <h2>결제일 관리 리스트</h2>
          <div className="table-content">
            <div className="table-arrays">
                {Array.isArray(formData) ? (
                  formData.map((items, index) => (
                    <div key={index}>
                      <span>{index + 1}</span>
                      <div>
                        {Object.entries(items).filter(([key]) => key !== "id" && key !== "0").map(([key, value]) => (
                          <p key={key}>
                            {key} : {String(value)}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))
                ):(
                  <p>
                    데이터가 없습니다.
                  </p>
                )}
            </div>
                  
                  

              
              
              
              <ButtonComponent
              text="검색"
              click={() => setOpenModal(true)}
              openModal={openModal}
              />
          </div>

        </div>
      </div>
    </div>
  )
}
export default ListPage;
