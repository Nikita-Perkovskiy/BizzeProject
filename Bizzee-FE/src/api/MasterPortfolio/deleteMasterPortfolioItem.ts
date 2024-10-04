import { apiClient } from "lib/apiClient";
import { MASTER_PORTFOLIO_ROUTE } from "../constants";

export const deleteMasterPortfolioItem = async (id: number) => {
  const res = await apiClient.delete(`${MASTER_PORTFOLIO_ROUTE}/${id}`);

  return res.data;
};
