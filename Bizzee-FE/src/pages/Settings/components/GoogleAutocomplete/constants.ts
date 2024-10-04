import { FormikProps } from "formik";
import { IFormValues } from "pages/Layout/components/AuthInput/types";
import { welcomeBlockInitialValue } from "pages/MainPage/components/WelcomeBlock/interface";
import { SxProps, Theme } from "@mui/material";

export const defaultPropValues = {
  label: "Add a location",
  city: "",
};

export const autocompleteService = { current: null };

export const filterOptions = <T>(x: T) => {
  return x;
};

export function loadScript(
  src: string,
  position: HTMLElement | null,
  id: string,
) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

export function formatDescription(address: string) {
  if (!address) {
    return "";
  }
  const descriptionArray = address.split(",");
  const mainDescription = descriptionArray.slice(0, 2).join(",");
  const countryDescription = descriptionArray.slice(-1)[0].trim();
  return `${mainDescription} (${countryDescription})`;
}

export interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}
export interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}
export interface PlaceType {
  description: string;
  place_id: string;
  structured_formatting: StructuredFormatting;
}

export interface IComponentRestrictions {
  country: string;
}

export interface IRequestConfig {
  componentRestrictions: IComponentRestrictions;
  types: string[];
}

export interface IGoogleAutocompleteProps {
  requestConfig?: IRequestConfig;
  formik: FormikProps<IFormValues> | FormikProps<welcomeBlockInitialValue>;
  name: string;
  label?: string;
  city?: string;
  placeholder?: string;
  isAddress?: boolean;
  disabled?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
  searchLocation?: string;
}
