import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { styles } from "./SearchBar.styled";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import { ReactComponent as ClearIcon } from "assets/svg/x-circle.svg";
import { ReactComponent as DownArrowIcon } from "assets/svg/icon_chevron.svg";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setSearchQuery(e.target.value);
  };

  const handleClear = (): void => {
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <Box sx={styles.searchWrapper}>
      <Container>
        <Box sx={styles.inputsWrapper}>
          <TextField
            id="services-search"
            variant="standard"
            placeholder="Search and book services ..."
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={styles.icon}
                  disablePointerEvents={!searchQuery}
                >
                  {searchQuery ? (
                    <ClearIcon onClick={handleClear} />
                  ) : (
                    <SearchIcon />
                  )}
                </InputAdornment>
              ),
            }}
            fullWidth
            sx={[styles.input, styles.searchInput]}
            onChange={handleSearchChange}
            value={searchQuery}
            inputRef={searchInputRef}
            disabled
          />
          <Box sx={styles.bottomWrapper}>
            <TextField
              id="location-address"
              variant="standard"
              placeholder="Where are you?"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end" disablePointerEvents>
                    <DownArrowIcon color={theme.palette.text.primary} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              sx={styles.input}
              disabled
            />
            <Button className="primaryYellow" sx={styles.button}>
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
