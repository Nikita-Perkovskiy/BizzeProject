import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapse,
  IconButton,
  MenuItem,
  Typography,
  useMediaQuery,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { CardModal } from "pages/Settings/components/CardModal";
import { IServices } from "../../types";
import { useDispatch } from "react-redux";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as MoreVertical } from "assets/svg/icon_more-vertical.svg";
import { ReactComponent as Descr } from "assets/svg/description.svg";
import { ReactComponent as PriceIcon } from "assets/svg/icon_price.svg";
import { ReactComponent as IconAmoon } from "assets/svg/icon-amoon.svg";
import { ReactComponent as AddressIcon } from "assets/svg/location.svg";
import { ReactComponent as PlusIcon } from "assets/svg/plus_icon.svg";
import { styles } from "./ServicesCard.styled";
import { styles as styled } from "pages/Settings/Settings.styled";
import {
  ACTIVE,
  DELETE,
  EDIT,
  NOT_ACTIVE,
  STATUS,
  USER_ACTIVE_STATUS,
} from "pages/Settings/constants";
import { SwitchButton } from "components/SwitchButton";
import {
  MOBILE_DESCR_LENGTH,
  TABLET_DESCR_LENGTH,
  DESKTOP_DESCR_LENGTH,
  menuItems,
} from "./constants";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";
import { updateServicesStatus } from "api/Services/upddateServicesStatus";
import { useNotificationToast } from "hooks/useNotificationToast";
import { CardMenu } from "components/CardMenu";

export const ServicesCard = ({
  procedureId,
  title,
  description,
  category,
  additionalServiceDtos,
  location,
  priceMin,
  priceMax,
  currency,
  isActive,
  price,
  setId,
  deleteId,
}: IServices) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [serviceStatus, setServiceStatus] = useState<boolean>(isActive);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const handleExpandClick = () => setExpanded((prev) => !prev);
  const handleSwitchButton = () => setIsOpenModal((prev) => !prev);
  const handleToggleDescription = () => setShowFullDescription((prev) => !prev);
  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleServiceEdit = (serviceId: number) => {
    if (serviceId && setId) {
      setId(serviceId);
    }
  };

  const handleDeleteCard = (serviceId: number) => {
    if (serviceId && deleteId) {
      deleteId(serviceId);
    }
  };

  const handleStatusToggle = async () => {
    try {
      dispatch(pendingAction());

      await updateServicesStatus({
        id: procedureId,
        enable: !serviceStatus,
      });

      setServiceStatus((prev) => !prev);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
    setIsOpenModal((prev) => !prev);
  };

  const isSmallScreen = useMediaQuery("(min-width: 0) and (max-width: 768px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 1920px)",
  );

  const isTbablet = isMediumScreen ? TABLET_DESCR_LENGTH : DESKTOP_DESCR_LENGTH;
  const characterLimit = isSmallScreen ? MOBILE_DESCR_LENGTH : isTbablet;

  const handleClickMenu = (item: string, serviceId: number) => () => {
    setSelectedItem(item);
    item === DELETE && handleDeleteCard(serviceId);
    item === EDIT && handleServiceEdit(serviceId);
  };

  return (
    <>
      <Card sx={styled.card(serviceStatus)} className="primaryCard">
        {!serviceStatus && <Box sx={styles.overlay} />}
        <Box sx={styles.cardHeader}>
          <Box sx={styles.headerWrapper}>
            <Typography sx={styles.serviceName}>{title}</Typography>
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
            {serviceStatus ? (
              <IconButton onClick={handleMenuToggle}>
                <MoreVertical style={styles.iconMore} />
              </IconButton>
            ) : (
              <IconButton disabled disableRipple>
                <MoreVertical style={styles.iconMore} />
              </IconButton>
            )}
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto">
          <Box sx={styles.serviceInfoWrapper}>
            <Box sx={styles.serviceBlock}>
              <Descr style={styles.infoIcon} />
              <Box sx={styles.serviceDescr}>
                <Typography sx={styles.serviceTitle}>Description</Typography>
                <Typography sx={styles.serviceValue}>
                  {showFullDescription || description.length <= characterLimit
                    ? description
                    : `${description?.slice(0, characterLimit)}... `}
                  {description.length > characterLimit && (
                    <Button
                      disableRipple
                      sx={styles.showMore}
                      onClick={handleToggleDescription}
                    >
                      {showFullDescription ? "less" : "more"}
                    </Button>
                  )}
                </Typography>
              </Box>
            </Box>
            {GenerateInfoCard({
              icon: <IconAmoon style={styles.infoIcon} />,
              title: "Category",
              value: category.title,
            })}
            {GenerateInfoCard({
              icon: <AddressIcon style={styles.infoIcon} />,
              title: "Location",
              value: location.title,
            })}
            {!!additionalServiceDtos?.length && (
              <GenerateInfoCard
                icon={<PlusIcon style={styles.infoIcon} />}
                title="Additional Services"
                value={additionalServiceDtos
                  .map((service) => service.title)
                  .join(", ")}
              />
            )}
            <Box sx={styles.servicePanelWrapper}>
              <Box sx={styles.servicePanel}>
                <PriceIcon style={styles.infoIcon} />
                <Box sx={styles.serviceDescr}>
                  <Typography sx={styles.serviceTitle}>Price</Typography>
                  <Typography sx={styles.serviceCurency}>
                    {price ? `${price}` : `${priceMin}-${priceMax}`}
                    &ensp;{currency}
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.servicePanelAction}>
                <Typography sx={styles.serviceTitle}>
                  {serviceStatus ? ACTIVE : NOT_ACTIVE}
                </Typography>
                <SwitchButton
                  checked={serviceStatus}
                  sx={styles.switchButton}
                  onClick={handleSwitchButton}
                />
              </Box>
            </Box>
          </Box>
        </Collapse>
      </Card>
      <CardMenu
        sx={styles.menuWrapper}
        open={open}
        anchorEl={anchorEl}
        onClick={handleClose}
      >
        <Box sx={styles.menuItemsWrapper}>
          {menuItems.map((item, index) => (
            <Box
              key={item.id}
              onClick={handleClickMenu(item.type, procedureId)}
            >
              <MenuItem
                sx={styles.showMoreMenuItem}
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
      <CardModal
        openModal={isOpenModal}
        modalClose={handleSwitchButton}
        handleAction={handleStatusToggle}
        type={STATUS}
        name={title}
        userStatus={serviceStatus ? USER_ACTIVE_STATUS : ""}
      />
    </>
  );
};
