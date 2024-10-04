import React, { useEffect, useState } from "react";
import { Box, Button, SelectChangeEvent, useMediaQuery } from "@mui/material";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { styles } from "./WorkingHours.styled";
import { useFormik } from "formik";
import { SmartSearch } from "pages/Settings/components/Appointments/components/SmartSearch";
import { RANGE_TIME } from "./constants";
import { initialValues } from "./constants";
import { validationSchema } from "./validationSchema";
import { formatAppointmentDate } from "utils/formatDate";
import { format } from "date-fns";
import { CurrentInitialValues, ICurrentWorkingDay, IWorkingDay } from "./types";
import {
  ENTER_KEY,
  SELECT_DAYS,
  displayToValueConfig,
  selectPickerOptions,
  valueToDisplayConfig,
} from "config/constants";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "config/routes";
import { CustomDays } from "./components/CustomDays";
import { RegularDays } from "./components/RegularDays";
import { getMasterBusinessUnits } from "api/StaffMembers/getMasterBusinessUnits";
import { useNotificationToast } from "hooks/useNotificationToast";
import { createMasterWorkingHours } from "api/StaffMembers/createMasterWorkingHours";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { timeOptions } from "utils/timeOptions";

// for testing purposes will be removed
const testObj: CurrentInitialValues = {
  masterUserId: 8,
  businessUnitId: 15,
  startDate: "2024-04-01",
  endDate: "2024-04-27",
  fromTime: "09:00",
  toTime: "19:00",
  workingDaysDTOS: [
    {
      dayOfWeek: "MONDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: true,
    },
    {
      dayOfWeek: "TUESDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: true,
    },
    {
      dayOfWeek: "WEDNESDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: true,
    },
    {
      dayOfWeek: "THURSDAY",
      fromTime: "09:45",
      toTime: "17:00",
      active: true,
    },
    {
      dayOfWeek: "FRIDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: true,
    },
    {
      dayOfWeek: "SATURDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: false,
    },
    {
      dayOfWeek: "SUNDAY",
      fromTime: "09:45",
      toTime: "19:00",
      active: false,
    },
  ],
  customDatesDTO: {
    chooseDate: "SELECT_DAYS",
    responseDates: ["2024-05-01", "2024-05-24"],
    customTimeFrom: "15:00",
    customTimeTo: "20:00",
    daysOff: false,
  },
};

export function fakeApiCall(): Promise<CurrentInitialValues | null> {
  return new Promise<CurrentInitialValues | null>((resolve) => {
    setTimeout(() => {
      resolve(testObj);
    }, 1000);
  });
}

