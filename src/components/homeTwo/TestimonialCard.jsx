"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import AuthorInfo from "@/components/homeTwo/AuthorInfo";

/** Extract YouTube video ID from any YT URL */
function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([^?&\s]+)/,
    /youtube\.com\/watch\?v=([^&\s]+)/,
    /youtube\.com\/embed\/([^?&\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        i < count ? (
          <FaStar key={i} className="text-amber-400 text-sm" />
        ) : (
          <FaRegStar key={i} className="text-amber-400/40 text-sm" />
        )
      )}
    </div>
  );
}

/**
 * TestimonialCard
 *
 * NOT center → normal text or thumbnail content
 * CENTER     → text/thumbnail hidden, card shows videoThumbnail (or authorImg)
 *              as full background + play button overlay
 * Play click → YouTube iframe fills the card
 * Leaves center → iframe destroyed, original content restored
 *
 * Fixed height 380px — no layout jump ever.
 */
function TestimonialCard({ item, isCenter }) {
  const [playing, setPlaying] = useState(false);
  const ytId = getYouTubeId(item.videoSrc);

  // Reset when card leaves center
  useEffect(() => {
    if (!isCenter) setPlaying(false);
  }, [isCenter]);

  const handlePlay = useCallback(
    (e) => {
      e.stopPropagation();
      if (isCenter && ytId) setPlaying(true);
    },
    [isCenter, ytId]
  );

  // Thumbnail to show in center state — prefer videoThumbnail, fall back to authorImg
  const centerThumb = item.videoThumbnail || item.authorImg;

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
      style={{ height: "380px" }}
    >
      {/* ══════════════════════════════════════════
          LAYER 1 — NORMAL CONTENT (not center)
          Text card OR video-thumbnail card
          Fades out when isCenter
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex flex-col p-7 transition-all duration-500"
        style={{
          opacity: isCenter ? 0 : 1,
          pointerEvents: isCenter ? "none" : "all",
          transform: isCenter ? "scale(0.97)" : "scale(1)",
        }}
      >
        {item.type === "video" ? (
          /* video-type: thumbnail + author */
          <>
            <div className="relative flex-1 rounded-xl overflow-hidden mb-5">
              <Image
                src={item.videoThumbnail || item.authorImg}
                alt={item.authorName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <AuthorInfo
              authorImg={item.authorImg}
              authorName={item.authorName}
              authorRole={item.authorRole}
            />
          </>
        ) : (
          /* text-type: stars + title + desc + author */
          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="flex flex-col gap-3">
              {item.rating && <StarRating count={item.rating} />}
              <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </div>
            <AuthorInfo
              authorImg={item.authorImg}
              authorName={item.authorName}
              authorRole={item.authorRole}
            />
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════
          LAYER 2 — CENTER THUMBNAIL + PLAY BUTTON
          Shown when isCenter && !playing
          Full-card image with play overlay
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          opacity: isCenter && !playing ? 1 : 0,
          pointerEvents: isCenter && !playing ? "all" : "none",
          transform: isCenter && !playing ? "scale(1)" : "scale(1.03)",
        }}
      >
        {/* Full-card thumbnail image */}
        <Image
          src={centerThumb}
          alt={item.authorName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 420px"
          priority={isCenter}
        />

        {/* Gradient overlay — darkens bottom for author legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Play button — center of card */}
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          <span className="absolute w-20 h-20 rounded-full bg-white/25 animate-ping" />
          <button
            className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
            aria-label="Play video"
          >
            <BsPlayCircleFill className="text-gray-900 text-4xl" />
          </button>
        </div>

        {/* Author info pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
          <AuthorInfo
            authorImg={item.authorImg}
            authorName={item.authorName}
            authorRole={item.authorRole}
            light
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LAYER 3 — YOUTUBE IFRAME
          Mounted only after play click
      ══════════════════════════════════════════ */}
      {playing && ytId && (
        <div
          className="absolute inset-0 z-30 bg-black"
          style={{ animation: "fadeIn 0.35s ease forwards" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
            title={item.authorName}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}

export default TestimonialCard;