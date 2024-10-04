export interface IClient {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  country: string;
  lastVisit: string;
  nextVisit: string;
  status: string;
  rank: string;
  actions: string;
}

export interface ClientsTableProps {
  data: IClient[];
  setData: React.Dispatch<React.SetStateAction<IClient[]>>;
}

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof IClient;
  label: string;
  numeric: boolean;
  sortable?: boolean;
}
