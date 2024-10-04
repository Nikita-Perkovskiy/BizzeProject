import { SEARCH_ROUTE_BY_NAME_LOCATIONS } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getServicesByNameLocations = async (
  name: string,
  location: string,
  page: string,
  size: string,
) => {
  const res = await apiClient.get(SEARCH_ROUTE_BY_NAME_LOCATIONS, {
    params: {
      name,
      location,
      page,
      size,
    },
  });

  return res.data;
};
