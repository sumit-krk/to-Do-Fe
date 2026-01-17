import axiosInstance from "../../services/axiosInstance";

export const loginApi = async (payload) => {
  const response = await axiosInstance.post("/login", payload);
  return response.data;
};
