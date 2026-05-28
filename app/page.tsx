"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

interface Project {
  id: string;
  label: string;
  category: string;
  year: string;
  col: number;
}

/* ── Splash ─────────────────────────────────────────────────── */

function Splash({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      onDone();
    }, 2400);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-6%",
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "var(--color-ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypingWord word="ciao" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypingWord({ word }: { word: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayed(word.slice(0, i));

      if (i === word.length) clearInterval(interval);
    }, 110);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: "clamp(3.5rem, 8vw, 8rem)",
        color: "var(--color-cream)",
        letterSpacing: "-0.03em",
        lineHeight: 1,
        minWidth: "4ch",
        textAlign: "center",
      }}
    >
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        style={{ color: "var(--color-gold)", marginLeft: "2px" }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

/* ── Navbar ─────────────────────────────────────────────────── */

const NAV_LINKS = ["About", "Projects", "Contact"];

function Navbar({ visible }: { visible: boolean }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -8 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 var(--container-px)",
        height: "64px",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        alignItems: "center",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div style={{ gridColumn: "1 / 2" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-stone)",
          }}
        >
          RK
        </span>
      </div>

      <div
        style={{
          gridColumn: "3 / 4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-stone)",
              transition: "color 200ms ease",
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <div
        style={{
          gridColumn: "5 / 6",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          disabled
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            border: "1px solid var(--color-sand)",
            padding: "0.5rem 1.1rem",
            borderRadius: "999px",
            background: "transparent",
            opacity: 0.5,
          }}
        >
          Resume ↗
        </button>
      </div>
    </motion.nav>
  );
}

/* Hero */

function HeroTypingWord({ word }: { word: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      i++;
      setDisplayed(word.slice(0, i));

      if (i === word.length) clearInterval(interval);
    }, 75);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <>
      {displayed}
      {displayed.length < word.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          style={{ color: "var(--color-gold)", marginLeft: "2px" }}
        >
          |
        </motion.span>
      )}
    </>
  );
}

const HERO_KEYWORDS = [
  {
    label: "User Research",
    side: "left",
    top: "69vh",
    left: "6vw",
    bg: "#F6E7A1",
    border: "#D9C97F",
    delay: 0,
  },
  {
    label: "UX Design",
    side: "left",
    top: "69vh",
    left: "20vw",
    bg: "#F7F5EF",
    border: "#D8D3C4",
    delay: 0.006,
  },
  {
    label: "Visual Storytelling",
    side: "left",
    top: "77vh",
    left: "12vw",
    bg: "#EFE9DA",
    border: "#D8D3C4",
    delay: 0.012,
  },
  {
    label: "UX Psychology",
    side: "right",
    top: "43vh",
    right: "22vw",
    bg: "#EFE9DA",
    border: "#D8D3C4",
    delay: 0,
  },
  {
    label: "AI Workflows",
    side: "right",
    top: "43vh",
    right: "8vw",
    bg: "#D9C97F",
    border: "#BFAF62",
    delay: 0.006,
  },
  {
    label: "Interaction Design",
    side: "right",
    top: "51vh",
    right: "14vw",
    bg: "#F6E7A1",
    border: "#D9C97F",
    delay: 0.012,
  },
];

function KeywordBubble({
  label,
  side,
  top,
  left,
  right,
  bg,
  border,
  delay,
  progress,
}: {
  label: string;
  side: string;
  top: string;
  left?: string;
  right?: string;
  bg: string;
  border: string;
  delay: number;
  progress: any;
}) {
  const x = useTransform(
  progress,
  [0, 0.70 + delay, 0.82 + delay, 1],
  [
    side === "left" ? "-120vw" : "120vw",
    side === "left" ? "-120vw" : "120vw",
    "0vw",
    "0vw",
  ]
);

const opacity = useTransform(
  progress,
  [0, 0.70 + delay, 0.75 + delay, 1],
  [0, 0, 1, 1]
);

const scale = useTransform(
  progress,
  [0, 0.70 + delay, 0.82 + delay, 1],
  [0.92, 0.92, 1, 1]
);

  return (
    <motion.div
      style={{
        position: "fixed",
        top,
        left,
        right,
        x,
        opacity,
        scale,
        zIndex: 26,
        pointerEvents: "none",
        fontFamily: "var(--font-sans)",
        fontSize: "0.82rem",
        fontWeight: 500,
        letterSpacing: "0.01em",
        color: "var(--color-ink)",
        backgroundColor: bg,
        border: `1px solid ${border}`,
        borderRadius: "999px",
        padding: "0.58rem 0.9rem",
        whiteSpace: "nowrap",
        boxShadow: "0 8px 24px rgba(17,17,17,0.08)",
      }}
    >
      {label}
    </motion.div>
  );
}

