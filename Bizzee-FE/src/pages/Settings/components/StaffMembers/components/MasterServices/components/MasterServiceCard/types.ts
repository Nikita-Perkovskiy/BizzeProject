import { IServices } from "../../types";

export interface IMasterServiceCard extends IServices {
  handleAddServices: ({
    id,
    category,
  }: {
    id: number;
    category: string;
  }) => void;
  handleRemoveServices: ({
    id,
    category,
  }: {
    id: number;
    category: string;
  }) => void;
}
