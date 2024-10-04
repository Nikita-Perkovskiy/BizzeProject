export const capitalizeFirstLetter = (sentence: string) => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export const capitalizeNameFirstLetters = (sentence: string) => {
  return sentence
    .split(" ")
    .map((item) => capitalizeFirstLetter(item))
    .join(" ");
};
