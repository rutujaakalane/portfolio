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

  const projectDotScale = useTransform(
  scrollYProgress,
  [0, 0.20, 0.38, 0.73, 0.83, 1],
  [1, 1, 190, 190, 1, 1]
);

const projectDotOpacity = useTransform(
  scrollYProgress,
  [0, 0.175, 0.20, 0.83, 0.87],
  [0, 0, 1, 1, 0]
);

const projectsTop = useTransform(
  scrollYProgress,
  [0, 0.10, 0.73, 0.83],
  ["95vh", "50%", "50%", "-20vh"]
);

const projectsOpacity = useTransform(
  scrollYProgress,
  [0, 0.06, 0.73, 0.83],
  [0, 1, 1, 0]
);

// Project cards appear one after another after the yellow screen fills
const projectCard1Y = useTransform(scrollYProgress, [0, 0.22, 0.30, 0.38], ["85vh", "85vh", "0vh", "-150vh"]);
const projectCard2Y = useTransform(scrollYProgress, [0, 0.28, 0.36, 0.44], ["85vh", "85vh", "0vh", "-150vh"]);
const projectCard3Y = useTransform(scrollYProgress, [0, 0.34, 0.42, 0.50], ["85vh", "85vh", "0vh", "-150vh"]);
const projectCard4Y = useTransform(scrollYProgress, [0, 0.40, 0.48, 0.54], ["85vh", "85vh", "0vh", "-150vh"]);
const projectCard5Y = useTransform(scrollYProgress, [0, 0.46, 0.53, 0.58], ["85vh", "85vh", "0vh", "-130vh"]);
const projectCard6Y = useTransform(scrollYProgress, [0, 0.515, 0.575, 0.615], ["85vh", "85vh", "0vh", "-120vh"]);

const projectCard1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.26, 0.36, 0.40], [0, 0, 1, 1, 0]);
const projectCard2Opacity = useTransform(scrollYProgress, [0, 0.28, 0.32, 0.42, 0.46], [0, 0, 1, 1, 0]);
const projectCard3Opacity = useTransform(scrollYProgress, [0, 0.34, 0.38, 0.48, 0.52], [0, 0, 1, 1, 0]);
const projectCard4Opacity = useTransform(scrollYProgress, [0, 0.40, 0.44, 0.52, 0.56], [0, 0, 1, 1, 0]);
const projectCard5Opacity = useTransform(scrollYProgress, [0, 0.46, 0.50, 0.56, 0.60], [0, 0, 1, 1, 0]);
const projectCard6Opacity = useTransform(scrollYProgress, [0, 0.515, 0.555, 0.605, 0.635], [0, 0, 1, 1, 0]);

const projectCard1Rotate = useTransform(scrollYProgress, [0, 0.22, 0.30, 0.38], [4, 4, -1.5, -5]);
const projectCard2Rotate = useTransform(scrollYProgress, [0, 0.28, 0.36, 0.44], [-5, -5, 2, 5]);
const projectCard3Rotate = useTransform(scrollYProgress, [0, 0.34, 0.42, 0.50], [5, 5, -2, -5]);
const projectCard4Rotate = useTransform(scrollYProgress, [0, 0.40, 0.48, 0.54], [-4, -4, 1.5, 4]);
const projectCard5Rotate = useTransform(scrollYProgress, [0, 0.46, 0.53, 0.58], [3, 3, -1, -3]);
const projectCard6Rotate = useTransform(scrollYProgress, [0, 0.515, 0.575, 0.615], [-3, -3, 1.5, 0]);

