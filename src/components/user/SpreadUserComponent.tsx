import React, { useState } from "react";
import { UserArrays } from "../../arrays/UserArrays";

type Props = {
  handleChange : (e:React.ChangeEvent<HTMLInputElement>) => void,
  change : Record<string,string>,
}

export default function SpreadMyArrays({ handleChange,change}: Props) {
    const [ pw, setPw ] = useState<string>("");
    const [ ckPw, setCkPw ] = useState<string>("");
    
      return (
      <>
        {UserArrays.map((list) => {
          let inputProps = {};

          if (list.name === "name")
            inputProps = { type: "text", placeholder: "이름을 입력하세요." };
          else if (list.name === "email")
            inputProps = { type: "email", placeholder: "이메일을 입력하세요." };
          else if (list.name === "password")
            inputProps = { type: "password", placeholder: "비밀번호를 입력하세요." };
          else if (list.name === "passwordcheck")
            inputProps = {
              type: "password",
              placeholder: "비밀번호 확인",
              disabled: pw === "" ? true : false, // 문자열 "disabled" 말고 true/false 써야 함
            };
          else inputProps = { type: "text", placeholder: "기본" };

          return (
            <div key={list.id} className="input-wrapper">
              <input
                {...inputProps}
                className={list.name}
                value={change[list.name] || ""}
                name={list.name}
                onChange={(e) => {
                  if (list.name === "password") {
                    handleChange(e);
                    setPw(e.target.value);
                  } else if (list.name === "passwordcheck") {
                    handleChange(e);
                    setCkPw(e.target.value);
                  } else {
                    handleChange(e);
                  }
                }}
              />

              {list.name === "passwordcheck" && (
                <div className="pw-message">
                  {pw && ckPw
                    ? ckPw === pw
                      ? "✅ 비밀번호 일치"
                      : "❌ 비밀번호 불일치"
                    : ""}
                </div>
              )}
            </div>
          );
        })}
      </>
    );

  }