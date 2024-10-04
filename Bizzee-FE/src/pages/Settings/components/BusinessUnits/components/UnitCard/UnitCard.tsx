import React, { useState } from "react";
import {
  Box,
  Card,
  Collapse,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import { styles } from "./UnitCard.styled";
import { styles as styled } from "pages/Settings/Settings.styled";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as MoreVertical } from "assets/svg/icon_more-vertical.svg";
import { ReactComponent as ManagerIcon } from "assets/svg/icon_user.svg";
import { ReactComponent as AddressIcon } from "assets/svg/location.svg";
import { ReactComponent as PhoneIcon } from "assets/svg/solar_phone-outline.svg";
import { ReactComponent as ClockIcon } from "assets/svg/uiw_time-o.svg";
import { ReactComponent as MastersIcon } from "assets/svg/users.svg";
import { RoundIconButton } from "components/RoundIconButton";
import { formatPhoneNumber } from "utils";
import { SwitchButton } from "components/SwitchButton";
import { CardMenu } from "components/CardMenu";
import { UNIT_EDIT, menuItems } from "./constans";
import {
  ACTIVE,
  NOT_ACTIVE,
  STATUS,
  USER_ACTIVE_STATUS,
} from "pages/Settings/constants";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { useDispatch } from "react-redux";
import { CardModal } from "pages/Settings/components/CardModal";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";
import { updateBusinessUnitStatus } from "api/BusinessUnits/updateBusinessUnitStatus";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { IUnitCard } from "./types";
import { useNotificationToast } from "hooks/useNotificationToast";

export const UnitCard = ({
  id,
  name,
  countryCode,
  phoneNumber,
  category,
  country,
  city,
  masterCounter,
  status,
  address,
  zipCode,
  managerName,
}: IUnitCard) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [unitStatus, setUnitStatus] = useState<boolean>(status);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const unitRoutes = routes.settings.units;

  const handleExpandClick = () => setExpanded((prev) => !prev);
  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleUnitEdit = (unitId: number) => {
    navigate(
      `${unitRoutes.edit.root}/${unitId}/${unitRoutes.edit.unitId.schedule}`,
    );
  };
  const handleClickMenu = (actionMenuItem: string, unitId: number) => () => {
    setSelectedItem(actionMenuItem);

    actionMenuItem === UNIT_EDIT && handleUnitEdit(unitId);
  };
  const handleSwitchButton = () => setIsOpenModal((prev) => !prev);

  const handleStatusToggle = async () => {
    try {
      dispatch(pendingAction());

      await updateBusinessUnitStatus(id, {
        status: !unitStatus,
      });
      setUnitStatus((prev) => !prev);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Card sx={styled.card(unitStatus)} className="primaryCard">
        {!unitStatus && <Box sx={styles.overlay} />}
        <Box sx={styles.cardHeader}>
          <Box sx={styles.headerWrapper}>
            <Typography sx={styles.unitName}>{name}</Typography>
            <Typography
              sx={styles.unitCity}
            >{`${country}, ${city}`}</Typography>
          </Box>
          <Box>
            <IconButton
              disableRipple
              onClick={handleExpandClick}
              aria-label="info"
              sx={styles.chevron}
            >
              {expanded ? <Chevron style={styles.chevronDown} /> : <Chevron />}
            </IconButton>
            <RoundIconButton
              icon={<MoreVertical />}
              onClick={handleMenuToggle}
            />
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto">
          <Box sx={styles.unitInfoWrapper}>
            <Box sx={styles.unitBlockWrapper}>
              <Box sx={styles.unitBlockItems}>
                {GenerateInfoCard({
                  icon: <ManagerIcon style={styles.infoIcon} />,
                  title: "Manager",
                  value: "Manager name",
                })}
                {GenerateInfoCard({
                  icon: <AddressIcon style={styles.infoIcon} />,
                  title: "Address",
                  value: address,
                  extraValue: zipCode,
                })}
              </Box>
              <Box sx={styles.unitBlockItems}>
                {GenerateInfoCard({
                  icon: <PhoneIcon style={styles.infoIcon} />,
                  title: "Phone",
                  value: formatPhoneNumber(countryCode, phoneNumber),
                })}
                {GenerateInfoCard({
                  icon: <MastersIcon style={styles.infoIcon} />,
                  title: "Masters",
                  value: masterCounter,
                })}
              </Box>
            </Box>
            <Box sx={styles.categoryWrapper}>
              <Typography sx={styles.unitTitle}>Category</Typography>
              <Box sx={styles.categoryDescr}>
                {category.map((item) => (
                  <Box key={item.value} sx={styles.unitCategory}>
                    <Typography>{item.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.unitPanelWrapper}>
            <Box sx={styles.unitPanelHours}>
              <ClockIcon style={styles.infoIcon} />
              <Box sx={styles.unitDescr}>
                <Typography sx={styles.unitTitle}>Working hours</Typography>
                <Typography sx={styles.unitValue}>working hours</Typography>
              </Box>
            </Box>
            <Box sx={styles.unitPanelAction}>
              <Typography sx={styles.unitTitle}>
                {unitStatus ? ACTIVE : NOT_ACTIVE}
              </Typography>
              <SwitchButton
                checked={unitStatus}
                sx={styles.switchButton}
                onClick={handleSwitchButton}
              />
            </Box>
          </Box>
        </Collapse>
      </Card>
      <CardModal
        openModal={isOpenModal}
        modalClose={handleSwitchButton}
        handleAction={handleStatusToggle}
        type={STATUS}
        name={name}
        userStatus={unitStatus ? USER_ACTIVE_STATUS : ""}
      />
      <CardMenu open={open} anchorEl={anchorEl} onClick={handleClose}>
        <Box sx={styles.itemsMenuWrapper}>
          {menuItems.map((item, index) => (
            <Box key={item.id} onClick={handleClickMenu(item.type, id)}>
              <MenuItem
                sx={styles.menuItem}
                selected={selectedItem === item.type}
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
    </>
  );
};
