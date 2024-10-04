export interface IOnlyModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
  disabled?: boolean;
  zIndex?: number;
}
