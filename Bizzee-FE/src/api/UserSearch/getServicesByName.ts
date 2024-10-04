import { SEARCH_ROUTE_BY_NAME } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getServicesByName = async (
  name: string,
  page: string,
  size: string,
) => {
  const res = await apiClient.get(SEARCH_ROUTE_BY_NAME, {
    params: {
      name,
      page,
      size,
    },
  });

  return res.data;
};
