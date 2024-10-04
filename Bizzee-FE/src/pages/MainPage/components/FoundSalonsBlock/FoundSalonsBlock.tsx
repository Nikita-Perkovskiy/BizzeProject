import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./FoundSalonsBlock.styled";
import { ReactComponent as Location } from "assets/svg/location.svg";
import { ReactComponent as RatingIcon } from "assets/svg/star-icon.svg";
import { ContactLine } from "pages/BusinessUnitPage/components/InfoBlock/components/ContactBlock/components/ContactLine";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchForm } from "../WelcomeBlock/components/SearchForm";
import { routes } from "config/routes";
import { IContentItem } from "../../interface";
import { fulfilledAction, pendingAction } from "features/auth/actions";
import { useNotificationToast } from "hooks/useNotificationToast";
import { useDispatch } from "react-redux";
import { getBusinessUnitsByIds } from "api/BusinessUnits/getBusinessUnitsByIds";
import { capitalizeNameFirstLetters } from "utils/capitalizeFirstLetter";
import { FoundSalonType } from "./types";
import { FooterBlock } from "../FooterBlock/FooterBlock";
import {
  PAGE_NUMBER,
  SIZE_NUMBER,
} from "../WelcomeBlock/components/SearchForm/constants";
import { MIN_QUERY_LENGTH } from "pages/Settings/constants";
import { MAX_INPUT_LENGTH } from "pages/Settings/components/BusinessUnits/components/GeneralUnitInfo/constants";
import { getServicesByNameLocations } from "api/UserSearch/getServicesByNameLocations";
import { getServicesByName } from "api/UserSearch/getServicesByName";
import {
  temporaryRating,
  temporarySubRating,
} from "../SalonsBlock/components/SalonCard/constants";
import { styles as externalStyles } from "../SalonsBlock/components/SalonCard/SalonCard.styled";

export const FoundSalonsBlock = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<IContentItem[]>([]);
  const [units, setUnits] = useState<FoundSalonType[]>([]);
  const [totalUnits, setTotalUnits] = useState<number | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("search") || "");
    setSearchLocation(params.get("location") || "");
  }, [location.search]);

  useEffect(() => {
    const unitsIds = searchOptions
      .map((option) => {
        if (option.businessUnitName) {
          return option.id;
        }
        if (option.masterName && option.businessUnits) {
          return option.businessUnits.map((unit) => unit.id);
        }
        if (option.serviceName && option.businessUnits) {
          return option.businessUnits.map((unit) => unit.id);
        }
        return [0];
      })
      .flat();

    const fetchData = async () => {
      try {
        dispatch(pendingAction());

        const data = await getBusinessUnitsByIds(unitsIds);
        setUnits(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    };

    fetchData();
  }, [searchOptions]);

  const sortedUnits = units.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const query = searchQuery.toLowerCase();

    if (aName === query && bName !== query) {
      return -1;
    }
    if (aName !== query && bName === query) {
      return 1;
    }
    if (aName !== query && bName !== query) {
      return aName.localeCompare(bName);
    }
    return 0;
  });

  const handleSearch = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const handleChangePage = (id: number) => {
    navigate(`${routes.landing.root}/${id}`);
  };

  const seeMoreBtnClickHandler = () => {
    const fetchData = async () => {
      try {
        dispatch(pendingAction());

        const isValidQuery =
          searchQuery.length >= MIN_QUERY_LENGTH &&
          searchQuery.length <= MAX_INPUT_LENGTH;

        if (isValidQuery) {
          const data = searchLocation
            ? await getServicesByNameLocations(
                searchQuery.toLowerCase(),
                searchLocation,
                PAGE_NUMBER,
                String(totalUnits),
              )
            : await getServicesByName(
                searchQuery,
                PAGE_NUMBER,
                String(totalUnits),
              );
          setSearchOptions(data.content);
        } else {
          setSearchOptions([]);
        }
      } catch (e) {
        useNotificationToast({ type: "error" });
      } finally {
        dispatch(fulfilledAction());
      }
    };

    fetchData();
  };

  const isDisabledBtn = totalUnits
    ? units.length === totalUnits
    : units.length < Number(SIZE_NUMBER);

  const highlightMatch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Box component="span" key={index} sx={styles.highlight}>
              {part}
            </Box>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  return (
    <Box sx={styles.blockWrapper}>
      <SearchForm
        onSearch={handleSearch}
        setOptions={setSearchOptions}
        setTotalUnits={setTotalUnits}
        navigateTo={(url) =>
          navigate(`${routes.landing.root}/${routes.landing.units.root}${url}`)
        }
        sx={styles.searchContainer}
        searchInput={searchQuery}
        searchLocation={searchLocation}
      />
      {sortedUnits.length ? (
        <Box sx={styles.contentWrap}>
          <Grid container sx={styles.gridContainter}>
            {sortedUnits.map((unit: FoundSalonType) => (
              <Grid
                key={unit.id}
                item
                sx={styles.cardWrapper}
                xs={12}
                onClick={() => handleChangePage(unit.id)}
              >
                <Box>
                  <Avatar
                    sx={styles.avatarLogo}
                    src={unit.imageLink}
                    alt="Logo Salon"
                  />
                </Box>
                <Box sx={styles.contentBlock}>
                  <Box sx={styles.statusRatingBlock}>
                    <Box sx={styles.salonStatus(unit?.status)}>
                      <Typography>
                        {unit?.status ? "Open" : "Closed"}
                      </Typography>
                    </Box>
                    <Chip
                      icon={<RatingIcon fill={theme.palette.accents.main} />}
                      label={
                        <>
                          <Typography
                            component="span"
                            sx={externalStyles.rating}
                          >
                            {temporaryRating}
                          </Typography>
                          <Typography
                            component="span"
                            sx={externalStyles.subRating}
                          >
                            {temporarySubRating}
                          </Typography>
                        </>
                      }
                      sx={externalStyles.ratingWrap}
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Typography sx={styles.titleSalon}>
                        {highlightMatch(unit.name, searchQuery)}
                      </Typography>
                    </Box>
                    <ContactLine Icon={Location}>
                      {`${unit?.city || "City"}, st. ${
                        unit?.address || "Address"
                      }`}
                    </ContactLine>
                  </Box>
                  <Box sx={styles.proceduresBlock}>
                    {unit.procedures.map((procedure) => (
                      <Typography key={procedure.id}>
                        {highlightMatch(
                          capitalizeNameFirstLetters(procedure.title),
                          searchQuery,
                        )}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            sx={styles.seeMoreBtn(isDisabledBtn)}
            className="primaryYellow"
            onClick={seeMoreBtnClickHandler}
          >
            See More
          </Button>
        </Box>
      ) : (
        <Typography sx={styles.noOptions}>
          {`We don\`t have any units for the "${searchQuery}" request yet`}
        </Typography>
      )}
      <FooterBlock />
    </Box>
  );
};
