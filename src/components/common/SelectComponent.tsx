import React, { JSX } from "react";

type ListType = {
  id:number | string;
  text:string | string[];
  name:string;
  type?: string;
}
type SelectedTypes = {
  children? : React.ReactNode;
  handleChange? : React.ChangeEventHandler<HTMLInputElement | 
  HTMLSelectElement | 
  HTMLTextAreaElement>;
  disable? : boolean,
  add? : Record<string, string> | Record<string, string>[],
  list:ListType,
}
export default function SelectComponent({children,handleChange,disable,add,list}:SelectedTypes):JSX.Element{
  
  const current =
    Array.isArray(add) && add.length > 0 ? add[0] : (add as Record<string, string>);
  return(
    <>
      <select
      name={list.name}
      onChange={handleChange}
      value={current?.[list.name] || ""}
      disabled={disable}
      >
        {children}
      </select>
    </>
  )
}