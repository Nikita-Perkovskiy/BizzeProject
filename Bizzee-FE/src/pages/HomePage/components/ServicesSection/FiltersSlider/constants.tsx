import React from "react";
import { ReactComponent as HairdresserSalonIcon } from "assets/svg/hairdrasser-scissors.svg";
import { ReactComponent as ManicurePedicureIcon } from "assets/svg/manicure-pedicure.svg";
import { ReactComponent as MassageIcon } from "assets/svg/massage.svg";
import { ReactComponent as EyebrowsIcon } from "assets/svg/eyebrows.svg";
import { ReactComponent as DepilationIcon } from "assets/svg/depilation.svg";
import { ReactComponent as BeautySalonsIcon } from "assets/svg/beauty-salons.svg";
import { ReactComponent as MakeupIcon } from "assets/svg/make-up.svg";
import { ReactComponent as AllIcon } from "assets/svg/all.svg";
import { ReactComponent as PiercingIcon } from "assets/svg/piercing.svg";
import { ReactComponent as BarbershopIcon } from "assets/svg/barber-shop.svg";
import { ReactComponent as TattooIcon } from "assets/svg/tattoo.svg";
import { ReactComponent as MedicalAesteticIcon } from "assets/svg/medical-aesthetic.svg";
import { ReactComponent as EyelashesIcon } from "assets/svg/eyelashes.svg";
import { ReactComponent as OtherIcon } from "assets/svg/other.svg";

export const filterConfig = [
  {
    name: "All",
    icon: <AllIcon className="filterIcon" />,
    styles: {
      width: {
        xs: "50px",
        lg: "100px",
      },
      right: {
        xs: "0",
        lg: "10px",
      },
    },
  },
  {
    name: "Hairdresser salon",
    icon: <HairdresserSalonIcon className="filterIcon" />,
    styles: {
      transform: {
        xs: "rotate(-15deg) translateY(-50%) translateX(20%)",
      },
      width: {
        xs: "60px",
        lg: "140px",
      },
    },
  },
  {
    name: "Manicure/Pedicure",
    icon: <ManicurePedicureIcon className="filterIcon" />,
    styles: {
      right: {
        xs: "-5px",
      },
    },
  },
  {
    name: "Massage",
    icon: <MassageIcon className="filterIcon" />,
    styles: {},
  },
  {
    name: "Eyebrows",
    icon: <EyebrowsIcon className="filterIcon" />,
    styles: {},
  },
  {
    name: "Depilation",
    icon: <DepilationIcon className="filterIcon" />,
    styles: {
      right: {
        xs: "-15px",
      },
    },
  },
  {
    name: "Beauty salons",
    icon: <BeautySalonsIcon className="filterIcon" />,
    styles: {
      top: {
        xs: "-10px",
      },
    },
  },
  {
    name: "Make up",
    icon: <MakeupIcon className="filterIcon" />,
    styles: {
      top: {
        xs: "-10px",
      },
    },
  },

  {
    name: "Piercing",
    icon: <PiercingIcon className="filterIcon" />,
    styles: {
      width: {
        xs: "50px",
        lg: "100px",
      },
      right: {
        xs: "5px",
        lg: "20px",
      },
    },
  },
  {
    name: "Barber shop",
    icon: <BarbershopIcon className="filterIcon" />,
    styles: {
      top: {
        xs: "-10px",
        lg: "-15px",
      },
      height: {
        xs: "65px",
        lg: "130px",
      },
    },
  },
  {
    name: "Tattoo",
    icon: <TattooIcon className="filterIcon" />,
    styles: {
      top: {
        xs: "-15px",
        lg: "-25px",
      },
    },
  },
  {
    name: "Medical aesthetic",
    icon: <MedicalAesteticIcon className="filterIcon" />,
    styles: {
      top: {
        xs: "-10px",
      },
      height: {
        xs: "65px",
        lg: "130px",
      },
    },
  },
  {
    name: "Eyelashes",
    icon: <EyelashesIcon className="filterIcon" />,
    styles: {
      width: {
        xs: "55px",
        lg: "120px",
      },
    },
  },
  {
    name: "Other",
    icon: <OtherIcon className="filterIcon" />,
    styles: {
      width: {
        xs: "50px",
        lg: "110px",
      },
      right: {
        xs: 0,
        lg: "5px",
      },
    },
  },
];
