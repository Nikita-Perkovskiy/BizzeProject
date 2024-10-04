import { apiClient } from "lib/apiClient";
import { ALL_STAFF_MEMBERS } from "../constants";

export const getStaffMembers = async () => {
  const res = await apiClient.get(ALL_STAFF_MEMBERS);

  return res.data;
};
