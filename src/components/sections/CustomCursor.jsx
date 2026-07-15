"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 350,
    damping: 25,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 350,
    damping: 25,
    mass: 0.4,
  });

  const [moving, setMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      animate={{
        scale: moving ? 1.15 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999]"
    >
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm">
        {/* Center Dot */}
        <div className="w-2 h-2 rounded-full bg-black" />

        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}