import React, { useEffect } from "react";
import { CallToActionSection } from "./components/CallToActionSection";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ForBusiness } from "./components/ForBusiness";
import { ForIndividuals } from "./components/ForIndividuals";
import { SpecialDeals } from "./components/SpecialDeals";
import { PageFooter } from "./components/PageFooter";
import { useSelector } from "react-redux";
import { selectToken } from "features/selectors/authSelectors";
import { useTypedDispatch } from "store";
import { getUserInfoThunk } from "features/auth/actions";

const HomePage = () => {
  const dispatch = useTypedDispatch();
  const isLoggedIn = !!useSelector(selectToken);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfoThunk());
    }
  }, [isLoggedIn]);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ForBusiness />
      <ForIndividuals />
      <SpecialDeals />
      <CallToActionSection />
      <PageFooter />
    </>
  );
};

export default HomePage;
