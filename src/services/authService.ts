import {axiosInstance} from "./api-client"

export async function signup(data: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
}

export async function login(data: {
  usernameOrEmail: string;
  password: string;
}) {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
}

export async function getMe() {
  const res = await axiosInstance.get("/auth/me");
  return res.data;
}

export async function logout() {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
}
