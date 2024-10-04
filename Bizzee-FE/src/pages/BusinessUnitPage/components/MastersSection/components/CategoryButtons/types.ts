export interface ICategoryButton {
  title: string;
  value: string;
}

export interface ICategoryButtons {
  handleSort: (status: ICategoryButton) => void;
  sortButtons: ICategoryButton[];
  activeButton: string | null;
  disabled?: boolean;
}
