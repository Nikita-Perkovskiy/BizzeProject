export interface IMyProfileMenuProps {
  anchorEl: null | HTMLElement;
  openMenu: boolean;
  menuClose: () => void;
  handleMenu: (isLogOut: boolean) => void;
  modalClose: () => void;
  openModal: boolean;
}
