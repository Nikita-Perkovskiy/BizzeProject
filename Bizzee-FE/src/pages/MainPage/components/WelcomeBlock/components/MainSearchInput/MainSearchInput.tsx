import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import { IMainSearchInputProps } from "./types";
import { styles as externalStyles } from "components/MultiselectAutocomplete/MultiselectAutocomplete.styled";
import { DEBOUNCE_TIME, MAX_LENGTH } from "components/SearchEngine/constants";
import { styles } from "components/AsyncSmartSearch/AsyncSmartSearch.styled";
import { Box, Typography } from "@mui/material";
import { capitalizeNameFirstLetters } from "utils/capitalizeFirstLetter";
import { inputStyles } from "./MainSearchInput.styled";
import { useDebounce } from "hooks/useDebounce";
import { IContentItem } from "pages/MainPage/interface";
import { v4 as uuidv4 } from "uuid";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const MainSearchInput: React.FC<IMainSearchInputProps> = ({
  data,
  onSearch,
  sx,
  placeholder,
  maxLength = MAX_LENGTH,
  searchInput = "",
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<IContentItem | null>(null);
  const debouncedInputValue = useDebounce(inputValue, DEBOUNCE_TIME);

  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(searchInput);
  }, [searchInput]);

  useEffect(() => {
    if (debouncedInputValue || onSearch) {
      onSearch(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  const searchStyles = {
    ...externalStyles.autocompleteInput,
    ...sx,
  };

  const validData = Array.isArray(data) ? data : [];

  const getOptionLabel = (option: IContentItem) =>
    option.businessUnitName || option.masterName || option.serviceName;

  const handleAddSelectChange = useCallback(
    (event: SyntheticEvent, value: IContentItem | null): void => {
      setSelectedValue(value);
      value && setInputValue(capitalizeNameFirstLetters(getOptionLabel(value)));
      value &&
        navigate(
          `${routes.landing.root}/${
            routes.landing.units.root
          }?search=${getOptionLabel(value)}&location=`,
        );
    },
    [],
  );

  const sortByKey = (array: IContentItem[]) => {
    return array.sort((a, b) => {
      const labelA = getOptionLabel(a) ? getOptionLabel(a).toLowerCase() : "";
      const labelB = getOptionLabel(b) ? getOptionLabel(b).toLowerCase() : "";
      if (labelA < labelB) return -1;
      if (labelA > labelB) return 1;
      return 0;
    });
  };

  const sortedArray = sortByKey(validData);

  return (
    <Autocomplete
      sx={searchStyles}
      options={sortedArray}
      getOptionLabel={(option) => getOptionLabel(option)}
      inputValue={inputValue}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={selectedValue}
      onChange={handleAddSelectChange}
      clearIcon={null}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          onChange={(e) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            onSearch(newValue);
          }}
          InputProps={{
            ...params.InputProps,
            inputProps: {
              ...params.inputProps,
              maxLength,
            },
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const label = getOptionLabel(option);
        const matches = match(capitalizeNameFirstLetters(label), inputValue, {
          insideWords: true,
        });
        const parts = parse(capitalizeNameFirstLetters(label), matches);

        return option.masterName ? (
          <Box {...props} component="li" key={option.id} sx={styles.option}>
            <Box>
              {parts.map((part) => (
                <Box
                  component="span"
                  key={uuidv4()}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </Box>
              ))}
              <Typography sx={inputStyles.masterSubtext}>
                {option.businessUnits && option.procedures
                  ? `${capitalizeNameFirstLetters(
                      option.businessUnits[0].businessUnitName,
                    )} - ${capitalizeNameFirstLetters(
                      option.procedures[0].title,
                    )}`
                  : ""}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box {...props} component="li" key={option.id} sx={styles.option}>
            <Box>
              {parts.map((part, index) => (
                <Box
                  component="span"
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          </Box>
        );
      }}
      popupIcon={<SearchIcon />}
    />
  );
};
