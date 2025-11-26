import React, { JSX } from "react";


export default function ModalComponent():JSX.Element{
  
  return(
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="top-line">
            {/* 닫기 또는 타이틀 */}
          </div>
          <div className="modal-main">
            {/* 들어 올 값들 */}
          </div>
          <div className="modal-footer">
            {/* 버튼 자리 */}
          </div>
        </div>
      </div>
    </>
  )
}