function Hero({ visible }: { visible: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // NAME ANIMATION — DO NOT TOUCH
  const nameTop = useTransform(
    scrollYProgress,
    [0, 0.18, 0.9, 1],
    ["78vh", "24vh", "24vh", "24vh"]
  );

  const nameScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.9, 1],
    [1.06, 1, 1, 1]
  );

  // NAME HIGHLIGHT — draws until photo reaches final pinned position
  const nameHighlightProgress = useTransform(
    scrollYProgress,
    [0.18, 0.56],
    [0, 1]
  );

  const nameHighlightOpacity = useTransform(
  scrollYProgress,
  [0.16, 0.2, 1],
  [0, 1, 1]
);

  // PHOTO — starts below screen, rises, then pins
  const photoTop = useTransform(
    scrollYProgress,
    [0, 0.32, 0.56, 1],
    ["130vh", "130vh", "69vh", "69vh"]
  );

  const photoOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.42, 1],
    [0, 1, 1]
  );

  const photoScale = useTransform(
    scrollYProgress,
    [0.24, 0.48, 1],
    [0.94, 1, 1]
  );

  // LEFT PARAGRAPH — appears first after photo
  const leftParaOpacity = useTransform(
  scrollYProgress,
  [0, 0.52, 0.62, 1],
  [0, 0, 1, 1]
);

const leftParaX = useTransform(
  scrollYProgress,
  [0, 0.52, 0.62, 1],
  ["-120vw", "-120vw", "0vw", "0vw"]
);

const leftParaY = useTransform(
  scrollYProgress,
  [0, 0.52, 0.62, 1],
  [36, 36, 0, 0]
);

  // RIGHT PARAGRAPH — appears second
  const rightParaOpacity = useTransform(
  scrollYProgress,
  [0, 0.60, 0.70, 1],
  [0, 0, 1, 1]
);

const rightParaX = useTransform(
  scrollYProgress,
  [0, 0.60, 0.70, 1],
  ["120vw", "120vw", "0vw", "0vw"]
);

