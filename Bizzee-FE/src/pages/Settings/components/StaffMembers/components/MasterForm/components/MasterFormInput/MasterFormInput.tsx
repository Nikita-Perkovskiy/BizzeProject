import React, { FC, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { IMasterFormInputProps } from "./types";
import { ReactComponent as ErrorIcon } from "assets/svg/alert-circle.svg";
import { ShowPasswordBtn } from "pages/AuthPage/components/ShowPasswordBtn";

export const MasterFormInput: FC<IMasterFormInputProps> = ({
  formik,
  name,
  id = name,
  placeholder,
  label,
  type = "text",
  sx,
  startComponent,
  endIcon,
  password = false,
  disabled,
  maxLength,
  error,
  onKeyDown,
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
            isShown={isShown}
            disabled={!formik.values[name]}
          />
        )}
        {!isError && endIcon}
      </InputAdornment>
    );
  };

  const passwordCurrentType = isShown ? "text" : type;

  return (
    <TextField
      variant="standard"
      type={password ? passwordCurrentType : type}
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={isError}
      helperText={
        (formik.touched[name] && (formik.errors[name] as string)) || error
      }
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
      inputProps={{ maxLength, onKeyDown }}
    />
  );
};
