import React from "react";
import { toast } from "react-toastify";
import { messageConfig } from "./constants";
import { Box, Typography } from "@mui/material";
import { IUseNotificationToast } from "./types";
import { CloseBtn } from "components/CloseBtn";
import { styles } from "./useNotificationToast.styled";

export const useNotificationToast = ({
  type,
  message,
}: IUseNotificationToast) => {
  toast(({ closeToast }) => {
    return (
      <Box>
        <CloseBtn handleClose={closeToast} sx={styles.closeBtn} />
        <Box>
          <Box sx={styles.titleWrapper}>
            {messageConfig[type].icon}
            <Typography
              sx={[styles.title, styles.titleColor(messageConfig[type].color)]}
            >
              {messageConfig[type].title}
            </Typography>
          </Box>
          <Typography sx={styles.message}>
            {message || messageConfig[type].message}
          </Typography>
        </Box>
      </Box>
    );
  });
};
