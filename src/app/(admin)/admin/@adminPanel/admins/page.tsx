
import addAdminModal from "@/components/manageAdmins/addAdminModal/addAdmin";
import localFont from "next/font/local";
import ManageAdmins from '../../../../../components/manageAdmins/manageAdmins';

const Admins = () => {

  return (
    <div>
      <div className="my-4 font-bold text-2xl ml-5">admins</div>
      <div className="bg-neutral-950 rounded">
        <ManageAdmins />
      </div>
    </div>
  );
};

export default Admins;
