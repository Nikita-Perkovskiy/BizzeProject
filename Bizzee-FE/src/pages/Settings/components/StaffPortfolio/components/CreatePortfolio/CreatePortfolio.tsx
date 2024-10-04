import React, { FC, useEffect, useState } from "react";
import { Box, Button, Drawer, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./CreatePortfolio.styled";
import { CloseBtn } from "components/CloseBtn";
import { MainTextArea } from "components/MainTextArea";
import { AsyncSmartSearch } from "components/AsyncSmartSearch";
import { PortfolioTags } from "../PortfolioTags";
import { ICreatePortfolioProps, IInitialValues } from "./types";
import { PhotosPicker } from "../PhotosPicker";
import { useFormik } from "formik";
import { useParams } from "react-router";
import { createMasterPortfolio } from "api/MasterPortfolio/createMasterPortfolio";
import {
  initialCreateValues,
  initialEditValues,
  validationSchema,
} from "./constants";
import { MainModal } from "components/MainModal";
import { getMasterPortfolioItem } from "api/MasterPortfolio/getMasterPortfolioItem";
import { IPortfolio } from "pages/Settings/components/StaffPortfolioEdit/types";
import { updateMasterPortfolio } from "api/MasterPortfolio/updateMasterPortfolioItem";
import { MAX_IMAGE_SIZE } from "config/constants";
import { getMasterPortfolioList } from "api/MasterPortfolio/getMasterPortfolioList";
import { useNotificationToast } from "hooks/useNotificationToast";
import { getMasterOptions } from "api/StaffMembers/getMasterOptions";

export const CreatePortfolio: FC<ICreatePortfolioProps> = ({
  isOpen,
  toggleOpen,
  portfolioId,
  setCurrentPortfolioId,
  setPortfolios,
}) => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [hasTagError, setHasTagError] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const [currentPortfolio, setCurrentPortfolio] = useState<IPortfolio | null>(
    null,
  );

  const { masterId } = useParams();

  const formik = useFormik<IInitialValues>({
    initialValues: portfolioId ? initialEditValues : initialCreateValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const portfolioFormData = new FormData();

      for (const file of values.files) {
        if (file) {
          portfolioFormData.append("images", file);
        }
      }

      const images =
        values.images &&
        values.images.map((image) =>
          image && image.imageLink ? image.imageLink : null,
        );

      const portfolioValues = JSON.stringify({
        masterId: !portfolioId ? masterId : undefined,
        links: portfolioId ? images : undefined,
        category: values.category,
        tags: values.tags,
        description: values.description,
      });

      portfolioFormData.append(
        "portfolio",
        new Blob([portfolioValues], { type: "application/json" }),
      );

      try {
        portfolioId
          ? await updateMasterPortfolio(portfolioFormData, portfolioId)
          : await createMasterPortfolio(portfolioFormData);

        useNotificationToast({
          type: "success",
        });

        const portfolios = await getMasterPortfolioList(Number(masterId));
        setPortfolios && setPortfolios(portfolios);

        handleLeave();
      } catch (error) {
        handleLeave();
        useNotificationToast({ type: "error" });
      }
    },
  });

  useEffect(() => {
    if (isOpen && portfolioId) {
      (async () => {
        try {
          const portfolioInfo = await getMasterPortfolioItem(portfolioId);
          setCurrentPortfolio(portfolioInfo);
        } catch (error) {
          useNotificationToast({ type: "error" });
        }
      })();
    }
  }, [isOpen]);

  const { category, tags, description, files, images } = formik.values;
  const hasTooLargeImages = files.some(
    (file) => !!file && file.size > MAX_IMAGE_SIZE,
  );
  const isPhotoSelected =
    files.some((file) => !!file) ||
    (images && images.some((image) => !!image && !!image.imageLink));

  const isCreateFormChanged =
    !!category || !!tags.length || !!description || isPhotoSelected;

  let isEditFormChanged = false;

  if (currentPortfolio) {
    const isCategoryChanged = currentPortfolio.category.value !== category;
    const isTagsChanged =
      currentPortfolio.tags.length !== tags.length ||
      currentPortfolio.tags.some((tag, index) => tag?.id !== tags[index]?.id);
    const isDescriptionChanged = currentPortfolio.description !== description;
    const hasAnyImageChanged = currentPortfolio.images.some(
      (image, index) => image?.id !== (images && images[index]?.id),
    );

    isEditFormChanged =
      isCategoryChanged ||
      isTagsChanged ||
      isDescriptionChanged ||
      hasAnyImageChanged;
  }

  const hasCategoryErrors =
    formik.touched.category && Boolean(formik.errors.category);

  const isFormChanged = portfolioId ? isEditFormChanged : isCreateFormChanged;
  const isDisabled =
    hasTooLargeImages ||
    !isPhotoSelected ||
    !isFormChanged ||
    hasTagError ||
    hasCategoryErrors;

  const handleLeave = () => {
    toggleOpen();
    formik.handleReset(null);
    setIsLeaveModalOpen(false);
    setCurrentPortfolio(null);
    setCurrentPortfolioId && setCurrentPortfolioId(null);
  };

  return (
    <Drawer
      anchor={isLargeScreen ? "right" : "bottom"}
      open={isOpen}
      onClose={() => {
        if (isFormChanged) {
          setIsLeaveModalOpen(true);
          return;
        }
        handleLeave();
      }}
      sx={styles.drawer}
    >
      <CloseBtn
        handleClose={() => {
          if (isFormChanged) {
            setIsLeaveModalOpen(true);
            return;
          }
          handleLeave();
        }}
        sx={styles.closeBtn}
      />
      <Box sx={styles.drawerContent}>
        <Typography variant="h1" sx={styles.title}>
          ADD PORTFOLIO ITEM
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <PhotosPicker
              formik={formik}
              initialLinks={currentPortfolio?.images}
            />
            <Box>
              <AsyncSmartSearch
                name="category"
                label="Category*"
                placeholder="Select a category"
                zIndexOptions={1700}
                isError={hasCategoryErrors}
                sx={styles.categoriesInput}
                getOptionsFunc={() => getMasterOptions(Number(masterId))}
                handleSelect={(value) => {
                  formik.setFieldValue("category", value);
                }}
                helperText={
                  (formik.touched.category && formik.errors.category) ||
                  undefined
                }
                initialValue={currentPortfolio?.category}
              />
              <PortfolioTags
                formik={formik}
                initialValues={currentPortfolio?.tags}
                hasTagError={hasTagError}
                setHasTagError={setHasTagError}
              />
              <MainTextArea
                name="description"
                label="Description"
                placeholder="Enter a description..."
                maxCharacters={150}
                sx={styles.textArea}
                height={{
                  xs: "145px",
                  md: "125px",
                  lg: "105px",
                }}
                value={formik.values.description}
                handleChange={(value) => {
                  formik.setFieldValue("description", value);
                }}
                handleBlur={formik.handleBlur}
                isError={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  (formik.touched.description && formik.errors.description) ||
                  undefined
                }
                initialValue={currentPortfolio?.description}
              />
            </Box>
            <Box sx={styles.buttonsWrapper}>
              <Button
                className="secondary"
                sx={styles.cancelBtn}
                onClick={() => {
                  if (isFormChanged) {
                    setIsLeaveModalOpen(true);
                    return;
                  }
                  handleLeave();
                }}
              >
                Cancel
              </Button>
              <Button
                className="primaryYellow"
                sx={styles.addBtn}
                type="submit"
                disabled={isDisabled}
              >
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <MainModal
        openModal={isLeaveModalOpen}
        modalClose={() => setIsLeaveModalOpen(false)}
        handleAction={handleLeave}
        titleMessage="Are you sure?"
        bodyMessage="Do you want to leave without saving?"
        buttonMessage="Leave"
        secondBtnMessage="Cancel"
        zIndex={1700}
      />
    </Drawer>
  );
};
