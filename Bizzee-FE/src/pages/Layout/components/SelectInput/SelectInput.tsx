import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { SelectInputProps } from "./types";
import { styles } from "./SelectInput.styled";
import { ReactComponent as ArrowDownIcon } from "assets/svg/icon_chevron.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";

export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  name,
  selectValues = [],
  placeholder,
  formik,
  disabled,
}) => {
  const [option, setOption] = useState<string>(formik.values[name] as string);
  const isError =
    formik.touched[name as keyof typeof formik.values] &&
    Boolean(formik.errors[name as keyof typeof formik.values]);

  useEffect(() => {
    setOption(formik.values[name] as string);
  }, [formik.values[name]]);

  const handleCombinedChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    const selectedOption = selectValues.find(
      (el) => el.value === selectedValue,
    );
    if (selectedOption && !selectedOption.disabled) {
      setOption(selectedValue);
      formik.handleChange(event);
    }
  };

  const showCurrentValue = (option: string | undefined): string => {
    const currentTitle =
      selectValues.find((el) => el.value === (option?.toUpperCase() ?? ""))
        ?.title ||
      "" ||
      "";
    return currentTitle;
  };

  return (
    <Box sx={styles.selectInputWrapper}>
      <InputLabel
        sx={{
          ...styles.selectInputLabel,
          ...(disabled && styles.selectInputLabelDisabled),
          ...(isError && styles.selectInputLabelError),
        }}
        id={id}
      >
        {label}
      </InputLabel>
      <FormControl fullWidth error={isError}>
        <Select
          labelId={id}
          id={id}
          value={option}
          name={name}
          error={isError}
          IconComponent={(props) => (
            <ArrowDownIcon className={props.className} />
          )}
          onChange={handleCombinedChange}
          disabled={disabled}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              style: {
                maxHeight: "200px",
              },
            },
            sx: {
              "&.MuiPopover-root": {
                zIndex: 1700,
              },
            },
          }}
          displayEmpty={true}
          renderValue={(selectedValue) =>
            selectedValue?.length ? (
              <Typography>
                {showCurrentValue(selectedValue) || showCurrentValue(option)}
              </Typography>
            ) : (
              <Typography sx={styles.placeholderText}>{placeholder}</Typography>
            )
          }
          sx={styles.selectInput}
        >
          {selectValues.map((e) => (
            <MenuItem
              key={uuidv4()}
              value={e.value}
              sx={{
                justifyContent: "space-between",
                ...(e.value === option && styles.checkItem),
              }}
            >
              <Typography sx={e.disabled ? styles.checkItemDisabled : null}>
                {e.title}
              </Typography>
              {e.value === option ? <CheckIcon /> : null}
            </MenuItem>
          ))}
        </Select>
        {isError && (
          <Typography variant="caption" color="error">
            {formik.errors[name as keyof typeof formik.values]}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};
