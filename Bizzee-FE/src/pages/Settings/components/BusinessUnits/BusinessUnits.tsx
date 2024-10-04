import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CreateButton } from "components/CreateButton/CreateButton";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { styles } from "./BusinessUnits.styled";
import { SortButtons } from "components/SortButtons/SortButtons";
import { IBusinessUnit } from "./types";
import { UnitCard } from "./components/UnitCard";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "store";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import {
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  sortButtons,
} from "pages/Settings/constants";
import { getBusinessUnits } from "api/BusinessUnits/getBusinessUnits";
import { updateBusinessUnits } from "api/BusinessUnits/updateBusinessUnit";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";

export const BusinessUnits = () => {
  const [units, setUnits] = useState<IBusinessUnit[]>([]);
  const [searchResults, setSearchResults] = useState<IBusinessUnit[]>([]);
  const [activeButton, setActiveButton] = useState<boolean | null>(null);
  const [criteria, setCriteria] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const unitRoutes = routes.settings.units.add;
  const handleNavigate = (): void => {
    navigate(`${unitRoutes.root}/${unitRoutes.general}`);
  };

  const handleSearch = async (query: string) => {
    try {
      dispatch(pendingAction());
      const isValidQuery =
        query.length >= MIN_QUERY_LENGTH && query.length <= MAX_QUERY_LENGTH;

      if (isValidQuery) {
        const data = await updateBusinessUnits({ param: query });
        setSearchResults(data);
        setCriteria(query);
      } else {
        setCriteria("");
        setSearchResults(units);
      }
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleSort = async (status: boolean | null) => {
    try {
      dispatch(pendingAction());

      const data = await updateBusinessUnits({
        status: status,
        param: criteria,
      });

      setSearchResults(data);
      setActiveButton(status);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(pendingAction());

        const data = await getBusinessUnits();
        setUnits(data);
        setSearchResults(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    })();
  }, []);

  return (
    <Grid container sx={styles.unitsWrapper}>
      <Grid container spacing={0} sx={styles.headerWrapper}>
        <Grid item xs={10}>
          <Box sx={styles.headerContent}>
            <Title text="BUSINESS UNITS" />
            <Subtitle text="Add your business unit" />
          </Box>
        </Grid>
        <Grid item xs={2} sx={styles.headerButtonWrapper}>
          <CreateButton toggleFunction={handleNavigate} />
        </Grid>
        <Grid item xs={12} sx={styles.searchWrapper}>
          <SearchEngine placeholder={"Search"} onSearch={handleSearch} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={styles.mainContentWrapper}>
        {!!units.length && (
          <Box sx={styles.sortButtonWrapper}>
            <SortButtons
              handleSort={handleSort}
              sortButtons={sortButtons}
              activeButton={activeButton}
            />
          </Box>
        )}
        {searchResults.length ? (
          <Box sx={styles.unitsContainer}>
            {searchResults.map((unit) => (
              <UnitCard key={unit.id} {...unit} />
            ))}
          </Box>
        ) : (
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={styles.mainContentBlock}
          >
            <Grid item>
              <Typography variant="body1" sx={styles.mainContentText}>
                {criteria
                  ? `You don't have any business units for the "${criteria}" request yet, please add by clicking the plus button.`
                  : "You don't have any business units yet, please add by clicking the plus button."}
              </Typography>
            </Grid>
            <Grid item sx={styles.mainContentButton}>
              <CreateButton toggleFunction={handleNavigate} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
