import axios from "../utils/api";

export const registerUser = async (name: string, email: string, password: string) => {
  return await axios.post("/auth/register", { name, email, password });
};

export const loginUser = async (email: string, password: string) => {
  return await axios.post("/auth/login", { email, password });
};
