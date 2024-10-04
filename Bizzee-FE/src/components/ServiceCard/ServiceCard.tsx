import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  useTheme,
} from "@mui/material";
import { defineCardStyles } from "./ServiceCard.styled";
import { IServiceCardProps } from "./types";
import { ReactComponent as StarIcon } from "assets/svg/star-icon.svg";

export const ServiceCard: FC<IServiceCardProps> = ({
  serviceInfo,
  dealsCard = false,
}) => {
  const { title, description, location, image, type, rating, reviews } =
    serviceInfo;

  const styles = defineCardStyles(dealsCard);
  const theme = useTheme();

  return (
    <Card sx={styles.cardContainer}>
      <CardActionArea sx={{ height: "100%" }}>
        <Box sx={styles.contentContainer}>
          <Box sx={styles.typeBadge}>
            <Typography sx={styles.typeContent}>{type}</Typography>
          </Box>
          <Box sx={styles.ratingBadge}>
            <Box sx={styles.ratingContainer}>
              <StarIcon
                fill={
                  rating
                    ? theme.palette.accents.main
                    : theme.palette.text.secondary
                }
              />
              <Typography sx={styles.ratingNumber}>{rating || "-"}</Typography>
            </Box>
            <Box sx={styles.reviewsContainer}>
              <Typography sx={styles.reviews}>{reviews}</Typography>
              <Typography sx={styles.reviews}>reviews</Typography>
            </Box>
          </Box>
          <CardMedia sx={styles.cardImage} image={image} title={title} />
          <CardContent sx={styles.textWrapper}>
            <Typography sx={styles.cardTitle}>{title}</Typography>
            <Typography sx={styles.description}>{description}</Typography>
            <Typography sx={styles.location}>{location}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
