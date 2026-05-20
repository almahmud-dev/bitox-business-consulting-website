"use client";

import { useState } from "react";

const ButtonThree = ({
  frontText,
  backText,
  paddingTop = 15,
  paddingBottom = 15,
  paddingLeft = 25,
  paddingRight = 25,
  backgroundColor = "#02090F",
  textColor = "#FFFFFF",
  fontSize = 16,
  fontWeight = "bold",
  lineHeight = 20,
  borderRadius = 6,
  borderWidth,
  borderColor,
  onClick,
  externalHovered,  
}) => {
  const [internalHovered, setInternalHovered] = useState(false);

  
  const hovered = externalHovered !== undefined ? externalHovered : internalHovered;

  const resolvedBackText = backText ?? frontText;
  const sizerText =
    frontText.length >= resolvedBackText.length ? frontText : resolvedBackText;

  const hasBorder = !!borderWidth;
  const resolvedBg = hasBorder ? "transparent" : backgroundColor;
  const resolvedBorder = hasBorder
    ? `${borderWidth}px solid ${borderColor ?? "#02090F"}`
    : "none";

  const style = {
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      backgroundColor: resolvedBg,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
      cursor: "pointer",
      border: resolvedBorder,
      outline: "none",
      borderRadius: `${borderRadius}px`,
    },
    textBase: {
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight: `${lineHeight}px`,
      color: textColor,
      position: "absolute",
      whiteSpace: "nowrap",
      transition: "transform 0.3s ease, opacity 0.1s ease-in-out",
      userSelect: "none",
    },
    front: {
      transform: hovered ? "translateY(-100%)" : "translateY(0%)",
      opacity: hovered ? 0 : 1,
    },
    back: {
      transform: hovered ? "translateY(0%)" : "translateY(100%)",
      opacity: hovered ? 1 : 0,
    },
    sizer: {
      fontSize: `${fontSize}px`,
      fontWeight,
      lineHeight: `${lineHeight}px`,
      color: "transparent",
      userSelect: "none",
      whiteSpace: "nowrap",
    },
  };

  return (
    <button
      style={style.wrapper}
      onMouseEnter={() => setInternalHovered(true)}   
      onMouseLeave={() => setInternalHovered(false)}
      onClick={onClick}
      className="!flex !items-center"
    >
      <span  className="inline-block" style={style.sizer}>{sizerText}</span>
      <span  className="inline-block" style={{ ...style.textBase, ...style.front }}>{frontText}</span>
      <span  className="inline-block" style={{ ...style.textBase, ...style.back }}>{resolvedBackText}</span>
    </button>
  );
};

export default ButtonThree;