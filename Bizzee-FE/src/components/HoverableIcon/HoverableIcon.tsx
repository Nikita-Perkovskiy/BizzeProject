import { FC, useState } from "react";
import { IHoverableIconProps } from "./types";
import React from "react";
import { styles } from "./HoverableIcon.styles";

export const HoverableIcon: FC<IHoverableIconProps> = ({
  Icon,
  primaryColor,
  hoverColor,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const combinedStyle = {
    ...style,
    ...styles,
    color: isHovered ? hoverColor : primaryColor,
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Icon
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      color={isHovered ? hoverColor : primaryColor}
      style={combinedStyle}
    />
  );
};
