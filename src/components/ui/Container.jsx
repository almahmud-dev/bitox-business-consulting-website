    

const sizeMap = {
  full: "max-w-full",
  "2xl": "max-w-[1920px]",
  xl: "max-w-[1800px]",
  lg: "max-w-[1600px]",
  md: "max-w-[1320px]",
  sm: "max-w-[1024px]",
};

export default function Container({ children, size = "lg", className = "" }) {
  return (
    <div
      className={`
        mx-auto w-full
        px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20
        ${sizeMap[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
