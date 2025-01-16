"use client"
import Image from "next/image";
import logo from "../../../../assets/pngs/Group 1.png";
import InputBox from "@/components/inputBox/inputBox";
import { useState } from "react";
import { loginAction } from "@/utils/(auth)/loginAction";

const Login = () => {
  const [error, setError] = useState<boolean>(false)
  const action = async (formData: FormData) => {
    const result = await loginAction(formData); 
    if (result.success) {
      setError(false); 
    } else {
      setError(true); 
    }
  };

  return (
    <>
      <form
        action={action}
        className="absolute center flex flex-col items-center border border-dashed rounded-md py-10 px-6"
      >
        <Image alt="logo" src={logo} width={80} height={80} />
        <div className="text-3xl font-bold">Login page</div>
        <InputBox error={error}/>
        <button
          type="submit"
          className="bg-white text-black w-[100%] rounded-md mt-5 py-2 transition-all ease-in-out duration-200 active:scale-[.95]"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
