import { AutocompleteInputProps } from "components/AsyncSmartSearch/types";

export interface TimeInputProps
  extends Omit<
    AutocompleteInputProps,
    "options" | "getOptionsFunc" | "initialValue"
  > {
  options?: string[];
  getOptionsFunc: () => Promise<string[] | { timeSlots: string[] }[]>;
  initialValue?: string;
  isEditPage?: boolean;
}
