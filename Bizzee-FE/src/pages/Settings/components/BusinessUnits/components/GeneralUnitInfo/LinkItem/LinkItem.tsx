import {
  Box,
  Button,
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styles } from "./LinkItem.styled";
import React, { useState } from "react";
import { LinkInput } from "./LinkInput";
import { ReactComponent as DragIcon } from "assets/svg/link-drag-icon.svg";
import { ReactComponent as ClearIcon } from "assets/svg/close_icon.svg";
import { ILinkItemProps } from "./LinkItemTypes";

export const LinkItem: React.FC<ILinkItemProps> = ({
  icon,
  title,
  name,
  placeholder,
  formik,
}) => {
  const [showLinkBtn, setShowLinkBtn] = useState<boolean>(true);
  const [showLinkInput, setShowLinkInput] = useState<boolean>(false);

  const clickBtnHandler = () => {
    setShowLinkBtn((previousState) => !previousState);
    setShowLinkInput((previousState) => !previousState);
  };

  return (
    <Box sx={styles.listItemWrapper}>
      <ListItem disablePadding sx={styles.socialListItem}>
        <ListItemIcon sx={styles.dragIcon}>
          <DragIcon />
        </ListItemIcon>
        <ListItemIcon sx={styles.socialIcon}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {!formik.values[name] && (
          <Button
            sx={showLinkBtn ? styles.linkBtn : styles.invisibleLinkBtn}
            type="button"
            className="primaryYellow"
            onClick={clickBtnHandler}
          >
            Link
          </Button>
        )}
      </ListItem>
      <LinkInput
        sx={!showLinkInput ? styles.invisibleLink : null}
        name={name}
        placeholder={placeholder}
        formik={formik}
      />
      {formik.values[name] && (
        <Box>
          <Chip
            label={formik.values[name]}
            deleteIcon={<ClearIcon style={{ width: "15px", height: "15px" }} />}
            onDelete={() => {
              formik.setFieldValue(name, "");
            }}
            sx={styles.linksChipItem}
          />
        </Box>
      )}
    </Box>
  );
};
