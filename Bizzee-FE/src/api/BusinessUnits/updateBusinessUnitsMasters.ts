import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE } from "../constants";

export const updateBusinessUnitsMasters = async (
  id: number | null,
  credentials: number[],
) => {
  const res = await apiClient.put(
    `${BUSINESS_UNIT_ROUTE}/${id}/add-masters`,
    credentials,
  );

  return res.data;
};
