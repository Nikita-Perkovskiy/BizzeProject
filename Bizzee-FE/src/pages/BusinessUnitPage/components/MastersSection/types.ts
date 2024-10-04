export interface IMasterForBusinessUnit {
  businessUnitsId: number[] | null;
  businessUserId: number | null;
  userId: number;
  fullName: string;
  imageLink: string;
  category: { title: string; value: string }[] | [];
  email: string;
  role: string;
  countryCode: string;
  phoneNumber: string;
  lastVisitDate: string;
  status: string;
}

export interface IMastersGridProps {
  mastersList: IMasterForBusinessUnit[] | [];
}
