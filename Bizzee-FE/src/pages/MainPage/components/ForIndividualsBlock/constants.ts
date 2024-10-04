import calendar from "./images/calendar-img.png";
import calendarDesktop from "./images/calendar-img-desktop.png";
import salon from "./images/salon.png";
import salonDesktop from "./images/salon-desktop.png";
import defaultImg from "./images/default-img.png";
import defaultImgDesktop from "./images/default-img-desktop.png";

export const forIndividualsListImages = [
  {
    id: 0,
    img: (isDesktopScreen: boolean) =>
      isDesktopScreen ? calendarDesktop : calendar,
    alt: "Calendar",
  },
  {
    id: 1,
    img: (isDesktopScreen: boolean) => (isDesktopScreen ? salonDesktop : salon),
    alt: "Salon",
  },
  {
    id: 2,
    img: (isDesktopScreen: boolean) =>
      isDesktopScreen ? defaultImgDesktop : defaultImg,
    alt: "Default Image",
  },
];

export const forIndividualsTextItems = [
  { id: 0, title: "Convenient recording and reminder of the visit" },
  { id: 1, title: "Choose a master based on reviews and ratings" },
  { id: 2, title: "Loyalty system and secure digital payment" },
];
