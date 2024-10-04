import React, {
  FC,
  SyntheticEvent,
  memo,
  useEffect,
  useState,
  Fragment,
  useRef,
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
import { ReactComponent as ClearIcon } from "assets/svg/icon_cancel.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { colors } from "config/styles/themeColors";
import { styles } from "components/AsyncSmartSearch/AsyncSmartSearch.styled";
import { clientsStyles } from "./ClientsSmartSearch.styled";
import { defaultProps, inputNames } from "./constants";
import { ClientsInputProps, IClientValues } from "./types";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { v4 as uuidv4 } from "uuid";
import { formatAppointmentPhone } from "utils/formatPhoneNumber";
import { MIN_ENTERING_CHARACTERS } from "../constants";

export const ClientsSmartSearch: FC<ClientsInputProps> = memo(
  ({
    id,
    label,
    placeholder,
    name,
    zIndexOptions = defaultProps.zIndexOptions,
    isError,
    sx,
    options,
    helperText,
    handleSelect,
    initialValue,
    maxLength,
    onKeyPress,
    handleBlur,
    handleInputValue,
  }) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValues, setSelectedValues] = useState<IClientValues | null>(
      null,
    );
    const inputRef = useRef(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        setOpen(false);
      }
      if (onKeyPress) {
        onKeyPress(event);
      }
    };

    useEffect(() => {
      if (inputRef && inputRef.current) {
        const inputElement = inputRef.current as HTMLDivElement;
        if (inputElement) {
          inputElement.setAttribute("autocomplete", "none");
        }
      }
    }, []);

    useEffect(() => {
      if (initialValue) {
        setSelectedValues(initialValue);
      }
    }, [initialValue]);

    useEffect(() => {
      handleSelect(
        (selectedValues &&
          (name === inputNames.phone
            ? selectedValues.phone
            : selectedValues.name)) ||
          "",
      );
    }, [selectedValues]);

    useEffect(() => {
      if (name === inputNames.phone) {
        if (selectedValues && inputValue !== selectedValues.phone) {
          setSelectedValues(null);
        }
        return;
      }
      if (selectedValues && inputValue !== selectedValues.name) {
        setSelectedValues(null);
      }
    }, [inputValue]);

    const handleInputChange = (event: SyntheticEvent, value: string): void => {
      setInputValue(value);
      handleInputValue(value);
    };

    const handleAddSelectChange = (
      event: SyntheticEvent,
      value: IClientValues | null | undefined,
    ): void => {
      if (value) {
        setSelectedValues(value);
      }
    };

    const isPhoneInputOpen =
      open && inputValue.length >= MIN_ENTERING_CHARACTERS;
    const shouldOpen = name === inputNames.phone ? isPhoneInputOpen : open;

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
        loadingText={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Loading...</Typography>
            <CircularProgress color="inherit" size={20} />
          </Box>
        }
        options={options}
        getOptionLabel={(option) =>
          name === inputNames.phone ? option.phone : option.name
        }
        isOptionEqualToValue={(option, value) =>
          name === inputNames.phone
            ? option.phone === value.phone
            : option.name === value.name
        }
        open={shouldOpen}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={handleAddSelectChange}
        onInputChange={handleInputChange}
        onBlur={handleBlur}
        inputValue={inputValue}
        defaultValue={initialValue}
        value={selectedValues as IClientValues | undefined}
        forcePopupIcon={!isError && !inputValue}
        clearOnBlur={false}
        popupIcon={null}
        clearIcon={
          <ClearIcon
            stroke={isError ? colors.error.main : colors.text.primary}
          />
        }
        fullWidth
        autoComplete={false}
        onKeyDown={handleKeyDown}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="standard"
              name={name}
              label={label}
              inputRef={inputRef}
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
                inputProps: {
                  ...params.inputProps,
                  maxLength,
                },
              }}
              InputLabelProps={{ shrink: true }}
              inputProps={{
                autoComplete: "off",
              }}
            />
          );
        }}
        renderOption={(props, option) => {
          const matchesName = match(option.name, inputValue, {
            insideWords: true,
          });

          const partsName = parse(option.name, matchesName);

          const matchesPhone = match(option.phone, inputValue, {
            insideWords: true,
          });

          const partsPhone = parse(option.phone, matchesPhone);

          const clientPhone = option.countryCode + option.phone;

          const matchesPhoneForName = match(clientPhone, inputValue, {
            insideWords: true,
          });
          const partsPhoneForName = parse(clientPhone, matchesPhoneForName);

          return name === inputNames.phone ? (
            <Box
              {...props}
              component="li"
              key={option.phone}
              sx={{
                ...clientsStyles.phoneOption,
                ...styles.option,
              }}
            >
              <Box sx={clientsStyles.partOption}>
                {partsPhone.map((part) => (
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
              <Box sx={clientsStyles.partOptionIcon}>
                {selectedValues?.phone === option.phone && <CheckIcon />}
              </Box>
            </Box>
          ) : (
            <Box
              {...props}
              component="li"
              key={option.phone}
              sx={{
                ...styles.option,
                ...clientsStyles.option,
              }}
            >
              <Box sx={clientsStyles.partOption}>
                {partsName.map((part, index) => (
                  <Fragment key={uuidv4()}>
                    <Typography
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </Typography>
                    {index < part.text.length - 1 && (
                      <Box component="span"></Box>
                    )}
                  </Fragment>
                ))}
              </Box>
              {partsPhoneForName.map((part) => (
                <Typography
                  key={uuidv4()}
                  style={{
                    color: colors.text.secondary,
                  }}
                >
                  {formatAppointmentPhone(part.text)}
                </Typography>
              ))}
              {selectedValues?.name === option.name && (
                <Box sx={clientsStyles.optionIcon}>
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
