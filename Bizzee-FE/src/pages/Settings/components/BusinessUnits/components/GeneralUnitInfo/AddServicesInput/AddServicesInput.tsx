import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { IAddServicesInputProps } from "./AddServicesInputTypes";
import { styles } from "./AddServicesInput.styled";
import { Box, Button, Chip, Grid, InputLabel, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as CloseIcon } from "assets/svg/close_icon.svg";
import { keyValues } from "./constants";

export const AddServicesInput: React.FC<IAddServicesInputProps> = ({
  id,
  label,
  placeholder,
  name,
  formik,
  maxLength,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set<string>(),
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const selectedServicesArray = Array.from(selectedServices);

    formik.setFieldValue(name, selectedServicesArray);
  }, [selectedServices]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const updateSelectedServices = (
    value: string,
    prevSelectedValues: Set<string>,
  ): Set<string> => {
    const updatedSet = new Set(prevSelectedValues);
    updatedSet.add(value);
    return updatedSet;
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === keyValues.enter && inputValue.trim()) {
      event.preventDefault();
      setSelectedServices((prevSelectedValues) =>
        updateSelectedServices(inputValue, prevSelectedValues),
      );
      setInputValue("");
    }
  };

  const handleRemoveSelectChange = (value: string): void => {
    if (value) {
      setSelectedServices((prevSelectedValues) => {
        const updatedSet = new Set(prevSelectedValues);
        updatedSet.delete(value);
        return updatedSet;
      });
    }
  };

  const handleAddButtonClick = (): void => {
    if (inputValue) {
      setSelectedServices((prevSelectedValues) =>
        updateSelectedServices(inputValue, prevSelectedValues),
      );
      setInputValue("");
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4}>
        <InputLabel sx={styles.autocompleteLabel} htmlFor={id}>
          {label}
        </InputLabel>
        <TextField
          variant="standard"
          sx={styles.inputWrapper}
          name={name}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          inputRef={inputRef}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          InputProps={{
            disableUnderline: true,
          }}
          inputProps={{ maxLength }}
        />
        <Box sx={styles.addButtonWrapper}>
          <Button
            type="button"
            className="primaryBlack"
            sx={styles.submitBtn}
            disabled={!inputValue}
            onClick={handleAddButtonClick}
          >
            Add
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box
          sx={
            selectedServices.size
              ? styles.autocompleteOptionBlockWrapper
              : styles.servicesInvisible
          }
        >
          {!!selectedServices.size &&
            [...selectedServices].map((value) => (
              <Box key={uuidv4()}>
                <Chip
                  deleteIcon={<CloseIcon />}
                  label={value}
                  onDelete={() => handleRemoveSelectChange(value as string)}
                  sx={styles.autocompleteChipItem}
                />
              </Box>
            ))}
        </Box>
      </Grid>
    </Grid>
  );
};
