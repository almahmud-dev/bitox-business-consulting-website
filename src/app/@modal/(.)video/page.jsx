"use client";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function VideoModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={() => router.back()}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal box */}
      <div className="relative z-10 w-full max-w-[320px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-3 sm:mx-4 md:mx-6">
        {/* Close button */}
        <button
          onClick={() => router.back()}
          className="absolute -top-9 sm:-top-11 right-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 cursor-pointer"
        >
          <X size={16} className="sm:hidden" />
          <X size={20} className="hidden sm:block" />
        </button>

        {/* YouTube iframe */}
        <div className="relative w-full aspect-video rounded-[6px] sm:rounded-[8px] md:rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/l6shgiK9Z-k?autoplay=1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
