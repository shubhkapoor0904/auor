import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import imgRectangle from "../../assets/ceo.png";

export function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a0909 0%, #3d3737 25%, #706565 50%, #3d3737 75%, #0a0909 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="max-w-[768px] mx-auto text-center space-y-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white text-[24px] leading-[1.4]"
          >
            "AUOR Studio transformed our brand's narrative, elevating our presence in the
            fashion industry like never before."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={imgRectangle}
              alt="Tomsy Thomas"
              className="w-[116px] h-[116px] rounded-full object-cover"
            />
            <div className="text-white text-center">
              <p className="text-[16px]">Tomsy Thomas</p>
              <p className="text-[16px] opacity-70">CEO, Fashionista Co.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
