import React, { JSX } from "react";

type SearchFormType = {
  children: React.ReactElement<HTMLFormElement | HTMLButtonElement>;
}
export function SearchForm({children} : SearchFormType):JSX.Element{
  return(
    <>
      검색창 폼
      {children}
    </>
  )
}