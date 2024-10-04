export interface IMyProfileMenuProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  handleMenu: (isLogOut: boolean) => void;
  modalClose: () => void;
  openModal: boolean;
}
