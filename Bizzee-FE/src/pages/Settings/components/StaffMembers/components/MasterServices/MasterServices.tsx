import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./MasterServices.styled";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { useDispatch } from "react-redux";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { useNotificationToast } from "hooks/useNotificationToast";
import { IMasterServices, IServices, initialData } from "./types";
import { LeaveBlockModal } from "components/LeaveBlockModal";
import {
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  initialAllFilter,
} from "config/constants";
import { MasterServiceCard } from "./components/MasterServiceCard/MasterServiceCard";
import { useParams } from "react-router-dom";
import { MasterServiceAutocomplete } from "./components/MasterServiceAutocomplete/MasterServiceAutocomplete";
import { getMasterOptions } from "api/StaffMembers/getMasterOptions";
import { createMasterServices } from "api/Services/createMasterServices";
import { getProceduresMasters } from "api/Services/getProceduresMasters";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { FilterButtonList } from "components/FilterButtonList";

export const MasterServices = () => {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState<IServices[]>([]);
  const [renderResults, setRenderResults] = useState<IServices[]>([]);
  const [masterID, setMasterID] = useState<number | null>(null);
  const [saveData, setSaveData] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<initialData[]>([]);
  const [masterOptions, setMasterOptions] = useState<initialData[]>([]);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>(initialAllFilter);
  const [masterServices, setMasterServices] = useState<
    Map<number, IMasterServices>
  >(new Map());
  const [currentSortOption, setCurrentSortOption] = useState<string>("");
  const [hasChanged, setHasChanged] = useState(true);
  const { masterId } = useParams();

  const handleSearch = async (query: string) => {
    if (masterID) {
      try {
        dispatch(pendingAction());
        const isValidQuery =
          query.length >= MIN_QUERY_LENGTH && query.length <= MAX_QUERY_LENGTH;

        if (isValidQuery) {
          const data = await getProceduresMasters(Number(masterID), {
            prefix: query,
            categories: currentSortOption,
          });
          setSearchResults(data);
        } else {
          const data = await getProceduresMasters(Number(masterID), {
            categories: currentSortOption,
          });
          setSearchResults(data);
        }
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    }
  };

  const handleSort = async () => {
    try {
      dispatch(pendingAction());

      const data = await getProceduresMasters(Number(masterID), {
        categories: currentSortOption,
      });
      setSearchResults(data);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleChanged = () => {
    setHasChanged(false);
  };

  const handleAddServices = ({
    id,
    category,
  }: {
    id: number;
    category: string;
  }) => {
    setMasterServices((prevSelectedServices) => {
      const updatedMap = new Map(prevSelectedServices);
      updatedMap.set(id, { id, category });
      return updatedMap;
    });
    handleChanged();
  };

  const handleRemoveServices = ({
    id,
    category,
  }: {
    id: number;
    category: string;
  }) => {
    setMasterServices((prevSelectedServices) => {
      const updatedMap = new Map(prevSelectedServices);
      updatedMap.delete(id);
      return updatedMap;
    });
    handleChanged();
  };

  useEffect(() => {
    if (currentSortOption) {
      handleSort();
    }
  }, [currentSortOption]);

  useEffect(() => {
    if (filterOptions.length) {
      const sortOption =
        masterOptions.find((option) => option.title === currentFilter)?.value ||
        "";
      if (
        currentFilter === initialAllFilter ||
        !filterOptions.find((item) => item === currentFilter)
      ) {
        const filterCategorys = filterOptions.map((option) =>
          option.toUpperCase(),
        );
        for (const [key, value] of masterServices) {
          if (!filterCategorys.includes(value.category)) {
            handleRemoveServices({
              id: value.id,
              category: value.category,
            });
          }
        }
        setSearchResults([]);
      } else {
        setCurrentSortOption(sortOption);
      }
    }
  }, [currentFilter, filterOptions]);

  const handleChangeService = (newServices: initialData[]) => {
    setSelectedOptions(newServices);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataForRequest = Array.from(masterServices.values()).map(
          (unit) => unit.id,
        );
        await createMasterServices(dataForRequest, masterID);
        useNotificationToast({
          type: "success",
        });
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    if (saveData) {
      fetchData();
    }
  }, [saveData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (masterID !== null) {
          const masterOptions = await getMasterOptions(masterID);
          setMasterOptions(masterOptions);
        }
      } catch (error) {
        useNotificationToast({ type: "error" });
      }
    };
    fetchData();
  }, [masterID]);

  useEffect(() => {
    const filterTitles = selectedOptions.map((option) => option.title);
    setFilterOptions(filterTitles);
  }, [selectedOptions]);

  useEffect(() => {
    if (masterId) {
      setMasterID(Number(masterId));
    }
  }, []);

  const handelRenderTransform = (searchData: IServices[]) => {
    const renderOptions: IServices[] = searchData.map((unit) => {
      if (masterServices.has(unit.id)) {
        return { ...unit, isActiveForMaster: true };
      } else {
        return unit;
      }
    });

    setRenderResults(renderOptions);
  };

  useEffect(() => {
    searchResults.map((unit) => {
      if (unit.isActiveForMaster && !masterServices.has(unit.id)) {
        handleAddServices({ id: unit.id, category: unit.category.value });
      }
    });
    handelRenderTransform(searchResults);
  }, [searchResults]);

  const handleSaveData = () => {
    setSaveData((prev) => !prev);
  };

  return (
    <Box sx={styles.pageWrapper}>
      <Box sx={styles.pageHeader}>
        <Box sx={styles.pageHeaderTitleWrapper}>
          <Title text="Master’s services" />
          <Subtitle text="Available for booking in the catalogue" />
        </Box>
        <Box>
          <SearchEngine
            placeholder="Search by: category / title / additional services"
            onSearch={handleSearch}
          />
        </Box>
      </Box>
      <Box sx={styles.pageCategoryWrapper}>
        <MasterServiceAutocomplete
          label="Category"
          placeholder="Select a category"
          handleChange={handleChangeService}
          options={masterOptions}
        />
      </Box>
      <Box sx={styles.filterButtonListWrapper}>
        {selectedOptions.length ? (
          <FilterButtonList
            currentFilter={currentFilter}
            options={filterOptions}
            setCurrentFilter={setCurrentFilter}
            userOptions={selectedOptions}
            isDisabled={false}
          />
        ) : null}
      </Box>
      {renderResults.length && filterOptions.length ? (
        <Box sx={styles.cardBlockWrapper}>
          {renderResults.map((unit) => (
            <MasterServiceCard
              handleAddServices={handleAddServices}
              handleRemoveServices={handleRemoveServices}
              key={unit.id}
              {...unit}
            />
          ))}
        </Box>
      ) : (
        <Grid container sx={styles.emptyPageWrapper}>
          <Typography sx={{ ...styles.pageContent, ...styles.emptyMessage }}>
            There are no services in the chosen categories, please add by
            clicking on the “Services“ menu option
          </Typography>
        </Grid>
      )}
      <Grid container sx={styles.buttonWrapper}>
        <Button
          type="submit"
          className="primaryBlack"
          sx={styles.saveButton}
          disabled={!masterServices.size || hasChanged}
          onClick={handleSaveData}
        >
          Save
        </Button>
      </Grid>
      <LeaveBlockModal isBlocked={!!masterServices.size} />
    </Box>
  );
};
