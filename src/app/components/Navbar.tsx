import { motion } from "motion/react";
import svgPaths from "../../imports/svg-t4eik94b2c";
import { useState } from "react";
import { PortalModal } from "./ui/PortalModal";
import { InquiryModal } from "./ui/InquiryModal";

export function Navbar() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-[73px] flex items-center justify-between">
          <div className="tracking-[1.32px] text-[22px]">AUOR</div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[16px] hover:opacity-60 transition-opacity">Home</a>
            <a href="#about" className="text-[16px] hover:opacity-60 transition-opacity">About Us</a>
            <a href="#services" className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity">
              <span className="text-[16px]">Our Services</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pee47f00} fill="currentColor" fillRule="evenodd" />
              </svg>
            </a>
            <button onClick={() => setIsPortalOpen(true)} className="text-[16px] hover:opacity-60 transition-opacity">Client Portal</button>
          </div>

          <button onClick={() => setIsInquiryOpen(true)} className="bg-black text-white px-5 py-2 hover:bg-gray-800 transition-all duration-300 active:scale-95">
            Join
          </button>
        </div>
      </motion.nav>
      <PortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
