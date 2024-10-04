import React, { FC } from "react";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BusinessSection } from "../BusinessSection";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";
import { styles } from "./BusinessInfoSection.styled";
import { ReactComponent as Favorite } from "assets/svg/icon_favorite.svg";
import { IBusinessInfoSection } from "./types";
import { WorkingHoursBlock } from "pages/BusinessUnitPage/components/InfoBlock/components/WorkingHoursBlock";
import { ContactBlock } from "pages/BusinessUnitPage/components/InfoBlock/components/ContactBlock";
import { SocialMedia } from "../SocialMedia";

export const BusinessInfoSection: FC<IBusinessInfoSection> = ({
  businessInfoData,
}) => {
  const isBigScreen = useMediaQuery("(min-width: 1920px)");

  return (
    <Box sx={styles.aboutWrapper}>
      {!isBigScreen && (
        <BusinessSection sx={styles.mobileBannerAndLogo}>
          <Card sx={styles.cardMedia}>
            <IconButton sx={styles.favorite}>
              <Favorite />
            </IconButton>
            <Avatar
              sx={styles.mobileBanner}
              src={businessInfoData?.imageLink}
              alt="Business banner"
            />
            <Avatar
              sx={styles.mobileLogo}
              src={businessInfoData?.logoLink}
              alt="Business logo"
            />
          </Card>
        </BusinessSection>
      )}
      <BusinessSection>
        <Box sx={styles.mainLayout}>
          {isBigScreen && (
            <Card sx={styles.cardMedia}>
              <IconButton sx={styles.favorite}>
                <Favorite />
              </IconButton>
              <Avatar
                sx={styles.desctopBanner}
                src={businessInfoData?.imageLink}
                alt="Business logo"
              />
              <Avatar
                sx={styles.desctopLogo}
                src={businessInfoData?.logoLink}
                alt="Business banner"
              />
            </Card>
          )}
          <Box sx={styles.salonInfoWrapper}>
            <Box sx={styles.titlePart}>
              <Box sx={styles.salonStatus(businessInfoData?.status)}>
                <Typography>
                  {businessInfoData?.status ? "Open" : "Closed"}
                </Typography>
              </Box>
              <Box sx={styles.title}>
                <Typography sx={styles.titleText}>
                  {businessInfoData?.name}
                </Typography>
              </Box>
              <Box sx={styles.services}>
                {businessInfoData?.category.map((item) => (
                  <Typography key={item.value}>{item.title}</Typography>
                ))}
              </Box>
            </Box>
            <Box sx={styles.descriptionPart}>
              <Box sx={styles.description}>
                <Typography>{businessInfoData?.description}</Typography>
              </Box>
              <Box sx={styles.titlePart}>
                <Box sx={styles.tags}>
                  {businessInfoData?.additionalServices.map((service) => (
                    <Typography key={service}>
                      {capitalizeFirstLetter(service)}
                    </Typography>
                  ))}
                </Box>
                <Box sx={styles.tags}>
                  {businessInfoData?.tags.map((tag) => (
                    <Typography key={tag}>
                      #{capitalizeFirstLetter(tag)}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <SocialMedia links={businessInfoData?.links} />
            </Box>
          </Box>
          <Box sx={styles.contactDetailsWrapper}>
            <Box sx={styles.details}>
              <Box>
                <WorkingHoursBlock />
              </Box>
              <ContactBlock contactInfo={businessInfoData} />
            </Box>
          </Box>
        </Box>
      </BusinessSection>
    </Box>
  );
};
