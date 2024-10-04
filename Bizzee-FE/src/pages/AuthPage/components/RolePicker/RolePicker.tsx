import React, { FC, Dispatch } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import businessImage from "assets/images/sign-up_business.png";
import clientImage from "assets/images/sign-up_client.png";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import { styles } from "./RolePicker.styled";

export interface IRolePickerProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const RolePicker: FC<IRolePickerProps> = ({ setIsOpen }) => {
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={styles.signUpBody}>
      <Box sx={styles.signUpSection}>
        <Typography sx={styles.signUpSectionText}>Sign up</Typography>
      </Box>
      <Box sx={styles.choiceSection}>
        <Card sx={styles.signUpCard}>
          <CardMedia
            component="img"
            image={businessImage}
            alt="sign-up for business"
            sx={styles.signUpImage}
          />
          <CardActions>
            <Link to={routes.auth.business}>
              <Button
                sx={styles.signUpButton}
                className="primaryYellow"
                onClick={handleOptionClick}
              >
                Business
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={styles.signUpCard}>
          <CardMedia
            component="img"
            image={clientImage}
            alt="sign-up for business"
            sx={styles.signUpImage}
          />
          <CardActions>
            <Link to={routes.auth.client}>
              <Button
                sx={styles.signUpButton}
                className="primaryYellow"
                onClick={handleOptionClick}
              >
                Client
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
