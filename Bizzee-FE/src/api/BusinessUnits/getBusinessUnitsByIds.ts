import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE } from "../constants";

export const getBusinessUnitsByIds = async (ids: number[]) => {
  const res = await apiClient.get(`${BUSINESS_UNIT_ROUTE}/ids`, {
    params: {
      values: ids,
    },
    paramsSerializer: {
      serialize(params) {
        return Object.keys(params)
          .map((key) => `${key}=${encodeURIComponent(params[key])}`)
          .join("&");
      },
    },
  });

  return res.data;
};
