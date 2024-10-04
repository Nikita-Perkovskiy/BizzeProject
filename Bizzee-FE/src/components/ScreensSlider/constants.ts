import { SwiperOptions } from "swiper/types";
import { SxProps, Theme } from "@mui/material/styles";

interface ISlidesConfig {
  id: number;
  image: string;
  title: string;
}

interface IScreensSliderStyles {
  sliderContainer: SxProps<Theme>;
  photoCard: SxProps<Theme>;
}

export interface IScreensSliderProps extends SwiperOptions {
  className: string;
  dir?: string;
  sliderStyles: IScreensSliderStyles;
  slidesConfig: ISlidesConfig[];
}

export const defaultSpeed = 1000;
export const defaultAutoplay = {
  delay: 6000,
  disableOnInteraction: false,
};
export const defaultCoverflowEffect = {
  rotate: 0,
  stretch: 20,
  depth: 155,
  modifier: 3,
  slideShadows: false,
};
export const defaultBreakpoints = {
  768: {
    coverflowEffect: {
      rotate: 0,
      stretch: 30,
      depth: 92,
      modifier: 4,
      slideShadows: false,
    },
  },
  1920: {
    coverflowEffect: {
      rotate: 0,
      stretch: 60,
      depth: 115,
      modifier: 5,
      slideShadows: false,
    },
  },
};
