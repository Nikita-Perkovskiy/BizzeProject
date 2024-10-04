import { apiClient } from "lib/apiClient";
import { ADD_BUSINESS_UNIT_ROUTE, IAllBusinessUnitsParams } from "../constants";

export const getAllBusinessUnits = async (params: IAllBusinessUnitsParams) => {
  const res = await apiClient.get(`${ADD_BUSINESS_UNIT_ROUTE}/all`, {
    params,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return res.data;
};
