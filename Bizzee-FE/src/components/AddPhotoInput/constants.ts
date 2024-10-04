export const MAX_FILE_SIZE = 5242880;
import { styles } from "./AddPhotoInput.styled";
import { SxProps, Theme } from "@mui/material/styles";
import { BadgeOrigin } from "@mui/material";

export const SUPPORTED_FILE_FORMATS = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
  "image/heic",
];

export const photoInputs: {
  [key: string]: {
    alt: string;
    addPhotoText: string;
    container: SxProps<Theme>;
    addPhoto: SxProps<Theme>;
    addAvatar: SxProps<Theme>;
    addAvatarWrapper: SxProps<Theme>;
    position: SxProps<Theme>;
    pencilPosition: BadgeOrigin;
    inputWrapper: SxProps<Theme>;
  };
} = {
  logo: {
    alt: "Avatar",
    addPhotoText: "Upload image",
    container: styles.photoInputContainer,
    addPhoto: styles.addPhotoElement,
    addAvatar: styles.addPhotoAvatar,
    addAvatarWrapper: styles.addPhotoAvatarWrapper,
    position: styles.avatarPosition,
    pencilPosition: { vertical: "bottom", horizontal: "right" },
    inputWrapper: styles.photoInputWrapper,
  },
  image: {
    alt: "Background image",
    addPhotoText: "Upload Banner image",
    container: styles.bgImageContainer,
    addPhoto: styles.addBannerPhotoElement,
    addAvatar: styles.addBgPhoto,
    addAvatarWrapper: styles.addBannerAvatarWrapper,
    position: styles.bannerPosition,
    pencilPosition: { vertical: "top", horizontal: "right" },
    inputWrapper: styles.bgInputWrapper,
  },
  masterLogo: {
    alt: "Avatar",
    addPhotoText: "Upload image",
    container: styles.photoInputContainer,
    addPhoto: styles.addPhotoElement,
    addAvatar: styles.addPhotoMasterAvatar,
    addAvatarWrapper: styles.addPhotoAvatarWrapper,
    position: styles.avatarPosition,
    pencilPosition: { vertical: "bottom", horizontal: "right" },
    inputWrapper: styles.photoInputWrapper,
  },
};
