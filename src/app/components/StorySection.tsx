import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import svgPaths from "../../imports/svg-t4eik94b2c";
import imgImage2 from "../../assets/crafting2.png";
import imgImage1 from "../../assets/crafting1.png";
import { VideoModal } from "./ui/VideoModal";

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" ref={ref} className="bg-[#0a0909] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square max-w-[375px]">
              <img
                src={imgImage1}
                alt="Fashion photography"
                className="w-full h-full object-cover mix-blend-difference"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-16 w-[280px] lg:w-[372px] h-[280px] lg:h-[372px]"
            >
              <img
                src={imgImage2}
                alt="Fashion detail"
                className="w-full h-full object-contain mix-blend-exclusion"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[-0.07em] text-right">
              Crafting Stories through Fashion and PR
            </h2>
            <p className="text-[18px] leading-[1.5] tracking-[-0.03em] opacity-90 max-w-[441px] ml-auto text-right">
              At AUOR Studio, we blend creativity with strategy to elevate brands.
              Our agency reel captures the essence of our innovative projects and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                Watch
              </button>
              <button className="w-full sm:w-auto justify-center sm:justify-start flex items-center gap-2 text-white hover:opacity-60 transition-all duration-300 active:scale-95">
                Explore
                <svg className="w-6 h-6 translate-y-[2px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p36daa800} fill="white" stroke="white" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
