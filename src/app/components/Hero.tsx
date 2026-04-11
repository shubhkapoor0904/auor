import { motion } from "motion/react";
import img38Ad2Bb0A23F458E99DbDac8Ee1A6B6911 from "figma:asset/5b2dc20b3c21ea5f9101f8d1653617ea82a3ab95.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden mt-[73px]">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={img38Ad2Bb0A23F458E99DbDac8Ee1A6B6911}
          alt="Fashion editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[560px] text-white space-y-10"
        >
          <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.2] tracking-[-0.07em]">
            Elevate Your Brand with Tailored Strategies
          </h1>
          <p className="text-[16px] leading-[1.5] tracking-[-0.03em] max-w-[402px] opacity-90">
            At AUOR Studio, we specialize in transforming fashion narratives into compelling
            stories that resonate. Our expert team is dedicated to crafting unique experiences
            that elevate your brand's presence in the market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