const projectCard1Scale = useTransform(scrollYProgress, [0, 0.22, 0.30, 0.38], [0.95, 0.95, 1.02, 0.98]);
const projectCard2Scale = useTransform(scrollYProgress, [0, 0.28, 0.36, 0.44], [0.95, 0.95, 1.02, 0.98]);
const projectCard3Scale = useTransform(scrollYProgress, [0, 0.34, 0.42, 0.50], [0.95, 0.95, 1.02, 0.98]);
const projectCard4Scale = useTransform(scrollYProgress, [0, 0.40, 0.48, 0.54], [0.95, 0.95, 1.02, 0.98]);
const projectCard5Scale = useTransform(scrollYProgress, [0, 0.46, 0.53, 0.58], [0.95, 0.95, 1.02, 0.98]);
const projectCard6Scale = useTransform(scrollYProgress, [0, 0.515, 0.575, 0.615], [0.95, 0.95, 1.02, 1]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        height: "650vh",
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

function EventPhotoCard({
  progress,
  title,
  year,
  caption,
  start,
  center,
  exit,
  yPosition,
  startRotate,
  centerRotate,
}: {
  progress: any;
  title: string;
  year: string;
  caption: string;
  start: number;
  center: number;
  exit: number;
  yPosition: string;
  startRotate: number;
  centerRotate: number;
}) {
  

const y = useTransform(
  progress,
  [0, 1],
  [`calc(-50% + ${yPosition})`, `calc(-50% + ${yPosition})`]
);

  const x = useTransform(
  progress,
  [0, start, center, exit, exit + 0.18],
  ["120vw", "120vw", "24vw", "-120vw", "-120vw"]
);

const rotate = useTransform(
  progress,
  [0, start, center, exit, exit + 0.18],
  [startRotate, startRotate, centerRotate, centerRotate - 3, centerRotate - 3]
);

const opacity = useTransform(
  progress,
  [0, start, start + 0.06, exit + 0.06, exit + 0.12],
  [0, 0, 1, 1, 0]
);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        x,
        y,
        rotate,
        opacity,
        zIndex: 7600,
        width: "clamp(280px, 28vw, 440px)",
        borderRadius: "30px",
        backgroundColor: "rgba(253, 250, 245, 0.98)",
        border: "1px solid rgba(26, 24, 20, 0.16)",
        boxShadow: "0 30px 90px rgba(26, 24, 20, 0.17)",
        padding: "1rem",
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: "22px",
          backgroundColor: "rgba(246, 231, 161, 0.55)",
          border: "1px dashed rgba(26, 24, 20, 0.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(26, 24, 20, 0.52)",
          }}
        >
          event image
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          padding: "0 0.25rem 0.15rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.65rem, 2.35vw, 2.65rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            {title}
          </h3>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.56rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(26, 24, 20, 0.54)",
              whiteSpace: "nowrap",
              paddingBottom: "0.15rem",
            }}
          >
            {year}
          </span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            lineHeight: 1.55,
            color: "rgba(26, 24, 20, 0.68)",
            margin: 0,
          }}
        >
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

function Events() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start 190%", "end end"],
});

// events enters from right and pins in center
const eventsIntroProgress = useTransform(
  scrollYProgress,
  [0, 0.22],
  [0, 1]
);

const eventsX = useTransform(
  scrollYProgress,
  [0, 0.16, 0.88, 1],
  ["80vw", "-50%", "-50%", "-180vw"]
);

const eventsOpacity = useTransform(
  scrollYProgress,
  [0, 0.03, 0.93, 1],
  [0, 1, 1, 0]
);

const eventCardsProgress = useTransform(
  scrollYProgress,
  [0, 1],
  [0.18, 1.73]
);

