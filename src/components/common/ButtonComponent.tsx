import React, { JSX } from "react";

/** ButtonComponent에서 받아올 Props의 타입을 지정해줌 */
type Props = {
  text: string,
  classN?: string,
  click?: (e?:React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
  types? : "submit" | "button" | "reset",
  openModal?: React.SetStateAction<boolean>,
}

export default function ButtonComponent({text,click,types,classN,openModal}:Props):JSX.Element{

  return(
    <>
      <button 
      onClick={click}
      type={types ?? "button"}
      className={`${classN ?? ""}${openModal ? " open":""}`}>
        { text }
      </button>
    </>
  );
}