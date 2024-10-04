import React, { FC, useEffect, useState } from "react";
import { CardMenu } from "components/CardMenu";
import { CalendarMenuDetails } from "../CalendarMenuDetails";
import { IStatus } from "../../types";
import { ICalendarMenu } from "../../types";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import { CreateButton } from "components/CreateButton/CreateButton";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { styles } from "../../Appointments.styled";
import {
  STATUS_ABSENT,
  STATUS_COMPLETED,
  STATUS_CONFIRMED,
} from "../../constants";
import { useSelector } from "react-redux";
import {
  selectIsPopupOpen,
  selectPopupPosition,
  selectSelectedEvents,
} from "features/selectors/appointmentsSelectors";
import {
  isPopupOpenAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";
import { useTypedDispatch } from "store";

export const CalendarMenu: FC<ICalendarMenu> = ({
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
  const [nestedMenuStatus, setNestedMenuStatus] = useState<IStatus>(
    details.status,
  );
  const selectedEvents = useSelector(selectSelectedEvents);
  const isPopupMenuOpen = useSelector(selectIsPopupOpen);
  const { top, right } = useSelector(selectPopupPosition);

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
    if (!isPopupMenuOpen && nestedMenuId !== null) {
      setNestedMenuId(null);
    }
  }, [isPopupMenuOpen, nestedMenuStatus]);

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
      <Box sx={styles.menuItemsWrapper}>
        {selectedEvents.map(({ id, master, status }, index) => (
          <Box key={id}>
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
                <Typography>{master.name}</Typography>
              </MenuItem>
              <IconButton sx={styles.chevronRight} disableRipple>
                <Chevron />
              </IconButton>
            </Box>
            {index < selectedEvents.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
      <Box sx={styles.createButtonWrapper}>
        <CreateButton toggleFunction={handleCreateAppointment} />
      </Box>
      <Drawer
        open={menuState}
        sx={styles.detailsNestedMenu}
        anchor="right"
        variant="persistent"
      >
        <CalendarMenuDetails
          details={details}
          status={nestedMenuStatus}
          handleToggle={() => {
            nestedMenuId !== null && handleToggleNestedMenu(nestedMenuId);
            isNestedMenuOpen();
          }}
          handleStatusAbsent={handleStatusUpdate}
          updateDetailsStatus={setNestedMenuStatus}
          updateEventsList={updateEventsList}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          closeDetails={handleMenuClose}
        />
      </Drawer>
    </CardMenu>
  );
};
