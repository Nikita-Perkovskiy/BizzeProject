import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapse,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as Descr } from "assets/svg/description.svg";
import { ReactComponent as PriceIcon } from "assets/svg/icon_price.svg";
import { ReactComponent as IconAmoon } from "assets/svg/icon-amoon.svg";
import { ReactComponent as AddressIcon } from "assets/svg/location.svg";
import { ReactComponent as PlusIcon } from "assets/svg/plus_icon.svg";
import { styles } from "./MasterServiceCard.styled";
import { styles as styled } from "pages/Settings/Settings.styled";
import { ACTIVE, NOT_ACTIVE } from "pages/Settings/constants";
import { SwitchButton } from "components/SwitchButton";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";
import { updateServicesStatus } from "api/Services/upddateServicesStatus";
import { useNotificationToast } from "hooks/useNotificationToast";
import { DESKTOP_DESCR_LENGTH } from "./constants";
import { MOBILE_DESCR_LENGTH, TABLET_DESCR_LENGTH } from "config/constants";
import { IMasterServiceCard } from "./types";

export const MasterServiceCard = ({
  id,
  title,
  description,
  category,
  additionalServiceDtos,
  location,
  priceMin,
  priceMax,
  currency,
  isActiveForMaster,
  priceType,
  handleAddServices,
  handleRemoveServices,
}: IMasterServiceCard) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [serviceStatus, setServiceStatus] =
    useState<boolean>(isActiveForMaster);
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => setExpanded((prev) => !prev);
  const handleToggleDescription = () => setShowFullDescription((prev) => !prev);

  const handleSaveStatus = async () => {
    try {
      dispatch(pendingAction());
      await updateServicesStatus({
        id: id,
        enable: !serviceStatus,
      });
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  useEffect(() => {
    if (serviceStatus) {
      handleAddServices({ id, category: category.value });
    } else {
      handleRemoveServices({ id, category: category.value });
    }
  }, [serviceStatus]);

  const handleStatusToggle = () => {
    handleSaveStatus();
    setServiceStatus((prev) => !prev);
  };

  const isSmallScreen = useMediaQuery("(min-width: 0) and (max-width: 768px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 769px) and (max-width: 1120px)",
  );

  const isTbablet = isMediumScreen ? TABLET_DESCR_LENGTH : DESKTOP_DESCR_LENGTH;
  const characterLimit = isSmallScreen ? MOBILE_DESCR_LENGTH : isTbablet;

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
                  .map((service) => service.optionTitle)
                  .join(", ")}
              />
            )}
            <Box sx={styles.servicePanel}>
              <PriceIcon style={styles.infoIcon} />
              <Box sx={styles.serviceDescr}>
                <Typography sx={styles.serviceTitle}>Price</Typography>
                <Typography sx={styles.serviceCurency}>
                  {priceType ? `${priceType.title}` : `${priceMin}-${priceMax}`}
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
                onClick={handleStatusToggle}
              />
            </Box>
          </Box>
        </Collapse>
      </Card>
    </>
  );
};
