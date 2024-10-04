import React, { FC, memo } from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import { CreateButton } from "components/CreateButton/CreateButton";
import { MainInputSelect } from "components/MainInputSelect";
import { MultipleDaysPicker } from "components/MultipleDaysPicker";
import { RangePicker } from "components/RangePicker";
import { SwitchButton } from "components/SwitchButton";
import { Title } from "components/Title/Title";
import { selectPickerOptions } from "config/constants";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { styles } from "./CustomDays.styled";
import { styles as styled } from "../../WorkingHours.styled";
import { ICustomDaysProps } from "./types";
import { TimeSelect } from "components/TimeSelect";

export const CustomDays: FC<ICustomDaysProps> = memo(
  ({
    formik,
    cusomRangeDates,
    customMultipleDates,
    handleToggleCustomDates,
    isCustomDatesActive,
    handleSelect,
    selectOption,
    isRangePicker,
    handleSelectCustomRangeDates,
    startDate,
    endDate,
    choosedRegularDays,
    handleSelectCustomMultipleDates,
    handleSwitchButton,
    isWeekend,
    isRangeDatesOverlap,
    isPeriodOverlap,
    handleSelectCustomStartTime,
    startTimeDate,
    endTimeDate,
    customStartTime,
    customEndTime,
    handleSelectCustomEndTime,
    timeOptions,
    hasData,
  }) => {
    const [customStartDate, customEndDate] = cusomRangeDates;

    const validToTimes = timeOptions.filter((time) => time >= startTimeDate);

    return (
      <>
        <Box sx={styles.customDatesHeader}>
          <CreateButton toggleFunction={handleToggleCustomDates} />
          <Title text="Add custom dates" />
        </Box>
        <Box sx={styles.actionContainer}>
          <Box sx={styles.actionWrapper}>
            <Box>
              <Typography sx={styled.title(!!isCustomDatesActive)}>
                Choose date
              </Typography>
              <MainInputSelect
                onChange={handleSelect}
                value={selectOption}
                sx={styles.select(!!isCustomDatesActive)}
                wrapperStyle={styles.selectWrapper}
                disabled={!isCustomDatesActive}
              >
                {selectPickerOptions.map((option) => (
                  <MenuItem key={option} value={option} sx={styles.menuItem}>
                    <Typography>{option}</Typography>
                    {selectOption === option && <CheckIcon />}
                  </MenuItem>
                ))}
              </MainInputSelect>
            </Box>
            <Box sx={styles.customPickersWrapper}>
              {!isCustomDatesActive && <Box sx={styles.overlay} />}
              {isRangePicker ? (
                <RangePicker
                  dateStart={hasData ? customStartDate : null}
                  dateEnd={hasData ? customEndDate : null}
                  inline
                  handleSelectDate={handleSelectCustomRangeDates}
                  disabledKeyboardNavigation
                  disabled={!isCustomDatesActive}
                  chosenDateStart={startDate}
                  chosenDateEnd={endDate}
                  customWorkingDays={choosedRegularDays}
                />
              ) : (
                <MultipleDaysPicker
                  inline
                  date={hasData ? customMultipleDates : null}
                  handleSelectDate={handleSelectCustomMultipleDates}
                  disabled={!isCustomDatesActive}
                  chosenDateStart={startDate}
                  chosenDateEnd={endDate}
                  customWorkingDays={choosedRegularDays}
                />
              )}
            </Box>
            <Box sx={styles.daySwitcherWrapper}>
              <SwitchButton
                onClick={handleSwitchButton}
                checked={isWeekend}
                disabled={!isCustomDatesActive}
              />
              <Typography>Day-off</Typography>
            </Box>
            <Box
              sx={{
                ...styled.timeInputsWrapper,
                ...styled.timePicker,
              }}
            >
              <Box>
                <TimeSelect
                  name="customDatesDTO.customTimeFrom"
                  label="From*"
                  placeholder="00:00"
                  optionsData={timeOptions}
                  initialValue={
                    isRangeDatesOverlap || isPeriodOverlap
                      ? startTimeDate
                      : customStartTime
                  }
                  handleSelect={handleSelectCustomStartTime}
                  isError={
                    formik.touched.customDatesDTO?.customTimeFrom &&
                    Boolean(formik.errors.customDatesDTO?.customTimeFrom)
                  }
                  helperText={
                    (formik.touched.customDatesDTO?.customTimeFrom &&
                      formik.errors.customDatesDTO?.customTimeFrom) ||
                    undefined
                  }
                  handleBlur={formik.handleBlur}
                  sx={styled.timeSelect}
                  wihoutChekIkon
                  disabled={!isCustomDatesActive || isWeekend}
                />
              </Box>
              <Box sx={styled.dash} />
              <Box>
                <TimeSelect
                  name="customTimeTo"
                  label="To*"
                  placeholder="00:00"
                  optionsData={validToTimes}
                  initialValue={
                    isRangeDatesOverlap || isPeriodOverlap
                      ? endTimeDate
                      : customEndTime
                  }
                  handleSelect={handleSelectCustomEndTime}
                  isError={
                    formik.touched.customDatesDTO?.customTimeTo &&
                    Boolean(formik.errors.customDatesDTO?.customTimeTo)
                  }
                  helperText={
                    (formik.touched.customDatesDTO?.customTimeTo &&
                      formik.errors.customDatesDTO?.customTimeTo) ||
                    undefined
                  }
                  handleBlur={formik.handleBlur}
                  sx={styled.timeSelect}
                  wihoutChekIkon
                  disabled={!isCustomDatesActive || isWeekend}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  },
);
