import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import { MainSearchInput } from "../MainSearchInput";
import { GoogleAutocomplete } from "pages/Settings/components/GoogleAutocomplete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { welcomeBlockInitialValue } from "pages/MainPage/components/WelcomeBlock/interface";
import { welcomeBlockInitialData } from "pages/MainPage/components/WelcomeBlock/WelocomeBlockInitalValue";
import { validationSchema } from "pages/MainPage/components/WelcomeBlock/WelcomeBlock.validationSchema";
import { SearchFormProps } from "./types";
import { IContentItem } from "pages/MainPage/interface";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { MIN_QUERY_LENGTH } from "pages/Settings/constants";
import { getServicesByName } from "api/UserSearch/getServicesByName";
import { PAGE_NUMBER, SIZE_NUMBER } from "./constants";
import { useNotificationToast } from "hooks/useNotificationToast";
import { useDispatch } from "react-redux";
import { styles } from "./SearchForm.styled";
import { getServicesByNameLocations } from "api/UserSearch/getServicesByNameLocations";
import { MAX_INPUT_LENGTH } from "pages/Settings/components/BusinessUnits/components/GeneralUnitInfo/constants";
import { useDebounce } from "hooks/useDebounce";
import { DEBOUNCE_TIME } from "components/SearchEngine/constants";
import { ButtonAnimationArrow } from "pages/MainPage/components/AnimatedTextBlock/components/ButtonAnimationArrow/ButtonAnimationArrow";

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  setOptions,
  setTotalUnits,
  navigateTo,
  sx = {},
  searchInput = "",
  searchLocation = "",
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [data, setData] = useState<IContentItem[]>([]);

  const dispatch = useDispatch();

  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  const formik = useFormik<welcomeBlockInitialValue>({
    initialValues: welcomeBlockInitialData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLocation(values.location);
    },
  });

  useEffect(() => {
    setSearchQuery(searchInput);
  }, [searchInput]);

  useEffect(() => {
    if (data) {
      setOptions && setOptions(data);
    } else {
      setOptions && setOptions([]);
    }
  }, [data]);

  useEffect(() => {
    formik.setFieldValue("location", searchLocation);
    setLocation(searchLocation);
  }, [searchLocation]);

  useEffect(() => {
    setLocation(formik.values.location);
  }, [formik.values.location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(pendingAction());

        const isValidQuery =
          debouncedSearchQuery.length >= MIN_QUERY_LENGTH &&
          debouncedSearchQuery.length <= MAX_INPUT_LENGTH;

        if (isValidQuery) {
          const data = location
            ? await getServicesByNameLocations(
                debouncedSearchQuery.toLowerCase(),
                location,
                PAGE_NUMBER,
                SIZE_NUMBER,
              )
            : await getServicesByName(
                debouncedSearchQuery,
                PAGE_NUMBER,
                SIZE_NUMBER,
              );
          setData(data.content);
          if (
            setTotalUnits &&
            data.content &&
            data.content.length &&
            data.content[0].businessUnitName
          ) {
            setTotalUnits(data.totalElements);
          }
        } else {
          setData([]);
          setTotalUnits && setTotalUnits(null);
        }
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    };

    fetchData();
  }, [debouncedSearchQuery, location]);

  const handleSearch = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
    onSearch && onSearch(newSearchQuery);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={sx}>
        <Grid container spacing={2} sx={styles.formContainer(isMobileScreen)}>
          <Grid item xs={12} md={5}>
            <MainSearchInput
              data={data}
              onSearch={handleSearch}
              sx={styles.searchBox}
              placeholder="Search"
              searchInput={searchQuery}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={styles.locationSelectBox(isLargeScreen)}
          >
            <GoogleAutocomplete
              requestConfig={{
                componentRestrictions: {
                  country: "pl",
                },
                types: ["(cities)"],
              }}
              formik={formik}
              name="location"
              placeholder="Where are you?"
              sx={styles.googleAutocompleteMain}
              searchLocation={location}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ButtonAnimationArrow
              className="primaryYellow"
              text="Search"
              sx={styles.welcomeBlockFormButton}
              color={styles.welcomeBlockFormButton.color}
              onClick={() =>
                navigateTo &&
                navigateTo(`?search=${searchQuery}&location=${location}`)
              }
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
