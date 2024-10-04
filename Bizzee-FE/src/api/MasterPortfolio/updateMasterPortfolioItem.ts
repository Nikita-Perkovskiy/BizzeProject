import { apiClient } from "lib/apiClient";
import { MASTER_PORTFOLIO_ROUTE } from "../constants";

export const updateMasterPortfolio = async (
  portfolioData: FormData,
  id: number,
) => {
  const res = await apiClient.put(
    `${MASTER_PORTFOLIO_ROUTE}/${id}`,
    portfolioData,
  );

  return res.data;
};
