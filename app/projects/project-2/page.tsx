"use client";
import Link from "next/link";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────

const snapshotCards = [
  { label: "ROLE", main: "UX Designer", sub: "IA, sitemap & UI design" },
  { label: "TIMELINE", main: "1 Week", sub: "April 2026" },
  { label: "TOOLS", main: "Figma", sub: "Sitemap, IA & UI screens" },
];

const navSections = [
  {
    number: "01",
    tab: "Home Tab",
    icon: "⬡",
    items: [
      "Dashboard cards are tappable → drill into Nest Score or Activity",
      "Bell icon → Notifications",
      "Search icon → Global Search",
    ],
  },
  {
    number: "02",
    tab: "Workout Tab",
    icon: "⚡",
    items: [
      "Horizontal filter pills → filter by type, duration, or difficulty",
      "Tap any workout card → Workout Detail page",
      "Workout Detail → Start → Active Workout Session",
      "Activity Tracker → select type → live tracking → Activity History",
    ],
  },
  {
    number: "03",
    tab: "Nutrition Tab",
    icon: "◎",
    items: [
      "Daily date selector at top → switch between days",
      "Tap meal slot → opens Nutrition Log",
      "Add button → Barcode Scanner or manual entry",
      "Hydration widget → tap to log water intake",
    ],
  },
  {
    number: "04",
    tab: "Challenges Tab",
    icon: "◈",
    items: [
      'Tab switcher → "Challenges / Awards / Streaks"',
      "Tap any challenge card → Challenge Detail + Leaderboard",
      "Awards section → grid of earned and locked badges",
      "Streaks section → calendar heatmap view",
    ],
  },
  {
    number: "05",
    tab: "Community Tab",
    icon: "◐",
    items: [
      "Feed shows friend activity cards with cheer/react buttons",
      'Top right "+" → Invite Friends screen',
    ],
  },
  {
    number: "06",
    tab: "Profile Tab",
    icon: "◯",
    items: [
      "Top section → User info + Edit Profile button",
      "List menu below → Settings, Help & Support, Logout",
    ],
  },
];

