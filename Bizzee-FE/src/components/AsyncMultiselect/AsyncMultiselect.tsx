import React, { FC, SyntheticEvent, memo, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  FilterOptionsState,
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
import { styles } from "./AsyncMultiselect.styled";
import { defaultProps, filter } from "./constants";
import { AutocompleteInputProps, IValues } from "./types";
import { TAGS_REGEX } from "config/constants";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { v4 as uuidv4 } from "uuid";
import { useNotificationToast } from "hooks/useNotificationToast";

export const AsyncMultiselect: FC<AutocompleteInputProps> = memo(
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
    selectedValues,
    setSelectedValues,
    maxTags = defaultProps.maxTags,
    hasError,
    setHasError,
  }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly IValues[]>([]);
    const loading = open && !options.length;
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
      let active = true;

      if (!loading) {
        return;
      }

      (async () => {
        try {
          const result = await getOptionsFunc();

          if (active) {
            setOptions([...result]);
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

    const handleInputChange = (event: SyntheticEvent, value: string): void => {
      setInputValue(value);

      setHasError && setHasError(!TAGS_REGEX.test(value));
    };

    const handleAddSelectChange = (
      event: SyntheticEvent,
      newValue: IValues | null,
    ): void => {
      const isLimit = selectedValues.length >= maxTags;
      const isSelected =
        newValue &&
        selectedValues.some(
          (item) =>
            newValue.inputValue === item.tag || newValue.tag === item.tag,
        );

      if (isLimit || isSelected || hasError) {
        return;
      }

      newValue &&
        setSelectedValues((prevState) => {
          return [
            ...prevState,
            newValue.inputValue
              ? {
                  tag: String(newValue.inputValue),
                  id: null,
                }
              : newValue,
          ];
        });
    };

    const handleFilterOptions = (
      options: IValues[],
      params: FilterOptionsState<IValues>,
    ) => {
      const filtered = filter(options, params);
      const { inputValue } = params;
      const isExisting = options.some((option) => inputValue === option.tag);

      if (inputValue && !isExisting) {
        filtered.push({
          tag: `Add "${inputValue}"`,
          inputValue,
        });
      }

      return filtered;
    };

    function handleRenderOption<T>(props: T, option: IValues) {
      const isSelected = selectedValues.some(
        (item) => option.inputValue === item.tag || option.tag === item.tag,
      );

      const matches = match(option.tag, inputValue, {
        insideWords: true,
      });
      const parts = parse(option.tag, matches);

      return (
        <Box {...props} component="li" key={option.tag} sx={styles.option}>
          {parts.map((part) => (
            <Typography
              key={uuidv4()}
              sx={{
                fontWeight: part.highlight ? 700 : 400,
                ...(isSelected && {
                  fontWeight: 700,
                }),
              }}
            >
              {part.text}
            </Typography>
          ))}
          {isSelected && (
            <Box sx={{ ml: "auto" }}>
              <CheckIcon />
            </Box>
          )}
        </Box>
      );
    }

    return (
      <>
        <Autocomplete
          value={null}
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
            setInputValue("");
          }}
          loading={loading}
          loadingText={
            <Box sx={styles.loadingText}>
              <Typography>Loading...</Typography>
              <CircularProgress color="inherit" size={20} />
            </Box>
          }
          options={options}
          getOptionLabel={(option) => option.inputValue || option.tag}
          isOptionEqualToValue={() => true}
          filterOptions={handleFilterOptions}
          onChange={handleAddSelectChange}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          forcePopupIcon={!isError && !inputValue}
          popupIcon={<ChevronDown color={colors.text.primary} />}
          clearIcon={
            <ClearIcon
              stroke={isError ? colors.error.main : colors.text.primary}
            />
          }
          fullWidth
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                variant="standard"
                name={name}
                label={label}
                placeholder={placeholder}
                error={isError}
                helperText={isError && helperText}
                sx={styles.textField}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  endAdornment: (
                    <>
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
                    </>
                  ),
                }}
                InputLabelProps={{ shrink: true }}
              />
            );
          }}
          renderOption={handleRenderOption}
          PaperComponent={({ children }) => (
            <Paper elevation={4}>{children}</Paper>
          )}
          PopperComponent={(props) => (
            <Popper {...props} sx={{ zIndex: `${zIndexOptions} !important` }} />
          )}
        />
      </>
    );
  },
);