const rightParaY = useTransform(
  scrollYProgress,
  [0, 0.60, 0.70, 1],
  [36, 36, 0, 0]
);
  const highlightStyle = {
    background:
      "linear-gradient(180deg, transparent 48%, rgba(246, 231, 161, 0.9) 48%)",
    borderRadius: "0.2em",
    padding: "0 0.08em",
  };

  return (
    <div
  ref={sectionRef}
  style={{
    height: "580vh",
    position: "relative",
  }}
>
      <section
        id="hero"
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        {/* Name — existing pinned animation */}
        <motion.div
          style={{
            position: "fixed",
            top: nameTop,
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: nameScale,
            textAlign: "center",
            width: "100%",
            padding: "0 var(--container-px)",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(4.5rem, 10.5vw, 12rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
              whiteSpace: "nowrap",
              margin: 0,
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              isolation: "isolate",
            }}
          >
            {/* Hand-drawn highlighter stroke behind name */}
<motion.svg
  aria-hidden
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  style={{
    position: "absolute",
    left: "-0.012em",
    top: "-0.02em",
    width: "101%",
    height: "1.24em",
    opacity: nameHighlightOpacity,
    zIndex: -1,
    pointerEvents: "none",
    overflow: "visible",
  }}
>
  {/* tight actual zig-zag butter-yellow highlighter */}
  <motion.path
    d="
      M 1 52
      L 3 20
      L 5 66
      L 7 24
      L 9 70
      L 11 18
      L 13 62
      L 15 28
      L 17 74
      L 19 22
      L 21 68
      L 23 16
      L 25 60
      L 27 30
      L 29 76
      L 31 24
      L 33 66
      L 35 18
      L 37 64
      L 39 28
      L 41 74
      L 43 20
      L 45 62
      L 47 26
      L 49 78
      L 51 22
      L 53 66
      L 55 18
      L 57 64
      L 59 30
      L 61 76
      L 63 24
      L 65 68
      L 67 20
      L 69 62
      L 71 28
      L 73 74
      L 75 22
      L 77 66
      L 79 18
      L 81 64
      L 83 30
      L 85 72
      L 87 24
      L 89 66
      L 91 28
      L 93 70
      L 95 34
      L 97 64
      L 99 50
    "
    pathLength={nameHighlightProgress}
    style={{
      fill: "none",
      stroke: "rgba(246, 231, 161, 1)",
      strokeWidth: 18,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
  />
</motion.svg>

<span style={{ position: "relative", zIndex: 1 }}>
  <HeroTypingWord word="Rutuja Kalane" />
</span>
          </h1>
        </motion.div>

        {/* Photo — rises from bottom and pins */}
        <motion.div
          style={{
            position: "fixed",
            top: photoTop,
            left: "50%",
            x: "-50%",
            y: "-50%",
            opacity: photoOpacity,
            scale: photoScale,
            width: "clamp(220px, 26vw, 360px)",
            aspectRatio: "1 / 1",
            borderRadius: "14px",
            border: "1px solid var(--color-sand)",
            overflow: "hidden",
            zIndex: 10,
            boxShadow: "0 18px 60px rgba(17,17,17,0.08)",
            backgroundColor: "var(--color-cream-warm)",
          }}
        >
          <img
            src="/hero.jpeg"
            alt="Rutuja Kalane"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </motion.div>

        {/* Left paragraph — appears first */}
        <motion.p
          style={{
            position: "fixed",
            left: "clamp(48px, 7vw, 120px)",
            top: "45vh",
            x: leftParaX,
            y: leftParaY,
            opacity: leftParaOpacity,
            width: "min(30vw, 390px)",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
            lineHeight: 1.75,
            color: "var(--color-ink-soft)",
            margin: 0,
            zIndex: 24,
            pointerEvents: "none",
          }}
        >
          UI/UX Designer with strengths in{" "}
          <span style={highlightStyle}>user research</span> and psychology.
          Currently exploring <span style={highlightStyle}>AI-assisted</span>{" "}
          design workflows and{" "}
          <span style={highlightStyle}>
            immersive digital experiences
          </span>.
        </motion.p>

        {/* Right paragraph — appears second */}
        <motion.p
          style={{
            position: "fixed",
            right: "clamp(48px, 7vw, 120px)",
            top: "63vh",
            x: rightParaX,
            y: rightParaY,
            opacity: rightParaOpacity,
            width: "min(28vw, 360px)",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
            lineHeight: 1.75,
            color: "var(--color-ink-soft)",
            margin: 0,
            zIndex: 24,
            pointerEvents: "none",
          }}
        >
          Based in <span style={highlightStyle}>Pune</span>, moving pixels
          since 2024 and navigating life through design and{" "}
          <span style={highlightStyle}>late-night coffee</span>.
        </motion.p>

{/* Keywords — slide into red-block alignment after left paragraph */}
{HERO_KEYWORDS.map((item) => (
  <KeywordBubble
    key={item.label}
    label={item.label}
    side={item.side}
    top={item.top}
    left={item.left}
    right={item.right}
    bg={item.bg}
    border={item.border}
    delay={item.delay}
    progress={scrollYProgress}
  />
))}

      </section>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const projectsTop = useTransform(
    scrollYProgress,
    [0, 0.32, 0.9, 1],
    ["115vh", "50%", "50%", "-20vh"]
  );

  const projectsOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.94, 1],
    [0, 1, 1, 0]
  );

  const projectDotScale = useTransform(
  scrollYProgress,
  [0, 0.34, 0.58, 0.90, 0.98, 1],
  [1, 1, 190, 190, 1, 1]
);

const projectDotOpacity = useTransform(
  scrollYProgress,
  [0, 0.28, 0.34, 0.98, 1],
  [0, 0, 1, 1, 0]
);

// Project cards appear after the yellow screen fills
const projectCard1Y = useTransform(scrollYProgress, [0, 0.56, 0.64, 0.72], ["130vh", "130vh", "0vh", "-150vh"]);
const projectCard2Y = useTransform(scrollYProgress, [0, 0.62, 0.70, 0.78], ["130vh", "130vh", "0vh", "-150vh"]);
const projectCard3Y = useTransform(scrollYProgress, [0, 0.68, 0.76, 0.84], ["130vh", "130vh", "0vh", "-150vh"]);
const projectCard4Y = useTransform(scrollYProgress, [0, 0.74, 0.82, 0.88], ["130vh", "130vh", "0vh", "-150vh"]);
const projectCard5Y = useTransform(
  scrollYProgress,
  [0, 0.80, 0.87, 0.92],
  ["130vh", "130vh", "0vh", "-130vh"]
);
const projectCard6Y = useTransform(
  scrollYProgress,
  [0, 0.855, 0.915, 0.955],
  ["130vh", "130vh", "0vh", "-120vh"]
);

const projectCard1Opacity = useTransform(scrollYProgress, [0, 0.56, 0.60, 0.70, 0.74], [0, 0, 1, 1, 0]);
const projectCard2Opacity = useTransform(scrollYProgress, [0, 0.62, 0.66, 0.76, 0.80], [0, 0, 1, 1, 0]);
const projectCard3Opacity = useTransform(scrollYProgress, [0, 0.68, 0.72, 0.82, 0.86], [0, 0, 1, 1, 0]);
const projectCard4Opacity = useTransform(scrollYProgress, [0, 0.74, 0.78, 0.86, 0.90], [0, 0, 1, 1, 0]);
const projectCard5Opacity = useTransform(
  scrollYProgress,
  [0, 0.80, 0.84, 0.90, 0.94],
  [0, 0, 1, 1, 0]
);
const projectCard6Opacity = useTransform(
  scrollYProgress,
  [0, 0.855, 0.895, 0.945, 0.975],
  [0, 0, 1, 1, 0]
);

const projectCard1Rotate = useTransform(scrollYProgress, [0, 0.56, 0.64, 0.72], [4, 4, -1.5, -5]);
const projectCard2Rotate = useTransform(scrollYProgress, [0, 0.62, 0.70, 0.78], [-5, -5, 2, 5]);
const projectCard3Rotate = useTransform(scrollYProgress, [0, 0.68, 0.76, 0.84], [5, 5, -2, -5]);
const projectCard4Rotate = useTransform(scrollYProgress, [0, 0.74, 0.82, 0.88], [-4, -4, 1.5, 4]);
const projectCard5Rotate = useTransform(
  scrollYProgress,
  [0, 0.80, 0.87, 0.92],
  [3, 3, -1, -3]
);
const projectCard6Rotate = useTransform(
  scrollYProgress,
  [0, 0.855, 0.915, 0.955],
  [-3, -3, 1.5, 0]
);

const projectCard1Scale = useTransform(scrollYProgress, [0, 0.56, 0.64, 0.72], [0.95, 0.95, 1.02, 0.98]);
const projectCard2Scale = useTransform(scrollYProgress, [0, 0.62, 0.70, 0.78], [0.95, 0.95, 1.02, 0.98]);
const projectCard3Scale = useTransform(scrollYProgress, [0, 0.68, 0.76, 0.84], [0.95, 0.95, 1.02, 0.98]);
const projectCard4Scale = useTransform(scrollYProgress, [0, 0.74, 0.82, 0.88], [0.95, 0.95, 1.02, 0.98]);
const projectCard5Scale = useTransform(
  scrollYProgress,
  [0, 0.80, 0.87, 0.92],
  [0.95, 0.95, 1.02, 0.98]
);
const projectCard6Scale = useTransform(
  scrollYProgress,
  [0, 0.855, 0.915, 0.955],
  [0.95, 0.95, 1.02, 1]
);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        height: "900vh",
        position: "relative",
        zIndex: 5000,
        backgroundColor: "var(--color-cream)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "var(--color-cream)",
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
          backgroundSize: "var(--dot-space) var(--dot-space)",
        }}
      />

      {/* Butter-yellow expanding and reversing dot */}
