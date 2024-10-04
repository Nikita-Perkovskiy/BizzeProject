import { apiClient } from "lib/apiClient";
import { SEND_OTP_ROUTE } from "../constants";

export const sendOtp = async (id: number) => {
  const res = await apiClient.get(`${SEND_OTP_ROUTE}/${id}`);

  return res.data;
};
