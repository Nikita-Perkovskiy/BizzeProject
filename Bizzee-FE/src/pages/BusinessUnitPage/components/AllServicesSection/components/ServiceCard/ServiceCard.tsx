import React, { useState } from "react";
import { Box, Button, Card, Link, Typography } from "@mui/material";
import { styles } from "./ServiceCard.styled";
import { IServiceCardProps } from "./typed";

export const ServiceCard = ({
  title,
  description,
  price,
  duration,
}: IServiceCardProps) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const handleMoreClick = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <Card sx={styles.wrapperCard}>
      <Box sx={styles.mainBlock}>
        <Box sx={styles.blockTitle}>
          <Typography sx={styles.title}>
            {title}
            {!isDescriptionVisible && (
              <Link onClick={handleMoreClick} sx={styles.linkMore}>
                more
              </Link>
            )}
          </Typography>
        </Box>
        <Box sx={styles.blockBook}>
          <Box sx={styles.priceHourBlock}>
            <Box sx={styles.priceBlock}>
              <Typography>{price} zl</Typography>
            </Box>
            <Box sx={styles.blockTime}>
              <Typography sx={styles.verticalDivider}></Typography>
              <Typography sx={styles.duration}>{duration.title}</Typography>
            </Box>
          </Box>
          <Button
            className="primaryBlack"
            sx={styles.bookButton}
            onClick={() => null}
          >
            Book
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.blockDescription,
          maxHeight: isDescriptionVisible ? "300px" : "0px",
        }}
      >
        <Typography sx={styles.description}>
          {description} lerm asdf joi jl;oi ;lksadf lortme awqe f asdoi
          <Link onClick={handleMoreClick} sx={styles.linkMore}>
            hide
          </Link>
        </Typography>
      </Box>
    </Card>
  );
};
