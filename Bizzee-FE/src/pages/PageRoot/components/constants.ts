export interface IPrivateRouteProps {
  children: JSX.Element;
}

export const USER_ROLES = {
  BUSINESS_OWNER: "BUSINESS_OWNER",
  CLIENT: "CLIENT",
  MASTER: "MASTER",
  ADMINISTRATOR: "ADMINISTRATOR",
  MANAGER: "MANAGER",
};

export const USER_STATUS = {
  PENDING: "PENDING",
  VERIFY: "VERIFY",
};
