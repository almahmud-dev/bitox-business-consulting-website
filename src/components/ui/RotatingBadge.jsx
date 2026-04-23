// components/shared/RotatingBadge.jsx

export default function RotatingBadge({ className = "" }) {
  const text = "BEST SOLUTION    BEST SOLUTION    BEST SOLUTION    BEST SOLUTION • ";

  return (
    <div className={`relative w-[120px] h-[120px] ${className}`}>
      
      {/* Outer Black Circle */}
      <div className="absolute inset-0 rounded-full bg-black" />

      {/* Rotating Text */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow"
        viewBox="0 0 120 120"
      >
        <defs>
          <path
            id="circle-path"
            d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="8"
          fontFamily="serif"
          letterSpacing="1.5"
        >
          <textPath href="#circle-path">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Inner White Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
          <span className="text-black text-[30px] font-light ">+</span>
        </div>
      </div>

    </div>
  );
}