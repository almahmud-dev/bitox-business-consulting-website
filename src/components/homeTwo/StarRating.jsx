import React from "react";
import { FaStar } from "react-icons/fa";

/**
 * StarRating — Reusable star rating component
 * @param {number} count - Number of stars (default 5)
 */
function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-base" />
      ))}
    </div>
  );
}

export default StarRating;