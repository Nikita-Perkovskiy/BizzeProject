import React, { FC } from "react";
import { ReactComponent as Instagram } from "assets/svg/landing_instagram.svg";
import { ReactComponent as Facebook } from "assets/svg/landing_facebook.svg";
import { ReactComponent as Website } from "assets/svg/landing_website.svg";
import { Box, Link } from "@mui/material";
import { ISocialMediaProps, Links, LogoTypes } from "./types";
import { services } from "../../constants";
import { styles } from "./SocialMedia.styled";

export const SocialMedia: FC<ISocialMediaProps> = ({ links }) => {
  const logos: LogoTypes = {
    instagram: Instagram,
    facebook: Facebook,
    website: Website,
  };

  const socialMedia = services.map((service) => {
    const link = links ? links[service as keyof Links] : "";
    const Logo = logos[service];
    return (
      <Link key={service} href={link} target="_blank" rel="noopener noreferrer">
        <Box sx={styles.socialMedia}>
          <Logo />
        </Box>
      </Link>
    );
  });

  return <Box sx={styles.socialMediaWrapper}>{socialMedia}</Box>;
};
