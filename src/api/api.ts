import axios from "axios";
import type { AxiosInstance } from "axios";

const gitApi: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
});



const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export{gitApi, api};
