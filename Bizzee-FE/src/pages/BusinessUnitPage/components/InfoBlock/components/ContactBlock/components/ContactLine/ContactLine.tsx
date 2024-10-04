import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { styles } from "./ContactLine.styled";
import { IContactLineProps } from "../../typed";

export const ContactLine = ({ Icon, children, link }: IContactLineProps) => (
  <Box sx={styles.contactInfo}>
    <Icon style={styles.infoIcon} />
    {link ? (
      <Link sx={styles.link} href={link}>
        <Typography>{children}</Typography>
      </Link>
    ) : (
      <Typography>{children}</Typography>
    )}
  </Box>
);
