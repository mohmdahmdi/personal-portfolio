
import { checkSession } from "@/utils/(auth)/storage";
import React from "react";

const AdminLayout = ({
  adminPanel,
  loginPage,
}: {
  adminPanel: React.ReactNode;
  loginPage: React.ReactNode;
}) => {

  //there are two ways to check login
  //1. HOC
  //2. cokkie *

  const isLoggedIn = checkSession()

  return isLoggedIn ? adminPanel : loginPage ;
};

export default AdminLayout;
