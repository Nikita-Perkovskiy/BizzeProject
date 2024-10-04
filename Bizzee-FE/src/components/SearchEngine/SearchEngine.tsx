import React, { useState, useRef, useEffect } from "react";
import { styles } from "./SearchEngine.styled";
import { TextField, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import { ISearchEngineProps } from "./types";
import { useDebounce } from "hooks/useDebounce";
import { DEBOUNCE_TIME, MAX_LENGTH } from "./constants";
import { TRIMED_VALUE } from "pages/Layout/constants";

export const SearchEngine: React.FC<ISearchEngineProps> = ({
  placeholder,
  onSearch,
  sx = {},
  maxLength = MAX_LENGTH,
}) => {
  const searchStyles = {
    ...styles.input,
    ...sx,
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchQuery = useDebounce(currentQuery, DEBOUNCE_TIME);

  useEffect(() => {
    setCurrentQuery(searchQuery.trim());
  }, [searchQuery.length]);
  useEffect(() => {
    if (debouncedSearchQuery || onSearch) {
      onSearch(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value.replace(TRIMED_VALUE, " ");

    setSearchQuery(query);
  };

  return (
    <TextField
      variant="standard"
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment
            position="end"
            sx={styles.icon}
            disablePointerEvents={!searchQuery}
          >
            {<SearchIcon />}
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={searchStyles}
      onChange={handleSearchChange}
      value={searchQuery}
      inputRef={searchInputRef}
      inputProps={{ maxLength }}
    />
  );
};
