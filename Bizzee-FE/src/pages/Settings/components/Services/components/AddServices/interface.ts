export interface IAddServicesFormValues {
  [key: string]: string | IAdditionalServiceDto[];
  additionalServiceDtos: IAdditionalServiceDto[];
  businessUnitsId: IAdditionalServiceDto[];
}

export interface selectOptions {
  title: string;
  value: string;
  id?: string;
}

export interface IAdditionalServiceDto {
  [key: string]: string | number[];
}
export interface IserviceFormProps {
  handleForm: () => void;
  isFormOpen?: boolean;
  isLeaveModalOpen: boolean;
  handleLeaveModal: () => void;
  procedureId: number | null;
}

export interface BusinessUnitData {
  address: string;
  category: {
    title: string;
    value: string;
  }[];
  city: string;
  country: string;
  countryCode: string;
  id: number;
  masterCounter: number;
  name: string;
  phoneNumber: string;
  status: boolean;
  zipCode: string;
}

export interface BusinessUnitOptions {
  title: string;
  value: string;
}

export interface DurationOptions {
  title: string;
  value: string;
  durationInMinutes: number;
}

export interface IDataFromResponse {
  additionalServiceDtos: IAdditionalServiceDto[];
  businessId: number;
  businessUnitsId: IAdditionalServiceDto[];
  category: BusinessUnitOptions;
  currency: string;
  description: string;
  duration: DurationOptions;
  isActive: boolean;
  location: BusinessUnitOptions;
  price: number;
  priceMax: string;
  priceMin: string;
  priceType: BusinessUnitOptions;
  procedureId: number;
  title: string;
}
