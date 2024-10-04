import React, { FC, SyntheticEvent, memo, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as ErrorIcon } from "assets/svg/alert-circle.svg";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as ClearIcon } from "assets/svg/icon_cancel.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { colors } from "config/styles/themeColors";
import { styles } from "./AsyncSmartSearch.styled";
import { defaultProps } from "./constants";
import { AutocompleteInputProps, IValues } from "./types";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { ALL_VALUES } from "pages/Settings/components/Appointments/constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { v4 as uuidv4 } from "uuid";

export const AsyncSmartSearch: FC<AutocompleteInputProps> = memo(
  ({
    id,
    label,
    placeholder,
    name,
    zIndexOptions = defaultProps.zIndexOptions,
    isError,
    sx,
    getOptionsFunc,
    helperText,
    handleSelect,
    initialValue,
    showAllByDefault = false,
  }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly IValues[]>([]);
    const loading = open && options.length === 0;
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<IValues | null>(null);

    useEffect(() => {
      if (initialValue) {
        setSelectedValues(initialValue);
      } else if (showAllByDefault) {
        setSelectedValues({ title: "All", value: ALL_VALUES });
      }
    }, [initialValue, showAllByDefault]);

    useEffect(() => {
      handleSelect((selectedValues && selectedValues.value) || "");
    }, [selectedValues]);

    useEffect(() => {
      let active = true;

      if (!loading) {
        return;
      }

      (async () => {
        try {
          const result = await getOptionsFunc();

          if (active) {
            setOptions(
              showAllByDefault
                ? [{ title: "All", value: ALL_VALUES }, ...result]
                : [...result],
            );
          }
        } catch (error) {
          setOptions(
            showAllByDefault ? [{ title: "All", value: ALL_VALUES }] : [],
          );
          useNotificationToast({ type: "error" });
        }
      })();

      return () => {
        active = false;
      };
    }, [loading]);

    useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);

    useEffect(() => {
      if (selectedValues && inputValue !== selectedValues.title) {
        setSelectedValues(null);
      }
    }, [inputValue]);

    const handleInputChange = (event: SyntheticEvent, value: string): void => {
      setInputValue(value);
    };

    const handleAddSelectChange = (
      event: SyntheticEvent,
      value: IValues | null | undefined,
    ): void => {
      if (value) {
        setSelectedValues(value);
      }
    };

    return (
      <Autocomplete
        disableClearable
        sx={{
          ...styles.autocompleteInput,
          "& .MuiAutocomplete-endAdornment": {
            right: isError ? "40px" : "15px",
          },
          ...sx,
        }}
        id={id}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
        loadingText={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Loading...</Typography>
            <CircularProgress color="inherit" size={20} />
          </Box>
        }
        options={options}
        getOptionLabel={(option) => option.title}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        onChange={handleAddSelectChange}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        defaultValue={initialValue}
        value={selectedValues as IValues | undefined}
        forcePopupIcon={showAllByDefault ? true : !isError && !inputValue}
        popupIcon={<Chevron color={colors.text.primary} />}
        clearIcon={
          <ClearIcon
            stroke={isError ? colors.error.main : colors.text.primary}
          />
        }
        fullWidth
        autoComplete={false}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="standard"
              name={name}
              label={label}
              placeholder={placeholder}
              error={isError}
              helperText={helperText}
              sx={styles.autocompleteTextField}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                endAdornment: (
                  <React.Fragment>
                    {params.InputProps.endAdornment}
                    {isError && (
                      <InputAdornment
                        position="end"
                        disablePointerEvents={isError}
                        sx={styles.errorIcon}
                      >
                        <ErrorIcon />
                      </InputAdornment>
                    )}
                  </React.Fragment>
                ),
              }}
              InputLabelProps={{ shrink: true }}
            />
          );
        }}
        renderOption={(props, option) => {
          if (
            !selectedValues &&
            inputValue &&
            !option.title.toLowerCase().startsWith(inputValue.toLowerCase())
          ) {
            return null;
          }

          const matches = match(option.title, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.title, matches);

          return (
            <Box
              {...props}
              component="li"
              key={option.title}
              sx={styles.option}
            >
              {parts.map((part) => (
                <Typography
                  key={uuidv4()}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </Typography>
              ))}
              {selectedValues?.title === option.title && (
                <Box sx={{ ml: "auto" }}>
                  <CheckIcon />
                </Box>
              )}
            </Box>
          );
        }}
        PaperComponent={({ children }) => (
          <Paper elevation={4}>{children}</Paper>
        )}
        PopperComponent={(props) => (
          <Popper {...props} sx={{ zIndex: `${zIndexOptions} !important` }} />
        )}
      />
    );
  },
);
