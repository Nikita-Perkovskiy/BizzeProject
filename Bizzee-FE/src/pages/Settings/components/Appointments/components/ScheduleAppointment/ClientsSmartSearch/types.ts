import { AutocompleteInputProps } from "components/AsyncSmartSearch/types";
import React from "react";

export interface IClientValues {
  id: number | null;
  email: string;
  name: string;
  countryCode: string;
  phone: string;
}

export interface ClientsInputProps
  extends Omit<
    AutocompleteInputProps,
    "options" | "getOptionsFunc" | "initialValue"
  > {
  options: readonly IClientValues[];
  initialValue?: IClientValues;
  value?: string;
  maxLength?: number;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInputValue: (value: string) => void;
}
