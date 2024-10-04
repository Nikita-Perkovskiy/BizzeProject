export interface IContactLineProps {
  Icon: React.ElementType;
  children: React.ReactNode;
  link?: string;
}
export interface contactInfoTypes {
  countryCode: string;
  phoneNumber: string;
  email: string;
  city: string;
  address: string;
  zipCode: string;
}
export interface IContactBlock {
  contactInfo: contactInfoTypes | null;
}
