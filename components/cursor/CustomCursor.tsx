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
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const element = document.elementFromPoint(e.clientX, e.clientY);

      const readableTarget =
        element?.closest("[data-cursor='read']") !== null;

      const isText =
        element?.closest("a, button, p, h1, h2, h3, h4, span") !== null;

      const isYellow =
        element?.closest("#projects") !== null ||
        element?.closest("[data-cursor='yellow-bg']") !== null;

      const cursorAction = element?.closest("[data-cursor-label]") as HTMLElement | null;

if (cursorAction) {
  setCursorLabel(cursorAction.dataset.cursorLabel || null);
} else if (readableTarget) {
  setCursorLabel("READ");
} else {
  setCursorLabel(null);
}
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
        width: cursorLabel ? 68 : isTextHover ? 30 : 22,
        height: cursorLabel ? 34 : isTextHover ? 30 : 22,
        borderRadius: cursorLabel ? "999px" : "50%",
        backgroundColor: cursorLabel
          ? "rgba(246, 231, 161, 0.94)"
          : isYellowSection
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(246, 231, 161, 0.95)",
        opacity: cursorLabel ? 1 : isTextHover ? 0.62 : 1,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "normal",
        transition:
          "width 180ms ease, height 180ms ease, opacity 180ms ease, background-color 180ms ease, border-radius 180ms ease, box-shadow 180ms ease",
        border: cursorLabel ? "1px solid rgba(26, 24, 20, 0.16)" : "none",
        boxShadow: cursorLabel
          ? "0 12px 34px rgba(26, 24, 20, 0.14)"
          : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cursorLabel && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            lineHeight: 1,
          }}
        >
          {cursorLabel}
        </span>
      )}
    </motion.div>
  );
}