"use client";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";

const AdminSideBar = () => {
  const [active, setActive] = useState<string>();

  return (
    <div className="sticky left-0 top-0 h-[100vh] border-r border-neutral-700 w-1/6 flex flex-col">
      <div className="border-b border-neutral-800 mr-4 py-5 px-2">
        {/*icon*/}MA
      </div>
      <div className="sidebar-item">
        <EditNoteIcon />
        Modify information
      </div>
      <div className="sidebar-item">
        <PostAddIcon />
        Add post
      </div>
      <div className="sidebar-item">
        <PersonAddAltIcon />
        Add admin
      </div>
      <div className="sidebar-item !mt-auto">
        <LogoutIcon />
        Log out
      </div>
    </div>
  );
};

export default AdminSideBar;
