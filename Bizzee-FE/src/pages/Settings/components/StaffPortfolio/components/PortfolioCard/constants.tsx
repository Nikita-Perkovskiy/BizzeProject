import React from "react";
import { IPortfolio } from "pages/Settings/components/StaffPortfolioEdit/types";
import { ReactComponent as PenIcon } from "assets/svg/icon_pan.svg";
import { ReactComponent as DeleteIcon } from "assets/svg/icon_cancel.svg";
import { colors } from "config/styles/themeColors";

export interface IPortfolioCardProps {
  cardInfo: IPortfolio;
  handleOpenEdit: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setCurrentPortfolioId: (
    value: number | null | ((prevVar: number | null) => number | null),
  ) => void;
  setPortfolios?: (
    value: IPortfolio[] | ((prevVar: IPortfolio[]) => IPortfolio[]),
  ) => void;
}

export const buttonTypes = {
  EDIT: "EDIT",
  DELETE: "DELETE",
};

export const menuItems = [
  {
    id: 1,
    icon: <PenIcon />,
    title: "Edit portfolio",
    type: buttonTypes.EDIT,
  },
  {
    id: 2,
    icon: <DeleteIcon stroke={colors.error.main} />,
    title: "Delete portfolio",
    type: buttonTypes.DELETE,
  },
];
