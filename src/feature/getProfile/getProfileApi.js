import axiosInstance from "../../services/axiosInstance";

export const getProfileApi = async () => {
  const response = await axiosInstance.get("/get-profile");
  return response.data;
};