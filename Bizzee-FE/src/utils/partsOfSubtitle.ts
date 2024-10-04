export const partsOfSubtitle = (text: string, highlight?: string) =>
  text.split(new RegExp(`(${highlight})`, "gi"));
