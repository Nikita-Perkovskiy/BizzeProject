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
import { ReactComponent as ChevronDown } from "assets/svg/icon_chevron.svg";
import { ReactComponent as ClearIcon } from "assets/svg/icon_cancel.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { colors } from "config/styles/themeColors";
import { styles } from "components/AsyncSmartSearch/AsyncSmartSearch.styled";
import { defaultProps } from "./constants";
import { TimeInputProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useNotificationToast } from "hooks/useNotificationToast";

export const TimeSmartSearch: FC<TimeInputProps> = memo(
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
    isEditPage,
  }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly string[]>([]);
    const loading = open && options.length === 0;
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<string | null>(null);

    useEffect(() => {
      if (initialValue) {
        setSelectedValues(initialValue);
      }
    }, [initialValue]);

    useEffect(() => {
      handleSelect((selectedValues && selectedValues) || "");
    }, [selectedValues]);

    useEffect(() => {
      let active = true;

      if (!loading) {
        return;
      }

      (async () => {
        try {
          const result = await getOptionsFunc();

          let optionsData: string[] = [];
          if (
            isEditPage &&
            Array.isArray(result) &&
            typeof result[0] === "object" &&
            "timeSlots" in result[0]
          ) {
            optionsData = result[0].timeSlots;
          } else if (Array.isArray(result) && typeof result[0] === "string") {
            optionsData = result as string[];
          }

          if (active) {
            setOptions([...optionsData]);
          }
        } catch (error) {
          setOptions([]);
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
      if (selectedValues && inputValue !== selectedValues) {
        setSelectedValues(null);
      }
    }, [inputValue]);

    const handleInputChange = (event: SyntheticEvent, value: string): void => {
      setInputValue(value);
    };

    const handleAddSelectChange = (
      event: SyntheticEvent,
      value: string | null | undefined,
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
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={handleAddSelectChange}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        defaultValue={initialValue}
        value={selectedValues as string | undefined}
        forcePopupIcon={!isError && !inputValue}
        popupIcon={<ChevronDown color={colors.text.primary} />}
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
                onKeyDown: (e) => {
                  e.preventDefault();
                },
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
          const matches = match(option, inputValue, {
            insideWords: true,
          });
          const parts = parse(option, matches);

          return (
            <Box {...props} component="li" key={option} sx={styles.option}>
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
              {selectedValues === option && (
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
