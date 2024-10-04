import { createFilterOptions } from "@mui/material";
import { IValues } from "./types";

export const defaultProps = {
  zIndexOptions: 1300,
  maxTags: 5,
};

export const filter = createFilterOptions<IValues>();
