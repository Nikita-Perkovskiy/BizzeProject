import React, { FC, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { IAuthInputProps } from "./types";
import { ReactComponent as ErrorIcon } from "assets/svg/alert-circle.svg";
import { ShowPasswordBtn } from "../../../AuthPage/components/ShowPasswordBtn";
import {
  EMAIL_TYPE,
  NAME_TYPE,
  TEXT_TYPE,
  TRIMED_VALUE,
} from "pages/Layout/constants";

export const AuthInput: FC<IAuthInputProps> = ({
  formik,
  name,
  id = name,
  placeholder,
  label,
  type = TEXT_TYPE,
  sx,
  startComponent,
  endIcon,
  password = false,
  disabled,
  maxLength,
  error,
  onKeyPress,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const isError = formik.touched[name] && Boolean(formik.errors[name]);

  const defineCurrentEndIcon = (): React.ReactElement | null => {
    if (!password && !endIcon && !isError) {
      return null;
    }

    return (
      <InputAdornment
        position="end"
        disablePointerEvents={isError && !password}
      >
        {isError && !password && <ErrorIcon />}
        {password && (
          <ShowPasswordBtn
            onShow={setIsShown}
            isShown={!isShown}
            disabled={!formik.values[name].length}
          />
        )}
        {!isError && endIcon}
      </InputAdornment>
    );
  };

  const passwordCurrentType = isShown ? TEXT_TYPE : type;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const specialFields: { [key: string]: (value: string) => string } = {
      [EMAIL_TYPE]: (value: string) => value.trim().toLowerCase(),
      [NAME_TYPE]: (value: string) => value.replace(TRIMED_VALUE, " "),
    };

    const specialHandler = specialFields[name];

    specialHandler
      ? formik.setFieldValue(name, specialHandler(value))
      : formik.handleChange(event);
  };

  return (
    <TextField
      variant="standard"
      type={password ? passwordCurrentType : type}
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={handleChange}
      onBlur={formik.handleBlur}
      error={isError}
      helperText={(formik.touched[name] && formik.errors[name]) || error}
      InputProps={{
        disableUnderline: true,
        startAdornment: startComponent && (
          <InputAdornment position="start">{startComponent}</InputAdornment>
        ),
        endAdornment: defineCurrentEndIcon(),
      }}
      InputLabelProps={{ shrink: true }}
      sx={sx}
      disabled={disabled}
      inputProps={{ maxLength, onKeyPress }}
    />
  );
};