export const WorkingHours = () => {
  const defaultDate = new Date();

  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState<CurrentInitialValues | null>(null);
  const [startDate, setStartDate] = useState<Date>(defaultDate);
  const [endDate, setEndDate] = useState<Date>(defaultDate);
  const [isDayChosen, setIsDayChosen] = useState(false);

  const [startTimeDate, setStartTimeDate] = useState(timeOptions[0]);
  const [endTimeDate, setEndTimeDate] = useState(timeOptions[0]);
  const [actualStartTime, setActualStartTime] = useState(timeOptions[0]);
  const [actualEndTime, setActualEndTime] = useState(timeOptions[0]);

  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState<string>("");
  const [workingDays, setWorkingDays] = useState<ICurrentWorkingDay[]>([]);
  const [isWeekend, setIsWeekend] = useState(false);
  const [selectOption, setSelectOption] = useState<string>(
    selectPickerOptions[0],
  );

  const [isCustomDatesActive, setIsCustomDatesActive] = useState(false);
  const [customStartTime, setCustomStartTime] = useState(timeOptions[0]);
  const [customEndTime, setCustomEndTime] = useState(timeOptions[0]);
  const [overlapedStartTime, setOverlapedStartTime] = useState(
    startTimeDate || timeOptions[0],
  );
  const [overlapedEndTime, setOverlapedEndTime] = useState(
    endTimeDate || timeOptions[0],
  );
  const [choosedRegularDays, setChoosedRegularDays] = useState<number[]>([]);
  const [customStartDate, setCustomStartDate] = useState<Date>(defaultDate);
  const [customEndDate, setCustomEndDate] = useState<Date>(defaultDate);
  const [customMultipleDates, setCustomMultipleDates] = useState<Date[]>([]);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();
  const { masterId } = useParams();

  const getDisplayFromInternalValue = (option: string) =>
    valueToDisplayConfig[option as keyof typeof valueToDisplayConfig];

  useEffect(() => {
    (async () => {
      try {
        const data = await fakeApiCall();
        setData(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      setHasData(true);
      setStartDate(new Date(data.startDate));
      setEndDate(new Date(data.endDate));
      setStartTimeDate(data.fromTime);
      setEndTimeDate(data.toTime);
      setWorkingDays(data.workingDaysDTOS);
      setSelectOption(
        getDisplayFromInternalValue(
          data.customDatesDTO?.chooseDate || selectPickerOptions[0],
        ),
      );
      if (data.customDatesDTO?.chooseDate === SELECT_DAYS) {
        setCustomMultipleDates(
          data.customDatesDTO?.responseDates.map((date) => new Date(date)),
        );
      } else {
        setCustomStartDate(new Date(data.customDatesDTO?.responseDates[0]));
        setCustomEndDate(new Date(data.customDatesDTO?.responseDates[1]));
      }
      setIsWeekend(data.customDatesDTO?.daysOff);
      setCustomStartTime(data.customDatesDTO?.customTimeFrom);
      setCustomEndTime(data.customDatesDTO?.customTimeTo);
      setOverlapedStartTime(data.customDatesDTO?.customTimeFrom);
      setOverlapedEndTime(data.customDatesDTO?.customTimeTo);
    } else {
      setHasData(false);
      setStartDate(defaultDate);
      setEndDate(defaultDate);
      setStartTimeDate(timeOptions[0]);
      setEndTimeDate(timeOptions[0]);
      setCustomStartTime(timeOptions[0]);
      setCustomEndTime(timeOptions[0]);
      setWorkingDays([]);
      setIsWeekend(false);
    }
  }, [data]);

  const formattedStartDate = formatAppointmentDate(startDate);
  const formattedEndDate = formatAppointmentDate(endDate);

  const getInternalValueFromDisplay = (option: string) =>
    displayToValueConfig[option as keyof typeof displayToValueConfig];

  const selectedValue = getInternalValueFromDisplay(selectOption);

  const formattedDates = customMultipleDates.map((date) =>
    format(date, "dd/MM/yyyy"),
  );
  const formattedStarEndDates = [
    format(customStartDate, "dd/MM/yyyy"),
    format(customEndDate, "dd/MM/yyyy"),
  ];

  useEffect(() => {
    formik.setFieldValue("businessUnit", selectedBusinessUnit);
    formik.setFieldValue("startDate", formattedStartDate);
    formik.setFieldValue("endDate", formattedEndDate);
    formik.setFieldValue("fromTime", startTimeDate);
    formik.setFieldValue("toTime", endTimeDate);
    formik.setFieldValue("workingDaysDTOS", workingDays);
    formik.setFieldValue("customDatesDTO", {
      chooseDate: selectedValue || null,
      dates:
        selectedValue === SELECT_DAYS ? formattedDates : formattedStarEndDates,
      customTimeFrom: customStartTime,
      customTimeTo: customEndTime,
      daysOff: isWeekend,
    });
  }, [
    selectedBusinessUnit,
    endTimeDate,
    workingDays,
    customEndTime,
    selectedValue,
    customMultipleDates,
    customEndDate,
  ]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const workingHoursData = {
        businessUnitId: values.businessUnitId,
        startDate: values.startDate,
        endDate: values.endDate,
        fromTime: values.fromTime,
        toTime: values.toTime,
        workingDaysDTOS: values.workingDaysDTOS.map(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ({ numberOfDay, ...rest }) => rest,
        ),
        customDatesDTO: !isCustomDatesActive
          ? {
              chooseDate: values.customDatesDTO.chooseDate,
              dates: values.customDatesDTO.dates,
              customTimeFrom: values.customDatesDTO.customTimeFrom,
              customTimeTo: values.customDatesDTO.customTimeTo,
              daysOff: values.customDatesDTO.daysOff,
            }
          : null,
      };

      try {
        await createMasterWorkingHours(Number(masterId), workingHoursData);
        useNotificationToast({
          type: "success",
          message: "The appointment was added successfully",
        });
      } catch (e) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  const handleBusinessUnitSelect = (value: string) => {
    formik.setFieldValue("businessUnit", value);
    setSelectedBusinessUnit(value);
    setIsLeaveModalOpen(true);
  };

  const handleSelectRegularRangeDates = (
    startDate: Date | null,
    endDate: Date | null,
  ) => {
    if (startDate && endDate) {
      setStartDate(startDate);
      formik.setFieldValue("startDate", formatAppointmentDate(startDate));

      setEndDate(endDate);
      formik.setFieldValue("endDate", formatAppointmentDate(endDate));
      setIsDayChosen(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleStartDateTimeChange = (time: string) => {
    if (endTimeDate) {
      if (time >= endTimeDate) {
        setStartTimeDate(time);
        setEndTimeDate(time);
        setOverlapedEndTime(time);
        setOverlapedStartTime(time);
        setActualStartTime(time);
      } else {
        setStartTimeDate(time);
        setOverlapedStartTime(time);
        if (time > endTimeDate) {
          setEndTimeDate(time);
          setOverlapedEndTime(time);
        }
      }
    }
  };
  const handleEndDateTimeChange = (time: string) => {
    if (startTimeDate) {
      if (time >= startTimeDate) {
        setEndTimeDate(time);
        setOverlapedEndTime(time);
        setActualEndTime(time);
      } else {
        setEndTimeDate(startTimeDate);
        setOverlapedEndTime(time);
      }
    }
  };

  const handleSelectDays = (day: IWorkingDay) => {
    setWorkingDays((prevWorkingDays) => {
      const index = prevWorkingDays.findIndex(
        (d) => d.dayOfWeek === day.dayOfWeek,
      );
      if (index !== -1) {
        const updatedDays = [...prevWorkingDays];
        updatedDays[index] = { ...updatedDays[index], active: day.active };
        return updatedDays;
      } else {
        return [...prevWorkingDays, day];
      }
    });

    setChoosedRegularDays((prev) => {
      if (!day.active) {
        if (!prev.includes(day.numberOfDay)) {
          return [...prev, day.numberOfDay];
        }
      } else {
        return prev.filter((num) => num !== day.numberOfDay);
      }
      return prev;
    });
  };

  const handleSwitchButton = () => setIsWeekend((prev) => !prev);
  const handleSelect = (event: SelectChangeEvent) =>
    setSelectOption(event.target.value as string);

  const handleSelectCustomStartTime = (time: string) => {
    if (time >= customEndTime) {
      setCustomEndTime(time);
      setOverlapedEndTime(time);
      setCustomStartTime(time);
      setOverlapedStartTime(time);
    } else {
      setCustomStartTime(time);
      setOverlapedStartTime(time);
      if (time > customEndTime) {
        setCustomStartTime(time);
        setOverlapedStartTime(time);
      }
    }
  };
  const handleSelectCustomEndTime = (time: string) => {
    if (time >= customStartTime) {
      setCustomEndTime(time);
      setOverlapedEndTime(time);
    } else {
      setEndTimeDate(customStartTime);
    }
  };

  const handleSelectCustomRangeDates = (
    startDate: Date | null,
    endDate: Date | null,
  ) => {
    if (startDate && endDate) {
      setCustomStartDate(startDate);
      setCustomEndDate(endDate);
    }
  };
  const handleSelectCustomMultipleDates = (dates: Date[]) => {
    setCustomMultipleDates(dates);
  };

  const handleToggleCustomDates = () => setIsCustomDatesActive((prev) => !prev);

  const handleCancel = () => {
    setIsLeaveModalOpen(true);
    navigate(`${routes.settings.root}/${routes.settings.staff.root}`);
  };

  const isRangePicker = selectOption === RANGE_TIME;
  const isRangeDatesOverlap =
    isRangePicker &&
    customEndDate &&
    customStartDate &&
    startDate <= customEndDate &&
    endDate >= customStartDate;

  const isPeriodOverlap = !isRangePicker
    ? customMultipleDates.some((date) => date >= startDate && date <= endDate)
    : null;

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        onKeyDown={(event) => {
          if (event.key === ENTER_KEY) {
            event.preventDefault();
          }
        }}
      >
        <Box sx={isMobile ? {} : styles.workingHoursWrapper}>
          <Box sx={isMobile ? styles.workingHoursWrapper : {}}>
            <Box sx={styles.headerWrapper}>
              <Box sx={styles.headline}>
                <Box sx={styles.headerContent}>
                  <Title text="Working hours" />
                  <Subtitle text="Add master working days and hours" />
                </Box>
              </Box>
            </Box>
            <Box sx={styles.workingHoursActions}>
              <Box sx={styles.businesSelectWrapper}>
                <SmartSearch
                  name="businessUnit"
                  label="Business Unit*"
                  placeholder="Select a Business Unit"
                  getOptionsFunc={() =>
                    getMasterBusinessUnits(Number(masterId))
                  }
                  handleSelect={handleBusinessUnitSelect}
                  handleSelectId={(id) =>
                    formik.setFieldValue("businessUnitId", id)
                  }
                  isError={
                    formik.touched.businessUnit &&
                    Boolean(formik.errors.businessUnit)
                  }
                  helperText={
                    (formik.touched.businessUnit &&
                      formik.errors.businessUnit) ||
                    undefined
                  }
                  handleBlur={formik.handleBlur}
                  hasExtralabel
                  sx={styles.timeSelect}
                />
              </Box>
              <Box sx={styles.settingsWeekWrapper}>
                <Box sx={styles.daysWrapper}>
                  <RegularDays
                    formik={formik}
                    regularRangeDates={[startDate, endDate]}
                    handleSelectRegularRangeDates={
                      handleSelectRegularRangeDates
                    }
                    handleKeyDown={handleKeyDown}
                    isDayChosen={isDayChosen}
                    startTimeDate={startTimeDate}
                    endTimeDate={endTimeDate}
                    handleStartDateTimeChange={handleStartDateTimeChange}
                    handleEndDateTimeChange={handleEndDateTimeChange}
                    handleSelectDays={handleSelectDays}
                    actualStartTime={actualStartTime}
                    actualEndTime={actualEndTime}
                    timeOptions={timeOptions.map((time) => time)}
                    workingDaysDTOS={workingDays}
                    hasData={hasData}
                  />
                </Box>
                <Box sx={styles.daysWrapper}>
                  <CustomDays
                    formik={formik}
                    cusomRangeDates={[customStartDate, customEndDate]}
                    customMultipleDates={customMultipleDates}
                    handleToggleCustomDates={handleToggleCustomDates}
                    isCustomDatesActive={hasData || isCustomDatesActive}
                    handleSelect={handleSelect}
                    selectOption={selectOption}
                    isRangePicker={isRangePicker}
                    handleSelectCustomRangeDates={handleSelectCustomRangeDates}
                    startDate={startDate}
                    endDate={endDate}
                    choosedRegularDays={choosedRegularDays}
                    handleSelectCustomMultipleDates={
                      handleSelectCustomMultipleDates
                    }
                    handleSwitchButton={handleSwitchButton}
                    isWeekend={isWeekend}
                    isRangeDatesOverlap={isRangeDatesOverlap}
                    isPeriodOverlap={isPeriodOverlap}
                    handleSelectCustomStartTime={handleSelectCustomStartTime}
                    startTimeDate={overlapedStartTime}
                    endTimeDate={overlapedEndTime}
                    customStartTime={customStartTime}
                    customEndTime={customEndTime}
                    handleSelectCustomEndTime={handleSelectCustomEndTime}
                    timeOptions={timeOptions}
                    hasData={hasData}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.buttonsWrapper}>
            <Button
              className="secondary"
              sx={{
                ...styles.generalBtn,
                ...styles.cancelBtn,
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="primaryBlack"
              sx={styles.generalBtn}
              disabled={!formik.isValid}
              onClick={() => null}
            >
              Save
            </Button>
          </Box>
        </Box>
      </form>
      <LeaveBlockModal isBlocked={isLeaveModalOpen} />
    </>
  );
};
