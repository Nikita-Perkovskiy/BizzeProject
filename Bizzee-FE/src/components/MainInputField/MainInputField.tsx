import React, { FC, memo, useEffect, useState } from "react";
import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { IMainInputFieldProps } from "./types";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { styled } from "./MainInputField.styled";
import { validateInput } from "utils/validateInput";

export const MainInputField: FC<IMainInputFieldProps> = memo(
  ({
    name,
    id,
    placeholder,
    label,
    sx,
    helperText,
    initialValue,
    handleChange,
  }) => {
    const [inputValue, setInputValue] = useState<string>(initialValue || "");
    const [error, setError] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [hasTyped, setHasTyped] = useState<boolean>(false);

    useEffect(() => {
      if (initialValue) {
        setInputValue(initialValue);
        const { isValid, errorText } = validateInput(
          initialValue,
          "Please enter the reason of cancellation",
          "Description must contain only Latin letters, Polish letters, numbers, and special characters (.'/- Gap)",
        );
        setError(errorText);
        if (handleChange) {
          handleChange(initialValue, isValid);
        }
      }
    }, [initialValue]);

    useEffect(() => {
      if (hasTyped) {
        const { isValid, errorText } = validateInput(
          inputValue,
          "Please enter the reason of cancellation",
          "Description must contain only Latin letters, Polish letters, numbers, and special characters (.'/- Gap)",
        );
        setError(errorText);
        if (handleChange) {
          handleChange(inputValue, isValid);
        }
      }
    }, [inputValue, hasTyped]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      setHasTyped(true);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    return (
      <FormControl fullWidth sx={{ ...sx }}>
        <TextField
          id={id}
          name={name}
          variant="standard"
          placeholder={placeholder}
          label={label}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          sx={{
            ...styled.textField,
            "& .MuiFormHelperText-root.Mui-error": {
              position: "absolute",
              top: "70px",
            },
          }}
          error={Boolean(error) && (isFocused || hasTyped)}
          helperText={!isFocused || hasTyped ? error : helperText}
          InputLabelProps={{
            shrink: true,
            sx: styled.label,
          }}
          InputProps={{
            endAdornment: error ? (
              <InputAdornment position="end">
                <IconButton edge="end" disabled>
                  <ErrorOutlineIcon color="error" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />
      </FormControl>
    );
  },
);
