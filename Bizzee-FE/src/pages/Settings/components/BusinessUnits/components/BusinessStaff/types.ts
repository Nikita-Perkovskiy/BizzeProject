export interface ICategory {
  value: string;
  title: string;
}

export interface IBusinessStaff {
  userId: number;
  fullName: string;
  imageLink: string;
  category: ICategory[];
  email: string;
  role: string;
  lastVisitDate: string;
  countryCode: string;
  phoneNumber: string;
  status: string;
  businessUserId?: number;
  businessUnitIds: number[];
}
