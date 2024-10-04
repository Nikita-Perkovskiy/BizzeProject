import React, {
  FC,
  Fragment,
  SyntheticEvent,
  memo,
  useEffect,
  useRef,
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
import { styles } from "./TimeSelect.styled";
import { defaultProps } from "./constants";
import { ITimeSelect } from "./types";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { v4 as uuidv4 } from "uuid";

export const TimeSelect: FC<ITimeSelect> = memo(
  ({
    id,
    label,
    placeholder,
    name,
    zIndexOptions = defaultProps.zIndexOptions,
    isError,
    sx,
    helperText,
    handleSelect,
    initialValue,
    handleBlur,
    wihoutChekIkon = false,
    optionsData,
    disabled,
    onKeyPress,
  }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly string[]>(optionsData);
    const loading = open && !options.length;
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<string | null>(null);
    const hasInteracted = useRef(false);

    const handleAddSelectChange = (
      event: SyntheticEvent,
      value: string | null | undefined,
    ): void => {
      if (value) {
        setSelectedValues(value);
        hasInteracted.current = true;
      }
    };

    useEffect(() => {
      if (hasInteracted.current) {
        handleSelect(selectedValues || "");
      }
    }, [selectedValues]);

    useEffect(() => {
      if (initialValue) {
        setSelectedValues(initialValue);
      }
    }, [initialValue]);

    useEffect(() => {
      if (selectedValues && inputValue !== selectedValues) {
        setSelectedValues(null);
      }
    }, [inputValue]);

    useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);

    const handleInputChange = (event: SyntheticEvent, value: string): void => {
      setInputValue(value);
    };

    return (
      <Autocomplete
        disableClearable
        sx={{
          ...styles.autocompleteInput,
          ...styles.endAdornment(isError),
          ...sx,
        }}
        id={id}
        open={open}
        onOpen={() => {
          setOptions(optionsData);
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
        loadingText={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CircularProgress color="inherit" size={20} />
          </Box>
        }
        options={options}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={handleAddSelectChange}
        onBlur={handleBlur}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        defaultValue={initialValue}
        value={selectedValues as string | undefined}
        forcePopupIcon={!isError && Boolean(inputValue)}
        popupIcon={
          <Chevron
            color={disabled ? colors.gray.disabled : colors.text.primary}
          />
        }
        clearIcon={
          <ClearIcon
            stroke={isError ? colors.error.main : colors.text.primary}
          />
        }
        disabled={disabled}
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
              FormHelperTextProps={{
                style: {
                  position: "absolute",
                  top: "100%",
                },
              }}
              inputProps={{
                ...params.inputProps,
                onKeyPress,
              }}
              sx={{
                "& .MuiInputBase-input.MuiAutocomplete-input.MuiInputBase-input":
                  {
                    p: 0,
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
          const matches = match(option, inputValue, {
            insideWords: true,
          });
          const parts = parse(option, matches);

          return (
            <Box {...props} component="li" key={option} sx={styles.option}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
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
                </Box>
              </Box>
              {selectedValues === option && !wihoutChekIkon && (
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
