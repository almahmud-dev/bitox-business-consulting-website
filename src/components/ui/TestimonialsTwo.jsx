"use client";
import { memo } from "react";
import { Star, Play } from "lucide-react";

// ─── Star Rating ─────────────────────────────────────────────────────────────
export const StarRating = memo(({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} size={15} className="fill-orange-500 text-orange-500" />
    ))}
  </div>
));
StarRating.displayName = "StarRating";

// ─── Avatar ───────────────────────────────────────────────────────────────────
export const Avatar = memo(({ src, initials }) => {
  if (src) {
    return (
      <img
        src={typeof src === "object" ? src.src : src}
        alt={initials}
        width={36}
        height={36}
        className="w-9 h-9 rounded-full object-cover shrink-0"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-amber-800 shrink-0 flex items-center justify-center text-[11px] text-white font-semibold font-sans">
      {initials}
    </div>
  );
});
Avatar.displayName = "Avatar";

// ─── Author Info ──────────────────────────────────────────────────────────────
export const AuthorInfo = memo(({ author, role, avatar, initials }) => (
  <div className="flex items-center gap-2.5 mt-2">
    <Avatar src={typeof avatar === "object" ? avatar.src : avatar} initials={initials} />
    <div>
      <p className="text-sm font-semibold text-gray-900 font-sans leading-tight">{author}</p>
      <p className="text-xs text-gray-400 font-sans">{role}</p>
    </div>
  </div>
));
AuthorInfo.displayName = "AuthorInfo";

// ─── Text Card ────────────────────────────────────────────────────────────────
export const TextCard = memo(({ stars, title, body, author, role, avatar, initials }) => (
  <div className="bg-white rounded-xl p-6 flex flex-col gap-2.5 h-full">
    <StarRating count={stars} />
    <p className="font-serif text-[15px] font-bold text-gray-900 underline underline-offset-2 leading-snug">
      {title}
    </p>
    <p className="text-sm text-gray-500 leading-relaxed flex-1">{body}</p>
    <AuthorInfo author={author} role={role} avatar={avatar} initials={initials} />
  </div>
));
TextCard.displayName = "TextCard";

// ─── Video Card ───────────────────────────────────────────────────────────────
export const VideoCard = memo(({ videoThumb, author, role, avatar, initials }) => {
  const thumbSrc = typeof videoThumb === "object" ? videoThumb.src : videoThumb;
  return (
    <div className="relative rounded-xl overflow-hidden min-h-56 bg-amber-300">
      {thumbSrc ? (
        <img
          src={thumbSrc}
          alt={`${author} video testimonial`}
          className="w-full h-full min-h-56 object-cover block"
        />
      ) : (
        <div className="w-full min-h-56 bg-gradient-to-br from-amber-300 to-amber-700" />
      )}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] w-12 h-12 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
        <Play size={18} className="fill-gray-800 text-gray-800 ml-0.5" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-3">
        <AuthorInfo author={author} role={role} avatar={avatar} initials={initials} />
      </div>
    </div>
  );
});
VideoCard.displayName = "VideoCard";

// ─── Arrow Button ─────────────────────────────────────────────────────────────
export const ArrowButton = memo(({ direction, onClick }) => (
  <button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className={`
      absolute top-1/2 -translate-y-1/2 z-10
      w-10 h-10 rounded-full bg-white border border-gray-200
      flex items-center justify-center
      shadow-[0_2px_10px_rgba(0,0,0,0.10)]
      transition-all duration-150
      hover:bg-gray-900 hover:border-gray-900 hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105
      group
      ${direction === "prev" ? "left-1" : "right-1"}
    `}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-gray-500 group-hover:stroke-white transition-colors duration-150"
    >
      {direction === "prev" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  </button>
));
ArrowButton.displayName = "ArrowButton";