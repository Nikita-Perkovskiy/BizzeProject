interface ICategory {
  value: string;
  title: string;
}

export interface IBusinessUnit {
  id: number;
  name: string;
  countryCode: string;
  phoneNumber: string;
  category: ICategory[];
  country: string;
  city: string;
  masterCounter: number;
  status: boolean;
  address: string;
  zipCode: string;
  managerName: string;
}
