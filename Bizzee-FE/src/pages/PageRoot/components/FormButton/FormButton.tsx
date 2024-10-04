import React from "react";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { FormButtonProps } from "./interface";

const FormButton: React.FC<FormButtonProps> = ({ buttonText }) => {
  return (
    <Button fullWidth sx={styles.MuiButton} type="submit">
      {buttonText}
    </Button>
  );
};

export default FormButton;
