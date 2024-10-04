import { apiClient } from "lib/apiClient";
import { MASTER_PORTFOLIO_ROUTE } from "../constants";

export const createMasterPortfolio = async (portfolioData: FormData) => {
  const res = await apiClient.post(MASTER_PORTFOLIO_ROUTE, portfolioData);

  return res.data;
};
