import { apiClient } from "lib/apiClient";
import { CLIENTS_ROUTE } from "api/constants";

export const getClientsStatus = async () => {
  const res = await apiClient.get(`${CLIENTS_ROUTE}/status`);

  return res.data;
};
