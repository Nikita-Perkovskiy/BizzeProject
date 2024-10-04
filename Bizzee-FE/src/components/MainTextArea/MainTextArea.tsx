import React, { FC, memo, useEffect, useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { IMainTextAreaProps } from "./types";
import { styles } from "./MainTextArea.styled";
import { defaultProps } from "./constants";

export const MainTextArea: FC<IMainTextAreaProps> = memo(
  ({
    maxCharacters = defaultProps.maxCharacters,
    name,
    id,
    placeholder,
    label,
    handleBlur,
    sx,
    height,
    isError,
    helperText,
    labelGapMargin = defaultProps.labelGapMargin,
    initialValue,
    handleChange,
  }) => {
    const textAreaStyles = {
      ...styles.counterFocusedStyles,
      ...sx,
    };
    const [inputValue, setInputValue] = useState("");
    const [charactersCounter, setCharactersCounter] = useState<number>(0);

    useEffect(() => {
      if (initialValue) {
        handleInputChange(initialValue);
      }
    }, [initialValue]);

    const handleInputChange = (value: string) => {
      if (value.length < maxCharacters || value.length !== charactersCounter) {
        setCharactersCounter(value.length);
      }
      setInputValue(value);
      handleChange && handleChange(value);
    };

    return (
      <FormControl fullWidth sx={textAreaStyles}>
        <TextField
          id={id}
          name={name}
          variant="standard"
          multiline
          placeholder={placeholder}
          label={label}
          value={inputValue}
          onBlur={handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event.target.value)
          }
          sx={{
            "& .MuiInputBase-formControl.MuiInputBase-multiline": {
              mt: labelGapMargin,
              padding: "10px 15px 35px",
              height: height || "auto",
              "&.Mui-focused": {
                p: "9px 14px 34px",
              },
              "&.Mui-error": {
                p: "9px 14px 34px",
              },
            },
          }}
          error={isError}
          helperText={helperText}
          InputProps={{
            sx: styles.textarea,
            disableUnderline: true,
            endAdornment: (
              <InputAdornment
                sx={styles.counterStyles}
                position="end"
                disablePointerEvents
              >
                {charactersCounter}/{maxCharacters}
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
            sx: styles.label,
          }}
          inputProps={{
            maxLength: maxCharacters,
            sx: height && styles.inputTextarea,
          }}
        />
      </FormControl>
    );
  },
);
