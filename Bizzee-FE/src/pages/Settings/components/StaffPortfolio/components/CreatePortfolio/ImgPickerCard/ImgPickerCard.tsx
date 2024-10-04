import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Box, Card, CardMedia, TextField } from "@mui/material";
import { ReactComponent as DragIcon } from "assets/svg/drag-icon.svg";
import { styles } from "./ImgPickerCard.styled";
import { IImgPickerCardProps } from "./types";
import noPotoImg from "assets/images/portfolio_add_image.png";
import { RoundIconButton } from "components/RoundIconButton";
import { ReactComponent as DeleteIcon } from "assets/svg/icon_close.svg";
import { colors } from "config/styles/themeColors";
import { ENTER_KEY, MAX_IMAGE_SIZE, acceptImgFormats } from "config/constants";

export const ImgPickerCard: FC<IImgPickerCardProps> = memo(
  ({
    initialOrder,
    maxImages,
    setImgFiles,
    file,
    onOrderChange,
    setImgUrls,
    imgUrl,
    onDeleteImg,
    savedLink,
    setSavedLinks,
  }) => {
    const [order, setOrder] = useState(initialOrder);
    const [isTooLarge, setIsTooLarge] = useState(false);

    const handleOrderChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const newOrder =
        Number(e.target.value) > maxImages ? maxImages : Number(e.target.value);
      setOrder(newOrder);

      if (newOrder) {
        onOrderChange(newOrder);
      }
    };

    useEffect(() => {
      setIsTooLarge(!!file && file.size > MAX_IMAGE_SIZE);
      setOrder(initialOrder);
    }, [file, savedLink]);

    const handleUploadClick = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const files = (event.target as HTMLInputElement).files;

      if (files) {
        Array.from(files).forEach((file, fileIdx) => {
          setImgFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            const isMultiple =
              files.length > 1 &&
              (updatedFiles[fileIdx] === null || updatedFiles[fileIdx]);

            updatedFiles[isMultiple ? fileIdx : order - 1] = file;

            return updatedFiles;
          });

          setImgUrls((prevUrls) => {
            const updatedUrls = [...prevUrls];
            const isMultiple =
              files.length > 1 &&
              (updatedUrls[fileIdx] === null || updatedUrls[fileIdx]);
            const currentUrl = updatedUrls[isMultiple ? fileIdx : order - 1];

            currentUrl && URL.revokeObjectURL(currentUrl as string);

            updatedUrls[isMultiple ? fileIdx : order - 1] =
              URL.createObjectURL(file);

            return updatedUrls;
          });

          setSavedLinks((prevLinks) => {
            const updatedLinks = [...prevLinks];
            const isMultiple =
              files.length > 1 &&
              (updatedLinks[fileIdx] === null || updatedLinks[fileIdx]);

            updatedLinks[isMultiple ? fileIdx : order - 1] = null;

            return updatedLinks;
          });

          if (files.length === 1) {
            event.target.value = "";
          }
        });
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === ENTER_KEY) {
        e.preventDefault();
      }
    };

    return (
      <Box sx={[styles.card, isTooLarge ? { borderColor: "error.main" } : {}]}>
        <Box sx={styles.drag}>
          <DragIcon color={isTooLarge ? colors.error.main : "currentColor"} />
        </Box>
        <TextField
          type="file"
          inputProps={{
            accept: acceptImgFormats,
            multiple: true,
          }}
          label={
            <Box sx={styles.container}>
              <Card
                sx={{
                  borderRadius: 0,
                  boxShadow: "unset",
                  position: "relative",
                }}
              >
                {(imgUrl || savedLink?.imageLink) && (
                  <RoundIconButton
                    icon={<DeleteIcon width={20} height={20} />}
                    onClick={() => onDeleteImg(order - 1)}
                    sx={styles.deleteBtn}
                  />
                )}
                <CardMedia
                  sx={{ height: 200, width: "200px" }}
                  image={
                    (!!savedLink?.imageLink && savedLink?.imageLink) ||
                    imgUrl ||
                    noPotoImg
                  }
                  title="portfolio item"
                />
              </Card>
            </Box>
          }
          InputLabelProps={{
            shrink: true,
            sx: styles.label,
            onClick: (e: React.MouseEvent) => {
              (savedLink?.imageLink || imgUrl) && e.preventDefault();
            },
          }}
          InputProps={{
            disableUnderline: true,
            sx: { display: "none" },
          }}
          variant="filled"
          sx={styles.wrapper}
          onChange={handleUploadClick}
        />
        <TextField
          value={((savedLink?.imageLink || file) && order) || ""}
          variant="standard"
          placeholder="Add numbering"
          InputProps={{
            disableUnderline: true,
            sx: [
              styles.numberInput,
              isTooLarge
                ? {
                    "&.MuiInputBase-root.MuiInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl":
                      {
                        borderColor: "error.main",
                      },
                  }
                : {},
            ],
          }}
          onChange={handleOrderChange}
          onKeyDown={handleKeyDown}
          disabled={!file && !savedLink?.imageLink}
        />
      </Box>
    );
  },
);