const mainSections = [
  {
    label: "Onboarding",
    children: ["Splash Screen", "Register", "Login", "Onboarding Slides"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Dashboard",
    children: ["Nest Score", "Activity Rings & Stats", "Notifications", "Search"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Workout",
    children: ["Workout Library", "Activity Tracker"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Nutrition",
    children: ["Nutrition Log", "Water & Hydration Tracker"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Challenges",
    children: ["Nest Challenges", "Awards & Badges", "Streaks Tracker"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Community",
    children: ["Community Feed", "Invite Friends"],
    color: "rgba(253,250,245,0.96)",
  },
  {
    label: "Profile",
    children: ["User Profile", "Settings", "Help & Support"],
    color: "rgba(253,250,245,0.96)",
  },
];

const designDecisions = [
  {
    number: "01",
    title: "Goal-based grouping",
    desc: "Every section was organised around what the user is trying to do, not what the feature technically is. Awards and Streaks sit inside Challenges because that's where a user's head is when they want motivation.",
  },
  {
    number: "02",
    title: "Three-tap maximum",
    desc: "Every screen in FitNest can be reached in a maximum of three taps from the home screen. The bottom navigation keeps all six main sections permanently visible so users never feel lost.",
  },
  {
    number: "03",
    title: "Ambiguous features, deliberate placement",
    desc: "The Nest Score touches Nutrition, Sleep, and Workout data — but it lives on the Dashboard because it's the first thing a user checks. Activity History lives in Workout, not Profile, because that's where the user's mind is.",
  },
  {
    number: "04",
    title: "Familiar patterns, zero learning curve",
    desc: "The IA follows conventions from apps users already know. Bottom nav, horizontal filter pills, tab switchers — the structure borrows familiar patterns so FitNest feels intuitive from the first tap.",
  },
];

const reflectionCards = [
  {
    title: "The hardest part",
    text: "Deciding where cross-cutting features belong. The Nest Score touches Nutrition, Workout, and Sleep data simultaneously — but placing it on the Dashboard made the most sense because it's what users check first.",
  },
  {
    title: "How categories were decided",
    text: "One question guided every decision: 'What is the user trying to do right now?' Goal-based grouping made the categories feel natural rather than forced — the structure follows the user's intent, not the system's logic.",
  },
  {
    title: "What this taught me",
    text: "IA is not about organising features — it's about mapping mental models. The moment the structure stopped reflecting how the system works and started reflecting how users think, every decision became clearer.",
  },
];

// ── Zoomable IA Viewer ────────────────────────────────────────

function SitemapMagnifier() {
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const zoom = 3;
  const lensSize = 220;
  const sitemapImage = "/IA___Site_map.png";

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLensPos({ x, y });
    setImgSize({ width: rect.width, height: rect.height });
  };

  return (
    <div
      className="p5-sitemap-magnifier"
      onMouseMove={handleMove}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
    >
      <img
        src={sitemapImage}
        alt="FitNest simplified sitemap"
        className="p5-sitemap-img"
      />

      {showLens && (
        <div
          className="p5-sitemap-lens"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${lensPos.x - lensSize / 2}px`,
            top: `${lensPos.y - lensSize / 2}px`,
          }}
        >
          <img
            src={sitemapImage}
            alt=""
            style={{
              width: `${imgSize.width * zoom}px`,
              height: `${imgSize.height * zoom}px`,
              transform: `translate(${
                -(lensPos.x * zoom - lensSize / 2)
              }px, ${-(lensPos.y * zoom - lensSize / 2)}px)`,
            }}
          />
        </div>
      )}
    </div>
  );
}

function IAMagnifier() {
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const zoom = 3;
  const lensSize = 220;
  const iaImage = "/fitnest-ia-small.png";;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLensPos({ x, y });
    setImgSize({ width: rect.width, height: rect.height });
  };

  return (
    <div
      className="p5-ia-magnifier"
      onMouseMove={handleMove}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
    >
      <img
        src={iaImage}
        alt="FitNest full information architecture map"
        className="ia-viewer-img"
      />

      {showLens && (
        <div
          className="p5-ia-lens"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${lensPos.x - lensSize / 2}px`,
            top: `${lensPos.y - lensSize / 2}px`,
          }}
        >
          <img
            src={iaImage}
            alt=""
            style={{
              width: `${imgSize.width * zoom}px`,
              height: `${imgSize.height * zoom}px`,
              transform: `translate(${
                -(lensPos.x * zoom - lensSize / 2)
              }px, ${-(lensPos.y * zoom - lensSize / 2)}px)`,
            }}
          />
        </div>
      )}
    </div>
  );
}

function IAMapViewer() {
  return (
    <div className="ia-viewer-wrap">
      <div className="ia-viewer-bar">
        <div className="ia-viewer-bar-left">
          <span className="ia-viewer-dot" style={{ background: "rgba(26,24,20,0.18)" }} />
          <span className="ia-viewer-dot" style={{ background: "rgba(246,231,161,0.8)" }} />
          <span className="ia-viewer-dot" style={{ background: "rgba(26,24,20,0.32)" }} />
          <span className="ia-viewer-title">Information Architecture Map</span>
        </div>

        <div className="ia-viewer-bar-right">
          <span className="ia-viewer-hint">Hover to inspect</span>
        </div>
      </div>

      <div className="ia-viewer-frame">
        <IAMagnifier />
      </div>

      <div className="ia-viewer-footer">
        <span>FigJam board export</span>
        <span>·</span>
        <span>8 sections · 100+ nodes · full content inventory</span>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────

export default function ProjectFivePage() {
  return (
    <main className="p5-page">

      {/* Nav */}
      <nav className="p5-nav">
        <Link href="/" className="p5-nav-name">Rutuja Kalane</Link>
        <Link href="/?project=2#projects" className="p5-back-link">Back to projects ↗</Link>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="p5-hero">
        <div className="p5-hero-inner">

          <h1>
  Designing<br />
  Information Architecture,<br />
  Sitemaps &amp; User Flows
</h1>
          <p className="p5-hero-sub">
            A structure-first design project focused on information architecture, sitemap planning, user flows, and translating that foundation into final UI screens.
          </p>
          <div className="p5-hero-tags">
  <span>Sitemap</span>
  <span>Information Architecture</span>
  <span>User Flows</span>
  <span>UI Design</span>
  <span>Figma</span>
</div>
        </div>

      </header>

      {/* ── SUB PROJECT INTRO ────────────────────────────── */}
<section className="p5-subproject-section">
  <div className="p5-subproject-inner">
    <div className="p5-subproject-copy">
      <p className="p5-label">PROJECT 1</p>
      <h2>FitNest</h2>
      <p>A fitness tracking app</p>
    </div>

    <div className="p5-subproject-logo" aria-hidden="true">
      <img src="/fitnest-logo-1.png" alt="" />
    </div>
  </div>
</section>

      {/* ── SNAPSHOT + UI PREVIEW ─────────────────────────── */}
<section className="p5-section p5-preview-section">
  <div className="p5-preview-grid">

    {/* LEFT — phone pair */}
    <div className="p5-phones-area">
      <p className="p5-label">UI PREVIEW · REGISTER + DASHBOARD</p>
      <div className="p5-phones-stage">
        <div className="p5-phone p5-phone--back">
          <img
            src="/OnboardingRegister.png"
            alt="FitNest Register screen"
            className="p5-phone-img"
          />
        </div>
        <div className="p5-phone p5-phone--front">
  <img
    src="/NestChallenges.png"
    alt="FitNest Nest Challenges screen"
    className="p5-phone-img"
  />
</div>
      </div>
    </div>

    {/* RIGHT — stacked snapshot cards */}
    <div className="p5-snapshot-stack">
      {snapshotCards.map((card) => (
        <div className="p5-snapshot-card p5-snapshot-card--tall" key={card.label}>
          <p className="p5-label">{card.label}</p>
          <h3>{card.main}</h3>
          <span>{card.sub}</span>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <section className="p5-section">
        <div className="p5-split">
          <div className="p5-split-headline">
            <p className="p5-label">OVERVIEW</p>
            <h2>A fitness app built around how users actually think.</h2>
          </div>
          <div className="p5-split-body">
            <p>
              FitNest is an all-in-one fitness companion app that helps users track workouts, nutrition, challenges, and progress in one place.
            </p>
            <p>
              Before designing the UI, the focus was on building a clear structure — organising 20+ screens, nested features, and user paths so the app felt easy to navigate.
            </p>
          </div>
        </div>

        {/* Content inventory callout */}
        <div className="p5-callout">
          <p className="p5-label">CONTENT INVENTORY</p>
          <div className="p5-inventory-grid">
            {[
              "Splash Screen", "Onboarding", "Login / Register",
              "Dashboard", "Nest Score", "Workout Library",
              "Workout Detail", "Active Session", "Activity Tracker",
              "Activity History", "Nutrition Log", "Water & Hydration Tracker",
              "Nest Challenges", "Awards & Badges", "Streaks Tracker",
              "Community Feed", "Invite Friends", "User Profile",
              "Settings", "Notifications", "Help & Support",
            ].map((item) => (
              <span className="p5-inventory-tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SITEMAP ──────────────────────────────────────── */}
      <section className="p5-section">
        <div className="p5-split">
          <div className="p5-split-headline">
            <p className="p5-label">SITEMAP</p>
            <h2>A simple sitemap for a complex fitness app.</h2>
          </div>
          <div className="p5-split-body">
            <p>
              The sitemap shows the top-level structure of FitNest — seven primary sections branching from a single root. Each section maps cleanly to one tab in the bottom navigation, keeping the mental model simple.
            </p>
          </div>
        </div>

        <div className="p5-map-frame">
          <div className="p5-map-frame-bar">
            <span className="p5-label">SITEMAP — SIMPLIFIED VIEW</span>
          </div>
          <div className="p5-map-frame-body">
            <SitemapMagnifier />
          </div>
        </div>
      </section>

      {/* ── IA MAP VIEWER ────────────────────────────────── */}
      <section className="p5-section">
        <div className="p5-split">
          <div className="p5-split-headline">
            <p className="p5-label"></p>
            <h2>Information Architecture</h2>
          </div>
          <div className="p5-split-body">
        
          </div>
        </div>

        <IAMapViewer />
      </section>




      {/* ── NAVIGATION LOGIC ─────────────────────────────── */}
      <section className="p5-section">
        <div className="p5-split">
          <div className="p5-split-headline">
            <p className="p5-label"></p>
            <h2>Navigation Logic</h2>
          </div>
          <div className="p5-split-body">
            <p>
              Each tab has its own navigation pattern, designed around the goal a user has when they open it.
            </p>
          </div>
        </div>

        <div className="p5-nav-grid">
          {navSections.map((nav) => (
            <div className="p5-nav-card" key={nav.number}>
              <div className="p5-nav-card-header">
  <h3>{nav.tab}</h3>
</div>
              <ul className="p5-nav-list">
                {nav.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── UI SCREENS ───────────────────────────────────── */}
      <section className="p5-section">
        <div className="p5-split">
          <div className="p5-split-headline">
            <p className="p5-label">UI SCREENS</p>
            <h2>The structure, made visible.</h2>
          </div>
          <div className="p5-split-body">
            <p>
              The final UI screens show how the IA decisions translate into interface. Each tab — Dashboard, Workout, Nutrition, Challenges, Community — reflects the structure built in the sitemap.
            </p>
          </div>
        </div>

        <div className="p5-screens-frame">
          <div className="p5-screens-bar">
            <div className="p5-screens-dots">
              <span style={{ background: "#FF5F57" }} />
              <span style={{ background: "#FEBC2E" }} />
              <span style={{ background: "#28C840" }} />
            </div>
            <span className="p5-label" style={{ margin: 0 }}>FitNest · UI Screens · Figma</span>
          </div>
          <div className="p5-screens-body">
            <img
              src="/IA___Site_map_3.png"
              alt="FitNest UI screens — Login, Dashboard, Workout Library, Nutrition Log, Nest Challenges, Community"
              className="p5-screens-img"
            />
          </div>
          <div className="p5-screens-caption">
            <span>Login</span>
            <span>→</span>
            <span>Dashboard</span>
            <span>→</span>
            <span>Workout Library</span>
            <span>→</span>
            <span>Nutrition Log</span>
            <span>→</span>
            <span>Challenges</span>
            <span>→</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      

      {/* ── REFLECTION ───────────────────────────────────── */}
      <section className="p5-section p5-reflection-section">
        <p className="p5-label">REFLECTION</p>
        <h2 className="p5-reflection-headline">What building a structure from scratch taught me.</h2>
        <div className="p5-reflection-grid">
          {reflectionCards.map((card) => (
            <div className="p5-reflection-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="p5-reflection-callout">
          <p className="p5-label">TAKEAWAY</p>
          <p className="p5-reflection-callout-text">
            IA is not about organising features — it's about mapping mental models. Structure is the first design decision, and it's the one every other decision inherits from.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p5-footer">
        <Link href="/?project=2#projects">Back to projects</Link>
      </footer>

      {/* ── STYLES ───────────────────────────────────────── */}
      <style jsx global>{`

        .p5-page {
          --section-y: clamp(5.5rem, 7.5vw, 8rem);
          --content-gap: clamp(2.8rem, 4vw, 4.5rem);
          --card-gap: 1rem;

          min-height: 100vh;
          background-color: var(--color-cream);
          background-image: radial-gradient(
            circle,
            var(--dot-color) var(--dot-size),
            transparent var(--dot-size)
          );
          background-size: var(--dot-space) var(--dot-space);
          color: var(--color-ink);
          overflow-x: hidden;
        }

        /* ── Nav ── */
        .p5-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50000;
          height: 64px;
          padding: 0 var(--container-px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p5-nav-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-stone);
          text-decoration: none;
        }

        .p5-back-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink);
          border: 1px solid rgba(26,24,20,0.16);
          padding: 0.65rem 1rem;
          background: rgba(253,250,245,0.66);
          text-decoration: none;
          border-radius: 999px;
        }

        /* ── Label ── */
        .p5-label {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.5);
          margin: 0 0 1rem;
        }

        /* ── Hero ── */
        .p5-hero {
  width: min(1180px, calc(100vw - 3rem));
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 5rem;
}

        .p5-hero-inner {
  width: min(1180px, 100%);
  max-width: none;
}

        .p5-hero h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2.6rem, 5.5vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0;
        }

        

        .p5-hero-sub {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.65;
          color: rgba(26,24,20,0.65);
          margin: 1.8rem 0 2rem;
          max-width: 620px;
        }

        .p5-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .p5-hero-tags span {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.65rem 1.15rem;
  background: rgba(253,250,245,0.94);
  border: 1px solid rgba(26,24,20,0.18);
  border-radius: 999px;
  color: rgba(26,24,20,0.82);
  box-shadow: 0 10px 28px rgba(26,24,20,0.06);
}

        /* ── Hero Deco (node diagram) ── */
        .p5-hero-deco {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          user-select: none;
        }

        .p5-deco-root {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.1rem;
          letter-spacing: -0.03em;
          color: var(--color-ink);
          background: rgba(246,231,161,0.82);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 12px;
          padding: 0.55rem 1.2rem;
          box-shadow: 0 8px 24px rgba(26,24,20,0.08);
        }

        .p5-deco-branches {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          width: 100%;
          position: relative;
        }

        .p5-deco-branch {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .p5-deco-line {
          width: 24px;
          height: 1px;
          background: rgba(26,24,20,0.2);
          flex-shrink: 0;
        }

        .p5-deco-node {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.72);
          background: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.12);
          border-radius: 8px;
          padding: 0.4rem 0.8rem;
          box-shadow: 0 4px 12px rgba(26,24,20,0.05);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .p5-deco-node:hover {
          background: rgba(246,231,161,0.6);
          transform: translateX(4px);
        }

        /* ── Sub Project Intro ── */
.p5-subproject-section {
  width: min(1180px, calc(100vw - 3rem));
  margin: 0 auto;
  padding: clamp(3rem, 5vw, 5rem) 0;
  border-top: 1px solid rgba(26,24,20,0.08);
}

.p5-subproject-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 5vw, 5rem);
  border-radius: 32px;
  background-color: rgba(253,250,245,0.96);
  border: 1px solid rgba(26,24,20,0.13);
  box-shadow: 0 24px 70px rgba(26,24,20,0.08);
  padding: clamp(1.8rem, 4vw, 3.2rem);
}

.p5-subproject-copy h2 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2.4rem, 5vw, 5.4rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  color: var(--color-ink);
  margin: 0;
}

.p5-subproject-copy p:last-child {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 1.3vw, 1.25rem);
  line-height: 1.55;
  color: rgba(26,24,20,0.65);
  margin: 1rem 0 0;
}

.p5-subproject-logo {
  width: clamp(120px, 16vw, 220px);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p5-subproject-logo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

@media (max-width: 700px) {
  .p5-subproject-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .p5-subproject-logo {
    width: 140px;
  }
}

        /* ── Sections ── */
        .p5-section {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: var(--section-y) 0;
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .p5-section > * + * {
          margin-top: var(--content-gap);
        }

        /* ── Split ── */
        .p5-split {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
          align-items: start;
        }

        .p5-split-headline {
          grid-column: 1 / span 2;
        }

        .p5-split-headline h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .p5-split-body {
          grid-column: 3 / span 2;
          padding-top: 1.8rem;
        }

        .p5-split-body p {
          font-family: var(--font-sans);
          font-size: clamp(0.96rem, 1.08vw, 1.08rem);
          line-height: 1.8;
          color: rgba(26,24,20,0.66);
          margin: 0;
        }

        .p5-split-body p + p {
          margin-top: 1rem;
        }

        /* ── Snapshot ── */
        .p5-snapshot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--card-gap);
}

        .p5-snapshot-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .p5-snapshot-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 65px rgba(26,24,20,0.11);
        }

        .p5-snapshot-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.4rem, 1.9vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0.7rem 0 0.6rem;
        }

        .p5-snapshot-card span {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(26,24,20,0.58);
        }

      /* ── Preview Section (phones + compact cards) ── */
.p5-preview-section {
  padding-top: var(--section-y);
  padding-bottom: var(--section-y);
}

.p5-preview-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.55fr;
  gap: clamp(1.8rem, 3.5vw, 3.5rem);
  align-items: center;
}

/* ── Phones area ── */
.p5-phones-area {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.p5-phones-stage {
  position: relative;
  height: clamp(520px, 52vw, 660px);
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: clamp(1.2rem, 2vw, 2rem);
}

/* Phone base */
.p5-phone {
  position: relative;
  border-radius: 36px;
  overflow: hidden;
  border: 1px solid rgba(26,24,20,0.15);
  box-shadow:
    0 32px 80px rgba(26,24,20,0.18),
    0 8px 24px rgba(26,24,20,0.10);
  background: rgba(253,250,245,0.96);
}

.p5-phone-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 36px;
}

/* Register / Login screen */
.p5-phone--back {
  width: clamp(210px, 22vw, 295px);
  aspect-ratio: 646 / 1498;
  transform: none;
  z-index: 2;
  opacity: 1;
}

/* Nest Challenges screen */
.p5-phone--front {
  width: clamp(210px, 22vw, 295px);
  aspect-ratio: 646 / 1498;
  transform: none;
  z-index: 2;
  opacity: 1;
}

/* ── Compact snapshot cards ── */
.p5-snapshot-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: center;
}

.p5-snapshot-card--tall {
  min-height: 130px;
  padding: 1rem;
  justify-content: flex-start;
}

.p5-snapshot-card--tall h3 {
  font-size: clamp(1.15rem, 1.4vw, 1.55rem);
  margin: 0.45rem 0 0.35rem;
}

.p5-snapshot-card--tall span {
  font-size: 0.78rem;
  line-height: 1.45;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  .p5-preview-grid {
    grid-template-columns: 1fr;
  }

  .p5-phones-stage {
    height: auto;
    justify-content: flex-start;
    gap: 1rem;
  }

  .p5-phone--back,
  .p5-phone--front {
    width: clamp(160px, 38vw, 235px);
  }

  .p5-snapshot-stack {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .p5-snapshot-card--tall {
    flex: 1 1 calc(33% - 0.5rem);
    min-width: 150px;
  }
}

@media (max-width: 500px) {
  .p5-phones-stage {
    flex-direction: column;
    align-items: center;
  }

  .p5-phone--back,
  .p5-phone--front {
    width: 220px;
  }

  .p5-snapshot-card--tall {
    flex: 1 1 100%;
  }
}
  
        /* ── Callout ── */
.p5-callout {
  border-radius: 28px;
  background-color: rgba(246,231,161,0.52);
  border: 1px solid rgba(26,24,20,0.12);
  padding: clamp(1.5rem, 3vw, 2.4rem);
  box-shadow: 0 20px 55px rgba(26,24,20,0.07);
}

.p5-inventory-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.p5-inventory-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.55rem 1rem;
  background: rgba(253,250,245,0.96);
  border: 1px solid rgba(26,24,20,0.16);
  border-radius: 999px;
  color: rgba(26,24,20,0.82);
  box-shadow: 0 8px 22px rgba(26,24,20,0.05);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.p5-inventory-tag:hover {
  background: rgba(253,250,245,1);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(26,24,20,0.08);
}

        /* ── Map frame (sitemap) ── */
        .p5-map-frame {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 24px 70px rgba(26,24,20,0.09);
        }

        .p5-map-frame-bar {
          padding: 0.9rem 1.4rem;
          background: rgba(246,231,161,0.72);
          border-bottom: 1px solid rgba(26,24,20,0.1);
        }

        .p5-map-frame-bar .p5-label {
          margin: 0;
        }

        .p5-map-frame-body {
          background: rgba(253,250,245,0.96);
          padding: 2rem;
          overflow-x: auto;
        }

        .p5-sitemap-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .p5-sitemap-magnifier {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: zoom-in;
}

.p5-sitemap-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.p5-sitemap-lens {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  border: 1px solid rgba(26,24,20,0.22);
  box-shadow: 0 18px 45px rgba(26,24,20,0.22);
  background-color: rgba(253,250,245,0.98);
  z-index: 5;
}

.p5-sitemap-lens img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: none;
  display: block;
}

        /* ── IA Viewer ── */
        .ia-viewer-wrap {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 24px 70px rgba(26,24,20,0.09);
        }

        .ia-viewer-bar {
          padding: 0.75rem 1.2rem;
          background: rgba(246,231,161,0.72);
          border-bottom: 1px solid rgba(26,24,20,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .ia-viewer-bar-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ia-viewer-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: block;
        }

        .ia-viewer-title {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.6);
          margin-left: 0.4rem;
        }

        .ia-viewer-bar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .ia-viewer-hint {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.4);
        }

        .ia-zoom-controls {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .ia-zoom-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(253,250,245,0.86);
          border: 1px solid rgba(26,24,20,0.14);
          color: var(--color-ink);
          font-family: var(--font-mono);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease;
          line-height: 1;
        }

        .ia-zoom-btn:hover {
          background: rgba(253,250,245,0.96);
        }

        .ia-zoom-value {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.08em;
          color: rgba(26,24,20,0.6);
          min-width: 3ch;
          text-align: center;
        }

        .ia-zoom-reset {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.7rem;
          background: rgba(253,250,245,0.86);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 999px;
          color: rgba(26,24,20,0.7);
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .ia-zoom-reset:hover {
          background: rgba(253,250,245,0.96);
        }

        .ia-viewer-frame {
          width: 100%;
          max-height: 720px;
          overflow: auto;
          background: rgba(248,246,242,0.98);
          cursor: zoom-in;
        }

        .ia-viewer-inner {
          display: block;
        }

        .ia-viewer-img {
          display: block;
          max-width: none;
          height: auto;
          width: 100%;
        }

        .p5-ia-magnifier {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: zoom-in;
}

.p5-ia-magnifier .ia-viewer-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.p5-ia-lens {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  border: 1px solid rgba(26,24,20,0.22);
  box-shadow: 0 18px 45px rgba(26,24,20,0.22);
  background-color: rgba(253,250,245,0.98);
  z-index: 5;
}

.p5-ia-lens img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: none;
  display: block;
}

        .ia-viewer-footer {
          padding: 0.75rem 1.4rem;
          background: rgba(253,250,245,0.96);
          border-top: 1px solid rgba(26,24,20,0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.38);
        }

        /* ── Structure grid ── */
        .p5-structure-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .p5-structure-card {
  border-radius: 28px;
  border: 1px solid rgba(26,24,20,0.13);
  box-shadow: 0 20px 55px rgba(26,24,20,0.07);
  padding: 1.65rem;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.p5-structure-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 65px rgba(26,24,20,0.11);
}

.p5-structure-card h3 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--color-ink);
}

.p5-structure-children {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: auto;
}

        .p5-structure-children {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: auto;
        }

        .p5-child-tag {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.4;
          color: rgba(26,24,20,0.65);
          padding: 0.3rem 0.6rem;
          background: rgba(26,24,20,0.04);
          border-radius: 6px;
        }

        /* ── Navigation grid ── */
        .p5-nav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .p5-nav-card {
  border-radius: 28px;
  background-color: rgba(253,250,245,0.96);
  border: 1px solid rgba(26,24,20,0.13);
  box-shadow: 0 20px 55px rgba(26,24,20,0.07);
  padding: 1.8rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.p5-nav-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 65px rgba(26,24,20,0.11);
}

.p5-nav-card-header {
  display: flex;
  align-items: flex-start;
}

.p5-nav-card-header h3 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.7rem, 2.2vw, 2.45rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--color-ink);
}

.p5-nav-list {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(26,24,20,0.68);
  padding-left: 1.1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.p5-nav-list li {
  padding-left: 0.25rem;
}

        .p5-nav-list li {
          padding-left: 0.2rem;
        }

        /* ── Screens frame ── */
        .p5-screens-frame {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 24px 70px rgba(26,24,20,0.09);
        }

        .p5-screens-bar {
          padding: 0.75rem 1.2rem;
          background: rgba(246,231,161,0.72);
          border-bottom: 1px solid rgba(26,24,20,0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .p5-screens-dots {
          display: flex;
          gap: 0.35rem;
          align-items: center;
          flex-shrink: 0;
        }

        .p5-screens-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: block;
        }

        .p5-screens-body {
          background: rgba(248,246,242,0.98);
          padding: 2.5rem 2rem;
          overflow-x: auto;
        }

        .p5-screens-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 8px;
        }

        .p5-screens-caption {
          padding: 0.75rem 1.4rem;
          background: rgba(253,250,245,0.96);
          border-top: 1px solid rgba(26,24,20,0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.38);
        }

        /* ── Design decisions ── */
        .p5-decisions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .p5-decision-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          transition: all 240ms ease;
        }

        .p5-decision-card:hover {
          background-color: rgba(246,231,161,0.52);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 65px rgba(26,24,20,0.12);
        }

        .p5-decision-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.6vw, 1.75rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          margin: 0.5rem 0 0.75rem;
          color: var(--color-ink);
        }

        .p5-decision-desc {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.62);
          margin: 0;
        }

        /* ── Reflection ── */
        .p5-reflection-section {
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .p5-reflection-headline {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0 0 var(--content-gap);
          width: min(760px, 100%);
        }

        .p5-reflection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .p5-reflection-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          transition: all 240ms ease;
        }

        .p5-reflection-card:hover {
          background-color: rgba(246,231,161,0.62);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 22px 60px rgba(26,24,20,0.12);
        }

        .p5-reflection-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.8vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }

        .p5-reflection-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.64);
          margin: 0;
        }

        .p5-reflection-callout {
          width: min(900px, 100%);
          margin: clamp(3rem, 5vw, 5rem) auto 0;
          border-radius: 28px;
          background-color: rgba(246,231,161,0.62);
          border: 1px solid rgba(26,24,20,0.12);
          padding: clamp(1.5rem, 3vw, 2.4rem);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          text-align: center;
        }

        .p5-reflection-callout-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.8vw, 2rem);
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: var(--color-ink);
          margin: 0;
        }

        /* ── Footer ── */
        .p5-footer {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: 4rem 0 6rem;
          display: flex;
          justify-content: center;
        }

        .p5-footer a {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink);
          border: 1px solid rgba(26,24,20,0.16);
          padding: 0.65rem 1rem;
          background: rgba(253,250,245,0.66);
          text-decoration: none;
          border-radius: 999px;
          transition: background 0.2s ease;
        }

        .p5-footer a:hover {
          background: rgba(246,231,161,0.6);
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .p5-structure-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .p5-hero {
            grid-template-columns: 1fr;
            min-height: 80vh;
          }

          .p5-hero-deco {
            display: none;
          }

          .p5-snapshot-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p5-split {
            grid-template-columns: 1fr;
          }

          .p5-split-headline,
          .p5-split-body {
            grid-column: auto;
          }

          .p5-split-body {
            padding-top: 0;
          }

          .p5-structure-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p5-nav-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p5-decisions-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p5-reflection-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .p5-snapshot-grid {
            grid-template-columns: 1fr;
          }

          .p5-structure-grid {
            grid-template-columns: 1fr;
          }

          .p5-nav-grid {
            grid-template-columns: 1fr;
          }

          .p5-decisions-grid {
            grid-template-columns: 1fr;
          }

          .ia-viewer-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .ia-viewer-hint {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
