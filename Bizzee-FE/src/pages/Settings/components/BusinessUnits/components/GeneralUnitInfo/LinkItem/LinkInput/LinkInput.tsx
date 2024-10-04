import { styles } from "./LinkInput.styled";
import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { ILinkInputProps } from "./LinkInputTypes";
import { ReactComponent as ClearIcon } from "assets/svg/close_icon.svg";
import { ReactComponent as ErrorIcon } from "assets/svg/alert-circle.svg";
import { keyValues } from "../../AddServicesInput/constants";
import { URL_REGEX } from "../../constants";

export const LinkInput: React.FC<ILinkInputProps> = ({
  formik,
  name,
  placeholder,
  sx,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);

  const validateAndSetUrlValidity = (value: string, prevIsValid: boolean) => {
    const isValidValue = URL_REGEX.test(value);
    return isValidValue !== prevIsValid ? isValidValue : prevIsValid;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsValidUrl((prevIsValid) =>
      validateAndSetUrlValidity(newValue, prevIsValid),
    );
  };

  const handleClear = (): void => {
    setInputValue("");
    setIsValidUrl(true);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === keyValues.enter && inputValue.trim()) {
      setIsValidUrl((prevIsValid) =>
        validateAndSetUrlValidity(inputValue, prevIsValid),
      );

      if (isValidUrl) {
        formik.setFieldValue(name, inputValue);
      }
    }
  };

  return (
    <TextField
      variant="standard"
      sx={{
        ...styles.linkInput,
        ...(isValidUrl ? null : { top: "-16px" }),
        ...sx,
      }}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      error={!isValidUrl}
      helperText={
        !isValidUrl && "Incorrect format. Please check the entered link"
      }
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment
            position="end"
            sx={styles.icon}
            disablePointerEvents={!inputValue}
          >
            {inputValue && isValidUrl && <ClearIcon onClick={handleClear} />}
            {inputValue && !isValidUrl && <ErrorIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};
