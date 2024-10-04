import React, { useEffect, useState } from "react";
import { PortfolioCard } from "../StaffPortfolio/components/PortfolioCard";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import { MainPaper } from "components/MainPaper";
import { styles } from "../StaffPortfolio/StaffPortfolio.styled";
import { CreateButton } from "components/CreateButton/CreateButton";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { CreatePortfolio } from "../StaffPortfolio/components/CreatePortfolio";
import { IPortfolio } from "./types";
import { getMasterPortfolioList } from "api/MasterPortfolio/getMasterPortfolioList";
import { useParams } from "react-router";
import { FilterButtonList } from "components/FilterButtonList";
import { initialAllFilter } from "config/constants";
import { exampleOptions } from "./constants";
import { MainInputSelect } from "components/MainInputSelect";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";

export const StaffPortfolioEdit = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [currentPortfolioId, setCurrentPortfolioId] = useState<number | null>(
    null,
  );
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

  const { masterId } = useParams();

  useEffect(() => {
    setPortfolios([]);

    try {
      (async () => {
        const portfolios = await getMasterPortfolioList(Number(masterId));
        setPortfolios(portfolios);
      })();
    } catch (error) {
      useNotificationToast({ type: "error" });
    }
  }, []);

  const handleSearch = () => {
    // here will be search function
    return null;
  };

  const toggleCreateOpen = () => {
    setIsCreateOpen((isOpen) => !isOpen);
  };

  const [currentFilter, setCurrentFilter] = useState<string>(initialAllFilter);

  return (
    <Box sx={styles.pageWrapper}>
      <MainPaper sx={styles.paper}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.titleWrapper}>
            <Box sx={styles.titleContainer}>
              <Title text="PORTFOLIO" />
              <Subtitle text="Upload your best work and show what you can do" />
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
          <Box sx={styles.actionBtnWrapper}>
            <FilterButtonList
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              options={exampleOptions}
            />
            <Box sx={styles.sortingWrapper}>
              <Box sx={styles.filtersWrapper}>
                <MainInputSelect
                  name="sort-select"
                  onChange={() => null}
                  value="newer"
                  disabled
                  sx={styles.sortingSelect}
                  wrapperStyle={styles.selectWrapper}
                >
                  <MenuItem value="newer">Newest first</MenuItem>
                </MainInputSelect>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          {portfolios.length ? (
            <Grid container spacing={2.5} sx={styles.gridContainer}>
              {portfolios.map((cardInfo) => (
                <Grid item key={cardInfo.id} lg={4} sx={styles.gridItem}>
                  <PortfolioCard
                    cardInfo={cardInfo}
                    handleOpenEdit={setIsCreateOpen}
                    setCurrentPortfolioId={setCurrentPortfolioId}
                    setPortfolios={setPortfolios}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={styles.mainContentBlock}>
              <Typography sx={styles.mainContentText}>
                You don&#39;t have any works yet, please add by clicking on the
                plus button
              </Typography>
              <Box sx={styles.mainContentButton}>
                <CreateButton toggleFunction={toggleCreateOpen} />
              </Box>
            </Box>
          )}
        </Box>
      </MainPaper>
      <CreatePortfolio
        isOpen={isCreateOpen}
        toggleOpen={toggleCreateOpen}
        portfolioId={currentPortfolioId}
        setCurrentPortfolioId={setCurrentPortfolioId}
        setPortfolios={setPortfolios}
      />
    </Box>
  );
};
