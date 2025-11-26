import { JSX, useEffect, useState } from "react";
import { AddPageArrays } from "../arrays/AddPageArrays";
import SelectComponent from "../components/common/SelectComponent";
import { getPayments, createPayment } from "../api/AddPageAPI";
import useEvent from "../hooks/useEvent";
import useFireBase from "../hooks/useFireBase";
import ButtonComponent from "../components/common/ButtonComponent";
import { FormDataArrays } from "../arrays/FormDataArrays";

// useFireBase.tsx
const api = {
  get : getPayments,
  create : createPayment
}

function AddPage(): JSX.Element {
  const { 
    // 구조 분해 할당
    bool:openOption,
    setBool:setOpenOption,
    doNotRefreshSite
  } = useEvent();

  const {
    formData,
    setFormData,
    createData
  } = useFireBase({
    initFormData: FormDataArrays[0].addPage,
    api
  })
  
  const [ selectedItem, setSelectedItem ] = useState<string | "선택하세요..">("선택하세요..");
  const [ putItem, setPutItem ] = useState<string | "">("");

  const dropdownList = AddPageArrays.find(item => item.type === "dropdown");

  const selectedInner = dropdownList?.outerSelect?.find(out => out.name === selectedItem)?.innerSelect || [];

  /** Add페이지에서 조정하면 안되는 D-day와 상태를 
   *AddPageArrays 배열에서 filter로 dDay, status라는 키값 name을 제외 시킨 후 아래에서 map으로 전개시킴 */
  const exceptOption = AddPageArrays.filter( t => t.name !== "dDay" && t.name !== "status");
  
  const monthly = () => {
    const total = Number((formData as any).totalPrice) || 0;
    const cycle = Number((formData as any).cycle?.replace("개월","")) || 1;
    return total && cycle ? Math.floor(total / cycle) : ""; 
  };


  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <div className="page-content">
          <form>
            <h2>등록페이지</h2>
            {
              /** 전개 */
              exceptOption.map(list => (
                <label key={list.id}>
                  {list.type === "dropdown" ? (
                    <>
                      <div className="outerSelectItem" onClick={() => setOpenOption(prev => !prev)}>
                        <div className="selectLists">
                          {/* 현재 선택된 텍스트 */}
                          <p className="selectedText">{putItem === "" ? selectedItem : putItem}</p>

                          {/* 드롭다운 옵션 */}
                          {openOption && list.outerSelect?.map((temp,inx) => (
                            <p 
                              key={inx}
                              onClick={(e) => {
                                doNotRefreshSite(e);
                                setSelectedItem(temp.name); // 선택한 텍스트 저장
                                setPutItem("");
                                setOpenOption(false);
                              }}
                            >
                              {temp.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : list.type === "select" ? (
                    <SelectComponent
                    disable={list.name === "cycle" && (formData as any).method !== "카드"}
                    handleChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]:e.target.value
                      })
                    }} add={formData} list={list}>
                      {list.options?.map((opt,inx) => (
                        <option key={inx} value={opt}>{opt}</option>
                      ))}
                    </SelectComponent>
                  ) : (
                    <input
                      type={list.type ?? "text"}
                      value={list.name === "price" ? monthly() : formData[list.name as any] || ""
                        }
                      name={list.name}
                      placeholder={list.text}
                      onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({
                          ...formData,
                          [e.target.name] : e.target.value
                        })
                      }}
                      readOnly={
                        list.name === "price" ||
                        ((formData as any).title?.includes("정기결제") && list.name === "totalPrice")
                      }
                    />
                  )}
                </label>
              ))
            }
            
                {  selectedInner.length > 0 && (
                      <div className="InnerBox-wrapper">
                          { !openOption &&
                            selectedInner.map((list,inx) => (
                              <button type="button" className="InnerBox-Items" key={inx}
                              onClick={(e) => {
                                doNotRefreshSite(e);
                                setPutItem(list.name);
                                const fullField = `${selectedItem} / ${list.name}`;
                                setFormData(prev => ({
                                  ...prev,
                                  title:fullField
                                }))
                              }}
                              >
                                <span className="InnerBox-Image">
                                  <img src={list.img} alt={list.name} />
                                </span>
                                <span className="InnerBox-text">
                                  {list.name}
                                </span>
                              </button>
                            ))
                          }
                      </div>
          )}
          
          <ButtonComponent 
          types="submit"
          text="등록"
          click={(e) => {
              doNotRefreshSite(e);
              createData({...formData});
          }}
          />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
