import Image from "next/image";
import { ReactNode } from "react";

interface PhoneMockupProps {
  src: string;
  alt: string;
}

export default function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19.5] rounded-[2.5rem] bg-[#0c0c0c] p-2 md:p-3 shadow-2xl border-[1px] border-white/20">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-3 inset-x-0 h-7 flex justify-center z-20 pointer-events-none">
        <div className="w-1/3 h-full bg-[#0c0c0c] rounded-full"></div>
      </div>
      
      {/* Screen Wrapper */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-brand-dark-blue border border-black">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* Side Buttons (Volume & Power) */}
      <div className="absolute -left-[2px] top-24 w-[3px] h-10 bg-white/20 rounded-l-md"></div>
      <div className="absolute -left-[2px] top-36 w-[3px] h-14 bg-white/20 rounded-l-md"></div>
      <div className="absolute -left-[2px] top-52 w-[3px] h-14 bg-white/20 rounded-l-md"></div>
      <div className="absolute -right-[2px] top-32 w-[3px] h-16 bg-white/20 rounded-r-md"></div>
    </div>
  );
}
