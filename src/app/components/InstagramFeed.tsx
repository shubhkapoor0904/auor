import { motion, useAnimationFrame, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import imgImageDefault from "../../assets/journal1.jpeg";
import journal1 from "../../assets/journal1.jpeg";
import journal2 from "../../assets/journal2.jpeg";
import journal3 from "../../assets/journal3.jpeg";
import journal4 from "../../assets/journal4.jpeg";
import journal5 from "../../assets/journal5.jpeg";

const feedImages = [
  journal1,
  journal2,
  journal3,
  journal4,
  journal5
];

export function InstagramFeed() {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);

  // Spring physics for smooth velocity transitions between normal and fast speeds
  const velocityFactor = useSpring(1, { damping: 50, stiffness: 400 });

  useEffect(() => {
    velocityFactor.set(isHovered ? 4 : 1);
  }, [isHovered, velocityFactor]);

  useAnimationFrame((time, delta) => {
    // Math for default speed: ~1480px / 25s = ~59.2 pixels per second = 0.0592 pixels per ms
    const moveBy = -0.06 * velocityFactor.get() * delta;
    let newX = baseX.get() + moveBy;

    // Wrap around for seamless loop (5 images * 296px width+gap = 1480px width)
    if (newX <= -1480) {
      newX += 1480;
    }

    baseX.set(newX);
  });

  return (
    <section className="bg-[#0a0909] py-12 overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-white text-[24px] font-light">@AUORStudio</h2>
          <p className="text-white/60 mt-2">Latest from our journal</p>
        </div>
        <a href="#" className="hidden sm:inline-block text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
          Follow
        </a>
      </div>

      <div
        className="relative w-full flex overflow-hidden cursor-ew-resize"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x: baseX }}
          className="flex gap-4 px-4 w-max"
        >
          {[...feedImages, ...feedImages, ...feedImages].map((img, i) => (
            <div
              key={i}
              className="relative w-[280px] h-[280px] shrink-0 group overflow-hidden bg-white/5"
            >
              <img
                src={img}
                alt="Social feed"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = imgImageDefault;
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
