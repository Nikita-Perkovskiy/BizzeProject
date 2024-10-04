import { USER_ACTIVE_STATUS } from "./constants";

export const mapStringToBoolean = (statusString: string): boolean => {
  return statusString === USER_ACTIVE_STATUS;
};
