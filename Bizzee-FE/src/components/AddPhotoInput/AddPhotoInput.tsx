import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { styles } from "./AddPhotoInput.styled";
import { ReactComponent as DownloadIcon } from "assets/svg/download_icon.svg";
import { ReactComponent as PencilIcon } from "assets/svg/pencil_icon.svg";
import { ReactComponent as PencilIconBlack } from "assets/svg/pencil_icon_black.svg";
import { ReactComponent as DeleteIcon } from "assets/svg/delete_icon.svg";
import { IAddPhotoInput } from "./AddPhotoInputTypes";
import { photoInputs } from "./constants";
import { MainModal } from "components/MainModal";
import { MAX_FILE_SIZE, SUPPORTED_FILE_FORMATS } from "./constants";

export const AddPhotoInput: React.FC<IAddPhotoInput> = ({
  formik,
  id,
  name,
  link,
  isDelete,
}) => {
  const [selectedData, setSelectedData] = useState<File | null>(null);
  const [avatarLink, setAvatarLink] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const textFieldRef = useRef<HTMLLabelElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (name && selectedData) {
      formik.setFieldValue(name, selectedData);
    }
    if (isDelete && selectedData) {
      isDelete(false);
    }
  }, [selectedData]);
  useEffect(() => {
    if (link) {
      setAvatarLink(link as string);
    }
  }, [link]);

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files && event.target.files[0];
    const maxSizeInBytes = MAX_FILE_SIZE;
    const acceptableFileTypes = SUPPORTED_FILE_FORMATS;

    if (file) {
      if (
        file.size > maxSizeInBytes ||
        (event.target.files && event.target.files.length > 1)
      ) {
        return;
      } else {
        if (acceptableFileTypes.includes(file.type)) {
          setSelectedData(file);
          const objectURL = URL.createObjectURL(file);
          setAvatarLink(objectURL);
        }
      }
    }
  };

  const handleCombinedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelection(event);
    formik.handleChange(event);
  };

  const handleToggleModal = (): void => {
    setOpenModal((prev) => !prev);
  };

  const handleDeleteFileSelection = (): void => {
    setSelectedData(null);
    if (isDelete) {
      isDelete(true);
    }
    setAvatarLink("");
    setAnchorEl(null);
    setOpenModal((prev) => !prev);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFileChange = () => {
    textFieldRef.current ? textFieldRef.current.click() : null;
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <input
          id={id}
          name={name}
          type="file"
          multiple
          style={{
            ...styles.inputPosition,
            position: "absolute",
          }}
          onChange={handleCombinedChange}
        />
        <label ref={textFieldRef} htmlFor={id}></label>
        {avatarLink ? (
          <Badge
            sx={photoInputs[name].position}
            overlap="circular"
            anchorOrigin={photoInputs[name].pencilPosition}
            badgeContent={
              <Box>
                <Button
                  sx={{
                    ...styles.pencilIconWrapper,
                    ...(open && styles.pencilIconWrapperOpen),
                  }}
                  onClick={handleClick}
                >
                  <PencilIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={styles.menuContainer}
                  transformOrigin={{
                    vertical: -5,
                    horizontal: 140,
                  }}
                >
                  <MenuItem onClick={handleFileChange} sx={styles.menuItem}>
                    <PencilIconBlack />
                    <Typography sx={styles.menuItemText}>Edit</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleToggleModal}
                    sx={{
                      ...styles.menuItem,
                      ...styles.menuItemDelete,
                    }}
                  >
                    <DeleteIcon />
                    <Typography sx={styles.menuItemDeleteText}>
                      Delete
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            }
          >
            <Box sx={photoInputs[name].addAvatarWrapper}>
              <Avatar
                sx={photoInputs[name].addAvatar}
                alt={photoInputs[name].alt}
                src={avatarLink}
              />
            </Box>
          </Badge>
        ) : (
          <Box sx={photoInputs[name].container}>
            <Box sx={photoInputs[name].inputWrapper}>
              <Box sx={photoInputs[name].addPhoto} onClick={handleFileChange}>
                <DownloadIcon />
                <Typography sx={styles.addPhotoText}>
                  {photoInputs[name].addPhotoText}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <MainModal
        openModal={openModal}
        modalClose={handleToggleModal}
        handleAction={handleDeleteFileSelection}
        titleMessage="Are you sure?"
        bodyMessage="Do you really want to delete this image?"
        buttonMessage="Delete"
      />
    </>
  );
};
