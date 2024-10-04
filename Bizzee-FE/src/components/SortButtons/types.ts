interface ISortButton {
  label: string;
  type: boolean | null;
}

export interface ISortButtons {
  handleSort: (status: boolean | null) => void;
  sortButtons: ISortButton[];
  activeButton: boolean | null;
  disabled?: boolean;
}
