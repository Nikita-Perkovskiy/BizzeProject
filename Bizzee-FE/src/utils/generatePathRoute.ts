export const generatePath = (base: string, ...segments: string[]): string => {
  return [base, ...segments].join("/").replace(/\/+/g, "/");
};
