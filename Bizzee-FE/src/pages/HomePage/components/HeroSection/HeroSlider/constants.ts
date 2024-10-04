import { styles } from "./HeroSlider.styled";
import img1 from "assets/images/HeroExamples/woman.jpg";
import img2 from "assets/images/HeroExamples/barber.jpg";
import img3 from "assets/images/HeroExamples/makeup.jpg";

export const heroSlidersConfig = [
  {
    name: "heroMain",
    styles: styles.mainSlider,
  },
  {
    name: "heroMiddle",
    styles: [styles.middleSlider, styles.secondarySlider],
  },
  {
    name: "heroLast",
    styles: [styles.lastSlider, styles.secondarySlider],
  },
];

export const heroPhotos = [
  { id: 1, photo: img1, title: "woman" },
  { id: 2, photo: img2, title: "barber" },
  { id: 3, photo: img3, title: "makeup" },
];
