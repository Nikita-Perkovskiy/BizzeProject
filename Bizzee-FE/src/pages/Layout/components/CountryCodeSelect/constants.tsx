import React from "react";
import { ReactComponent as PolishFlag } from "assets/svg/twemoji_flag-poland.svg";
import { ICodeOptions } from "./types";
import { DEFAULT_COUNTRY_CODE } from "config/constants";

export const codeOptions: ICodeOptions[] = [
  { name: "PL", flag: <PolishFlag />, code: DEFAULT_COUNTRY_CODE },
];
