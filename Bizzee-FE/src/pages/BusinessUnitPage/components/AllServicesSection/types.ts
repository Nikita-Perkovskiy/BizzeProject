export interface IAllServicesTypes {
  procedureId: number;
  title: string;
  description: string;
  category: CategoryType;
  location: { title: string; value: string };
  priceType: { title: string; value: string };
  priceMin: string;
  priceMax: string;
  price: number;
  currency: string;
  duration: { title: string; durationInMinutes: number; value: string };
  isActive: boolean;
  additionalServiceDtos: [
    {
      optionTitle: string;
      price: number;
    },
  ];
  businessUnitsId: number[] | null;
  businessId: number | null;
}
export type CategoryType = { title: string; value: string };
export interface IServicesGridProps {
  services: IAllServicesTypes[] | [];
}