const eventCards = [
  {
    title: "IIT Bombay",
    year: "2024",
    caption:
      "Design Degree Show visit exploring student projects, process work, and presentation styles.",
    start: 0.40,
    center: 0.52,
    exit: 0.82,
    yPosition: "-8vh",
    startRotate: 7,
    centerRotate: -4,
  },
  {
    title: "IIM Ahmedabad",
    year: "2024",
    caption:
      "48 Hour Filmmaking Competition experience around storytelling, teamwork, and fast creative decisions.",
    start: 0.52,
    center: 0.64,
    exit: 0.94,
    yPosition: "0vh",
    startRotate: -6,
    centerRotate: 5,
  },
  {
    title: "ADI Festival",
    year: "2025",
    caption:
      "Design Education Festival by ADI, focused on design learning, talks, and community exposure.",
    start: 0.64,
    center: 0.76,
    exit: 1.06,
    yPosition: "-10vh",
    startRotate: 5,
    centerRotate: -2,
  },
  {
    title: "Figma Meetup",
    year: "2026",
    caption:
      "The Makers Meet Up by Friends of Figma, around tools, workflows, and design conversations.",
    start: 0.76,
    center: 0.88,
    exit: 1.18,
    yPosition: "0vh",
    startRotate: 8,
    centerRotate: 4,
  },
  {
    title: "Elephant Design",
    year: "2025",
    caption:
      "Open House Meetup at Elephant Design during Pune Design Festival, observing studio culture closely.",
    start: 0.88,
    center: 1.00,
    exit: 1.30,
    yPosition: "-9vh",
    startRotate: -7,
    centerRotate: 3,
  },
  {
    title: "Cosplay 101",
    year: "2025",
    caption:
      "Workshop by Comic Con India exploring character culture, costume thinking, and fan communities.",
    start: 1.00,
    center: 1.12,
    exit: 1.42,
    yPosition: "-2vh",
    startRotate: 6,
    centerRotate: -5,
  },
  {
    title: "PetFed Pune",
    year: "2025",
    caption:
      "Volunteering experience at PetFed Pune, handling visitors, activities, and event coordination.",
    start: 1.12,
    center: 1.24,
    exit: 1.54,
    yPosition: "-12vh",
    startRotate: -5,
    centerRotate: 6,
  },
  {
    title: "Comic Con Pune",
    year: "2026",
    caption:
      "Volunteering at Comic Con Pune, experiencing event flow, crowd interaction, and pop-culture energy.",
    start: 1.24,
    center: 1.36,
    exit: 1.66,
    yPosition: "0vh",
    startRotate: 7,
    centerRotate: -3,
  },
];

  return (
    <section
      id="events"
      ref={sectionRef}
      style={{
        height: "1350vh",
        marginTop: "-55vh",
        position: "relative",
        zIndex: 5000,
        backgroundColor: "var(--color-cream)",
        backgroundImage:
          "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
        backgroundSize: "var(--dot-space) var(--dot-space)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      >

        {/* Event photo cards */}
{eventCards.map((card) => (
  <EventPhotoCard
    key={card.title}
    progress={eventCardsProgress}
    title={card.title}
    year={card.year}
    caption={card.caption}
    start={card.start}
    center={card.center}
    exit={card.exit}
    yPosition={card.yPosition}
    startRotate={card.startRotate}
    centerRotate={card.centerRotate}
  />
))}

        <motion.div
          style={{
  position: "fixed",
left: "50%",
top: "50%",
x: eventsX,
y: "-50%",
            opacity: eventsOpacity,
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
            selected moments
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
            events
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAcademicProgress, setShowAcademicProgress] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Skills enters from bottom, reaches center, and stays pinned
  const skillsY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 1],
    ["100vh", "100vh", "-50%", "-50%"]
  );

  const skillsOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.26, 1],
    [0, 0, 1, 1]
  );

  // Skill cards appear after skills is pinned and stay visible
  const educationX = useTransform(
    scrollYProgress,
    [0, 0.42, 0.58, 1],
    ["-120vw", "-120vw", "0vw", "0vw"]
  );

  const educationY = useTransform(
    scrollYProgress,
    [0, 0.42, 0.58, 1],
    ["0vh", "0vh", "0vh", "0vh"]
  );

  const educationOpacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.50, 1],
    [0, 0, 1, 1]
  );

  const educationRotate = useTransform(
    scrollYProgress,
    [0, 0.42, 0.58, 1],
    [-9, -9, -4, -4]
  );

  const softwareX = useTransform(
    scrollYProgress,
    [0, 0.50, 0.66, 1],
    ["120vw", "120vw", "0vw", "0vw"]
  );

  const softwareY = useTransform(
    scrollYProgress,
    [0, 0.50, 0.66, 1],
    ["0vh", "0vh", "0vh", "0vh"]
  );

  const softwareOpacity = useTransform(
    scrollYProgress,
    [0, 0.50, 0.56, 1],
    [0, 0, 1, 1]
  );

  const softwareRotate = useTransform(
    scrollYProgress,
    [0, 0.50, 0.66, 1],
    [8, 8, 3, 3]
  );

  const designX = useTransform(
    scrollYProgress,
    [0, 0.58, 0.74, 1],
    ["-120vw", "-120vw", "0vw", "0vw"]
  );

  const designY = useTransform(
    scrollYProgress,
    [0, 0.58, 0.74, 1],
    ["16vh", "16vh", "0vh", "0vh"]
  );

  const designOpacity = useTransform(
    scrollYProgress,
    [0, 0.58, 0.66, 1],
    [0, 0, 1, 1]
  );

  const designRotate = useTransform(
    scrollYProgress,
    [0, 0.58, 0.74, 1],
    [8, 8, 3, 3]
  );

  const aiX = useTransform(
    scrollYProgress,
    [0, 0.66, 0.82, 1],
    ["120vw", "120vw", "0vw", "0vw"]
  );

  const aiY = useTransform(
    scrollYProgress,
    [0, 0.66, 0.82, 1],
    ["16vh", "16vh", "0vh", "0vh"]
  );

  const aiOpacity = useTransform(
    scrollYProgress,
    [0, 0.66, 0.74, 1],
    [0, 0, 1, 1]
  );

  const aiRotate = useTransform(
    scrollYProgress,
    [0, 0.66, 0.82, 1],
    [-10, -10, -5, -5]
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        height: "260vh",
        position: "relative",
        zIndex: 8000,
        backgroundColor: "var(--color-cream)",
        backgroundImage:
          "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
        backgroundSize: "var(--dot-space) var(--dot-space)",
        overflow: "hidden",
        marginTop: "-80vh",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Skills title */}
        <motion.div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: skillsY,
            opacity: skillsOpacity,
            zIndex: 7000,
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
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
            design toolkit
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
            skills
          </h2>
        </motion.div>

        {/* Education card */}
        <motion.div
          onMouseEnter={() => setShowAcademicProgress(true)}
          onMouseLeave={() => setShowAcademicProgress(false)}
          style={{
            position: "fixed",
            left: "7vw",
            top: "16vh",
            overflow: "visible",
            x: educationX,
            y: educationY,
            rotate: educationRotate,
            opacity: educationOpacity,
            width: "clamp(210px, 20vw, 320px)",
            borderRadius: "24px",
            backgroundColor: "rgba(253, 250, 245, 0.96)",
            border: "1px solid rgba(26, 24, 20, 0.16)",
            boxShadow: "0 24px 70px rgba(26, 24, 20, 0.12)",
            padding: "1.1rem",
            zIndex: 7200,
            pointerEvents: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(26, 24, 20, 0.5)",
              margin: "0 0 0.65rem",
            }}
          >
            education
          </p>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 2vw, 2.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: "0 0 0.6rem",
            }}
          >
            Design Student
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              lineHeight: 1.55,
              color: "rgba(26, 24, 20, 0.68)",
              margin: 0,
            }}
          >
            DY Patil International University, focused on UI/UX, visual design,
            and interaction-led digital experiences.
          </p>

          <AnimatePresence>
            {showAcademicProgress && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute",
                  left: "calc(100% + 0.9rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "210px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(246, 231, 161, 0.96)",
                  border: "1px solid rgba(26, 24, 20, 0.14)",
                  boxShadow: "0 16px 42px rgba(26, 24, 20, 0.14)",
                  padding: "0.68rem",
                  zIndex: 9000,
                  pointerEvents: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(26, 24, 20, 0.55)",
                    margin: "0 0 0.45rem",
                  }}
                >
                  academic progress
                </p>

                {[
                  ["Sem 1", "9.05 SGPA"],
                  ["Sem 2", "9.32 SGPA"],
                  ["Sem 3", "8.70 SGPA"],
                  ["Sem 4", "10.00 SGPA"],
                ].map(([sem, score]) => (
                  <div
                    key={sem}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "0.28rem 0",
                      borderTop: "1px solid rgba(26, 24, 20, 0.12)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        color: "rgba(26, 24, 20, 0.72)",
                      }}
                    >
                      {sem}
                    </span>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.06em",
                        color: "var(--color-ink)",
                      }}
                    >
                      {score}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Software card */}
        <motion.div
          style={{
            position: "fixed",
            right: "8vw",
            top: "13vh",
            x: softwareX,
            y: softwareY,
            rotate: softwareRotate,
            opacity: softwareOpacity,
            width: "clamp(270px, 25vw, 410px)",
            borderRadius: "24px",
            backgroundColor: "rgba(246, 231, 161, 0.9)",
            border: "1px solid rgba(26, 24, 20, 0.14)",
            boxShadow: "0 24px 70px rgba(26, 24, 20, 0.12)",
            padding: "1.1rem",
            zIndex: 7200,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(26, 24, 20, 0.5)",
              margin: "0 0 0.65rem",
            }}
          >
            software
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.68rem",
            }}
          >
            {[
              { name: "Figma", level: 4.5 },
              { name: "Adobe Illustrator", level: 4.5 },
              { name: "Adobe Photoshop", level: 4 },
              { name: "Adobe InDesign", level: 4 },
              { name: "Adobe After Effects", level: 3 },
              { name: "Autodesk Maya", level: 4 },
              { name: "Canva", level: 5 },
              { name: "Framer", level: 3 },
              { name: "Spline", level: 3 },
            ].map((tool) => (
              <div
                key={tool.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    lineHeight: 1,
                    color: "rgba(26, 24, 20, 0.74)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.name}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.32rem",
                    flexShrink: 0,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((dot) => {
                    const isFull = tool.level >= dot;
                    const isHalf = tool.level === dot - 0.5;

                    return (
                      <span
                        key={dot}
                        style={{
                          width: "0.62rem",
                          height: "0.62rem",
                          borderRadius: "50%",
                          border: "1px solid rgba(26, 24, 20, 0.55)",
                          background: isFull
                            ? "rgba(26, 24, 20, 0.78)"
                            : isHalf
                            ? "linear-gradient(90deg, rgba(26, 24, 20, 0.78) 50%, transparent 50%)"
                            : "transparent",
                          display: "block",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design skills card */}
        <motion.div
          style={{
            position: "fixed",
            left: "9vw",
            bottom: "5vh",
            x: designX,
            y: designY,
            rotate: designRotate,
            opacity: designOpacity,
            width: "clamp(240px, 24vw, 380px)",
            borderRadius: "24px",
            backgroundColor: "rgba(253, 250, 245, 0.96)",
            border: "1px solid rgba(26, 24, 20, 0.16)",
            boxShadow: "0 24px 70px rgba(26, 24, 20, 0.12)",
            padding: "1.1rem",
            zIndex: 7200,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "0.85rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(26, 24, 20, 0.5)",
                margin: 0,
              }}
            >
              design skills
            </p>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.54rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(26, 24, 20, 0.5)",
                backgroundColor: "rgba(246, 231, 161, 0.55)",
                border: "1px solid rgba(26, 24, 20, 0.12)",
                borderRadius: "999px",
                padding: "0.28rem 0.48rem",
                whiteSpace: "nowrap",
              }}
            >
              ux + visual
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.48rem",
            }}
          >
            {[
              "User Research",
              "User Psychology",
              "Human-Centered Design",
              "Interaction Design",
              "AI-Integrated Workflows",
              "Information Architecture",
              "Wireframing",
              "Prototyping",
              "Design Systems",
              "Brand Identity",
              "Typography",
              "Colour Theory",
              "Visual Communication",
              "3D Exploration",
            ].map((skill, index) => (
              <span
                key={skill}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize:
                    index === 0 || index === 3 || index === 8
                      ? "0.82rem"
                      : "0.74rem",
                  lineHeight: 1,
                  color: "rgba(26, 24, 20, 0.76)",
                  backgroundColor:
                    index === 0 || index === 3 || index === 8
                      ? "rgba(246, 231, 161, 0.62)"
                      : "rgba(253, 250, 245, 0.72)",
                  border: "1px solid rgba(26, 24, 20, 0.13)",
                  borderRadius: "999px",
                  padding:
                    index === 0 || index === 3 || index === 8
                      ? "0.5rem 0.7rem"
                      : "0.44rem 0.62rem",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* AI tools card */}
        <motion.div
          style={{
            position: "fixed",
            right: "13vw",
            bottom: "8vh",
            x: aiX,
            y: aiY,
            rotate: aiRotate,
            opacity: aiOpacity,
            width: "clamp(260px, 24vw, 380px)",
            borderRadius: "24px",
            backgroundColor: "rgba(253, 250, 245, 0.96)",
            border: "1px solid rgba(26, 24, 20, 0.16)",
            boxShadow: "0 24px 70px rgba(26, 24, 20, 0.12)",
            padding: "1.1rem",
            zIndex: 7200,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "0.9rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(26, 24, 20, 0.5)",
                margin: 0,
              }}
            >
              ai tools
            </p>

            <span
              style={{
                width: "0.7rem",
                height: "0.7rem",
                borderRadius: "50%",
                backgroundColor: "#F6E7A1",
                border: "1px solid rgba(26, 24, 20, 0.16)",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {[
              "Claude",
              "ChatGPT",
              "Perplexity",
              "GitHub Copilot",
              "Figma Make",
              "Adobe Firefly",
              "Midjourney",
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(26, 24, 20, 0.78)",
                  backgroundColor: "rgba(246, 231, 161, 0.42)",
                  border: "1px solid rgba(26, 24, 20, 0.14)",
                  borderRadius: "999px",
                  padding: "0.48rem 0.68rem",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], ["45vh", "0vh"]);

  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);

  const contentY = useTransform(scrollYProgress, [0.35, 0.75], ["4vh", "0vh"]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        height: "100vh",
        position: "relative",
        zIndex: 20000,
        marginTop: "-20vh",
        backgroundColor: "var(--color-cream)",
        backgroundImage:
          "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
        backgroundSize: "var(--dot-space) var(--dot-space)",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          y: panelY,
          width: "100vw",
          height: "100vh",
          zIndex: 20000,
          backgroundColor: "var(--color-cream)",
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) var(--dot-size), transparent var(--dot-size))",
          backgroundSize: "var(--dot-space) var(--dot-space)",
          borderTop: "1px solid rgba(26, 24, 20, 0.12)",
          overflow: "hidden",
          pointerEvents: "auto",
        }}
      >
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            position: "relative",
            zIndex: 20001,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 clamp(2rem, 7vw, 8rem)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.64rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(26, 24, 20, 0.52)",
              margin: "0 0 0.8rem",
            }}
          >
            let’s connect
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(4rem, 10vw, 8.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: "0 0 1.6rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            say hello
          </h2>

          {/* Contact layout: Instagram card left + horizontal CTAs right */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    alignItems: "center",
    columnGap: "clamp(3rem, 8vw, 9rem)",
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
  }}
>
  {/* Instagram card */}
  <a
    href="https://www.instagram.com/rutudrws/"
    target="_blank"
    rel="noreferrer"
    style={{
      width: "360px",
      borderRadius: "34px",
      backgroundColor: "rgba(246, 231, 161, 0.88)",
      border: "1px solid rgba(26, 24, 20, 0.14)",
      boxShadow: "0 30px 90px rgba(26, 24, 20, 0.14)",
      padding: "1.15rem",
      textDecoration: "none",
      color: "var(--color-ink)",
      display: "block",
      transform: "rotate(-3deg)",
      boxSizing: "border-box",
      justifySelf: "start",
      marginLeft: "-2vw",
    }}
  >
    <div
      style={{
        borderRadius: "26px",
        backgroundColor: "rgba(253, 250, 245, 0.96)",
        border: "1px dashed rgba(26, 24, 20, 0.18)",
        padding: "1.15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "0.9rem",
      }}
    >
      <div
        style={{
          width: "132px",
          height: "132px",
          borderRadius: "50%",
          padding: "0.42rem",
          backgroundColor: "rgba(246, 231, 161, 0.9)",
          border: "1px solid rgba(26, 24, 20, 0.14)",
          boxShadow: "0 18px 44px rgba(26, 24, 20, 0.12)",
        }}
      >
        <img
          src="/instagram-profile.jpg"
          alt="Instagram profile"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            backgroundColor: "rgba(246, 231, 161, 0.9)",
          }}
        />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(2.2rem, 3.4vw, 3.4rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          color: "var(--color-ink)",
          margin: "0 0 0.2rem",
        }}
      >
        @rutudrws
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.88rem",
          lineHeight: 1.5,
          color: "rgba(26, 24, 20, 0.68)",
          margin: 0,
          maxWidth: "290px",
        }}
      >
        Design, daily visuals, creative process, and small pieces of life behind
        the work.
      </p>

      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-ink)",
          backgroundColor: "rgba(246, 231, 161, 0.78)",
          border: "1px solid rgba(26, 24, 20, 0.14)",
          borderRadius: "999px",
          padding: "0.72rem 0.95rem",
          whiteSpace: "nowrap",
        }}
      >
        view instagram ↗
      </span>
    </div>
  </a>

  {/* CTA links on right side in horizontal row */}
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "0.9rem",
      transform: "rotate(1deg)",
    }}
  >
    {[
      { label: "Email", href: "mailto:rutujaakalane@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rutuja-kalane-2124153a0/",
      },
      { label: "Behance", href: "https://www.behance.net/rutujakalane" },
      { label: "Resume ↗", href: "/resume.pdf" },
    ].map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.74rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-ink)",
          backgroundColor: "rgba(253, 250, 245, 0.96)",
          border: "1px solid rgba(26, 24, 20, 0.16)",
          borderRadius: "999px",
          padding: "0.82rem 1.15rem",
          boxShadow: "0 16px 44px rgba(26, 24, 20, 0.08)",
          textDecoration: "none",
          minWidth: "130px",
          textAlign: "center",
        }}
      >
        {link.label}
      </a>
    ))}
  </div>
</div>
          
        </motion.div>
      </motion.div>
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
<Events />
<Skills />
<ContactSection />
    </>
  );
}