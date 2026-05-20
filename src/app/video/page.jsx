import { X } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-10 sm:py-12">
      <div className="w-full max-w-[300px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-start sm:items-center gap-3 mb-4 sm:mb-5 md:mb-6">
          <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            Building the right foundation
          </h1>
          <Link
            href="/"
            className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300"
          >
            <X size={14} className="sm:hidden" />
            <X size={16} className="hidden sm:block md:hidden" />
            <X size={20} className="hidden md:block" />
          </Link>
        </div>

        {/* iframe */}
        <div className="relative w-full aspect-video rounded-[6px] sm:rounded-[8px] md:rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/l6shgiK9Z-k"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
