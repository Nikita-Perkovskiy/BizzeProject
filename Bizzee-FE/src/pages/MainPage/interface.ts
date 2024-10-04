interface BusinessUnitsArray {
  id: number;
  businessUnitName: string;
}

interface ProceduresArray {
  id: number;
  title: string;
}

export interface IContentItem {
  id: number;
  businessUnitName: string;
  masterName: string;
  serviceName: string;
  businessUnits: BusinessUnitsArray[];
  procedures: ProceduresArray[];
}

interface BusinessUnit {
  id: number;
  businessUnitName: string;
  country: string;
  city: string;
  address: string;
}

export interface IDataByNameAndLocation {
  content: BusinessUnit[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export interface IDataByLocation {
  content: BusinessUnit[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}
