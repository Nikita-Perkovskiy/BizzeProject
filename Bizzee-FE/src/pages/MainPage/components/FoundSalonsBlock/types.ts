export type FoundSalonType = {
  id: number;
  imageLink: string;
  status: true;
  name: string;
  city: string;
  address: string;
  country: string;
  procedures: [{ id: number; title: string }];
};

export interface IFoundSalonsProps {
  foundSalons: FoundSalonType[] | [];
}
