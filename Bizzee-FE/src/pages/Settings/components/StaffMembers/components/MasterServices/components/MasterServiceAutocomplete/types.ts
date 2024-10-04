import { initialData } from "../../types";

export interface IMasterServiceAutocomplete {
  label: string;
  placeholder: string;
  options?: initialData[];
  handleChange: (newService: initialData[]) => void;
}
