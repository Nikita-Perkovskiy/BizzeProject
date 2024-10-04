import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "features/selectors/authSelectors";
import { useTypedDispatch } from "store";
import { getUserInfoThunk } from "features/auth/actions";
import { FooterBlock } from "./components/FooterBlock/FooterBlock";
import { WelcomeBlock } from "./components/WelcomeBlock/WelcomeBlock";
import { ServiceGallary } from "./components/ServiceGallery/ServiceGallary";
import { ForBusinessBlock } from "./components/ForBusinessBlock";
import { OurAdvantages } from "./components/OurAdvantages/OurAdvantages";
import { AnimatedTextBlock } from "./components/AnimatedTextBlock/AnimatedTextBlock";
import { CategoriesAndSalonsBlock } from "./components/CategoriesAndSalonsBlock/CategoriesAndSalonsBlock";
import { ForIndividualsBlock } from "./components/ForIndividualsBlock";

const MainPage = () => {
  const dispatch = useTypedDispatch();
  const isLoggedIn = !!useSelector(selectToken);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfoThunk());
    }
  }, [isLoggedIn]);

  return (
    <>
      <WelcomeBlock />
      <ServiceGallary />
      <CategoriesAndSalonsBlock />
      <OurAdvantages />
      <ForBusinessBlock />
      <ForIndividualsBlock />
      <AnimatedTextBlock />
      <FooterBlock />
    </>
  );
};

export default MainPage;
