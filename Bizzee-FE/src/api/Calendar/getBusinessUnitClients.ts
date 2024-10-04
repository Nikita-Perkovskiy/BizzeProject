import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_APPOINTMENT } from "api/constants";

export const getBusinessUnitClients = async (
  id: number | null,
  params: {
    prefix: string;
  },
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_APPOINTMENT}/${id}/clients`,
    { params },
  );

  return res.data;
};
