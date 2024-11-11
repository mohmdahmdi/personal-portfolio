import { api } from "@/api/api";
import { Dispatch, SetStateAction } from "react";

const AddAdminModal: React.FC<{
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const action = async (formData: FormData) => {
    // "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    const accessType = formData.get("accessType");
    const creditionals = {
      username: username,
      password: password,
      accessType: accessType,
    };
    api.post("/admin", creditionals);
    props.setState(!props.state);
    window.location.reload();
  };
  return (
    <div className="absolute center border rounded-lg overflow-clip p-5 bg-black">
      <form action={action} method="post">
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            className="bg-black text-xl mb-3 px-2 py-1"
          />
        </div>
        <div>
          <input
            name="password"
            type="text"
            placeholder="password"
            className="bg-black text-xl mb-3 px-2 py-1 "
          />
        </div>
        <div>
          <input
            name="accessType"
            type="text"
            placeholder="access type "
            className="bg-black text-xl mb-3 px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-1 text-lg block text-center w-full border rounded-2xl hover:bg-neutral-200 hover:text-black hover:border-neutral-200 transition-all ease-in-out duration-300"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddAdminModal;
