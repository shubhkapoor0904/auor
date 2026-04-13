import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import svgPaths from "../../imports/svg-t4eik94b2c";
import imgImage5 from "../../assets/comprehensivepr1.png";
import imgImage6 from "../../assets/comprehensivepr2.png";
import imgImage7 from "../../assets/comprehensivepr3.png";

const services = [
  {
    image: imgImage5,
    title: "Engaging Influencer Marketing Strategies to Amplify Your Brand's Voice",
    description: "Our PR services elevate your brand's presence in the competitive fashion landscape.",
    cta: "Learn More",
    stats: [
      { label: "Brand Engagement", value: "+300%" },
      { label: "Influencer Reach", value: "2.4M" }
    ]
  },
  {
    image: imgImage6,
    title: "Stunning Photoshoots That Capture Your Brand's Essence and Vision",
    description: "We create captivating visuals that tell your brand's story authentically.",
    cta: "Explore",
    stats: [
      { label: "Campaign ROI", value: "+150%" },
      { label: "Media Placements", value: "45+" }
    ]
  },
  {
    image: imgImage7,
    title: "Memorable Experiential Events That Leave a Lasting Impression on Audiences",
    description: "Our events engage and inspire, creating unforgettable experiences for your audience.",
    cta: "Join",
    stats: [
      { label: "Event Attendance", value: "1200+" },
      { label: "Social Impressions", value: "8M+" }
    ]
  }
];

function ServiceCard({ service, index, isInView }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden mb-6 aspect-square">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md p-6 sm:p-8 flex items-center"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
                className="space-y-6 w-full"
              >
                <h4 className="text-white/50 text-xs tracking-[0.2em] uppercase pb-4 border-b border-white/20">Case Study Results</h4>
                {service.stats.map((stat: any, i: number) => (
                  <div key={i} className="flex justify-between items-end pb-2">
                    <span className="text-white/80 text-sm tracking-wide">{stat.label}</span>
                    <span className="text-white text-3xl font-light tracking-[-0.03em]">{stat.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="space-y-6 flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <h3 className="text-white text-[24px] leading-[1.4]">
            {service.title}
          </h3>
          <p className="text-white/80 text-[16px] leading-[1.5] tracking-[-0.03em]">
            {service.description}
          </p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="flex items-center gap-2 text-white hover:opacity-60 transition-all duration-300 active:scale-95 group/btn"
        >
          {isExpanded ? "Close Stats" : service.cta}
          <motion.svg 
            animate={{ rotate: isExpanded ? 135 : 0 }} 
            className="w-6 h-6 translate-y-[2px] group-hover/btn:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path d={svgPaths.p36daa800} fill="white" stroke="white" />
          </motion.svg>
        </button>
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-gradient-to-b from-black to-[#0a0909] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[-0.07em] mb-16 lg:mb-20 max-w-[1125px]"
        >
          Comprehensive PR Solutions Tailored for Your Fashion Brand's Unique Story
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
