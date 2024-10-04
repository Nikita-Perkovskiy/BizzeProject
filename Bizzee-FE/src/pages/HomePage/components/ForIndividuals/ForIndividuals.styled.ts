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
      xs: "400px",
      md: "390px",
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
      md: 0,
    },
    paddingRight: {
      xs: "15px",
      md: "70px",
      lg: "250px",
    },
    position: "relative",
    textAlign: "right",
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
      left: "119px",
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
    marginLeft: {
      md: "auto",
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
    "&:last-of-type": {
      marginBottom: {
        xs: "20px",
        md: "25px",
        lg: "50px",
      },
    },
  },
  signUpBtn: {
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
    bottom: {
      lg: "130px",
    },
    right: {
      lg: "1270px",
    },
    zIndex: 2,
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
      xs: "-65px",
      md: "-20px",
      lg: "-60px",
    },
    right: {
      xs: "275px",
      md: "560px",
      lg: "985px",
    },
    width: {
      xs: "85px",
      md: "195px",
      lg: "510px",
    },
    height: {
      xs: "140px",
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
      xs: "60px",
      md: "105px",
      lg: "250px",
    },
    height: {
      xs: "140px",
      md: "220px",
      lg: "510px",
    },
  },
};
