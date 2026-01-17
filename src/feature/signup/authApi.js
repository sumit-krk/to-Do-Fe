import axiosInstance from "../../services/axiosInstance";

export const signupApi = async (payload) => {
  const response = await axiosInstance.post("/signup", payload);
  return response.data;
};
