import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import { CustomStyles, IRadioButtonMenuProps } from "./interface";
import { styles } from "./RadioButtonMenu.styled";

export const RadioButtonMenu: React.FC<IRadioButtonMenuProps> = ({
  formik,
  id,
  name,
  options = [],
}) => {
  const customStyles = styles as CustomStyles;
  const isError =
    formik.touched[name as keyof typeof formik.values] &&
    Boolean(formik.errors[name as keyof typeof formik.values]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="service-location"
        id={id}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        {options.map((el) => (
          <FormControlLabel
            key={el.id}
            value={el.value}
            control={
              <Radio
                icon={<span style={customStyles.customIcon} />}
                checkedIcon={
                  <span style={customStyles.customCheckIcon}>
                    <span style={customStyles.checkDrop} />
                  </span>
                }
              />
            }
            label={el.title}
          />
        ))}
      </RadioGroup>
      {isError && (
        <Box style={{ color: "red", marginTop: "8px" }}>
          {formik.errors[name as keyof typeof formik.values]}
        </Box>
      )}
    </FormControl>
  );
};
