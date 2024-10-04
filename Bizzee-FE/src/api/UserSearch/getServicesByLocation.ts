import { SEARCH_ROUTE_BY_LOCATIONS } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getServicesByLocation = async (
  location: string,
  page: string,
  size: string,
) => {
  const res = await apiClient.get(SEARCH_ROUTE_BY_LOCATIONS, {
    params: {
      locations: location,
      page,
      size,
    },
  });

  return res.data;
};
