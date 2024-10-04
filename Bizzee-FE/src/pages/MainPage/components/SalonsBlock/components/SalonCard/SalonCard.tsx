import React, { FC, useState } from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISalonCardProps } from "./types";
import { Pagination, Navigation } from "swiper";
import { styles } from "./SalonCard.styled";
import { ReactComponent as RatingIcon } from "assets/svg/star-icon.svg";
import { ReactComponent as ServicesIcon } from "assets/svg/services-icon.svg";
import { ReactComponent as LocationIcon } from "assets/svg/location.svg";
import { temporaryRating, temporarySubRating } from "./constants";
import { Title } from "components/Title/Title";
import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const SalonCard: FC<ISalonCardProps> = ({
  id,
  logo,
  image,
  tag,
  unitName,
  services,
  address,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const theme = useTheme();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleChangePage = (id: number) => {
    navigate(`${routes.landing.root}/${id}`);
  };

  const mouseHandler = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={styles.cardWrapper}
      onMouseEnter={mouseHandler}
      onMouseLeave={mouseHandler}
    >
      <Box sx={styles.swiperWrap(isLargeScreen, isHovered)}>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={isHovered}
        >
          <SwiperSlide>
            <CardMedia component="img" image={logo} alt="Logo" height="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMedia
              component="img"
              image={image}
              alt="Image"
              height="100%"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <CardContent
        sx={styles.contentWrap(isLargeScreen)}
        onClick={() => handleChangePage(id)}
      >
        <Box sx={styles.tagsWrap}>
          <Chip label={`#${tag.tag}`} sx={styles.tagText} />
          <Chip
            icon={<RatingIcon fill={theme.palette.accents.main} />}
            label={
              <>
                <Typography component="span" sx={styles.rating}>
                  {temporaryRating}
                </Typography>
                <Typography component="span" sx={styles.subRating}>
                  {temporarySubRating}
                </Typography>
              </>
            }
            sx={styles.ratingWrap}
          />
        </Box>
        <Title text={unitName} sx={styles.unitName} />
        <Box>
          <Box sx={styles.services}>
            <Box style={styles.servicesIconWrap}>
              <ServicesIcon style={styles.servicesIcon} />
            </Box>
            <Box sx={styles.servicesWrap}>
              <Typography sx={styles.servicesTitle}>Services</Typography>
              <Typography sx={styles.servicesList}>{services}</Typography>
            </Box>
          </Box>
          <Box sx={styles.location}>
            <Box style={styles.locationIconWrap}>
              <LocationIcon style={styles.locationIcon} />
            </Box>
            <Box sx={styles.locationWrap}>
              <Typography sx={styles.locationTitle}>Address</Typography>
              <Typography sx={styles.locationAddress}>{address}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Grid>
  );
};
