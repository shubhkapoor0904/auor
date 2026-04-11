import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the core dot (fast, responsive)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Spring config for the outer aura (slightly slower, airy)
  const ringConfig = { damping: 40, stiffness: 200, mass: 1 };
  const ringSmoothX = useSpring(cursorX, ringConfig);
  const ringSmoothY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers interactive state if hovering over links, buttons, or custom cursored elements
      if (target.closest("a, button, input, textarea, [role='button'], .cursor-pointer, .cursor-ew-resize")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render if SSR or mouse hasn't moved yet
  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* The Aura (Outer Ring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/60 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ x: ringSmoothX, y: ringSmoothY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* The Core Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovering ? 4 : 1,
          opacity: isVisible ? (isHovering ? 0.3 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
