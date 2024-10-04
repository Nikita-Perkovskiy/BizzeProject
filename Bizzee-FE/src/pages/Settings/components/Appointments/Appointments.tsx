import React, { useCallback, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { styles } from "./Appointments.styled";
import { getBusinessUnitsNames } from "api/Calendar/getBusinessUnitsNames";
import { SmartSearch } from "./components/SmartSearch";
import { ScheduleAppointment } from "./components/ScheduleAppointment";
import { EventsCalendar } from "./components/EventsCalendar";
import { useTypedDispatch } from "store";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { IValues } from "./components/SmartSearch/types";
import { AsyncSmartSearch } from "components/AsyncSmartSearch";
import { getBusinessUnitsMasters } from "api/Calendar/getBusinessUnitsMasters";
import { getBusinessUnitsCategories } from "api/BusinessUnits/getBusinessUnitsCategories";
import { initialDetails } from "./types";
import { addDays, format } from "date-fns";
import { getAppointmentsDetails } from "api/Calendar/getAppointmentsDetails";
import { CalendarMobileMenu } from "./components/CalendarMobileMenu";
import { CalendarMenu } from "./components/CalendarMenu";
import { IAppointment } from "./components/EventsCalendar/types";
import { updateAppointmentCalendar } from "api/Calendar/updateAppointmentCalendar";
import { CardMenu } from "components/CardMenu";
import { CalendarMenuDetails } from "./components/CalendarMenuDetails";
import { isPopupOpenAction } from "features/appointments/actions";
import { useSelector } from "react-redux";
import {
  selectCurrentEventDetails,
  selectIsDayView,
  selectIsPopupOpen,
  selectPopupPosition,
} from "features/selectors/appointmentsSelectors";
import { ALL_VALUES } from "./constants";
import { formatCalendarRangeDate } from "utils/formatDate";
import { DAYS_IN_WEEK } from "config/constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { selectRole } from "features/selectors/authSelectors";
import { USER_ROLES } from "pages/PageRoot/components/constants";
import { IAppointmentDetails } from "./components/ScheduleAppointment/ScheduleAppointmentTypes";

export const Appointments = () => {
  const [businessId, setBusinessId] = useState<number | null>(null);
  const [masterId, setMasterId] = useState<number | null>(null);
  const [master, setMaster] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [units, setUnits] = useState<IValues[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [menuState, setMenuState] = useState(false);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [details, setDetails] = useState<IAppointmentDetails>(initialDetails);
  const dispatch = useTypedDispatch();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isPopupMenuOpen = useSelector(selectIsPopupOpen);
  const selectCurrentDetails = useSelector(selectCurrentEventDetails);
  const { top, right } = useSelector(selectPopupPosition);
  const isDayCalendar = useSelector(selectIsDayView);
  const initialMaster = master ? { id: masterId, name: master } : undefined;
  const todayDate = new Date();
  const [currentDate, setCurrentDate] = useState(todayDate);
  const selectDate = useCallback(setCurrentDate, []);
  const [startDate, setStartDate] = useState<string>(() =>
    formatCalendarRangeDate(currentDate),
  );
  const [endDate, setEndDate] = useState<string>(() =>
    formatCalendarRangeDate(currentDate),
  );
  const [appointmentDetails, setAppointmentDetails] =
    useState<IAppointmentDetails>(initialDetails);

  useEffect(() => {
    setAppointmentDetails(details);
  }, [details]);
  const userRole = useSelector(selectRole);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    setStartDate(formatCalendarRangeDate(currentDate));
    if (isDayCalendar || isMobile) {
      setEndDate(formatCalendarRangeDate(currentDate));
    } else {
      setEndDate(formatCalendarRangeDate(addDays(currentDate, DAYS_IN_WEEK)));
    }
  }, [isDayCalendar, currentDate, isMobile]);

  const getAppointments = async () => {
    try {
      dispatch(pendingAction());

      const events = await updateAppointmentCalendar(businessId, {
        category: category === ALL_VALUES ? null : category,
        masterId: masterId,
        startDate: startDate,
        endDate: endDate,
      });
      setAppointments(events);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleMenuClose = () => dispatch(isPopupOpenAction(false));

  const handleSelectBusinessId = (id: number | null) => setBusinessId(id);

  const handleSelectMasterId = (id: number | null) => setMasterId(id);

  const handleToggleNestedMenu = async (itemId: number) => {
    try {
      dispatch(pendingAction());
      const data = await getAppointmentsDetails(itemId, {
        datetimeNow: format(currentDate, "dd/MM/yyyy HH:mm"),
      });
      setDetails(data);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
    setSelectedItem(itemId);
  };

  const isNestedMenuOpen = (isOpen?: boolean) => {
    isOpen !== undefined ? setMenuState(isOpen) : setMenuState((prev) => !prev);
  };

  const setSelectedMasterInAppointments = useCallback(
    (master: string | null) => {
      setMaster(master);
    },
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        dispatch(pendingAction());

        const data = await getBusinessUnitsNames();
        setUnits(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    })();
  }, []);

  useEffect(() => {
    if (businessId) {
      getAppointments();
    }
  }, [businessId, masterId, category, endDate, isDelete]);

  return (
    <>
      <Box sx={styles.appointmentsWrapper}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.headline}>
            <Box sx={styles.headerContent}>
              <Title text="CALENDAR" />
              <Subtitle text="View business unit calendar" />
            </Box>
          </Box>
          <Box sx={styles.filtersWrapper}>
            <SmartSearch
              name="Business Unit"
              label="Business Unit"
              placeholder="Business Unit"
              sx={styles.smartSearch}
              getOptionsFunc={getBusinessUnitsNames}
              handleSelect={(name) => name}
              handleSelectId={handleSelectBusinessId}
              defaultValues={units}
              required={true}
              hasExtralabel={true}
            />
            {userRole === USER_ROLES.BUSINESS_OWNER && (
              <>
                <AsyncSmartSearch
                  name="Category"
                  label="Category"
                  placeholder="Category"
                  sx={styles.smartSearch}
                  getOptionsFunc={getBusinessUnitsCategories}
                  handleSelect={(value) =>
                    setCategory(value === "" ? null : value)
                  }
                  showAllByDefault
                />
                <SmartSearch
                  name="Master"
                  label="Master"
                  placeholder="Master"
                  sx={styles.smartSearch}
                  getOptionsFunc={() => getBusinessUnitsMasters(businessId)}
                  handleSelect={(value) =>
                    setMaster(value === "" ? null : value)
                  }
                  handleSelectId={handleSelectMasterId}
                  initialValue={initialMaster}
                  showAllByDefault
                />
              </>
            )}
          </Box>
        </Box>
        <Box>
          <EventsCalendar
            appointments={appointments}
            currentDate={currentDate}
            setCurrentDate={selectDate}
          />
        </Box>
      </Box>
      <ScheduleAppointment
        businessId={businessId as number}
        masterId={masterId}
        master={master}
        setSelectedMasterInAppointments={setSelectedMasterInAppointments}
        updateAppointments={getAppointments}
        appointmentDetails={appointmentDetails}
      />
      {isMobile ? (
        <CalendarMobileMenu
          handleToggleNestedMenu={handleToggleNestedMenu}
          selectedItem={selectedItem}
          details={details}
          menuState={menuState}
          isNestedMenuOpen={isNestedMenuOpen}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          updateEventsList={getAppointments}
        />
      ) : (
        <CalendarMenu
          handleToggleNestedMenu={handleToggleNestedMenu}
          selectedItem={selectedItem}
          details={details}
          menuState={menuState}
          isNestedMenuOpen={isNestedMenuOpen}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          updateEventsList={getAppointments}
        />
      )}
      {isDayCalendar && (
        <CardMenu
          anchorReference="anchorPosition"
          anchorPosition={{ top, left: right }}
          transformOrigin={{ horizontal: 0, vertical: 0 }}
          anchorOrigin={{ horizontal: 0, vertical: 0 }}
          open={isPopupMenuOpen}
          anchorEl={null}
          onClick={handleMenuClose}
          sx={styles.detailsMenu}
        >
          {selectCurrentDetails && (
            <CalendarMenuDetails
              details={selectCurrentDetails}
              handleToggle={handleMenuClose}
              status={selectCurrentDetails?.status}
              handleStatusAbsent={() => null}
              updateEventsList={getAppointments}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              closeDetails={handleMenuClose}
            />
          )}
        </CardMenu>
      )}
    </>
  );
};
