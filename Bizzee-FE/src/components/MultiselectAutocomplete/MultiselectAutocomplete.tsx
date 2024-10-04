import {
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { MultiselectAutocompleteInputProps } from "./types";
import { styles } from "./MultiselectAutocomplete.styled";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { initialData } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { colors } from "config/styles/themeColors";

export const MultiselectAutocomplete: React.FC<
  MultiselectAutocompleteInputProps
> = ({ id, label, placeholder, name, options = [], formik }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState<initialData | null>(
    null,
  );

  useEffect(() => {
    if (selectedValues) {
      const selectedValuesData = selectedValues.value;
      formik.setFieldValue(name, selectedValuesData);
    }
  }, [selectedValues]);

  useEffect(() => {
    if (formik.values[name] && !selectedValues) {
      const initialSelectedValue: initialData | string =
        options.find((option) => option.title === formik.values[name]) || "";
      setSelectedValues(initialSelectedValue as initialData);
    }
  }, [formik.values[name]]);

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string,
  ): void => {
    setInputValue(value);
  };

  const handleRemoveSelectChange = (
    value: initialData | null | undefined,
  ): void => {
    if (value) {
      setSelectedValues(null);
      setInputValue("");
    }
  };

  const handleAddSelectChange = (
    event: React.SyntheticEvent,
    value: initialData | null | undefined,
  ): void => {
    if (value) {
      if (selectedValues && selectedValues.value === value.value) {
        setSelectedValues(null);
        setInputValue("");
      } else {
        setSelectedValues(value);
        setInputValue(value.title);
      }
    }
  };

  return (
    <Box sx={styles.autocompletWrapper}>
      <InputLabel
        sx={{
          ...styles.autocompleteLabel,
          color:
            formik.touched[name] && Boolean(formik.errors[name])
              ? colors.error.main
              : colors.text.primary,
        }}
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <FormControl fullWidth>
        <Autocomplete
          id={id}
          options={
            inputValue
              ? options.filter((option) =>
                  option.title
                    .toLowerCase()
                    .startsWith(inputValue.toLowerCase()),
                )
              : options
          }
          value={selectedValues}
          onChange={handleAddSelectChange}
          getOptionLabel={(option) => option.title}
          sx={styles.autocompleteInput}
          onInputChange={handleInputChange}
          popupIcon={<ArrowDownIcon color={colors.text.primary} />}
          clearIcon={null}
          disablePortal
          fullWidth
          autoComplete={false}
          ListboxProps={{ sx: { ...styles.customScrollbar } }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={styles.textInput}
              name={name}
              placeholder={placeholder}
              InputLabelProps={{ shrink: true }}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={
                formik.touched[name] &&
                !inputValue &&
                !selectedValues &&
                !inputValue
                  ? `Please select a ${name}`
                  : ""
              }
              inputProps={{
                ...params.inputProps,
                value: inputValue,
              }}
            />
          )}
          renderOption={(props, option) => {
            const inputValueLower = inputValue.toLowerCase();
            const startsWithRegExp = new RegExp(`^${inputValueLower}`);

            if (
              inputValue &&
              !startsWithRegExp.test(option.title.toLowerCase())
            ) {
              return null;
            }

            return selectedValues && selectedValues.value === option.value ? (
              <Box
                {...props}
                sx={styles.autocompleteOptionItem}
                component="li"
                key={option.value}
                onClick={() => handleRemoveSelectChange(option)}
              >
                <Typography
                  sx={{
                    ...styles.autocompleteOptionText,
                    ...(selectedValues.value === option.value &&
                      styles.autocompleteOptionTextSelect),
                  }}
                >
                  {option.title}
                </Typography>
                <Box sx={styles.checkIconWrapper}>
                  {selectedValues.value === option.value && <CheckIcon />}
                </Box>
              </Box>
            ) : (
              <Box
                {...props}
                sx={styles.autocompleteOptionItem}
                component="li"
                key={option.value}
              >
                <Typography sx={styles.autocompleteOptionText}>
                  {option.title}
                </Typography>
              </Box>
            );
          }}
          PaperComponent={({ children }) => (
            <Paper elevation={4} sx={styles.paperWrapper}>
              {children}
            </Paper>
          )}
        />
      </FormControl>
    </Box>
  );
};
