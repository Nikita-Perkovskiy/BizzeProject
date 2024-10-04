import React from "react";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { styles } from "./MasterCard.styled";
import { Title } from "components/Title/Title";
import { IMasterCardProps } from "./typed";

export const MasterCard = ({
  imageLink,
  fullName,
  category,
}: IMasterCardProps) => {
  return (
    <Card sx={styles.wrapperCard}>
      <Avatar sx={styles.profileAvatar} src={imageLink} alt="Profile Avatar" />
      <Box sx={styles.profileBlock}>
        <Title text={fullName} />
        <Box sx={styles.profileSpeciality}>
          {category &&
            category.map((category, id) => (
              <Typography sx={styles.specialityText} key={id}>
                {category.title}
              </Typography>
            ))}
        </Box>
      </Box>
    </Card>
  );
};
