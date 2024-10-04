import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";
import {
  IGoogleAutocompleteProps,
  PlaceType,
  autocompleteService,
  defaultPropValues,
  filterOptions,
  formatDescription,
  loadScript,
} from "./constants";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { colors } from "config/styles/themeColors";
import { styles } from "./GoogleAutocomplete.styled";
import { Popper, SxProps, Theme } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export const GoogleAutocomplete: FC<IGoogleAutocompleteProps> = ({
  requestConfig,
  label = defaultPropValues.label,
  formik,
  name,
  isAddress,
  placeholder,
  disabled,
  city,
  helperText,
  sx,
  searchLocation = "",
}) => {
  const [value, setValue] = useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly PlaceType[]>([]);
  const loaded = useRef(false);

  if (!!window && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps",
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      debounce(
        (
          request: { input: string },
          callback: (results?: readonly PlaceType[]) => void,
        ) => {
          (autocompleteService.current as any).getPlacePredictions(
            {
              ...request,
              ...requestConfig,
            },
            callback,
          );
        },
        400,
      ),
    [],
  );

  useEffect(() => {
    setInputValue(searchLocation);
  }, [searchLocation]);

  useEffect(() => {
    if (formik.values[name] !== inputValue) {
      setInputValue(formik.values[name]);
    }
  }, [formik.values[name]]);

  useEffect(() => {
    if (!value && options.length) {
      setValue(options[0]);
    }
  }, [options]);

  useEffect(() => {
    if (formik.values[name] !== inputValue) {
      formik.setFieldValue(name, inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (
        window as any
      ).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    const requestQuery = isAddress ? `${city} ${inputValue}` : inputValue;

    fetch({ input: requestQuery }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        const optionsToSave = [...newOptions];

        setOptions(optionsToSave.sort(sortByDescription));
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const sortByDescription = (a: PlaceType, b: PlaceType) => {
    const descriptionA = a.description.toLowerCase();
    const descriptionB = b.description.toLowerCase();

    if (descriptionA < descriptionB) {
      return -1;
    }
    if (descriptionA > descriptionB) {
      return 1;
    }
    return 0;
  };

  const mergedSx: SxProps<Theme> = {
    ...styles.autocompleteMain,
    ...sx,
  };

  return (
    <Autocomplete
      id={name}
      sx={mergedSx}
      getOptionLabel={(option) =>
        typeof option === "string"
          ? option
          : option.structured_formatting.main_text
      }
      filterOptions={filterOptions}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="No places found"
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        setInputValue(
          newValue ? newValue?.structured_formatting.main_text : "",
        );
      }}
      inputValue={inputValue}
      onInputChange={(event) => {
        if (event) {
          const eventTarget = event.target as HTMLInputElement;
          const inputEventValue = event ? eventTarget.value : inputValue;
          setInputValue(inputEventValue);
        }
      }}
      onBlur={() => {
        const googleValue =
          value?.structured_formatting.main_text.toLowerCase();
        if (googleValue !== inputValue.toLowerCase()) {
          setInputValue("");
        }
      }}
      disabled={disabled}
      autoSelect={true}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={placeholder}
          fullWidth
          InputLabelProps={{
            ...params.InputLabelProps,
            shrink: true,
          }}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
          }}
          disabled={disabled}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched.category && !inputValue ? helperText : ""}
        />
      )}
      // eslint-disable-next-line no-extra-boolean-cast
      forcePopupIcon={!Boolean(options.length)}
      popupIcon={
        <ArrowDownIcon
          color={disabled ? colors.text.secondary : colors.text.primary}
        />
      }
      clearIcon={null}
      renderOption={(props, option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings || [];

        const optionText = isAddress
          ? formatDescription(option.description)
          : option.structured_formatting.main_text;

        const parts = parse(
          optionText,
          matches.map((match: any) => [
            match.offset,
            match.offset + match.length,
          ]),
        );

        return (
          <li {...props} key={props.id}>
            <Grid container alignItems="center">
              <Grid
                item
                sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
              >
                {parts.map((part) => (
                  <Box
                    key={uuidv4()}
                    component="span"
                    sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                  >
                    {part.text}
                  </Box>
                ))}
              </Grid>
            </Grid>
          </li>
        );
      }}
      PopperComponent={(props) => <Popper {...props} sx={styles.popper} />}
    />
  );
};
