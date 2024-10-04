import { apiClient } from "lib/apiClient";
import { CLIENTS_ROUTE, ISearchClients } from "api/constants";

export const searchClients = async (searchCriteria: ISearchClients) => {
  const res = await apiClient.get(`${CLIENTS_ROUTE}/searchClients`, {
    params: searchCriteria,
  });

  return res.data;
};
