import { IBusinessStaff } from "../../types";

export interface IStaffCard extends IBusinessStaff {
  handleStaffIDs: (staffID: number, isChecked: boolean) => void;
}
