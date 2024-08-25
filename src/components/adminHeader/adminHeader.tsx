import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const AdminHeader = () => {
  return (
    <div className="sticky top-0 flex ml-4 px-5 py-[1.185rem] pb-6 border-b border-neutral-800 bg-black">
      <div></div>
      <div className="ml-auto"><PermIdentityOutlinedIcon/></div>
    </div>
  );
};

export default AdminHeader;
