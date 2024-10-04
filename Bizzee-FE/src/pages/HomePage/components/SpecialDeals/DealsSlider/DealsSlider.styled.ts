export const styles = {
  dealsWrapper: {
    marginBottom: {
      md: "30px",
      lg: "40px",
    },
    "& .dealsSlider": {
      overflow: {
        xs: "hidden",
        md: "visible",
      },
    },
    "& .swiper-slide": {
      maxWidth: {
        xs: "328px",
        md: "460px",
      },
    },
    "& .swiper-horizontal > .swiper-pagination.swiper-pagination-bullets-dynamic":
      {
        marginTop: "25px",
        mx: "auto",
        position: "static",
        display: {
          md: "none",
        },
        transform: "unset",
      },
    "& .swiper-pagination-bullet": {
      width: "15px",
      height: "15px",
      backgroundColor: "rgba(17, 17, 17, 0.40)",
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "accents.main",
    },
  },
  cardWrapper: {
    minWidth: {
      xs: "328px",
      md: "460px",
    },
    minHeight: {
      xs: "220px",
      md: "460px",
    },
  },
};
