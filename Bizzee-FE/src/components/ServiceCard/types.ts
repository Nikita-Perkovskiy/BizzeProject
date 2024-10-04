interface IServiceInfo {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  type: string;
  rating: number;
  reviews: number;
}

export interface IServiceCardProps {
  serviceInfo: IServiceInfo;
  dealsCard?: boolean;
}
