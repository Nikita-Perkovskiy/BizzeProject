import { fontSize } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";
export const styles = {
  photoInputContainer: {
    position: {
      xs: "relative",
      lg: "absolute",
    },
    top: {
      xs: "-50%",
      lg: "12px",
    },
    mt: {
      xs: "-110px",
      lg: "0px",
    },
    left: {
      xs: "50%",
      lg: "50px",
    },
    ml: {
      xs: "-110px",
      lg: "0px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    backgroundColor: colors.gray.disabled,
    border: "10px solid",
    borderColor: colors.background.default,
    zIndex: 2,
  },
  bgImageContainer: {
    width: {
      xs: "100%",
      lg: "85%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: {
      lg: "center",
    },
    height: "245px",
    borderRadius: "10px",
    backgroundColor: colors.gray.disabled,
    position: {
      lg: "absolute",
    },
    right: {
      xs: "40px",
      lg: "0px",
    },
    zIndex: 1,
  },
  photoInputWrapper: {
    position: "relative",
    top: "-5px",
  },
  bgInputWrapper: {
    mt: {
      xs: "35px",
      lg: "0px",
    },
  },
  addPhotoElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    height: "70px",
    borderRadius: "10px",
    backgroundColor: colors.gray.dividers,
    cursor: "pointer",
    color: "background.default",
  },
  addBannerPhotoElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: {
      xs: "250px",
      lg: "335px",
    },
    height: {
      xs: "88px",
      lg: "115px",
    },
    borderRadius: "10px",
    backgroundColor: colors.gray.dividers,
    cursor: "pointer",
    color: "background.default",
  },
  addPhotoText: {
    fontWeight: "700",
    fontSize: fontSize.m,
    lineHeight: "24px",
    color: colors.background.default,
  },
  addPhotoAvatarWrapper: {
    border: "7px solid",
    borderColor: colors.background.default,
    borderRadius: "50%",
  },
  addBannerAvatarWrapper: {
    width: "100%",
  },
  addPhotoAvatar: {
    width: "210px",
    height: "210px",
    borderRadius: "50%",
    border: "3px solid",
    borderColor: colors.background.default,
  },
  addPhotoMasterAvatar: {
    width: "210px",
    height: "210px",
    borderRadius: "50%",
    border: "3px solid",
    borderColor: colors.accents.main,
  },
  addBgPhoto: {
    "&.MuiAvatar-root.MuiAvatar-circular": {
      borderRadius: "10px",
      width: "100%",
      backgroundSize: "cover",
    },
    height: "245px",
  },
  avatarPosition: {
    position: "relative",
    top: {
      xs: "-50%",
      lg: "12px",
    },
    mt: {
      xs: "-110px",
      lg: 0,
    },
    left: {
      xs: "50%",
      lg: "50px",
    },
    ml: {
      xs: "-110px",
      lg: 0,
    },
    zIndex: 4,
  },
  bannerPosition: {
    width: {
      xs: "100%",
      lg: "86%",
    },
    position: {
      lg: "absolute",
    },
    right: {
      lg: "0px",
    },
    "& .MuiBadge-badge": {
      justifyContent: "unset",
      alignItems: "unset",
      top: "30px",
      right: "30px",
    },
  },
  pencilIconWrapper: {
    all: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: colors.text.primary,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: colors.accents.main,
    },
  },
  pencilIconWrapperOpen: {
    backgroundColor: colors.accents.main,
  },
  menuContainer: {
    "& .MuiList-root": {
      padding: "20px 40px",
      boxShadow: shadows.main,
    },
    "& .MuiMenu-paper": {
      borderRadius: "10px",
    },
  },
  menuItem: {
    paddingTop: "14px",
    paddingRight: "12px",
    paddingBottom: "14px",
    paddingLeft: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom: "1px solid",
    borderColor: colors.gray.dividers,
  },
  menuItemDelete: {
    borderBottom: "none",
  },
  menuItemText: {
    fontWeight: "400",
    fontSize: fontSize.m,
    lineHeight: "24px",
    color: colors.text.primary,
    cursor: "pointer",
  },
  menuItemDeleteText: {
    fontWeight: "400",
    fontSize: fontSize.m,
    lineHeight: "24px",
    color: colors.error.main,
    cursor: "pointer",
  },
  inputPosition: {
    opacity: "0",
    width: "0px",
    height: "0px",
  },
};
