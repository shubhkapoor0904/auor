import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../../imports/svg-t4eik94b2c";
import imgImage3 from "../../assets/brand1.png";
import imgImage4 from "../../assets/brand3.png";

function MissJoLogo() {
  return (
    <svg className="h-[30px] w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 138 29.3">
      <path d={svgPaths.p3f2fb500} fill="white" />
      <path d={svgPaths.p10f65300} fill="white" />
      <path d={svgPaths.p2844b480} fill="white" />
      <path d={svgPaths.p35705f00} fill="white" />
      <path d={svgPaths.p2903c100} fill="white" />
    </svg>
  );
}

export function BrandLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0909 0%, #3d3737 25%, #706565 50%, #3d3737 75%, #000000 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white text-center text-[24px] tracking-[-0.07em] mb-16"
        >
          Trusted by top brands in the Fashion Industry
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-20"
        >
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <img src={imgImage4} alt="Brand logo" className="h-[50px] lg:h-[66px] w-auto object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <MissJoLogo />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform -translate-y-1 lg:-translate-y-2.5">
            <img src={imgImage3} alt="Brand logo" className="h-[50px] lg:h-[67px] w-auto object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
