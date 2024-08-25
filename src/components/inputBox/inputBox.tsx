"use client";

import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputBox = () => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <form className="mt-10">
      <div className="flex relative">
        <input type="text" className="login-input" placeholder="" />
        <span className="pointer-events-none">USERNAME</span>
      </div>
      <div className="flex-col relative">
        <input type={visibility ? "text" : "password"} placeholder="" className="login-input !mb-2" />
        <span className="pointer-events-none">PASSWORD</span>
        <span
          onClick={() => setVisibility(!visibility)}
          className="cursor-pointer absolute top-[1.37rem] right-3 text-neutral-700 border-l border-neutral-700 pl-1"
        >
          {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </span>
        <a href="#" className="block text-xs mx-1">
          Forget password?
        </a>
      </div>
    </form>
  );
};

export default InputBox;
