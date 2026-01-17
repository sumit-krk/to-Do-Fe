import axiosInstance from "../../services/axiosInstance";

export const fetchUsersApi = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};