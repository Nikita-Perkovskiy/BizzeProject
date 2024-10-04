import React, { useEffect, useState } from "react";
import { Title } from "components/Title/Title";
import { ServicesGrid } from "./components/ServicesGrid";
import { styles } from "./AllServicesSection.styled";
import { BusinessSection } from "../AboutBusiness/components/BusinessSection";
import { IAllServicesTypes } from "./types";
import { useNotificationToast } from "hooks/useNotificationToast";
import { CategoryBlock } from "./components/CategoryBlock/CategoryBlock";
import { getBusinessUnitServices } from "api/BusinessUnits/getBusinessUnitServices";
import { useSelector } from "react-redux";
import { selectActiveServicesCategory } from "features/selectors/businessUnitSelectors";
import { useParams } from "react-router-dom";

export const AllServicesSection = () => {
  const [allServices, setAllServices] = useState<IAllServicesTypes[] | []>([]);
  const [sortedServices, setSortedServices] = useState<
    IAllServicesTypes[] | []
  >([]);
  const activeCategory = useSelector(selectActiveServicesCategory);
  const unitId = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getBusinessUnitServices(Number(unitId.unitId));
        setAllServices(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      }
    })();
  }, []);
  useEffect(() => {
    const sorted = allServices.filter(
      (service) => service.category.title === activeCategory,
    );
    setSortedServices(sorted);
  }, [activeCategory, allServices]);

  return (
    <BusinessSection sx={styles.blockWrapper}>
      <Title text="ALL SERVICES" />
      <CategoryBlock />
      <ServicesGrid services={sortedServices} />
    </BusinessSection>
  );
};
