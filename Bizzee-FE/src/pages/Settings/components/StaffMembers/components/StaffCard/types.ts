export interface IStaffValue {
  value: string;
  title: string;
}

export interface IStaffCard {
  userId: number;
  imageLink?: string;
  fullName: string;
  experience: IStaffValue;
  role: string;
  category: IStaffValue[];
  services: IStaffValue[];
  phoneNumber: string;
  email?: string;
  language: IStaffValue[];
  addedDate: string;
  lastVisitDate: string;
  status: string;
  countryCode: string;
}
