export interface IAdditionalService {
  optionTitle: string;
  price: string;
}

interface IValueTypes {
  value: string;
  title: string;
}

export interface IMasterServices {
  id: number;
  category: string;
}

export interface initialData {
  title: string;
  value: string;
  id?: string;
  tag?: string;
  disabled?: boolean;
}

export interface IServices {
  id: number;
  title: string;
  description: string;
  category: IValueTypes;
  location: IValueTypes;
  priceType: IValueTypes;
  priceMin: string;
  priceMax: string;
  price: number;
  currency: string;
  additionalServiceDtos: IAdditionalService[];
  isActiveForMaster: boolean;
  saveData?: boolean;
}

export interface IServicesOptions {
  options: initialData[];
}

export interface IServicesStatus {
  id: number;
  status: boolean;
}
