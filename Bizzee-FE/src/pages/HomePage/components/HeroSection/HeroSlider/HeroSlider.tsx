import React from "react";
import { styles } from "./HeroSlider.styled";
import { Box, Card, CardMedia } from "@mui/material";
import { heroPhotos, heroSlidersConfig } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css/effect-fade";

export const HeroSlider = () => {
  return (
    <Box sx={styles.sliderWrapper}>
      {heroSlidersConfig.map((slider, idx) => (
        <Box key={slider.name} sx={slider.styles}>
          <Swiper
            className={slider.name}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            initialSlide={idx}
          >
            {heroPhotos.map((img) => (
              <SwiperSlide key={img.id}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={img.photo}
                    sx={{ height: "100%" }}
                    title={img.title}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ))}
    </Box>
  );
};
