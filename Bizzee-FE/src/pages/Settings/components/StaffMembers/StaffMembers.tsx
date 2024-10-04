import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./StaffMembers.styled";
import { IStaffCard } from "./components/StaffCard/types";
import { StaffCard } from "./components/StaffCard";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { CreateButton } from "components/CreateButton/CreateButton";
import { useSelector } from "react-redux";
import { selectError } from "features/selectors/authSelectors";
import { getStaffMembers } from "api/StaffMembers/getStaffMembers";
import { useTypedDispatch } from "store";
import {
  fulfilledAction,
  pendingAction,
  rejectedAction,
} from "features/auth/actions";
import { updateStaffMembers } from "api/StaffMembers/updateStaffMembers";
import { SortButtons } from "components/SortButtons/SortButtons";
import { serverError500 } from "config/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import {
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  sortButtons,
} from "pages/Settings/constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";

export const StaffMembers = () => {
  const [users, setUsers] = useState<IStaffCard[]>([]);
  const [activeButton, setActiveButton] = useState<boolean | null>(true);
  const [searchResults, setSearchResults] = useState<IStaffCard[]>([]);
  const [criteria, setCriteria] = useState<string>("");
  const dispatch = useTypedDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const staffRoutes = routes.settings.staff.add;
  const handleNavigate = (): void => {
    navigate(`${staffRoutes.root}/${staffRoutes.general}`);
  };

  const handleSearch = async (query: string) => {
    try {
      dispatch(pendingAction());
      const isValidQuery =
        query.length >= MIN_QUERY_LENGTH && query.length <= MAX_QUERY_LENGTH;

      if (isValidQuery) {
        const data = await updateStaffMembers({ prefix: query });
        setSearchResults(data);
        setCriteria(query);
      } else {
        setCriteria("");
        setSearchResults(users);
      }
    } catch (e) {
      dispatch(
        rejectedAction({
          general: e.message,
        }),
      );
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleSort = async (status: boolean | null) => {
    setActiveButton(status);
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(pendingAction());

        const data = await getStaffMembers();
        setUsers(data);
        setSearchResults(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    })();
  }, [pathname]);

  return (
    <Grid container sx={styles.staffMembersWrapper}>
      <Grid container spacing={0} sx={styles.headerWrapper}>
        <Grid item xs={10}>
          <Box sx={styles.headerContent}>
            <Title text="STAFF MEMBERS" />
            <Subtitle text="Add your team members" />
          </Box>
        </Grid>
        <Grid item xs={2} sx={styles.headerButtonWrapper}>
          <CreateButton
            disabled={error.response === serverError500}
            toggleFunction={handleNavigate}
          />
        </Grid>
        <Grid item xs={12} sx={styles.searchWrapper}>
          <SearchEngine placeholder={"Search"} onSearch={handleSearch} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={styles.mainContentWrapper}>
        {!!users.length && (
          <Box sx={styles.sortButtonWrapper}>
            <SortButtons
              handleSort={handleSort}
              disabled
              sortButtons={sortButtons}
              activeButton={activeButton}
            />
          </Box>
        )}
        {searchResults.length ? (
          <Box sx={styles.userListContainer}>
            {searchResults.map((user) => (
              <StaffCard key={user.userId} {...user} />
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
                  ? `You don't have any employees for the "${criteria}" request yet, please add by clicking the plus button.`
                  : "You don't have any employees yet, please add by clicking the plus button."}
              </Typography>
            </Grid>
            <Grid item sx={styles.mainContentButton}>
              <CreateButton
                disabled={error.response === serverError500}
                toggleFunction={handleNavigate}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
