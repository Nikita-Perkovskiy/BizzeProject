import { apiClient } from "lib/apiClient";
import { CLIENTS_ROUTE } from "api/constants";
import { IClient } from "pages/Settings/components/Clients/components/ClientsTable/types";

export const getExportClients = async (data: IClient[]) => {
  const res = await apiClient.post(`${CLIENTS_ROUTE}/exportClients`, data, {
    responseType: "blob",
  });

  return res.data;
};
