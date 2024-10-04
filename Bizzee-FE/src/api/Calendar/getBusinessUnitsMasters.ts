import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_MASTERS } from "api/constants";

export const getBusinessUnitsMasters = async (id: number | null) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_MASTERS}/${id}/week-calendar`,
  );

  return res.data;
};
