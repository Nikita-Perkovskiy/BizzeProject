import { apiClient } from "lib/apiClient";
import {
  BUSINESS_UNITS_APPOINTMENT,
  IBusinessUnitProcedures,
} from "api/constants";

export const getBusinessUnitProcedures = async (
  id: number | null,
  params: IBusinessUnitProcedures,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_APPOINTMENT}/${id}/procedures`,
    { params },
  );

  return res.data;
};
