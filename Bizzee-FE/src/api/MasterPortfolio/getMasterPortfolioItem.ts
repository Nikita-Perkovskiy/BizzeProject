import { apiClient } from "lib/apiClient";
import { MASTER_PORTFOLIO_ROUTE } from "../constants";

export const getMasterPortfolioItem = async (id: number) => {
  const res = await apiClient.get(`${MASTER_PORTFOLIO_ROUTE}/${id}`);

  return res.data;
};
