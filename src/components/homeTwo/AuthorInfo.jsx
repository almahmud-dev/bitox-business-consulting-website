import React from "react";
import Image from "next/image";

/**
 * AuthorInfo — Avatar + name + role
 * @param {string|object} authorImg
 * @param {string} authorName
 * @param {string} authorRole
 * @param {boolean} light - white text variant (for video overlay)
 */
function AuthorInfo({ authorImg, authorName, authorRole, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white/30">
        <Image
          src={authorImg}
          alt={authorName}
          width={44}
          height={44}
          className="object-cover w-full h-full"
          style={{ width: "44px", height: "44px" }}
        />
      </div>
      <div>
        <p
          className={`font-semibold text-sm leading-tight ${
            light ? "text-white" : "text-gray-900"
          }`}
        >
          {authorName}
        </p>
        <p
          className={`text-xs mt-0.5 ${
            light ? "text-white/70" : "text-gray-500"
          }`}
        >
          {authorRole}
        </p>
      </div>
    </div>
  );
}

export default AuthorInfo;
