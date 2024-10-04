import { apiClient } from "lib/apiClient";
import { CLIENTS_ROUTE } from "api/constants";
import { IClient } from "pages/Settings/components/Clients/components/ClientsTable/types";

export const getBusinessOwnersClients = async (
  sortBy: string,
  ascending: boolean,
): Promise<IClient[]> => {
  const res = await apiClient.get(`${CLIENTS_ROUTE}/businessOwnersClients`, {
    params: {
      sortBy: sortBy,
      ascending: ascending,
    },
  });

  return res.data;
};
