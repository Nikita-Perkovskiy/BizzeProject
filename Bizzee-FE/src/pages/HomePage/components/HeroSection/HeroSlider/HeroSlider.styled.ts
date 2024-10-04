export const styles = {
  sliderWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "-1",
    "& .swiper": {
      height: "100%",
      borderRadius: "10px",
    },
  },
  mainSlider: {
    position: "absolute",
    top: {
      xs: "65px",
      md: "0",
    },
    left: {
      xs: "calc(50px + 60%)",
      md: "calc(15% - 92px)",
      lg: "calc(22% - 308px)",
    },
    zIndex: 3,
    height: {
      xs: "310px",
      lg: "500px",
    },
    width: {
      xs: "195px",
      md: "35%",
      lg: "35%",
    },
    minWidth: {
      xs: "195px",
      md: "220px",
      lg: "560px",
    },
  },
  secondarySlider: {
    width: {
      md: "190px",
      lg: "410px",
    },
    height: {
      md: "110px",
      lg: "250px",
    },
  },
  middleSlider: {
    position: "absolute",
    top: {
      xs: "30px",
      md: 0,
    },
    left: {
      xs: "calc(35% - 20px)",
      md: "calc(50% - 80px)",
      lg: "calc(50% - 130px)",
    },
    zIndex: 2,
    width: {
      xs: "205px",
    },
    height: {
      xs: "140px",
    },
  },
  lastSlider: {
    position: "absolute",
    top: "0",
    left: {
      xs: "0",
      md: "calc(50% + 117px)",
      lg: "calc(50% + 293px)",
    },
    zIndex: 1,
    width: {
      xs: "190px",
    },
    height: {
      xs: "120px",
    },
  },
};
