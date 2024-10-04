import { IStaffValue } from "../StaffCard/types";

export interface IStaffInfo {
  email?: string;
  experience: IStaffValue;
  category: IStaffValue[];
  services?: IStaffValue[];
  language: IStaffValue[];
  addedDate: string;
  lastVisitDate: string;
  onClick: () => void;
  status: boolean;
  disabled?: boolean;
}
