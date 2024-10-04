import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styles } from "./MasterServiceAutocomplete.styled";
import { ReactComponent as CloseIcon } from "assets/svg/close_icon.svg";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { initialData } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { colors } from "config/styles/themeColors";
import parse from "autosuggest-highlight/parse";
import { IMasterServiceAutocomplete } from "./types";

export const MasterServiceAutocomplete: React.FC<
  IMasterServiceAutocomplete
> = ({ label, placeholder, options = [], handleChange }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState<Set<initialData>>(
    new Set<initialData>(),
  );

  useEffect(() => {
    const selectedValuesData = Array.from(selectedValues).map(
      (option) => option,
    );
    handleChange(selectedValuesData);
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
    if (value) {
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
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <InputLabel sx={styles.autocompleteLabel}>{label}</InputLabel>
          <FormControl fullWidth>
            <Autocomplete
              options={
                inputValue
                  ? options.filter((option) =>
                      option.title
                        .toLowerCase()
                        .startsWith(inputValue.toLowerCase()),
                    )
                  : options
              }
              onChange={handleAddSelectChange}
              getOptionLabel={(option) => option.title}
              sx={styles.autocompleteInput}
              onInputChange={handleInputChange}
              popupIcon={<ArrowDownIcon color={colors.text.primary} />}
              clearIcon={null}
              fullWidth
              autoComplete={false}
              ListboxProps={{ sx: { ...styles.customScrollbar } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={styles.textInput}
                  placeholder={placeholder}
                  InputLabelProps={{ shrink: true }}
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
                const matches =
                  option.title &&
                  startsWithRegExp.test(option.title.toLowerCase())
                    ? parse(option.title, [[0, inputValueLower.length]])
                    : [];
                const parts = matches.map(
                  (
                    match: { text: string; highlight: boolean },
                    index: number,
                  ) => ({
                    text: match.text,
                    highlight: match.highlight,
                    key: index,
                  }),
                );

                return (
                  <Box
                    {...props}
                    sx={styles.autocompleteOptionItem}
                    component="li"
                    key={option.value}
                  >
                    <Typography
                      sx={{
                        ...styles.autocompleteOptionText,
                        ...(selectedValues.has(option) &&
                          styles.autocompleteOptionTextSelect),
                      }}
                    >
                      {parts.map(
                        (part: { text: string; highlight: boolean }) => {
                          return (
                            <Typography
                              component="span"
                              key={part.text}
                              style={{
                                fontWeight: part.highlight ? "bold" : "inherit",
                              }}
                            >
                              {part.text}
                            </Typography>
                          );
                        },
                      )}
                    </Typography>
                    <Box sx={styles.checkIconWrapper}>
                      {selectedValues.has(option) && <CheckIcon />}
                    </Box>
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
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={
              selectedValues.size
                ? styles.autocompleteOptionBlockWrapper
                : styles.selectedInvisible
            }
          >
            {!!selectedValues.size &&
              [...selectedValues].map((option) => (
                <Box key={option.title}>
                  <Chip
                    deleteIcon={<CloseIcon />}
                    label={option.title}
                    onDelete={() => handleRemoveSelectChange(option)}
                    sx={styles.autocompleteChipItem}
                  />
                </Box>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
