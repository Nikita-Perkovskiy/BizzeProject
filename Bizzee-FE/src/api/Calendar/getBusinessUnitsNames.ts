import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_NAMES } from "api/constants";
import { IValues } from "pages/Settings/components/Appointments/components/SmartSearch/types";

export const getBusinessUnitsNames = async (): Promise<IValues[]> => {
  const res = await apiClient.get(`${BUSINESS_UNITS_NAMES}`);

  return res.data as IValues[];
};
