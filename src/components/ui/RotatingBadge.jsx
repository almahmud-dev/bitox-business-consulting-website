


import React from "react";

const RotatingBadge = ({ size = "lg" }) => {
  const config = {
    sm: {
      outer: 80,
      cx: 40,
      r: 40,
      pathR: 29,
      fontSize: 5.5,
      inner: 40,
      plusSize: "18px",
      text: "BEST SOLUTION BEST SOLUTION BEST SOLUTION",
    },
    md: {
      outer: 110,
      cx: 55,
      r: 55,
      pathR: 40,
      fontSize: 6.5,
      inner: 55,
      plusSize: "24px",
      text: "BEST SOLUTION BEST SOLUTION BEST SOLUTION",
    },
    lg: {
      outer: 146,
      cx: 73,
      r: 73,
      pathR: 55,
      fontSize: 7.5,
      inner: 73,
      plusSize: "30px",
      text: "BEST SOLUTION BEST SOLUTION BEST SOLUTION",
    },
  };

  const c = config[size];
  const pathId = `textCircle-${size}`;
  const circumference = +(2 * Math.PI * c.pathR).toFixed(2);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: c.outer, height: c.outer }}
    >
      {/* Rotating outer ring */}
      <svg
        className="animate-[spin_12s_linear_infinite]"
        width={c.outer}
        height={c.outer}
        viewBox={`0 0 ${c.outer} ${c.outer}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={c.cx} cy={c.cx} r={c.r} fill="#1a1a1a" />
        <defs>
          <path
            id={pathId}
            d={`M${c.cx},${c.cx} m-${c.pathR},0 a${c.pathR},${c.pathR} 0 1,1 ${c.pathR * 2},0 a${c.pathR},${c.pathR} 0 1,1 -${c.pathR * 2},0`}
          />
        </defs>
        <text
          fontFamily="Arial Black, sans-serif"
          fontSize={c.fontSize}
          fontWeight="600"
          fill="white"
        >
          <textPath
            href={`#${pathId}`}
            startOffset="0%"
            textLength={circumference}
            lengthAdjust="spacing"
          >
            {c.text}
          </textPath>
        </text>
      </svg>

      {/* Static inner circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4F3F0] flex justify-center items-center shadow-md z-10"
        style={{ width: c.inner, height: c.inner }}
      >
        <span
          className="text-[#1a1a1a] font-bold leading-none"
          style={{ fontSize: c.plusSize }}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default RotatingBadge;