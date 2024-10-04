import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { CustomStyles, IRadioGroupProps } from "./MainRadioGroupTypes";
import { styles } from "./MainRadioGroup.styled";
import { ReactComponent as InfoIcon } from "assets/svg/icon_info.svg";

export const MainRadioGroup: React.FC<IRadioGroupProps> = ({
  id,
  name,
  label,
  defaultValue,
  options = [],
  sx,
  columnCount,
  tooltip,
  tooltipTitle,
  tooltipPlacement,
  tooltipArrow,
  disabled,
  onChange,
}) => {
  const customStyles = styles as CustomStyles;

  return (
    <Grid container spacing={2} sx={sx}>
      <FormControl component="fieldset">
        <FormLabel id={id} sx={styles.label}>
          {label}
        </FormLabel>
        <RadioGroup
          aria-labelledby={id}
          defaultValue={defaultValue}
          onChange={onChange}
          name={name}
          row
        >
          {options.map((input, index) => (
            <Grid
              item
              xs={columnCount?.xs}
              md={columnCount?.md}
              lg={columnCount?.lg}
              key={input.title}
              sx={styles.inputWrap}
            >
              {disabled ? (
                <FormControlLabel
                  sx={styles.title}
                  value={input.value}
                  control={
                    <Radio
                      icon={
                        <Box component="span" sx={customStyles.customIcon} />
                      }
                      checkedIcon={
                        <Box component="span" sx={customStyles.customCheckIcon}>
                          <Box component="span" sx={customStyles.checkDrop} />
                        </Box>
                      }
                      sx={index ? styles.disabledRadio : null}
                    />
                  }
                  label={input.title}
                  disabled={!!index}
                />
              ) : (
                <FormControlLabel
                  sx={styles.title}
                  value={input.value}
                  control={
                    <Radio
                      icon={
                        <Box component="span" sx={customStyles.customIcon} />
                      }
                      checkedIcon={
                        <Box component="span" sx={customStyles.customCheckIcon}>
                          <Box component="span" sx={customStyles.checkDrop} />
                        </Box>
                      }
                    />
                  }
                  label={input.title}
                  disabled={false}
                />
              )}
              {tooltip && (
                <Tooltip
                  title={index ? null : tooltipTitle}
                  placement={tooltipPlacement}
                  arrow={tooltipArrow}
                  enterTouchDelay={0}
                  slotProps={{
                    popper: {
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [0, -10],
                          },
                        },
                      ],
                    },
                  }}
                  componentsProps={{
                    tooltip: {
                      sx: styles.tooltip,
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      ...styles.tooltipIcon,
                      ...(!!index && styles.tooltipIconDisabled),
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Grid>
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};
