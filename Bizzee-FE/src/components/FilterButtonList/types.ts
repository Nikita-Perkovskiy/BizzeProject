import { initialData } from "components/MultiselectAutocomplete/types";

export interface IFilterButtonListProps {
  currentFilter: string;
  setCurrentFilter: (value: string | ((prevValue: string) => string)) => void;
  options: string[];
  isDisabled?: boolean;
  userOptions?: initialData[];
}
