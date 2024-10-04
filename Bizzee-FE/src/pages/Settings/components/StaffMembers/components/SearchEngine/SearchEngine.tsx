import React, { useState, useRef, useEffect } from "react";
import { styles } from "./SearchEngine.styled";
import { TextField, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import { ReactComponent as ClearIcon } from "assets/svg/x-circle.svg";
import { ISearchEngineProps } from "./types";
import { useDebounce } from "hooks/useDebounce";
import { DEBOUNCE_TIME } from "./constants";

export const SearchEngine: React.FC<ISearchEngineProps> = ({
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  useEffect(() => {
    if (debouncedSearchQuery || onSearch) {
      onSearch(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setSearchQuery(query.trim());
  };

  const handleClear = (): void => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
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
            {searchQuery ? <ClearIcon onClick={handleClear} /> : <SearchIcon />}
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={[styles.input, styles.searchInput]}
      onChange={handleSearchChange}
      value={searchQuery}
      inputRef={searchInputRef}
    />
  );
};
