"use client";

import { useState } from "react";

const AdminLayout = ({
  adminPanel,
  loginPage,
}: {
  adminPanel: React.ReactNode;
  loginPage: React.ReactNode;
}) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  
  return isLoggedIn ? adminPanel : loginPage;
};

export default AdminLayout;
