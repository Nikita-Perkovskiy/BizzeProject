export interface IFormValues {
  [key: string]: string;
}

export interface ISearchEngineProps {
  placeholder: string;
  onSearch: (value: string) => void;
}
