import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "config/routes";
import { useFormik } from "formik";

import { styles } from "./UnitsWorkingHours.styled";

import { Box, Button, useMediaQuery } from "@mui/material";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { WeeklyShedule } from "./components/WeeklyShedule/index";
import { CustomDays } from "./components/CustomDays/CustomDays";
import {
  ICurrentCustomDatesDTO,
  ICustomDatesDTO,
  IResponseIWeekOfDays,
  IUpdateWeekOfDays,
} from "./types";
import { initialValues } from "./constants";
import { ENTER_KEY } from "config/constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { timeOptions } from "utils/timeOptions";

import { getBusinessUnit } from "api/BusinessUnits/getBusinessUnit";
import { getBusinessUnitsWorkingDays } from "api/BusinessUnits/getBusinessUnitsWorkingDays";
import { updateBusinessUnitsWorkingDays } from "api/BusinessUnits/updateBusinessUnitsWorkingDays";
import { useHandleSelectDays } from "pages/Settings/hooks/index";
import { getBusinessUnitsCustomDates } from "api/BusinessUnits/getBusinessUnitsCustomDates";
import { updateBusinessUnitsCustomDates } from "api/BusinessUnits/updateBusinessUnitsCustomDates";
import { formatAppointmentDate } from "utils/formatDate";

export const UnitsWorkingHours = () => {
  const [currentBisnessUnit, setCurrentBisnessUnit] = useState("");
  const { unitId } = useParams();
  const unitIdNumber = Number(unitId);

  const defaultDate = new Date();
  const formattedStartDate = formatAppointmentDate(defaultDate);

  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);

  const [hasData, setHasData] = useState<boolean>(false);
  const [data, setData] = useState<IResponseIWeekOfDays[] | null>(null);
  const [workingDays, setWorkingDays] = useState<IUpdateWeekOfDays[]>([]);

  const [hasCustomData, setHasCustomData] = useState<boolean>(false);
  const [customData, setCustomData] = useState<ICustomDatesDTO[] | null>(null);
  const [currentCustomData, setCurrentCustomData] = useState<
    ICurrentCustomDatesDTO[]
  >([]);

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    (async () => {
      try {
        const dataWorkingDays = await getBusinessUnitsWorkingDays(unitIdNumber);
        setData(dataWorkingDays);

        const customDatesDTO = await getBusinessUnitsCustomDates(
          unitIdNumber,
          formattedStartDate,
        );
        setCustomData(customDatesDTO);

        setIsLeaveModalOpen(true);
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    })();
  }, [unitIdNumber]);

  useEffect(() => {
    if (data) {
      setHasData(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setWorkingDays(data.map(({ businessUnitId, ...rest }) => rest));
    } else {
      setHasData(false);
      setWorkingDays([]);
    }
  }, [data]);

  useEffect(() => {
    if (customData) {
      setHasCustomData(true);
      setCurrentCustomData(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        customData.map(({ businessUnitId, ...rest }) => rest),
      );
    } else {
      setHasCustomData(false);
      setCurrentCustomData([]);
    }
  }, [customData]);

  useEffect(() => {
    if (!hasData) return;

    formik.setFieldValue("workingDays", workingDays);
  }, [workingDays, hasData]);

  useEffect(() => {
    if (!hasCustomData) return;

    formik.setFieldValue("customDatesDTO", customData);
  }, [customData, hasCustomData]);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const workingHoursData: IUpdateWeekOfDays[] = values.workingDays
        .filter((item) => item.active !== false)
        .map(
          //eslint-disable-next-line @typescript-eslint/no-unused-vars
          ({ numberOfDay, active, ...rest }) => rest,
        );

      const customDatesDTO: ICurrentCustomDatesDTO[] = values.customDatesDTO;

      try {
        await updateBusinessUnitsWorkingDays(unitIdNumber, workingHoursData);
        await updateBusinessUnitsCustomDates(unitIdNumber, customDatesDTO);

        useNotificationToast({
          type: "success",
          message: "All entered changes were successfully saved",
        });
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const { name } = await getBusinessUnit(unitIdNumber);
        setCurrentBisnessUnit(name);
      } catch (error) {
        throw new Error(error.messsage);
      }
    })();
  }, [unitIdNumber]);

  const handleSelectDays = useHandleSelectDays(setWorkingDays);

  const handleCancel = () => {
    navigate(`${routes.settings.root}/${routes.settings.units.root}`);
  };

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
        <Box sx={isMobile ? {} : styles.unitsWorkingHoursWrapper}>
          <Box sx={isMobile ? styles.unitsWorkingHoursWrapper : {}}>
            <Box sx={styles.headerunitsWrapper}>
              <Box sx={styles.headline}>
                <Box sx={styles.headerContent}>
                  <Title text="Working hours" />
                  <Subtitle
                    text={`Add ${currentBisnessUnit} working days and hours`}
                    highlight={currentBisnessUnit}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={styles.workingHoursActions}>
              <Box sx={styles.settingsWeekWrapper}>
                <Box
                  sx={{
                    ...styles.daysWrapper,
                    ...styles.daysWrapperNormal,
                  }}
                >
                  <WeeklyShedule
                    handleSelectDays={handleSelectDays}
                    timeOptions={timeOptions.map((time) => time)}
                    workingDays={workingDays}
                    hasData={hasData}
                  />
                </Box>
                <Box
                  sx={{ ...styles.daysWrapper, ...styles.daysWrapperCenter }}
                >
                  <CustomDays
                    currentCustomDatesDTO={currentCustomData}
                    hasCustomData={hasCustomData}
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
