import { apiClient } from "lib/apiClient";
import { ADD_BUSINESS_UNIT_ROUTE } from "../constants";

export const addBusinessUnit = async (credentials: FormData) => {
  const res = await apiClient.post(ADD_BUSINESS_UNIT_ROUTE, credentials, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
