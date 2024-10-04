export const styles = {
  section: {
    position: "relative",
    paddingTop: {
      xs: "140px",
      md: "115px",
      lg: "220px",
    },
  },
  contentContainer: {
    height: {
      xs: "355px",
      md: "368px",
      lg: "580px",
    },
    maxWidth: {
      xs: "360px",
      md: "768px",
      lg: "1920px",
    },
    mx: "auto",
    paddingTop: {
      xs: "35px",
      md: "40px",
      lg: "115px",
    },
    paddingLeft: {
      xs: "15px",
      md: "70px",
      lg: "250px",
    },
    paddingRight: {
      xs: "15px",
    },
    position: "relative",
  },
  backgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    display: "flex",
    justifyContent: "center",
    "& .mobileBg": {
      width: {
        xs: "360px",
      },
      position: "relative",
      top: "140px",
      display: {
        md: "none",
      },
    },
    "& .tabletBg": {
      width: {
        md: "768px",
      },
      position: "relative",
      top: "115px",
      display: {
        xs: "none",
        md: "block",
        lg: "none",
      },
    },
    "& .desktopBg": {
      width: {
        lg: "1670px",
      },
      position: "relative",
      top: "220px",
      left: "-120px",
      display: {
        xs: "none",
        md: "none",
        lg: "block",
      },
    },
  },
  sectionTitle: {
    lineHeight: {
      lg: "1.05",
    },
    color: "accents.main",
    marginBottom: {
      xs: "10px",
      md: "25px",
      lg: "10px",
    },
  },
  mainText: {
    width: {
      md: "465px",
      lg: "620px",
    },
    marginBottom: {
      xs: "20px",
      md: "50px",
    },
    fontSize: {
      lg: "22px",
    },
    lineHeight: {
      lg: 1.35,
    },
    letterSpacing: {
      lg: "0.15px",
    },
    color: "background.default",
  },
  readMoreBtn: {
    height: {
      xs: "50px",
      lg: "70px",
    },
    width: {
      xs: "100%",
      md: "305px",
      lg: "350px",
    },
    marginBottom: {
      xs: "25px",
      lg: 0,
    },
    position: {
      lg: "absolute",
    },
    zIndex: 2,
    bottom: {
      lg: "130px",
    },
    left: {
      lg: "1270px",
    },
    fontSize: {
      lg: "18px",
    },
    fontWeight: {
      lg: "700",
    },
    lineHeight: {
      lg: "1.33",
    },
    letterSpacing: {
      lg: "-0.07px",
    },
    borderRadius: {
      lg: "10px",
    },
  },
};

export const sliderStyles = {
  sliderContainer: {
    position: "absolute",
    top: {
      xs: "-90px",
      md: "-20px",
      lg: "-60px",
    },
    left: {
      xs: "255px",
      md: "560px",
      lg: "985px",
    },
    width: {
      xs: "105px",
      md: "195px",
      lg: "510px",
    },
    height: {
      xs: "170px",
      md: "220px",
      lg: "510px",
    },
    "& .swiper": {
      height: "100%",
      width: "100%",
    },
    "& .swiper-wrapper": {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  photoCard: {
    borderRadius: {
      xs: "5px",
      md: "7px",
      lg: "22px",
    },
    width: {
      xs: "80px",
      md: "105px",
      lg: "250px",
    },
    height: {
      xs: "170px",
      md: "220px",
      lg: "510px",
    },
  },
};
