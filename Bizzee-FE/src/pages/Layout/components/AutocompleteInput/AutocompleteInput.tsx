import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Paper,
  FormHelperText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AutocompleteInputProps } from "./types";
import { styles } from "./AutocompleteInput.styled";
import { ReactComponent as CloseIcon } from "assets/svg/close_icon_option.svg";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { initialData } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { FILTER_START, MAX_OPTIONS, OPTIONS } from "./constant";
import { colors } from "config/styles/themeColors";

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  id,
  label,
  placeholder,
  name,
  options = OPTIONS,
  formik,
  userOptions,
  maxOptions = MAX_OPTIONS,
  cleanOptions,
}) => {
  useEffect(() => {
    if (userOptions && userOptions.length > 0) {
      userOptions.map((el) =>
        setSelectedValues((prevSelectedValues) => {
          const updatedSet = new Set(prevSelectedValues);
          updatedSet.add(el);
          return updatedSet;
        }),
      );
    }
    if (userOptions && !!userOptions.length) {
      setInputValue(userOptions.at(-1)?.title as string);
    }
  }, [userOptions]);

  const [selectedValues, setSelectedValues] = useState<Set<initialData>>(
    new Set<initialData>(),
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const isError = formik.touched[name] && Boolean(formik.errors[name]);

  useEffect(() => {
    if ((formik.values[name] as string[]).length === 0) {
      setSelectedValues(new Set<initialData>());
    }
  }, [cleanOptions]);

  useEffect(() => {
    if (maxOptions ? selectedValues.size >= maxOptions : true) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedValues]);

  useEffect(() => {
    const selectedValuesData = Array.from(selectedValues).map(
      (option) => option.value,
    );
    formik.setFieldValue(name, selectedValuesData);
  }, [selectedValues]);

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string,
  ): void => {
    setInputValue(value);
  };

  const handleAddSelectChange = (
    event: React.SyntheticEvent,
    value: initialData | null | undefined,
  ): void => {
    if (value && (maxOptions ? selectedValues.size < maxOptions : true)) {
      setSelectedValues((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.add(value);
        return updatedSet;
      });
      setInputValue("");
    }
  };

  const handleRemoveSelectChange = (
    value: initialData | null | undefined,
  ): void => {
    if (value) {
      setSelectedValues((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.delete(value);
        return updatedSet;
      });
    }
  };

  return (
    <Box sx={styles.autocompletWrapper}>
      <InputLabel
        sx={{
          ...styles.autocompleteLabel,
          ...(isError && styles.autocompleteLabeError),
        }}
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <FormControl fullWidth>
        <Autocomplete
          id={id}
          options={options}
          onChange={handleAddSelectChange}
          getOptionLabel={(option) => option.title}
          disabled={isDisabled}
          disablePortal
          sx={styles.autocompleteInput}
          onInputChange={handleInputChange}
          popupIcon={
            !inputValue.length ? (
              <ArrowDownIcon color={colors.text.secondary} />
            ) : null
          }
          filterOptions={(options, state) => {
            const inputValue = state.inputValue;
            if (inputValue.length > FILTER_START) {
              return options.filter((item) =>
                String(item.value)
                  .toLowerCase()
                  .includes(state.inputValue.toLowerCase()),
              );
            }
            return options;
          }}
          clearIcon={null}
          fullWidth
          autoComplete={false}
          ListboxProps={{ sx: { ...styles.customScrollbar } }}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                sx={styles.textInput}
                name={name}
                error={isError}
                placeholder={placeholder}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  ...params.inputProps,
                  value: inputValue,
                  placeholder: placeholder,
                }}
              />
              <FormHelperText error={isError}>
                {isError ? formik.errors[name] : null}
              </FormHelperText>
            </>
          )}
          renderOption={(props, option) => (
            <Box
              {...props}
              sx={styles.autocompleteOptionItem}
              component="li"
              key={option.title}
            >
              <Typography
                sx={{
                  ...styles.autocompleteOptionText,
                  ...(selectedValues.has(option) &&
                    styles.autocompleteOptionTextSelect),
                }}
              >
                {option.title}
              </Typography>
              <Box sx={styles.checkIconWrapper}>
                {selectedValues.has(option) && <CheckIcon />}
              </Box>
            </Box>
          )}
          PaperComponent={({ children }) => (
            <Paper elevation={4} sx={styles.paperWrapper}>
              {children}
            </Paper>
          )}
        />
        <Box sx={styles.autocompleteOptionBlockWrapper}>
          {!!selectedValues.size &&
            [...selectedValues].map((e) => (
              <Box key={e.title}>
                <Chip
                  deleteIcon={<CloseIcon />}
                  label={e.title}
                  onDelete={() => handleRemoveSelectChange(e)}
                  sx={styles.autocompleteChipItem}
                />
              </Box>
            ))}
        </Box>
      </FormControl>
    </Box>
  );
};
