
import Image from "next/image";
import logo from "../../../../assets/pngs/Group 1.png";
import InputBox from "@/components/inputBox/inputBox";
import { api } from "@/api/api";
import { AxiosResponse } from "axios";
import { saveSession } from "@/utils/(auth)/storage";

const Login = () => {

  const action = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    const creditionals = { username: username, password: password };
    const response: AxiosResponse = await api.post("/login", creditionals);
    if (response.status === 200) {
      saveSession(response.data.accessToken)
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
        <InputBox />
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
