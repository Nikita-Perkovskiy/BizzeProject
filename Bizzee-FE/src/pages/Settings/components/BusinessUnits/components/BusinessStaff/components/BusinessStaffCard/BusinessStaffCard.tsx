import React, { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Collapse,
  IconButton,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styles } from "./BusinessStaffCard.styled";
import { styles as styled } from "pages/Settings/Settings.styled";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { ReactComponent as MoreVertical } from "assets/svg/icon_more-vertical.svg";
import { ReactComponent as Phone } from "assets/svg/solar_phone-outline.svg";
import { ReactComponent as Mail } from "assets/svg/icon_mail.svg";
import { ReactComponent as Time } from "assets/svg/uiw_time-o.svg";
import { ReactComponent as IconAmoon } from "assets/svg/icon-amoon.svg";
import { ReactComponent as Role } from "assets/svg/icon-services.svg";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";
import { formatDate, formatPhoneNumber } from "utils";
import { USER_ACTIVE_STATUS, selectRoles } from "pages/Settings/constants";
import { MainInputSelect } from "components/MainInputSelect";
import { IStaffCard } from "./types";
import { ICategory } from "../../types";
import { useParams } from "react-router-dom";

export const BusinessStaffCard = ({
  userId,
  imageLink,
  status,
  fullName,
  role,
  category,
  countryCode,
  phoneNumber,
  email,
  lastVisitDate,
  businessUnitIds,
  handleStaffIDs,
}: IStaffCard) => {
  const { unitId } = useParams();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [unitRole, setUnitRole] = useState<string>("Master");
  const [isChecked, setIsChecked] = useState<boolean>(
    businessUnitIds?.includes(Number(unitId)) || false,
  );

  const handleExpandClick = () => setExpanded((prev) => !prev);
  const handleSelect = (event: SelectChangeEvent): void => {
    setUnitRole(event.target.value);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    handleStaffIDs(userId, newChecked);
  };

  const formatWithCommas = useMemo(
    () => (items: ICategory[]) => items?.map((item) => item.title).join(", "),
    [],
  );

  const currentStatus = status === USER_ACTIVE_STATUS;

  return (
    <Card sx={styled.card(currentStatus)} className="primaryCard">
      {!currentStatus && <Box sx={styles.overlay} />}
      <Box sx={styles.cardHeader}>
        <Box sx={styles.headerWrapper}>
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            sx={styles.checkBox}
          />
          <Avatar sx={styles.avatar} src={imageLink} alt="User Avatar" />
          <Box sx={styles.staffTitle}>
            <Typography sx={styles.staffName}>{fullName}</Typography>
            <Typography sx={styles.role}>{role}</Typography>
          </Box>
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
          <IconButton disabled disableRipple>
            <MoreVertical style={styles.iconMore} />
          </IconButton>
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto">
        <Box sx={styles.infoWrapper}>
          <Box sx={styles.blockWrapper}>
            <Box sx={styles.blockItems}>
              {GenerateInfoCard({
                icon: <Phone style={styles.infoIcon} />,
                title: "Phone Number",
                value: formatPhoneNumber(countryCode, phoneNumber),
              })}
              {GenerateInfoCard({
                icon: <Mail style={styles.infoIcon} />,
                title: "Mail",
                value: email,
              })}
              {GenerateInfoCard({
                icon: <Time style={styles.infoIcon} />,
                title: "Last Visit",
                value: formatDate(lastVisitDate),
              })}
            </Box>
            <Box sx={styles.blockItems}>
              {GenerateInfoCard({
                icon: <IconAmoon style={styles.infoIcon} />,
                title: "Category",
                value: formatWithCommas(category),
              })}
              <Box sx={styles.infoBlock}>
                <Role style={styles.infoIcon} />
                <Box sx={styles.infoDescr}>
                  <Typography sx={styles.infoTitle}>Role</Typography>
                  <MainInputSelect
                    onChange={handleSelect}
                    value={unitRole}
                    sx={styles.select}
                  >
                    {selectRoles.map((role) => (
                      <MenuItem key={role} value={role}>
                        <Typography>{role}</Typography>
                      </MenuItem>
                    ))}
                  </MainInputSelect>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};
