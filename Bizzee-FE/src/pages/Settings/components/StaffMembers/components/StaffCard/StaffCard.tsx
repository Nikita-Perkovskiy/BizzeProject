import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Collapse,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as MoreVertical } from "assets/svg/icon_more-vertical.svg";
import { styles } from "./StaffCard.styled";
import { styles as styled } from "pages/Settings/Settings.styled";
import { IStaffCard } from "./types";
import { StaffInfo } from "../StaffInfo";
import { RoundIconButton } from "components/RoundIconButton";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { sendOtp } from "api/StaffMembers/sendOtp";
import { updateMasterStatus } from "api/StaffMembers/updateMasterStatus";
import { formatPhoneNumber } from "utils";
import { menuItems, MASTER_STATUS } from "../../constants";
import { mapStringToBoolean } from "pages/Settings/helper";
import { CardModal } from "pages/Settings/components/CardModal";
import { CardMenu } from "components/CardMenu";
import {
  EDIT,
  SEND_OTP,
  STATUS,
  USER_ACTIVE_STATUS,
} from "pages/Settings/constants";
import { useNavigate } from "react-router";
import { routes } from "config/routes";
import { useNotificationToast } from "hooks/useNotificationToast";

export const StaffCard = ({
  userId,
  imageLink,
  fullName,
  role,
  experience,
  language,
  addedDate,
  email,
  phoneNumber,
  lastVisitDate,
  status,
  services,
  countryCode,
  category,
}: IStaffCard) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalType, setModalType] = useState<string>(STATUS);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [cardStatus, setCardStatus] = useState<string>(status);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const open = Boolean(anchorEl);
  const breakpoints = useTheme().breakpoints.values;
  const isLargeScreen = useMediaQuery(`(min-width: ${breakpoints.lg}px)`);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    setModalType(type);
    setIsOpenModal(true);
  };

  const handleMasterEdit = (masterId: number) => {
    navigate(
      `${routes.settings.staff.edit.root}/${masterId}/${routes.settings.staff.edit.masterId.general}`,
    );
  };

  const handleClickMenu = (item: string, userId: number) => () => {
    setSelectedItem(item);
    item === SEND_OTP && status !== MASTER_STATUS.VERIFY && handleClick(item);
    item === EDIT && handleMasterEdit(userId);
  };

  const handleExpandClick = () => setExpanded((prev) => !prev);
  const handleClose = () => setAnchorEl(null);
  const handleToggleModal = () => setIsOpenModal((prev) => !prev);
  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSwitchButton = () => {
    setModalType(STATUS);
    setIsOpenModal((prev) => !prev);
  };

  const handleOtp = async () => {
    setIsOpenModal((prev) => !prev);
    try {
      await sendOtp(userId);

      useNotificationToast({
        type: "success",
        message: "OTP was sent successfully!",
      });
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleStatusToggle = async () => {
    try {
      dispatch(pendingAction());

      await updateMasterStatus({
        id: userId,
        enable: !mapStringToBoolean(cardStatus),
      });
      setCardStatus((prev) =>
        mapStringToBoolean(prev) ? "" : USER_ACTIVE_STATUS,
      );
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
    setModalType(STATUS);
    setIsOpenModal((prev) => !prev);
  };

  const currentStatus = cardStatus === USER_ACTIVE_STATUS;

  const isCurrentStyles = currentStatus
    ? {
        ...styles.email,
        ...styles.emailSecondary,
      }
    : styles.email;

  const currentEmailStyles = expanded ? isCurrentStyles : styles.role;

  const correctTitle =
    expanded || isLargeScreen
      ? formatPhoneNumber(countryCode, phoneNumber)
      : role;

  const correctAction = modalType === SEND_OTP ? handleOtp : handleStatusToggle;

  return (
    <>
      <Card sx={styled.card(currentStatus)} className="primaryCard">
        {!currentStatus && <Box sx={styles.overlay} />}
        <Collapse
          in={!expanded && isLargeScreen ? true : expanded}
          timeout="auto"
        >
          <Box sx={styles.cardHeader}>
            <Box sx={styles.headerContainer}>
              <Typography sx={styles.headerRole}>{role}</Typography>
              <IconButton
                sx={styles.chevron}
                disableRipple
                onClick={handleExpandClick}
              >
                {expanded ? (
                  <Chevron style={styles.chevronDown} />
                ) : (
                  <Chevron />
                )}
              </IconButton>
            </Box>
            <RoundIconButton
              icon={<MoreVertical />}
              onClick={handleMenuToggle}
              sx={styles.roundIcon}
            />
          </Box>
        </Collapse>
        <Box sx={styles.cardBody}>
          <Avatar sx={styles.avatar} src={imageLink} alt="User Avatar" />
          <Box sx={styles.cardDescr}>
            <Typography sx={styles.name}>{fullName}</Typography>
            <Typography sx={currentEmailStyles}>{correctTitle}</Typography>
          </Box>
          {!expanded && (
            <IconButton
              onClick={handleExpandClick}
              sx={styles.chevronIcon}
              aria-label="info"
            >
              <Chevron />
            </IconButton>
          )}
        </Box>
        <Collapse in={expanded} timeout="auto">
          <StaffInfo
            email={email}
            experience={experience}
            category={category}
            services={services}
            language={language}
            addedDate={addedDate}
            lastVisitDate={lastVisitDate}
            onClick={handleSwitchButton}
            status={currentStatus}
            disabled={status !== MASTER_STATUS.ACTIVE}
          />
        </Collapse>
      </Card>
      <CardMenu open={open} anchorEl={anchorEl} onClick={handleClose}>
        <Box sx={styles.menuItemsWrapper}>
          {menuItems.map((item, index) => (
            <Box key={item.id} onClick={handleClickMenu(item.type, userId)}>
              <MenuItem
                sx={styles.showMoreMenuItem}
                selected={selectedItem === item.type}
                disabled={
                  item.type === SEND_OTP && status === MASTER_STATUS.VERIFY
                }
              >
                <ListItemIcon>
                  <img src={item.icon} alt={item.title} />
                </ListItemIcon>
                {item.title}
              </MenuItem>
              {index < menuItems.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      </CardMenu>
      <CardModal
        openModal={isOpenModal}
        modalClose={handleToggleModal}
        handleAction={correctAction}
        type={modalType}
        name={fullName}
        userStatus={currentStatus ? USER_ACTIVE_STATUS : ""}
      />
    </>
  );
};
