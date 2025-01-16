"use client";

import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputBox: React.FC<{ error: any }> = (props) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <div className="mt-10">
      <div className="flex relative">
        <input
          type="text"
          placeholder=""
          name="username"
          className="login-input"
        />
        <span className="pointer-events-none">USERNAME</span>
      </div>
      <div className="flex-col relative">
        <input
          type={visibility ? "text" : "password"}
          placeholder=""
          name="password"
          className="login-input !mb-2"
        />
        <span className="pointer-events-none">PASSWORD</span>
        <span
          onClick={() => setVisibility(!visibility)}
          className="cursor-pointer absolute top-[1.37rem] right-3 text-neutral-700 border-l border-neutral-700 pl-1"
        >
          {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </span>
        <div
          className={`text-xs mx-1 mb-2 transition-all duration-200 ease-in-out ${
            props.error ? "text-red-500" : "text-black"
          }`}
          aria-live="polite"
        >
          Incorrect username or password.
        </div>
        <a href="#" className="block text-xs mx-1">
          Forget password?
        </a>
      </div>
    </div>
  );
};

export default InputBox;
