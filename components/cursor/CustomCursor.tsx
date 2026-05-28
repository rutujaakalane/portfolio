"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    stiffness: 500,
    damping: 38,
    mass: 0.4,
  });

  const springY = useSpring(cursorY, {
    stiffness: 500,
    damping: 38,
    mass: 0.4,
  });

  const [isTextHover, setIsTextHover] = useState(false);
  const [isYellowSection, setIsYellowSection] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const element = document.elementFromPoint(e.clientX, e.clientY);

      const isText =
        element?.closest("a, button, p, h1, h2, h3, h4, span") !== null;

      const isYellow =
        element?.closest("#projects") !== null ||
        element?.closest("[data-cursor='yellow-bg']") !== null;

      setIsTextHover(isText);
      setIsYellowSection(isYellow);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: springX,
        top: springY,
        width: isTextHover ? 30 : 22,
        height: isTextHover ? 30 : 22,
        borderRadius: "50%",
        backgroundColor: isYellowSection
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(246, 231, 161, 0.95)",
        opacity: isTextHover ? 0.62 : 1,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "normal",
        transition:
          "width 180ms ease, height 180ms ease, opacity 180ms ease, background-color 180ms ease",
      }}
    />
  );
}