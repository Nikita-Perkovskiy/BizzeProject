import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { MainPaper } from "components/MainPaper";
import { styles } from "./StaffPortfolio.styled";
import { CreateButton } from "components/CreateButton/CreateButton";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { CreatePortfolio } from "./components/CreatePortfolio";

export const StaffPortfolio = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleSearch = () => {
    // here will be search function
    return null;
  };

  const toggleCreateOpen = () => {
    setIsCreateOpen((isOpen) => !isOpen);
  };

  return (
    <Box sx={styles.pageWrapper}>
      <MainPaper sx={styles.paper}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.titleWrapper}>
            <Box sx={styles.titleContainer}>
              <Typography sx={styles.headerTitle}>PORTFOLIO</Typography>
              <Typography sx={styles.headerContent}>
                Upload your best work and show what you can do
              </Typography>
            </Box>
            <Box sx={styles.headerButtonWrapper}>
              <CreateButton toggleFunction={toggleCreateOpen} />
            </Box>
          </Box>
          <SearchEngine
            placeholder="Search"
            onSearch={handleSearch}
            sx={styles.searchInput}
          />
        </Box>
        <Box>
          <Box sx={styles.mainContentBlock}>
            <Typography sx={styles.mainContentText}>
              You don&#39;t have any works yet, please add by clicking on the
              plus button
            </Typography>
            <Box sx={styles.mainContentButton}>
              <CreateButton toggleFunction={toggleCreateOpen} />
            </Box>
          </Box>
        </Box>
      </MainPaper>
      <CreatePortfolio isOpen={isCreateOpen} toggleOpen={toggleCreateOpen} />
    </Box>
  );
};
