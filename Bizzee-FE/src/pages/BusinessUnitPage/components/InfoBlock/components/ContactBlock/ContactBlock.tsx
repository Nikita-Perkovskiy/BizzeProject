import React, { FC } from "react";
import { Box } from "@mui/material";
import { Title } from "components/Title/Title";
import { styles } from "./ContactBlock.styled";
import { ReactComponent as Mail } from "assets/svg/icon_mail.svg";
import { ReactComponent as Phone } from "assets/svg/solar_phone-outline.svg";
import { ReactComponent as Location } from "assets/svg/location.svg";
import { formatPhoneNumber } from "utils";
import { ContactLine } from "./components/ContactLine";
import { IContactBlock } from "./typed";

export const ContactBlock: FC<IContactBlock> = ({ contactInfo }) => {
  return (
    <Box sx={styles.blockWrapper}>
      <Title text="Contact" />
      <Box sx={styles.contactsWrapper}>
        <ContactLine Icon={Mail}>
          {contactInfo?.email || "example@example.com"}
        </ContactLine>
        <ContactLine
          Icon={Phone}
          link={`tel:${formatPhoneNumber(
            contactInfo?.countryCode || "+48",
            contactInfo?.phoneNumber || "000000000",
          )}`}
        >
          {formatPhoneNumber(
            contactInfo?.countryCode || "+48",
            contactInfo?.phoneNumber || "000000000",
          )}
        </ContactLine>
        <ContactLine Icon={Location}>
          {`${contactInfo?.city || "City"}, st. ${
            contactInfo?.address || "Address"
          }`}
        </ContactLine>
      </Box>
    </Box>
  );
};
