import React, {
  FC,
  Fragment,
  SyntheticEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
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
import { styles } from "components/AsyncSmartSearch/AsyncSmartSearch.styled";
import { defaultProps } from "./constants";
import { AutocompleteInputProps, IValues } from "./types";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useNotificationToast } from "hooks/useNotificationToast";
import { fontSize } from "config/styles/fonts";
import { v4 as uuidv4 } from "uuid";

export const SmartSearch: FC<AutocompleteInputProps> = memo(
  ({
    id,
    label,
    placeholder,
    name,
    zIndexOptions = defaultProps.zIndexOptions,
    isError,
    sx,
    getOptionsFunc,
    required,
    helperText,
    handleSelect,
    initialValue,
    handleSelectId,
    defaultValues,
    handleBlur,
    showAllByDefault = false,
    hasExtralabel = false,
  }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly IValues[]>([]);
    const loading = open && options.length === 0;
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<IValues | null>(null);

    useEffect(() => {
      if (defaultValues) {
        setOptions(defaultValues);
      }

      if (defaultValues && defaultValues.length > 0) {
        setSelectedValues(defaultValues[0]);
      }
    }, [defaultValues]);

    useEffect(() => {
      if (initialValue && initialValue.name !== selectedValues?.name) {
        setSelectedValues(initialValue);
      }
    }, [initialValue]);

    useEffect(() => {
      handleSelect((selectedValues && selectedValues.name) || "");
      handleSelectId(selectedValues && selectedValues.id);
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
                ? [{ name: "All", id: null }, ...result]
                : [...result],
            );
          }
        } catch (error) {
          setOptions(showAllByDefault ? [{ name: "All", id: null }] : []);
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
      if (selectedValues && inputValue !== selectedValues.name) {
        setSelectedValues(null);
      }
    }, [inputValue]);

    const handleInputChange = useCallback(
      (event: SyntheticEvent, value: string): void => {
        setInputValue(value);
      },
      [],
    );

    const handleAddSelectChange = useCallback(
      (event: SyntheticEvent, value: IValues | null | undefined): void => {
        setSelectedValues(value || null);
      },
      [],
    );

    useEffect(() => {
      setSelectedValues(showAllByDefault ? { name: "All", id: null } : null);
    }, []);

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
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={handleAddSelectChange}
        onBlur={handleBlur}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        defaultValue={initialValue}
        value={selectedValues as IValues | undefined}
        forcePopupIcon={
          defaultValues || showAllByDefault || !hasExtralabel
            ? true
            : !isError && !inputValue
        }
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
              required={required}
              variant="standard"
              name={name}
              label={label}
              placeholder={placeholder}
              error={isError}
              helperText={helperText}
              sx={styles.autocompleteTextField}
              FormHelperTextProps={{
                style: {
                  position: "absolute",
                  top: "100%",
                },
              }}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                endAdornment: (
                  <Fragment>
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
                  </Fragment>
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
            !option.name.toLowerCase().startsWith(inputValue.toLowerCase())
          ) {
            return null;
          }
          const matches = match(option.name, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.name, matches);

          return (
            <Box {...props} component="li" key={option.id} sx={styles.option}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                  {parts.map((part) => (
                    <Typography
                      key={uuidv4()}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                        fontSize: fontSize.s,
                      }}
                    >
                      {part.text}
                    </Typography>
                  ))}
                </Box>
                {hasExtralabel && (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: fontSize.xs,
                      color: "text.secondary",
                    }}
                  >
                    {[option.address, option.zipCode, option.country]
                      .filter(Boolean)
                      .join(", ")}
                  </Typography>
                )}
              </Box>
              {selectedValues?.name === option.name && (
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
