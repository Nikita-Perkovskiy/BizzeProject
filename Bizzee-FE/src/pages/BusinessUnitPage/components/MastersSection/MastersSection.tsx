import React, { useEffect, useState } from "react";
import { Title } from "components/Title/Title";
import { CategoriesMasters } from "./components/CategoriesMasters/CategoriesMasters";
import { MastersGrid } from "./components/MastersGrid";
import { BusinessSection } from "../AboutBusiness/components/BusinessSection";
import { useNotificationToast } from "hooks/useNotificationToast";
import { IMasterForBusinessUnit } from "./types";
import { styles } from "./MasterSection.styles";
import { getBusinessUnitStaffById } from "api/BusinessUnits/getBusinessUnitStaffById";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectActiveMastersCategory } from "features/selectors/businessUnitSelectors";

export const MastersSection = () => {
  const [allMastersList, setAllMastersList] = useState<
    IMasterForBusinessUnit[]
  >([]);
  const [sortedMasters, setSortedMasters] = useState<
    IMasterForBusinessUnit[] | []
  >([]);
  const activeCategory = useSelector(selectActiveMastersCategory);
  const unitId = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getBusinessUnitStaffById(Number(unitId.unitId));
        setAllMastersList(data);
      } catch (e) {
        useNotificationToast({ type: "error" });
      }
    })();
  }, []);

  useEffect(() => {
    if (allMastersList.length && allMastersList[0].category) {
      const sorted = allMastersList.map((master) => ({
        ...master,
        category: master.category.filter(
          (category) => category.title === activeCategory,
        ),
      }));
      setSortedMasters(sorted);
    }
  }, [activeCategory, allMastersList]);

  return (
    <BusinessSection sx={styles.blockWrapper}>
      <Title text="MASTERS" />
      <CategoriesMasters />
      <MastersGrid mastersList={sortedMasters} />
    </BusinessSection>
  );
};
