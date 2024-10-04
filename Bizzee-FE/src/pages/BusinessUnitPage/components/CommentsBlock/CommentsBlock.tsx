import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { styles } from "./CommentsBlock.styled";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";

export const CommentsBlock = () => {
  return (
    <Box sx={styles.wrapperBlock}>
      <Typography sx={styles.mainTitle}>
        WHAT PEOPLE SAY ABOUT BUSINESS
      </Typography>
      <Box sx={styles.wrapperComment}>
        <Box sx={styles.footerComment}>
          <Box sx={styles.author}>
            <Typography>HAYLIE SARIS</Typography>
            <Rating
              name="customized-10"
              defaultValue={4}
              readOnly
              size="small"
              color="white"
            />
          </Box>
          <Box sx={styles.procedure}>
            <Typography>Service: Nails</Typography>
            <Typography>Master: Tatiana Aminof</Typography>
          </Box>
        </Box>
        <Box sx={styles.commentBlock}>
          <Typography sx={styles.commentText}>
            Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus ante ac
            est laoreet sapien auctor molestie augue. Egestas et tincidunt
            convallis suspendisse vulputate nulla. Feugiat vel nunc eget est.
            Sed quis et malesuada orci viverra et ipsum. Suspendisse in
            adipiscing morbi adipiscing imperdiet amet.
          </Typography>
          <Typography sx={styles.dataComment}>25.01.2024</Typography>
        </Box>
      </Box>
      <Box sx={styles.wrapperButtons}>
        <Chevron style={styles.chevronLeft} />
        <Chevron style={styles.chevronRight} />
      </Box>
    </Box>
  );
};
