export interface InitialValue {
  [key: string]: string | string[] | File | null;
  description: string;
  fullName: string;
  experience: string;
  language: string[];
  education: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  role: string;
  image: File | null | string;
  masterLogo: File | null | string;
  imageLink: string;
  masterLogoLink: string;
}

export interface arrayResponse {
  title: string;
  value: string;
}

export interface ResponseData {
  userId: number;
  fullName: string;
  imageLink: string;
  masterLogoLink: string;
  experience:
    | {
        title: string;
        value: string;
      }
    | string;
  addedDate: string;
  businessUserId: number;
  countryCode: string;
  description: string;
  education: string;
  email: string;
  language: arrayResponse[];
  lastVisitDate: string | null;
  phoneNumber: string;
  procedure: string[];
  role: string;
  status: string;
  image: File | null;
  masterLogo: File | null;
}
export interface RemoveButton {
  backspace: string;
  delete: string;
}

export interface initialData {
  title: string;
  value: string;
  id?: string;
  tag?: string;
  disabled?: boolean;
}