<motion.div
  style={{
    position: "fixed",
    left: "50%",
    top: "50%",
    x: "-50%",
    y: "-50%",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#F6E7A1",
    scale: projectDotScale,
    opacity: projectDotOpacity,
    zIndex: 6500,
    pointerEvents: "none",
  }}
/>

{/* FigJam dots over butter-yellow */}
<motion.div
  style={{
    position: "fixed",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(26, 24, 20, 0.42) var(--dot-size), transparent var(--dot-size))",
    backgroundSize: "var(--dot-space) var(--dot-space)",
    opacity: projectDotOpacity,
    zIndex: 6600,
    pointerEvents: "none",
  }}
/>

{/* Project cards */}
{[
  {
    title: "Project 1",
    x: "-50%",
    top: "50%",
    y: projectCard1Y,
    opacity: projectCard1Opacity,
    rotate: projectCard1Rotate,
    scale: projectCard1Scale,
  },
  {
    title: "Project 2",
    x: "-82%",
    top: "52%",
    y: projectCard2Y,
    opacity: projectCard2Opacity,
    rotate: projectCard2Rotate,
    scale: projectCard2Scale,
  },
  {
    title: "Project 3",
    x: "-18%",
    top: "50%",
    y: projectCard3Y,
    opacity: projectCard3Opacity,
    rotate: projectCard3Rotate,
    scale: projectCard3Scale,
  },
  {
    title: "Project 4",
    x: "-64%",
    top: "54%",
    y: projectCard4Y,
    opacity: projectCard4Opacity,
    rotate: projectCard4Rotate,
    scale: projectCard4Scale,
  },
  {
    title: "Project 5",
    x: "-32%",
    top: "51%",
    y: projectCard5Y,
    opacity: projectCard5Opacity,
    rotate: projectCard5Rotate,
    scale: projectCard5Scale,
  },
  {
    title: "Project 6",
    x: "-50%",
    top: "53%",
    y: projectCard6Y,
    opacity: projectCard6Opacity,
    rotate: projectCard6Rotate,
    scale: projectCard6Scale,
  },
].map((card) => (
  <motion.div
    key={card.title}
    style={{
      position: "fixed",
      left: "50%",
      top: card.top,
      x: card.x,
      y: card.y,
      opacity: card.opacity,
      rotate: card.rotate,
      scale: card.scale,
      zIndex: 7600,
      width: "clamp(280px, 30vw, 440px)",
      borderRadius: "28px",
      backgroundColor: "rgba(253, 250, 245, 0.98)",
      border: "1px solid rgba(26, 24, 20, 0.18)",
      boxShadow: "0 32px 90px rgba(26, 24, 20, 0.18)",
      padding: "1rem",
      pointerEvents: "none",
      willChange: "transform",
    }}
  >
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "20px",
        backgroundColor: "rgba(246, 231, 161, 0.52)",
        border: "1px dashed rgba(26, 24, 20, 0.32)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(26, 24, 20, 0.55)",
        }}
      >
        image space
      </span>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0 0.25rem 0.15rem",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          color: "var(--color-ink)",
          margin: 0,
        }}
      >
        {card.title}
      </h3>

      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(26, 24, 20, 0.58)",
          paddingBottom: "0.25rem",
          whiteSpace: "nowrap",
        }}
      >
        case study
      </span>
    </div>
  </motion.div>
))}

{/* Projects title */}
      <motion.div
        style={{
          position: "fixed",
          top: projectsTop,
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity: projectsOpacity,
          zIndex: 7000,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2.5rem",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.64rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3D3A34",
            opacity: 0.55,
            margin: "0 0 0.9rem",
          }}
        >
          2024-2026
        </p>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(4rem, 13vw, 11rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            color: "var(--color-ink)",
            margin: 0,
          }}
        >
          projects
        </h2>
      </motion.div>
    </section>
  );
}

function NextSectionPlaceholder() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-cream)",
        backgroundImage:
          "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
        backgroundSize: "var(--dot-space) var(--dot-space)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 2.5rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-stone)",
        }}
      >
        next section placeholder
      </p>
    </section>
  );
}

/* Page */

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Splash onDone={() => setSplashDone(true)} />
      <Navbar visible={splashDone} />
      <Hero visible={splashDone} />
<Projects />
<NextSectionPlaceholder />
    </>
  );
}