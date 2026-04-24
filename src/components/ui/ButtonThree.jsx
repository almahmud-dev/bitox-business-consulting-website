"use client";

import { useState } from "react";

const ButtonThree = ({
  frontText,
  backText,
  paddingTop = 15,       // top padding in px, default 15
  paddingBottom = 15,    // bottom padding in px, default 15
  paddingLeft = 25,      // left side padding in px, default 25
  paddingRight = 25,     // right side padding in px, default 25
  backgroundColor = "#02090F",  // button background color, default dark
  textColor = "#FFFFFF",        // text color, default white
  fontSize = 16,         // font size in px, default 16
  fontWeight = "bold",   // font weight, default bold
  lineHeight = 20,       // line height in px, default 20
  borderRadius = 6,      // border radius in px, default 6
  borderWidth,           // border width in px — if not provided, no border
  borderColor,           // border color — if borderWidth given, bg becomes transparent automatically
  onClick,               // click handler, optional
}) => {
  const [hovered, setHovered] = useState(false);

  const resolvedBackText = backText ?? frontText;
  const sizerText =
    frontText.length >= resolvedBackText.length ? frontText : resolvedBackText;

  // if borderWidth is given → transparent bg, show border
  // if no borderWidth → use backgroundColor, no border
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
      transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s",
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span style={style.sizer}>{sizerText}</span>
      <span style={{ ...style.textBase, ...style.front }}>{frontText}</span>
      <span style={{ ...style.textBase, ...style.back }}>{resolvedBackText}</span>
    </button>
  );
};

export default ButtonThree;


// ---------- USAGE ----------
//
// No border — bg color shows:
// <ButtonThree frontText="Learn about us" backgroundColor="#02090F" textColor="#FFFFFF" />
//
// With border — bg becomes transparent automatically:
// <ButtonThree frontText="Contact Us" borderWidth={1} borderColor="#02090F" textColor="#02090F" />
//
// With hover text:
// <ButtonThree frontText="Learn about us" backText="Let's Talk." />
//
// Pill shaped with border:
// <ButtonThree frontText="Get Started" borderWidth={2} borderColor="#FF5733" textColor="#FF5733" borderRadius={50} />
//
// All props together:
// <ButtonThree
//   frontText="Learn about us"
//   backText="Let's Talk."
//   paddingTop={15}
//   paddingBottom={15}
//   paddingLeft={30}
//   paddingRight={30}
//   backgroundColor="#02090F"
//   textColor="#FFFFFF"
//   fontSize={16}
//   fontWeight="bold"
//   lineHeight={20}
//   borderRadius={6}
//   borderWidth={1}
//   borderColor="#FFFFFF"
//   onClick={() => console.log("clicked!")}
// />
//
// ---------------------------