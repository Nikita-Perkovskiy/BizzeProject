import {
  FormControl,
  TextField,
  Box,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./TextAreaInput.styled";
import { ITextAreaInput, TextAreaStyles } from "./types";

export const TextAreaInput: React.FC<ITextAreaInput> = ({
  maxCharacters = 100,
  name,
  id,
  placeholder,
  label,
  formik,
  customStyles,
  isCleanCounter,
}) => {
  const [charactersCounter, setCharactersCounter] = useState<
    number | undefined
  >(0);
  const sx = customStyles ? (customStyles as TextAreaStyles) : styles;
  const isError =
    formik.touched[name as keyof typeof formik.values] &&
    Boolean(formik.errors[name as keyof typeof formik.values]);

  useEffect(() => {
    setCharactersCounter(0);
  }, [isCleanCounter]);

  const handleCombinedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(event);
    formik.handleChange(event);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (
      newText.length < maxCharacters ||
      newText.length !== charactersCounter
    ) {
      setCharactersCounter(newText.length);
    }
  };

  return (
    <Box>
      <InputLabel sx={sx.textAreaLabel} htmlFor={id}>
        {label}
      </InputLabel>
      <FormControl fullWidth>
        <TextField
          id={id}
          name={name}
          multiline
          placeholder={placeholder}
          value={formik.values[name as keyof typeof formik.values]}
          onBlur={formik.handleBlur}
          onChange={handleCombinedChange}
          sx={sx.textAreaInput}
          error={isError}
          helperText={
            formik.touched[name as keyof typeof formik.values] &&
            formik.errors[name as keyof typeof formik.values]
          }
          InputProps={{
            endAdornment: (
              <InputAdornment sx={sx.counterStyles} position="end">
                {charactersCounter}/{maxCharacters}
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: maxCharacters,
            placeholder: placeholder,
          }}
        />
      </FormControl>
    </Box>
  );
};
