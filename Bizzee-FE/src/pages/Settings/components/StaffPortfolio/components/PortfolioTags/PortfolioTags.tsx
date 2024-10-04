import React, { FC, memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AsyncMultiselect } from "components/AsyncMultiselect";
import { styles } from "./PortfolioTags.styled";
import { MultiselectChip } from "components/MultiselectChip";
import { IValues } from "components/AsyncMultiselect/types";
import { getBusinessUnitsTags } from "api/BusinessUnits/getBusinessUnitsTags";
import { IPortfolioTagsProps } from "./types";
import { validationTagsMessage } from "./constants";

export const PortfolioTags: FC<IPortfolioTagsProps> = memo(
  ({ formik, initialValues, hasTagError, setHasTagError }) => {
    const [selectedValues, setSelectedValues] = useState<IValues[]>([]);

    useEffect(() => {
      initialValues && setSelectedValues(initialValues);
    }, [initialValues]);

    useEffect(() => {
      formik.setFieldValue("tags", selectedValues);
    }, [selectedValues]);

    const handleRemoveItem = (tag: string) => {
      setSelectedValues((prevState) =>
        prevState.filter((item) => item.tag !== tag),
      );
    };

    return (
      <Box>
        <AsyncMultiselect
          name="tags"
          label={
            <>
              Tags{" "}
              <Typography component="span" sx={styles.tagsSecondaryLabel}>
                (maximum 10)
              </Typography>
            </>
          }
          placeholder="Select or add tag"
          zIndexOptions={1700}
          isError={hasTagError}
          helperText={validationTagsMessage}
          sx={styles.tagsInput}
          getOptionsFunc={getBusinessUnitsTags}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          maxTags={10}
          hasError={hasTagError}
          setHasError={setHasTagError}
        />
        <Box sx={styles.selectedTagsContainer}>
          {selectedValues.map((item) => (
            <MultiselectChip
              key={item.tag}
              onDelete={() => {
                handleRemoveItem(item.tag);
              }}
              label={item.tag}
            />
          ))}
        </Box>
      </Box>
    );
  },
);
