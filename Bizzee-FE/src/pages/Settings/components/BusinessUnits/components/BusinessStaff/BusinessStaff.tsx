import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./BusinessStaff.styled";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { SortButtons } from "components/SortButtons/SortButtons";
import {
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  sortButtons,
} from "pages/Settings/constants";
import { IBusinessStaff } from "./types";
import { BusinessStaffCard } from "./components/BusinessStaffCard";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { useDispatch } from "react-redux";
import { getBusinessUnitStaff } from "api/BusinessUnits/getBusinessUnitStaff";
import { updateBusinessUnitStaff } from "api/BusinessUnits/updateBusinessUnitStaff";
import { updateBusinessUnitsMasters } from "api/BusinessUnits/updateBusinessUnitsMasters";
import { useParams } from "react-router-dom";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import { useNotificationToast } from "hooks/useNotificationToast";

export const BusinessStaff = () => {
  const [staff, setStaff] = useState<IBusinessStaff[]>([]);
  const [searchResults, setSearchResults] = useState<IBusinessStaff[]>([]);
  const [criteria, setCriteria] = useState<string>("");
  const [activeButton, setActiveButton] = useState<boolean | null>(null);
  const [usersIds, setUsersIds] = useState<number[]>([]);
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { unitId } = useParams();

  const handleSearch = async (query: string) => {
    try {
      dispatch(pendingAction());
      const isValidQuery =
        query.length >= MIN_QUERY_LENGTH && query.length <= MAX_QUERY_LENGTH;

      if (isValidQuery) {
        const data = await updateBusinessUnitStaff({
          prefix: query,
        });
        setSearchResults(data);
        setCriteria(query);
      } else {
        setCriteria("");
        setSearchResults(staff);
      }
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleSort = async (status: boolean | null) => {
    setActiveButton(status);
  };

  const handleStaffIDs = (id: number, isChecked: boolean) => {
    const updatedUsersIds = [...usersIds];

    if (isChecked) {
      updatedUsersIds.push(id);
    } else {
      const index = updatedUsersIds.indexOf(id);
      if (index !== -1) {
        updatedUsersIds.splice(index, 1);
      }
    }

    setUsersIds(updatedUsersIds);
    setHasChanges(true);
  };

  const handleSaveIDs = async () => {
    try {
      dispatch(pendingAction());

      await updateBusinessUnitsMasters(Number(unitId), usersIds);
      useNotificationToast({
        type: "success",
      });
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

        const data = await getBusinessUnitStaff();
        setStaff(data);
        setSearchResults(data);

        const checkedIds = data
          .filter((unit: IBusinessStaff) =>
            unit.businessUnitIds.includes(Number(unitId)),
          )
          .map((unit: IBusinessStaff) => unit.userId);
        setUsersIds(checkedIds);
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    })();
  }, []);

  return (
    <>
      <Box sx={styles.staffWrapper}>
        <Box sx={styles.actionsWrapper}>
          <Box>
            <SearchEngine placeholder={"Search"} onSearch={handleSearch} />
          </Box>
          {!!staff.length && (
            <Box sx={styles.sortButtonWrapper}>
              <SortButtons
                disabled
                handleSort={handleSort}
                sortButtons={sortButtons}
                activeButton={activeButton}
              />
            </Box>
          )}
        </Box>
        <Box sx={styles.contentWrapper}>
          {searchResults.length ? (
            <Box sx={styles.cardContainer}>
              {searchResults.map((unit) => (
                <BusinessStaffCard
                  key={unit.userId}
                  {...unit}
                  handleStaffIDs={handleStaffIDs}
                />
              ))}
            </Box>
          ) : (
            <Box sx={styles.messageBlock}>
              <Typography variant="body1" sx={styles.messageText}>
                {criteria
                  ? `You don't have any employees for the "${criteria}" request yet. Please move to 'STAFF MEMBERS' to add`
                  : "You don't have any employees. Please move to 'STAFF MEMBERS' to add"}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={styles.updateButtonWrapper}>
        <Button
          disabled={!hasChanges || !unitId}
          onClick={handleSaveIDs}
          sx={styles.updateButton}
          className="primaryBlack"
        >
          Save
        </Button>
      </Box>
      <LeaveBlockModal isBlocked={hasChanges} />
    </>
  );
};
