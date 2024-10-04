import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { IStaffInfo } from "./types";
import { styles } from "./StaffInfo.styled";
import { ReactComponent as IconLanguages } from "assets/svg/icon-languages.svg";
import { ReactComponent as MailIcon } from "assets/svg/icon_mail.svg";
import { ReactComponent as ClockIcon } from "assets/svg/uiw_time-o.svg";
import { ReactComponent as IconAmoon } from "assets/svg/icon-amoon.svg";
import { formatDate } from "utils";
import { SwitchButton } from "components/SwitchButton";
import { IStaffValue } from "../StaffCard/types";
import { ACTIVE, NOT_ACTIVE } from "pages/Settings/constants";
import { GenerateInfoCard } from "pages/Settings/components/GenerateInfoCard";

export const StaffInfo = ({
  email,
  experience,
  category,
  language,
  addedDate,
  lastVisitDate,
  onClick,
  status,
  disabled,
}: IStaffInfo) => {
  const correctStyles = status ? styles.userInfoValue : styles.userInfoTitle;

  const createdAtDate = useMemo(() => formatDate(addedDate), [addedDate]);
  const lastOnlineDate = useMemo(
    () => formatDate(lastVisitDate),
    [lastVisitDate],
  );

  const formatWithCommas = useMemo(
    () => (items: IStaffValue[]) => items?.map((item) => item.title).join(", "),
    [],
  );

  return (
    <Box sx={styles.userInfoWrapper}>
      {GenerateInfoCard({
        icon: <MailIcon style={styles.infoIcon} />,
        title: "E-mail",
        value: email,
      })}
      {GenerateInfoCard({
        icon: <ClockIcon style={styles.infoIcon} />,
        title: "Experience",
        value: experience.title,
      })}
      {GenerateInfoCard({
        icon: <IconAmoon style={styles.infoIcon} />,
        title: "Category",
        value: formatWithCommas(category),
      })}
      {GenerateInfoCard({
        icon: <IconLanguages style={(styles.icon, styles.infoIcon)} />,
        title: "Languages",
        value: formatWithCommas(language),
      })}
      <Box sx={styles.userInfoPanelWrapper}>
        <Box sx={styles.userInfoPanelDate}>
          <Box sx={styles.userInfoDescr}>
            <Typography sx={styles.userInfoTitle}>Added</Typography>
            <Typography sx={correctStyles}>{createdAtDate}</Typography>
          </Box>
          <Box sx={styles.userInfoDescr}>
            <Typography sx={styles.userInfoTitle}>Last Visit</Typography>
            <Typography sx={correctStyles}>{lastOnlineDate}</Typography>
          </Box>
        </Box>
        <Box sx={styles.userInfoPanelAction}>
          <Typography sx={styles.userInfoTitle}>
            {status ? ACTIVE : NOT_ACTIVE}
          </Typography>
          <SwitchButton
            checked={status}
            sx={styles.switchButton}
            onClick={onClick}
            disabled={disabled}
          />
        </Box>
      </Box>
    </Box>
  );
};
