import { apiClient } from "lib/apiClient";
import { MASTER_PORTFOLIO_LIST } from "../constants";

export const getMasterPortfolioList = async (id: number) => {
  const res = await apiClient.get(`${MASTER_PORTFOLIO_LIST}/${id}`);

  return res.data;
};
