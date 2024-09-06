"use client";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/pngs/Group 1.png";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { api } from "@/api/api";


const AdminSideBar = () => {
  const path = usePathname()
  const router = useRouter()

  const handleRemoveSession = ()=>{
    const res = api.post("./login/removeSession")
    router.push("/admin")
    router.refresh()
  }

  return (
    <div className="sticky left-0 top-0 h-[100vh] border-r border-neutral-700 w-[18%] flex flex-col">
      <div className="border-b border-neutral-800 mr-4 mb-3 pt-5 pb-2 px-2 flex ">
        <Image alt="logo" src={logo} width={40} height={40} />
        <span className="px-5 text-2xl items-center">Menu</span>
      </div>

      <Link
        href={"/admin"}
        className={`sidebar-item ${path === "/admin" ? "active-sidebar" : ""}`}
      >
        <QueryStatsIcon />
        <span>Analytics</span>
      </Link>

      <Link
        href={"/admin/modify"}
        className={`sidebar-item ${
          path === "/admin/modify" ? "active-sidebar" : ""
        }`}
      >
        <EditNoteIcon />
        <span>Modify information</span>
      </Link>

      <Link
        href={"/admin/posts"}
        className={`sidebar-item ${
          path === "/admin/posts" ? "active-sidebar" : ""
        }`}
      >
        <PostAddIcon />
        <span>Posts</span>
      </Link>

      <Link
        href={"/admin/admins"}
        className={`sidebar-item ${
          path === "/admin/admins" ? "active-sidebar" : ""
        }`}
      >
        <PersonAddAltIcon />
        <span>Admins</span>
      </Link>
  
      <div className="sidebar-item !mt-auto !mb-3" onClick={handleRemoveSession}>
        <LogoutIcon />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default AdminSideBar;
