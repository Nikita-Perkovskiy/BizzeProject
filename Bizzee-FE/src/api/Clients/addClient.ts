import { apiClient } from "lib/apiClient";
import { CLIENTS_ROUTE } from "../constants";
import { IFormValues } from "pages/Layout/components/AuthInput/types";
export const addClient = async (credentials: IFormValues) => {
  const res = await apiClient.post(
    `${CLIENTS_ROUTE}/add/business`,
    credentials,
  );

  return res.data;
};
