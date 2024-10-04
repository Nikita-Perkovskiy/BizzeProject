import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, useMediaQuery } from "@mui/material";
import { styles } from "./DealsSlider.styled";
import { ServiceCard } from "components/ServiceCard";
import { servicesInfo } from "pages/HomePage/constants";
import "swiper/css";
import "swiper/css/pagination";

export const DealsSlider = () => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Box sx={styles.dealsWrapper}>
      <Swiper
        className="dealsSlider"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: ".dealsNext",
          prevEl: ".dealsPrev",
        }}
        pagination={
          isTablet
            ? false
            : {
                clickable: true,
                dynamicBullets: true,
              }
        }
      >
        {servicesInfo.map((service) => (
          <SwiperSlide key={service.id}>
            <Box sx={styles.cardWrapper}>
              <ServiceCard serviceInfo={service} dealsCard />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
