import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CreateButton } from "components/CreateButton/CreateButton";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { SortButtons } from "components/SortButtons/SortButtons";
import { styles } from "./Services.styled";
import { ServicesCard } from "./components/ServicesCard";
import {
  MAX_QUERY_LENGTH,
  MIN_QUERY_LENGTH,
  sortButtons,
} from "pages/Settings/constants";
import { useDispatch } from "react-redux";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { getServices } from "api/Services/getServices";
import { AddServicesForm } from "./components/AddServices/AddServicesForm";
import { ReactComponent as BtnIcon } from "assets/svg/btn_icon.svg";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";
import { deleteServiceById } from "api/Services/deleteServiceById";
import { MainModal } from "components/MainModal";
import { IServices } from "./types";

export const Services = () => {
  const [services, setServices] = useState<IServices[]>([]);
  const [searchResults, setSearchResults] = useState<IServices[]>([]);
  const [activeButton, setActiveButton] = useState<boolean | null>(null);
  const [criteria, setCriteria] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);
  const breakpoints = useTheme().breakpoints.values;
  const isLargeScreen = useMediaQuery(`(max-width: ${breakpoints.lg}px)`);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [currentProcedureId, setCurrentProcedureId] = useState<number | null>(
    null,
  );
  const [deleteProcedureId, setDeleteProcedureId] = useState<number | null>(
    null,
  );
  const [serviceTitle, setServiceTitle] = useState<string>("");
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleToggleModal = (): void => {
    setOpenModal((prev) => !prev);
  };

  const handleDeleteFileSelection = (): void => {
    setIsDelete((prev) => !prev);
    setOpenModal((prev) => !prev);
  };

  const handleSetProcedureId = (procedureId: number) => {
    setCurrentProcedureId(procedureId);
  };
  const handleDeleteProcedureId = (procedureId: number) => {
    setDeleteProcedureId(procedureId);
  };

  const handleSearch = async (query: string) => {
    try {
      dispatch(pendingAction());
      const isValidQuery =
        query.length >= MIN_QUERY_LENGTH && query.length <= MAX_QUERY_LENGTH;

      if (isValidQuery) {
        const data = await getServices({ prefix: query });
        setSearchResults(data);
        setCriteria(query);
      } else {
        setCriteria("");
        setSearchResults(services);
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

      const data = await getServices({
        status,
        prefix: criteria,
      });

      setSearchResults(data);
      setActiveButton(status);
    } catch (e) {
      useNotificationToast({ type: "error" });
    } finally {
      dispatch(fulfilledAction());
    }
  };

  const handleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const handleLeaveModal = () => {
    setIsLeaveModalOpen((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(pendingAction());
        const data = await getServices();
        setServices(data);
        setSearchResults(data);
        if (!isFormOpen) {
          setCurrentProcedureId(null);
          setOpenModal(false);
        }
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    })();
  }, [isFormOpen]);

  useEffect(() => {
    if (deleteProcedureId && hasMounted) {
      (async () => {
        try {
          await deleteServiceById(deleteProcedureId);
          dispatch(pendingAction());
          const data = await getServices();
          setServices(data);
          setSearchResults(data);
          useNotificationToast({
            type: "delete",
          });
        } catch (e) {
          useNotificationToast({ type: "error" });
        } finally {
          dispatch(fulfilledAction());
        }
      })();
    }
  }, [isDelete]);

  useEffect(() => {
    if (hasMounted) {
      const currentTitle = searchResults.find(
        (result) => result.procedureId === deleteProcedureId,
      )?.title;
      setServiceTitle(currentTitle as string);
      handleToggleModal();
    }
  }, [deleteProcedureId]);

  useEffect(() => {
    if (hasMounted && currentProcedureId) {
      handleForm();
    }
    setHasMounted(true);
  }, [currentProcedureId]);

  return (
    <>
      <Box sx={styles.servicesWrapper}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.headline}>
            <Box sx={styles.headerContent}>
              <Title text="SERVICES" />
              <Subtitle text="Add services" />
            </Box>
            {isLargeScreen && (
              <Box sx={styles.headerButtonWrapper}>
                <CreateButton toggleFunction={handleForm} />
              </Box>
            )}
          </Box>
          <Box sx={styles.headerActions}>
            <SearchEngine placeholder={"Search"} onSearch={handleSearch} />
            {!isLargeScreen && <CreateButton toggleFunction={handleForm} />}
          </Box>
        </Box>
        <Box sx={styles.mainContentWrapper}>
          {!!services.length && (
            <Box sx={styles.sortButtonWrapper}>
              <SortButtons
                handleSort={handleSort}
                sortButtons={sortButtons}
                activeButton={activeButton}
              />
            </Box>
          )}
          {searchResults.length ? (
            <Box sx={styles.servicesContainer}>
              {searchResults.map((unit) => (
                <ServicesCard
                  key={unit.procedureId}
                  {...unit}
                  setId={handleSetProcedureId}
                  deleteId={handleDeleteProcedureId}
                />
              ))}
            </Box>
          ) : (
            <Box sx={styles.mainContentBlock}>
              <Typography variant="body1" sx={styles.mainContentText}>
                {criteria
                  ? `You don't have any services for the "${criteria}" request yet, please add by clicking on the plus button.`
                  : "You don't have any services yet, please add by clicking on the plus button."}
              </Typography>
              <Box sx={styles.mainContentButton}>
                <CreateButton toggleFunction={handleForm} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <SwipeableDrawer
        anchor={isSmallScreen ? "bottom" : "right"}
        open={isFormOpen}
        onClose={handleForm}
        onOpen={handleForm}
        sx={styles.drawerWrapper}
        disableSwipeToOpen={false}
        PaperProps={{
          sx: styles.serviceMenuWrapper,
        }}
        BackdropProps={{ onClick: handleLeaveModal }}
      >
        <Grid container sx={styles.menuContainer}>
          <Grid item xs={12} sx={styles.btnIconWrapper}>
            <Box sx={styles.btnIcon} onClick={handleLeaveModal}>
              <BtnIcon />
            </Box>
          </Grid>
          <AddServicesForm
            isLeaveModalOpen={isLeaveModalOpen}
            handleLeaveModal={handleLeaveModal}
            handleForm={handleForm}
            isFormOpen={isFormOpen}
            procedureId={currentProcedureId}
          />
        </Grid>
      </SwipeableDrawer>
      <MainModal
        openModal={openModal}
        modalClose={handleDeleteFileSelection}
        handleAction={handleToggleModal}
        titleMessage="Are you sure?"
        bodyMessage={`Do you really want to delete ${serviceTitle}`}
        buttonMessage="Approve"
        secondBtnMessage="Decline"
        isBlockModal={true}
      />
    </>
  );
};
