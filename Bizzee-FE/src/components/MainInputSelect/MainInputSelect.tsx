import React, { FC } from "react";
import { FormControl, Select } from "@mui/material";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { styles } from "./MainInputSelect.styled";
import { IMainInputSelectProps } from "./constants";

export const MainInputSelect: FC<IMainInputSelectProps> = ({
  children,
  onChange,
  value,
  sx,
  wrapperStyle,
  name,
  disabled,
}) => {
  return (
    <FormControl sx={{ margin: 0, ...wrapperStyle }}>
      <Select
        sx={{ ...styles.select, ...sx }}
        variant="standard"
        value={value}
        onChange={onChange}
        IconComponent={(props) => <ArrowDownIcon className={props.className} />}
        name={name}
        disabled={disabled}
      >
        {children}
      </Select>
    </FormControl>
  );
};
