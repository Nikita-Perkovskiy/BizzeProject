import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { ReactComponent as SignInIcon } from "assets/svg/gg_log-out.svg";
import { styles } from "./SignInBtn.styled";
import { Link } from "react-router-dom";
import { routes } from "config/routes";

export const SignInBtn: FC = () => {
  return (
    <Link to={`${routes.auth.root}/${routes.auth.signin}`}>
      <Button sx={styles.signInBtn} className="primaryYellow">
        <SignInIcon width={20} height={20} />
        <Typography variant="buttonText" sx={styles.signInBtnText}>
          Sign In
        </Typography>
      </Button>
    </Link>
  );
};
