import React from "react";
import AdminSideBar from "../../../../components/adminSideBar/adminSideBar";
const AdminPanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <AdminSideBar />
      {children}
    </div>
  );
};

export default AdminPanelLayout;
