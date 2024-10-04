import React, { FC, Fragment, useEffect, useState } from "react";
import { Box, Divider, IconButton, MenuItem } from "@mui/material";
import { CreateButton } from "components/CreateButton/CreateButton";
import { SwipeDrawer } from "components/SwipeDrawer";
import { CalendarMenuDetails } from "../CalendarMenuDetails";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { IStatus } from "../../types";
import {
  STATUS_ABSENT,
  STATUS_COMPLETED,
  STATUS_CONFIRMED,
} from "../../constants";
import { ICalendarMenu } from "../../types";
import { styles } from "../../Appointments.styled";
import { useTypedDispatch } from "store";
import {
  selectIsPopupOpen,
  selectSelectedEvents,
} from "features/selectors/appointmentsSelectors";
import { useSelector } from "react-redux";
import {
  isPopupOpenAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";

export const CalendarMobileMenu: FC<ICalendarMenu> = ({
  handleToggleNestedMenu,
  selectedItem,
  details,
  menuState,
  isNestedMenuOpen,
  updateEventsList,
  isDelete,
  setIsDelete,
}) => {
  const dispatch = useTypedDispatch();
  const [isStatusAbsent, setIsStatusAbsent] = useState<Record<string, boolean>>(
    {},
  );
  const [isStatusConfirmed, setIsStatusConfirmed] = useState<
    Record<string, boolean>
  >({});
  const [isStatusCompleted, setIsStatusCompleted] = useState<
    Record<string, boolean>
  >({});
  const [nestedMenuId, setNestedMenuId] = useState<number | null>(null);
  const [nestedMenuStatus, setNestedMenuStatus] = useState<IStatus>({
    value: "",
    title: "",
  });
  const selectedEvents = useSelector(selectSelectedEvents);
  const isPopupMenuOpen = useSelector(selectIsPopupOpen);

  const handleMenuClose = () => {
    dispatch(isPopupOpenAction(false));
    isNestedMenuOpen(false);
  };

  const handleStatusUpdate = (id: number | null, status: boolean) => {
    if (id !== null) {
      setIsStatusAbsent((prev) => ({
        ...prev,
        [id]: status,
      }));

      setIsStatusCompleted((prev) => ({
        ...prev,
        [id]: status,
      }));

      setIsStatusConfirmed((prev) => ({
        ...prev,
        [id]: status,
      }));
    }
  };

  const handleNestedMenuToggle = (id: number | null, status: IStatus) => {
    if (id !== null) {
      setNestedMenuId(id);
      setNestedMenuStatus(status);
      handleToggleNestedMenu(id);
      isNestedMenuOpen();
    }
  };

  useEffect(() => {
    const initialStatusConfirmed = selectedEvents.reduce((acc, event) => {
      acc[event.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setIsStatusConfirmed(initialStatusConfirmed);
  }, [selectedEvents]);

  const handleCreateAppointment = () => {
    dispatch(toggleCreateWindowOpenAction(true));
    dispatch(isPopupOpenAction(false));
  };

  return (
    <SwipeDrawer
      isOpen={isPopupMenuOpen}
      toggleMenu={handleMenuClose}
      anchor="bottom"
    >
      <Box sx={styles.menuItemsWrapper}>
        {selectedEvents.map(({ id, master, status }, index) => (
          <Fragment key={id}>
            <Box
              onClick={() => handleNestedMenuToggle(id, status)}
              sx={styles.menuWrapper({
                isAbsent: isStatusAbsent[id] || status.title === STATUS_ABSENT,
                isCompleted:
                  isStatusCompleted[id] || status.title === STATUS_COMPLETED,
                isConfirmed:
                  isStatusConfirmed[id] || status.title === STATUS_CONFIRMED,
              })}
            >
              <Box />
              <MenuItem sx={styles.masterName} selected={selectedItem === id}>
                {master.name}
              </MenuItem>
              <IconButton sx={styles.chevronRight} disableRipple>
                <Chevron />
              </IconButton>
            </Box>
            {index < selectedEvents.length - 1 && <Divider />}
          </Fragment>
        ))}
      </Box>
      <Box sx={styles.createButtonWrapper}>
        <CreateButton toggleFunction={handleCreateAppointment} />
      </Box>
      <SwipeDrawer
        isOpen={menuState}
        toggleMenu={() =>
          nestedMenuId !== null && handleToggleNestedMenu(nestedMenuId)
        }
        sx={styles.detailsNestedMenu}
        anchor="right"
        disableBackdrop
      >
        <CalendarMenuDetails
          details={details}
          status={nestedMenuStatus}
          handleToggle={() => {
            nestedMenuId !== null && handleToggleNestedMenu(nestedMenuId);
            isNestedMenuOpen();
          }}
          handleStatusAbsent={handleStatusUpdate}
          updateEventsList={updateEventsList}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          closeDetails={handleMenuClose}
        />
      </SwipeDrawer>
    </SwipeDrawer>
  );
};
