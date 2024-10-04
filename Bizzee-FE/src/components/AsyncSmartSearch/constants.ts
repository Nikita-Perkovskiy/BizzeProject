import { IValues } from "./types";

export const defaultProps = {
  zIndexOptions: 1300,
};

// for example purposes
export const categories = [
  { title: "Hair&styling", value: "Hair&styling" },
  { title: "Nails", value: "Nails" },
  { title: "Eyebrows&eyelashes", value: "Eyebrows&eyelashes" },
  { title: "Massage", value: "Massage" },
  { title: "Barbering", value: "Barbering" },
  { title: "Hair removal", value: "Hair removal" },
  { title: "Skincare&injectables", value: "Skincare&injectables" },
  { title: "Body", value: "Body" },
  { title: "Tattoo", value: "Tattoo" },
  { title: "Piercing", value: "Piercing" },
  { title: "Makeup", value: "Makeup" },
  { title: "Medical", value: "Medical" },
  { title: "Fitness", value: "Fitness" },
  { title: "Other", value: "Other" },
];

// for example purposes, will be replaced with server api call
export function fakeApiCallForGettingCategories(): Promise<IValues[]> {
  return new Promise<IValues[]>((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
}
