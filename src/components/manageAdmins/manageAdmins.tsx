"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import { IAdmin } from "@/interfaces/interfaces";
import AdminBar from "./adminBar/adminBar";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddAdminModal from '@/components/manageAdmins/addAdminModal/addAdmin';

const ManageAdmins = () => {
  const { data, loading } = useAxios(api, "/admin");
  const [addvisible, setAddVisible] = useState<boolean>(false)

  const handleAddAdmin = ()=>{
    setAddVisible(!addvisible)
  }

  if (!data.data || loading) {
    // TODO: making a good loading
    return <div>loading ...</div>;
  }
  return addvisible ? <AddAdminModal /> : (
    <div className="w-full px-3 py-4 rounded-lg bg-neutral-800 ">
      <div className="rounded-lg overflow-clip">
        {data.data.map((admin: IAdmin) => {
          // eslint-disable-next-line react/jsx-key
          return <AdminBar key={admin.id} admin={admin} />;
        })}
        <div onClick={handleAddAdmin} className="text-center w-auto p-3 cursor-default bg-neutral-950 transition-all ease-in-out duration-500 hover:bg-neutral-900">
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;
