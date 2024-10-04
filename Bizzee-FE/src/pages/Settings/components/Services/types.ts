import { IValueTypes } from "api/constants";

interface IAdditionalServices {
  title: string;
  price: string;
}

export interface IServices {
  procedureId: number;
  title: string;
  additionalServiceDtos?: IAdditionalServices[];
  description: string;
  category: IValueTypes;
  location: IValueTypes;
  priceMin?: string;
  priceMax?: string;
  currency: string;
  isActive: boolean;
  priceType?: IValueTypes;
  duration?: IValueTypes;
  price?: string;
  setId?: (procedureId: number) => void;
  deleteId?: (procedureId: number) => void;
}
