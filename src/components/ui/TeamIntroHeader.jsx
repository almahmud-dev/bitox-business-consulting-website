const TeamIntroHeader = ({
  badge = "Meet our experts",
  title = "Global business experts on stage worldwide today live",
  statNumber = "99%",
  statDescription = "Worldwide client satisfaction through lasting partnerships",
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 ">
      {/* Left: eyebrow + heading */}
      <div className="max-w-[771px]">
        <p className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest mb-2">
          {badge}
        </p>
        <h2 className="text-[20px] md:text-[38px] xl:text-[42px] font-bold leading-8 md:leading-11 lg:leading-14.5 underline text-primary underline-offset-4">
          {title}
        </h2>
      </div>

      {/* Right: stat box */}
      <div className="max-w-98 p-4 shrink-0 relative">
        {/* Left double dashed border */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            pointerEvents: "none",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="#02090F"
            strokeOpacity="0.2"
            strokeDasharray="2 2"
          />
          <line
            x1="5"
            y1="0"
            x2="5"
            y2="100%"
            stroke="#02090F"
            strokeOpacity="0.2"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Bottom double dashed border */}
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "6px",
            pointerEvents: "none",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#02090F"
            strokeOpacity="0.2"
            strokeDasharray="2 2"
          />
          <line
            x1="0"
            y1="5"
            x2="100%"
            y2="5"
            stroke="#02090F"
            strokeOpacity="0.2"
            strokeDasharray="2 2"
          />
        </svg>

        <div className="pl-3">
          <p className="text-[20px] md:text-[38px] lg:text-[70px] font-bold leading-none mb-2 text-primary">
            {statNumber}
          </p>
          <p className="text-[18px] lg:text-[20px] text-primary lg:leading-7">
            {statDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroHeader;
