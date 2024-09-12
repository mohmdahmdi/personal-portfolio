import { api } from "@/api/api";

const AddAdminModal = () => {
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
  };
  return (
    <div className="">
      <div className="absolute center border rounded-lg overflow-clip p-4 bg-black">
        <form action={action} method="post">
          <div>
            <input
              name="username"
              type="text"
              placeholder="username"
              className="bg-black"
            />
          </div>
          <div>
            <input
              name="password"
              type="text"
              placeholder="password"
              className="bg-black"
            />
          </div>
          <div>
            <input
              name="accessType"
              type="text"
              placeholder="access type "
              className="bg-black"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default AddAdminModal;