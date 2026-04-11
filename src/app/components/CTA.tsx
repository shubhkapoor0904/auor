import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { InquiryModal } from "./ui/InquiryModal";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <section ref={ref} className="bg-[#0a0909] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="border-t border-white/20 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-[768px] mx-auto"
          >
            <h2 className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[-0.07em]">
              Elevate Your Brand Today
            </h2>
            <p className="text-white/80 text-[16px] leading-[1.5] tracking-[-0.03em]">
              Partner with us to craft compelling stories that resonate and engage your audience effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => setIsInquiryOpen(true)}
                className="w-full sm:w-auto bg-white text-black px-6 py-3 hover:bg-gray-100 transition-all duration-300 active:scale-95"
              >
                Work
              </button>
              <button className="w-full sm:w-auto border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Explore
              </button>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-white/20" />
      </div>
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </section>
  );
}
