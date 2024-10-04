import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { styles } from "./FiltersSlider.styled";
import { FilterItem } from "../FilterItem";
import { filterConfig } from "./constants";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import "swiper/css";

export const FiltersSlider = () => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box sx={styles.contentWrapper}>
        <Swiper
          className="filtersSlider"
          modules={[Navigation]}
          spaceBetween={isTablet ? 15 : 10}
          slidesPerView="auto"
          navigation={{
            nextEl: ".filterNext",
            prevEl: ".filterPrev",
          }}
        >
          {filterConfig.map((filter) => (
            <SwiperSlide key={filter.name}>
              <FilterItem
                name={filter.name}
                icon={filter.icon}
                iconStyles={filter.styles}
              />
            </SwiperSlide>
          ))}
          <Box sx={styles.arrowsContainer}>
            <IconButton className="filterPrev">
              <ArrowLeft width="50px" height="50px" />
            </IconButton>
            <IconButton className="filterNext">
              <ArrowRight width="50px" height="50px" />
            </IconButton>
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};
