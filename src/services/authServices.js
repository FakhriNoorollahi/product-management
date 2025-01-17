import { api } from "./httpReq";

export const addUser = async (data) => {
  return await api.post("/auth/register", data);
};

export const loginUser = async (data) => {
  return await api.post("/auth/login", data);
};
