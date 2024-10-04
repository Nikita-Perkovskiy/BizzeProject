import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AutocompleteInputProps } from "./TagsInputTypes";
import { v4 as uuidv4 } from "uuid";
import { styles } from "./TagsInput.styled";
import { ReactComponent as CloseIcon } from "assets/svg/close_icon.svg";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { colors } from "config/styles/themeColors";

export const TagsInput: React.FC<AutocompleteInputProps> = ({
  id,
  label,
  placeholder,
  name,
  options = [],
  formik,
}) => {
  const [selectedValues, setSelectedValues] = useState<Set<string>>(
    new Set<string>(),
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [showArrowIcon, setShowArrowIcon] = useState<boolean>(true);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    const selectedValuesArray = Array.isArray(selectedValues)
      ? selectedValues
      : Array.from(selectedValues);

    const selectedValuesData = selectedValuesArray.map((option) => {
      const matchingOption = options.find((item) => item.tag === option);

      return { id: matchingOption ? matchingOption.id : null, tag: option };
    });

    formik.setFieldValue(name, selectedValuesData);
  }, [selectedValues, options]);

  const handleAddSelectChange = (
    event: React.SyntheticEvent,
    value: string | null | undefined,
  ): void => {
    if (value) {
      setSelectedValues((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.add(value);
        return updatedSet;
      });
      setShowArrowIcon(true);
    }
  };

  const handleRemoveSelectChange = (value: string): void => {
    if (value) {
      setSelectedValues((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.delete(value);
        return updatedSet;
      });
    }
  };

  const handleAddButtonClick = (): void => {
    if (inputValue) {
      setSelectedValues((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.add(inputValue);
        return updatedSet;
      });

      setShowArrowIcon(true);
      setInputValue("");
    }

    if (inputRef) {
      inputRef.focus();
    }
  };

  return (
    <Box sx={styles.autocompleteWrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <InputLabel sx={styles.autocompleteLabel} htmlFor={id}>
            {label}
          </InputLabel>
          <FormControl fullWidth>
            <Autocomplete
              id={id}
              options={options.map((option) => option.tag)}
              freeSolo
              onChange={handleAddSelectChange}
              getOptionLabel={() => ""}
              sx={styles.autocompleteInput}
              fullWidth
              autoComplete={false}
              ListboxProps={{ sx: { ...styles.customScrollbar } }}
              renderTags={() => null}
              inputValue={inputValue}
              onInputChange={(event, newValue) => {
                setInputValue(newValue);
                setShowArrowIcon(false);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={styles.textInput}
                  name={name}
                  variant="standard"
                  placeholder={placeholder}
                  inputRef={(input) => setInputRef(input)}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    ...params.InputProps,
                    disableUnderline: true,
                    endAdornment: (
                      <>
                        {showArrowIcon && (
                          <ArrowDownIcon color={colors.text.primary} />
                        )}
                      </>
                    ),
                  }}
                />
              )}
              renderOption={(props, option) => (
                <Box
                  {...props}
                  sx={styles.autocompleteOptionItem}
                  component="li"
                  key={uuidv4()}
                >
                  <Typography
                    sx={{
                      ...styles.autocompleteOptionText,
                      ...(selectedValues.has(option as string) &&
                        styles.autocompleteOptionTextSelect),
                    }}
                  >
                    {option}
                  </Typography>
                  <Box sx={styles.checkIconWrapper}>
                    {selectedValues.has(option as string) && <CheckIcon />}
                  </Box>
                </Box>
              )}
              PaperComponent={({ children }) => (
                <Paper elevation={4} sx={styles.paperWrapper}>
                  {children}
                </Paper>
              )}
            />
          </FormControl>
          <Box sx={styles.addButtonWrapper}>
            <Button
              type="button"
              className="primaryBlack"
              sx={styles.submitBtn}
              disabled={!inputValue}
              onClick={handleAddButtonClick}
            >
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box
            sx={
              selectedValues.size
                ? styles.autocompleteOptionBlockWrapper
                : styles.tagsInvisible
            }
          >
            {!!selectedValues.size &&
              [...selectedValues].map((value) => (
                <Box key={uuidv4()}>
                  <Chip
                    deleteIcon={<CloseIcon />}
                    label={value}
                    onDelete={() => handleRemoveSelectChange(value as string)}
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
