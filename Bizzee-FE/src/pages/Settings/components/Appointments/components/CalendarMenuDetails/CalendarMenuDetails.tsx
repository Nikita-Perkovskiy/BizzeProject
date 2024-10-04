import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { RoundIconButton } from "components/RoundIconButton";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";
import { format } from "date-fns";
import { formatPhoneNumber } from "utils";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as MoreVertical } from "assets/svg/icon_more-vertical.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check_icon.svg";
import { styles } from "./CalendarMenuDetails.styled";
import { ICalendarMenuDetails } from "./types";
import { MainInputSelect } from "components/MainInputSelect";
import { CardMenu } from "components/CardMenu";
import { DeleteAppointment } from "./components/DeleteAppointment";
import {
  DELETE,
  selectItemStatus,
  showMoreMenuItems,
} from "pages/Settings/constants";
import { updateAppointmentStatus } from "api/Calendar/updateAppointmentStatus";
import { useTypedDispatch } from "store";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { STATUS_ABSENT } from "../../constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import {
  isEditWindowOpenAction,
  isPopupOpenAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";
import { IService } from "../ScheduleAppointment/ScheduleAppointmentTypes";

export const CalendarMenuDetails: FC<ICalendarMenuDetails> = ({
  details,
  handleToggle,
  handleStatusAbsent,
  status,
  updateEventsList,
  updateDetailsStatus,
  isDelete,
  setIsDelete,
  closeDetails,
}) => {
  const { id, client, startDatetime, endDatetime, services } = details;

  const [detailsStatus, setDetailsStatus] = useState<string>(status.title);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useTypedDispatch();
  const [isDeleteModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLeaveModalOpen(isDelete);
  }, [isDelete]);

  const handleClose = () => setAnchorEl(null);
  const handleClickMenu = (actionMenuItem: string) => () => {
    if (actionMenuItem === showMoreMenuItems[0].type) {
      dispatch(toggleCreateWindowOpenAction(true));
      dispatch(isPopupOpenAction(false));
      dispatch(isEditWindowOpenAction(true));
      handleToggle();
    }
    setSelectedItem(actionMenuItem);

    if (actionMenuItem === "DELETE") {
      if (!id) return;

      setIsLeaveModalOpen(true);
    }
  };
  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = async (event: SelectChangeEvent) => {
    const newStatus = event.target.value;
    setDetailsStatus(newStatus);
    try {
      dispatch(pendingAction());

      const data = await updateAppointmentStatus(id, {
        status: newStatus.toLocaleUpperCase(),
      });
      setDetailsStatus(data.title);
      updateDetailsStatus && updateDetailsStatus(data);
      updateEventsList && updateEventsList();
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  useEffect(() => {
    handleStatusAbsent(id, detailsStatus === STATUS_ABSENT);
  }, [detailsStatus]);

  const formatWithCommas = useMemo(
    () => (items: IService[]) => items.map((item) => item.name).join(", "),
    [],
  );

  const closeDeleteModal = () => {
    setIsLeaveModalOpen(false);
    setIsDelete(false);
  };

  return (
    <>
      <Box sx={styles.detailsHeader}>
        <IconButton
          onClick={handleToggle}
          sx={styles.chevronLeft}
          disableRipple
        >
          <Chevron />
        </IconButton>
        <Typography>Appointment Details</Typography>
        <RoundIconButton icon={<MoreVertical />} onClick={handleMenuToggle} />
      </Box>
      <Box sx={styles.detailsWrapper}>
        {GenerateInfoCard({
          title: "Client",
          value: client.name,
        })}
        {GenerateInfoCard({
          title: "Time",
          value:
            startDatetime && endDatetime
              ? `${format(startDatetime, "HH:mm")} - ${format(
                  endDatetime,
                  "HH:mm",
                )}`
              : "",
        })}
        {GenerateInfoCard({
          title: "Service",
          value: formatWithCommas(services),
        })}
        {GenerateInfoCard({
          title: "Client’s phone number",
          value:
            client.countryCode && client.phone
              ? formatPhoneNumber(client.countryCode, client.phone)
              : "",
        })}
        <Box sx={styles.actionWrapper}>
          <Typography>Appointment status</Typography>
          <MainInputSelect
            onChange={handleSelect}
            value={detailsStatus || status.title}
            sx={styles.select}
            wrapperStyle={styles.actionWrapper}
          >
            {selectItemStatus.map((status) => (
              <MenuItem key={status} value={status} sx={styles.menuItem}>
                <Typography>{status}</Typography>
                {detailsStatus === status && <CheckIcon />}
              </MenuItem>
            ))}
          </MainInputSelect>
        </Box>
      </Box>
      <CardMenu
        open={open}
        anchorEl={anchorEl}
        onClick={handleClose}
        sx={styles.showMoreMenu}
      >
        {showMoreMenuItems.map((item, index) => (
          <Box key={item.id} onClick={handleClickMenu(item.type)}>
            <MenuItem
              sx={
                item.type === DELETE
                  ? { ...styles.showMoreMenuItem, ...styles.delete }
                  : styles.showMoreMenuItem
              }
              selected={selectedItem === item.type}
            >
              <ListItemIcon sx={styles.listItem}>
                <img src={item.icon} alt={item.title} />
              </ListItemIcon>
              {item.title}
            </MenuItem>
            {index < showMoreMenuItems.length - 1 && <Divider />}
          </Box>
        ))}
      </CardMenu>

      <DeleteAppointment
        isBlock={isDeleteModalOpen}
        details={details}
        closeModal={closeDeleteModal}
        updateEventsList={updateEventsList}
        calendarMenuDetailsClose={handleClose}
        closeDetails={closeDetails}
      />
    </>
  );
};
