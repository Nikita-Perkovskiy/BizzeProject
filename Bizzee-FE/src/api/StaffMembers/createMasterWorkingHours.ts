import { IMasterWorkingHours, WORK_TIME } from "api/constants";
import { apiClient } from "lib/apiClient";

export const createMasterWorkingHours = async (
  masterId: number,
  credentials: IMasterWorkingHours,
) => {
  const res = await apiClient.post(
    `${WORK_TIME}/masters/${masterId}`,
    credentials,
  );

  return res.data;
};
