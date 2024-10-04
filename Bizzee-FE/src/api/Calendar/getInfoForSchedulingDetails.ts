import { APPOINTMENT_ROUTE, IInfoForSchedulingDetails } from "../constants";
import { apiClient } from "../../lib/apiClient";

export const getInfoForSchedulingDetails = async (
  appointmentId: number | null,
  businessUnitId: number,
  params: IInfoForSchedulingDetails,
) => {
  const res = await apiClient.get(
    `${APPOINTMENT_ROUTE}/${appointmentId}/business-unit/${businessUnitId}/schedule`,
    { params: params },
  );

  return res.data;
};
