"use server"

import React from "react";
import AdminSideBar from "../../../../components/adminSideBar/adminSideBar";
import AdminHeader from '../../../../components/adminHeader/adminHeader';

const AdminPanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="w-full">
        <AdminHeader />
        <div className="pl-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
