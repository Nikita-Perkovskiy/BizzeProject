import { shadows } from "config/styles/shadows";

export const styles = {
  wrapperCard: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: shadows.main,
    p: "30px 40px",
    width: "100%",
    height: "140px",
    "@media (max-width: 765px)": {
      p: "20px",
    },
  },
  profileAvatar: {
    width: "80px",
    height: "80px",
  },
  profileBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    mx: "20px",
  },
  profileSpeciality: {
    display: "flex",
    flexDireciton: "row",
    gap: "20px",
  },
  specialityText: {
    color: "gray.disabled",
  },
  skeletonAvatar: {
    width: "120px",
    height: "20px",
  },
  skeletonCategory: {
    width: "50px",
    height: "20",
  },
};
