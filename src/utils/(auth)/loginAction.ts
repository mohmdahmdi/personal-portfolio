"use server";

import { api } from "@/api/api";
import { AxiosResponse } from "axios";
import { saveSession } from "@/utils/(auth)/storage";

export const loginAction = async (formData: FormData) => {
  try {  
    const username = formData.get("username");
    const password = formData.get("password");
    const credentials = { username, password };

    const response: AxiosResponse = await api.post("/login", credentials);

    if (response.status === 200) {
      saveSession(response.data.accessToken);
      return { success: true }; 
    } else {
      throw new Error("Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "Login failed" }; 
  }
};
