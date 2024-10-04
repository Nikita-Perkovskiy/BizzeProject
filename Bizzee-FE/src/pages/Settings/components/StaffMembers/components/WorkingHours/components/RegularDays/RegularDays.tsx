import React, { FC, memo } from "react";
import { Box, InputLabel } from "@mui/material";
import { RangePicker } from "components/RangePicker";
import { daysOfWeek } from "config/constants";
import { DaysOfWeek } from "../DaysOfWeek";
import { ReactComponent as CalendarIcon } from "assets/svg/icon-calendar.svg";
import { styles } from "./RegularDays.styled";
import { styles as styled } from "../../WorkingHours.styled";
import { IRegularDaysProps } from "./types";
import { onKeyPressHandler } from "utils";
import { TimeSelect } from "components/TimeSelect";

export const RegularDays: FC<IRegularDaysProps> = memo(
  ({
    formik,
    regularRangeDates,
    handleSelectRegularRangeDates,
    handleKeyDown,
    isDayChosen,
    startTimeDate,
    endTimeDate,
    handleStartDateTimeChange,
    handleEndDateTimeChange,
    handleSelectDays,
    actualStartTime,
    actualEndTime,
    timeOptions,
    workingDaysDTOS,
    hasData,
  }) => {
    const [startDate, endDate] = regularRangeDates;
    const validToTimes = timeOptions.filter((time) => time >= startTimeDate);

    return (
      <>
        <Box
          sx={styles.datePicker(Boolean(formik.values.businessUnit || hasData))}
        >
          <InputLabel
            sx={styles.dateLabel(
              Boolean(formik.values.businessUnit || hasData),
            )}
          >
            Working dates*
          </InputLabel>
          <RangePicker
            dateStart={hasData ? startDate : null}
            dateEnd={hasData ? endDate : null}
            handleSelectDate={handleSelectRegularRangeDates}
            disabledKeyboardNavigation
            showIcon
            icon={
              <Box
                sx={styles.pickerIcon(!formik.values.businessUnit && !hasData)}
              >
                <CalendarIcon />
              </Box>
            }
            onKeyDown={handleKeyDown}
            toggleCalendarOnIconClick={Boolean(
              formik.values.businessUnit && !hasData,
            )}
            disabled={!formik.values.businessUnit && !hasData}
            placeholderText="dd/mm/yyyy - dd/mm/yyyy"
            dateFormat="dd/MM/yyyy"
          />
        </Box>
        <Box
          sx={{
            ...styled.timeInputsWrapper,
            ...styled.timePicker,
          }}
        >
          <Box>
            <TimeSelect
              name="fromTime"
              label="From*"
              placeholder="00:00"
              optionsData={timeOptions}
              initialValue={startTimeDate}
              handleSelect={(time: string) => {
                handleStartDateTimeChange(time);
              }}
              isError={
                formik.touched.fromTime && Boolean(formik.errors.fromTime)
              }
              helperText={
                (formik.touched.fromTime && formik.errors.fromTime) || undefined
              }
              handleBlur={formik.handleBlur}
              sx={styled.timeSelect}
              wihoutChekIkon
              disabled={!hasData && !isDayChosen}
              onKeyPress={onKeyPressHandler}
            />
          </Box>
          <Box sx={styled.dash} />
          <Box>
            <TimeSelect
              name="toTime"
              label="To*"
              placeholder="00:00"
              optionsData={validToTimes}
              initialValue={endTimeDate}
              handleSelect={(time: string) => {
                handleEndDateTimeChange(time);
              }}
              isError={formik.touched.toTime && Boolean(formik.errors.toTime)}
              helperText={
                (formik.touched.toTime && formik.errors.toTime) || undefined
              }
              handleBlur={formik.handleBlur}
              sx={styled.timeSelect}
              wihoutChekIkon
              disabled={!hasData && !isDayChosen}
              onKeyPress={onKeyPressHandler}
            />
          </Box>
        </Box>
        {daysOfWeek.map((day) => (
          <DaysOfWeek
            key={day.day}
            day={day.day}
            numberOfDay={day.numberOfDay}
            selectedDays={handleSelectDays}
            startTimeDate={actualStartTime}
            endTimeDate={actualEndTime}
            timeOptions={timeOptions}
            workingDaysDTOS={workingDaysDTOS}
            hasData={hasData}
          />
        ))}
      </>
    );
  },
);
