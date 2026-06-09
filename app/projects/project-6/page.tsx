"use client";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────

const snapshotCards = [
  { label: "TOOL", main: "Autodesk Maya", sub: "3D modelling & scene setup" },
  { label: "RENDERER", main: "Arnold", sub: "Ray-traced final renders" },
  { label: "TYPE", main: "Solo Project", sub: "Independent exploration" },
  { label: "STATUS", main: "Ongoing", sub: "Actively practising 3D" },
];

const model1Details = [
  {
    label: "MATERIALS",
    title: "Warm Earth Tones",
    desc: "Olive-painted walls, warm caramel upholstery on the sofa and armchair, light whitewashed wood flooring, and a mix of dark walnut and natural pine on the furniture pieces.",
  },
  {
    label: "LIGHTING",
    title: "Single Interior Lamp",
    desc: "A tall floor lamp in the back corner casts warm ambient light across the scene. The windows provide cool secondary fill. The contrast between warm artificial and cool natural light gives the room its evening atmosphere.",
  },
  {
    label: "SCENE DETAILS",
    title: "Full Room Furnishing",
    desc: "Sofa with cushions, armchair, coffee table with mugs, TV unit with retro television, wall mirror, framed art, wooden blinds on two windows, a circular wall clock, and a potted plant.",
  },
  {
    label: "CHALLENGE",
    title: "Learning From Zero",
    desc: "This was my first time using Maya. Getting proportions right on furniture, managing scene complexity, and producing a clean final render were all new challenges solved through trial and error.",
  },
];

const model2Details = [
  {
    label: "MATERIALS",
    title: "Hard Surface Hull",
    desc: "Dark gunmetal grey as the primary hull material, burnt orange accent plating on the wings and cargo module, and teal/cyan emissive materials for the engine glows and lighting strips.",
  },
  {
    label: "LIGHTING",
    title: "Emissive + Studio Setup",
    desc: "The spaceship's teal engine glow acts as a key practical light, casting a soft reflection on the ground plane below. A neutral grey studio environment keeps the focus on the model itself.",
  },
  {
    label: "DESIGN LANGUAGE",
    title: "Angular Hard Surface",
    desc: "Sharp geometric silhouette with angular wings, a forward cockpit nose, a rear cargo block, wing-mounted weapon rails, circular engine intakes, and small detail panels across the hull.",
  },
  {
    label: "CHALLENGE",
    title: "Hard Surface Modelling",
    desc: "Keeping clean geometry on complex angular forms was the primary challenge. Getting the emissive engine glow to read well against the dark hull required careful material and lighting adjustments.",
  },
];

const reflectionCards = [
  {
    title: "What I discovered",
    text: "3D modelling is a completely different design language. Every decision — proportion, material, light direction — affects how the final render reads. There's no shortcut; you have to build an eye for space and form.",
  },
  {
    title: "The jump between models",
    text: "Going from the living room to the spaceship showed me how quickly the fundamentals compound. The second model was more ambitious in geometry and material complexity, and it felt noticeably more intentional.",
  },
  {
    title: "What's next",
    text: "I'm actively continuing to practise in Maya. Each model teaches me something the previous one didn't. The goal is to keep building complexity and eventually bring 3D into my broader design practice.",
  },
];

// ── Page ──────────────────────────────────────────────────────

export default function ProjectSixPage() {
  return (
    <main className="p6-page">

      {/* Nav */}
      <nav className="p6-nav">
        <Link href="/" className="p6-nav-name">Rutuja Kalane</Link>
        <Link href="/?project=6#projects" className="p6-back-link">Back to projects ↗</Link>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="p6-hero">
        <div className="p6-hero-inner">
  <div className="p6-hero-heading-row">
    <div className="p6-hero-copy">
      <p className="p6-label">Autodesk Maya · Arnold Renderer · Solo</p>
      <h1>Learning to Think in Three Dimensions</h1>
    </div>

    <div className="p6-maya-logo" aria-hidden="true">
      <img src="/maya-logo.png" alt="" />
    </div>
  </div>

  <p className="p6-hero-sub">
    Two 3D models. One Maya beginner. A living room, a spaceship, and the beginning of a new design practice.
  </p>
</div>

      </header>

      {/* ── SNAPSHOT ─────────────────────────────────────── */}
      <section className="p6-section">
        <div className="p6-snapshot-grid">
          {snapshotCards.map((card) => (
            <div className="p6-snapshot-card" key={card.label}>
              <p className="p6-label">{card.label}</p>
              <h3>{card.main}</h3>
              <span>{card.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <section className="p6-section">
        <div className="p6-split">
          <div className="p6-split-headline">
            <p className="p6-label">OVERVIEW</p>
            <h2>Two models. One software. The start of something new.</h2>
          </div>
          <div className="p6-split-body">
            <p>
              This project documents my first two experiences in Autodesk Maya. Neither model was made for a brief — they were made out of curiosity. I wanted to understand how 3D space works: how geometry is built, how light behaves inside a scene, and how materials change the reading of a form.
            </p>
            <p>
              The first model is a fully furnished isometric living room — warm, domestic, and detailed. The second is a sci-fi spaceship — angular, dark, and lit by its own engine glow. Two very different subjects, both teaching very different things about Maya and about design at a spatial scale.
            </p>
            <p>
              I am currently exploring 3D modelling and actively practising. These renders are where that practice began.
            </p>
          </div>
        </div>
      </section>

      {/* ── MODEL 01 ─────────────────────────────────────── */}
      <section className="p6-section">
        <div className="p6-model-header">
          <div className="p6-model-tag">
            <span className="p6-mono-tag">MODEL 01</span>
          </div>
          <div className="p6-split">
            <div className="p6-split-headline">
              <p className="p6-label">ISOMETRIC LIVING ROOM</p>
              <h2>My first model — a room that feels lived in.</h2>
            </div>
            <div className="p6-split-body">
              <p>
                I wanted my first Maya model to be grounded and achievable — a familiar interior space. The living room gave me a reason to practice furniture geometry, think about scale and proportion, and explore how warm light transforms a scene.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="p6-gallery-stack">
  <div className="p6-render-card p6-gallery-wide">
    <img src="/h render 1.jpg" alt="Isometric living room — hero full view" />
    <p className="p6-img-caption">Full room view · Arnold render</p>
  </div>

  <div className="p6-render-card p6-gallery-wide">
    <img src="/h render 5.jpg" alt="Isometric living room — full view" />
    <p className="p6-img-caption">Interior overview · Arnold render</p>
  </div>

  <div className="p6-gallery-bottom-row">
            <div className="p6-render-card">
              <img src="/h render 4.jpg" alt="Close-up of sofa and coffee table" />
              <p className="p6-img-caption">Close-up · Sofa and coffee table</p>
            </div>

            <div className="p6-render-card">
              <img src="/h render 3.jpg" alt="TV unit and wall details close-up" />
              <p className="p6-img-caption">Close-up · TV unit and wall details</p>
            </div>
          </div>
        </div>

        {/* Detail cards */}
        <div className="p6-detail-grid">
          {model1Details.map((card) => (
            <div className="p6-detail-card" key={card.label}>
              <p className="p6-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p className="p6-detail-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────── */}
      <div className="p6-model-divider">
        <div className="p6-divider-inner">
          <span className="p6-divider-line" />
          <span className="p6-divider-label">then came model two</span>
          <span className="p6-divider-line" />
        </div>
      </div>

      {/* ── MODEL 02 ─────────────────────────────────────── */}
<section className="p6-section p6-section-no-top-border">
  <div className="p6-model-header">
    <div className="p6-model-tag">
      <span className="p6-mono-tag">MODEL 02</span>
    </div>

    <div className="p6-split">
      <div className="p6-split-headline">
        <p className="p6-label">SCI-FI SPACESHIP</p>
        <h2>More ambitious. Harder edges. Glowing engines.</h2>
      </div>

      <div className="p6-split-body">
        <p>
          For my second model I wanted a completely different challenge — hard
          surface geometry, an angular silhouette, and emissive materials. The
          spaceship pushed me to think about mechanical forms, panel detailing,
          and how light sources built into the model itself can drive the entire
          mood of a render.
        </p>
      </div>
    </div>
  </div>

{/* Gallery */}
<div className="p6-gallery-stack">
  <div className="p6-render-card p6-gallery-wide">
    <img src="/render 2.jpg" alt="Sci-fi spaceship full render" />
    <p className="p6-img-caption">Full spaceship view · Arnold render</p>
  </div>

  <div className="p6-render-card p6-gallery-wide">
    <img src="/render 1.jpg" alt="Sci-fi spaceship alternate render" />
    <p className="p6-img-caption">Alternate spaceship angle · Arnold render</p>
  </div>

  <div className="p6-render-card p6-gallery-wide">
  <img src="/render 6.jpg" alt="Spaceship cockpit and front detail" />
  <p className="p6-img-caption">Close-up · Cockpit and front detail</p>
</div>

<div className="p6-render-card p6-gallery-wide">
  <img src="/render 5.jpg" alt="Spaceship engine and rear detail" />
  <p className="p6-img-caption">Close-up · Engine and rear detail</p>
</div>
</div>

  {/* Detail cards */}
  <div className="p6-detail-grid">
    {model2Details.map((card) => (
      <div className="p6-detail-card" key={card.label}>
        <p className="p6-label">{card.label}</p>
        <h3>{card.title}</h3>
        <p className="p6-detail-desc">{card.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* ── SIDE BY SIDE ─────────────────────────────────── */}
      <section className="p6-section">
        <div className="p6-split">
          <div className="p6-split-headline">
            <p className="p6-label">THE PROGRESSION</p>
            <h2>Same software. Same renderer. Very different results.</h2>
          </div>
          <div className="p6-split-body">
            <p>
              Placing both models side by side shows what changed between the first attempt and the second. The living room is additive and warm — built from familiar objects. The spaceship is subtractive and precise — carved from geometric forms. Both are early work, but the distance between them is visible.
            </p>
          </div>
        </div>

        <div className="p6-compare-grid">
          <div className="p6-compare-card">
            <div className="p6-compare-img">
              <img src="/render_final.jpeg" alt="Living room render" />
            </div>
            <div className="p6-compare-text">
              <span className="p6-mono-tag">MODEL 01</span>
              <h3>Isometric Living Room</h3>
              <p>Warm · Domestic · First attempt at scene building</p>
            </div>
          </div>
          <div className="p6-compare-card">
            <div className="p6-compare-img">
              <img src="/Render.jpeg" alt="Spaceship render" />
            </div>
            <div className="p6-compare-text">
              <span className="p6-mono-tag">MODEL 02</span>
              <h3>Sci-Fi Spaceship</h3>
              <p>Angular · Emissive · First hard surface attempt</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFLECTION ───────────────────────────────────── */}
      <section className="p6-section p6-reflection-section">
        <p className="p6-label">REFLECTION</p>
        <h2 className="p6-reflection-headline">Still learning. Still building.</h2>
        <div className="p6-reflection-grid">
          {reflectionCards.map((card) => (
            <div className="p6-reflection-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="p6-callout">
          <p className="p6-label">CURRENTLY</p>
          <p className="p6-callout-text">
            I am actively exploring 3D modelling in Autodesk Maya — practising new models, studying form, and building the fundamentals of spatial design one render at a time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="p6-footer">
        <Link href="/?project=6#projects">Back to projects</Link>
      </footer>

      {/* ── STYLES ───────────────────────────────────────── */}
      <style jsx global>{`

        .p6-page {
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
        .p6-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50000;
          height: 64px;
          padding: 0 var(--container-px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p6-nav-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-stone);
          text-decoration: none;
          border-radius: 999px;
        }

        .p6-back-link {
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
        .p6-label {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.5);
          margin: 0 0 1rem;
        }

        /* ── Hero ── */
        .p6-hero {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding-top: 7rem;
          padding-bottom: 5rem;
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 5vw, 5rem);
        }

        .p6-hero-inner {
          max-width: 820px;
        }

        .p6-hero-heading-row {
  position: relative;
  display: block;
}

.p6-hero-copy {
  width: 100%;
}

.p6-maya-logo {
  position: absolute;
  right: -17rem;
  top: 50%;
  transform: translateY(-50%);
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.p6-maya-logo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

        .p6-hero h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2.6rem, 5.5vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0;
        }

        .p6-hero-sub {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.65;
          color: rgba(26,24,20,0.65);
          margin: 1.8rem 0 0;
          max-width: 620px;
        }

        .p6-hero-render {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .p6-hero-img-wrap {
  width: 100%;
  border-radius: 28px;
  overflow: visible;
  border: none;
  box-shadow: none;
}

.p6-hero-img-transparent {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p6-hero-img-wrap img {
  width: min(100%, 1180px);
  height: auto;
  object-fit: contain;
  display: block;
}

        /* ── Sections ── */
        .p6-section {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: var(--section-y) 0;
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .p6-section > * + * {
          margin-top: var(--content-gap);
        }

        .p6-section-no-top-border {
          border-top: none;
          padding-top: 0;
        }

        /* ── Snapshot ── */
        .p6-snapshot-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .p6-snapshot-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .p6-snapshot-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.9vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.6rem;
        }

        .p6-snapshot-card span {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(26,24,20,0.58);
        }

        /* ── Split header ── */
        .p6-split {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
          align-items: start;
        }

        .p6-split-headline {
          grid-column: 1 / span 2;
        }

        .p6-split-headline h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .p6-split-body {
          grid-column: 3 / span 2;
          padding-top: 1.8rem;
        }

        .p6-split-body p {
          font-family: var(--font-sans);
          font-size: clamp(0.96rem, 1.08vw, 1.08rem);
          line-height: 1.8;
          color: rgba(26,24,20,0.66);
          margin: 0;
        }

        .p6-split-body p + p {
          margin-top: 1rem;
        }

        /* ── Model header ── */
        .p6-model-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .p6-mono-tag {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-ink);
          background: rgba(246,231,161,0.82);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
          display: inline-block;
        }

        /* ── Gallery ── */
        .p6-gallery-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: var(--card-gap);
          align-items: start;
        }

        .p6-gallery-reverse {
          grid-template-columns: 1fr 1.6fr;
        }

        .p6-gallery-main {
          display: flex;
          flex-direction: column;
          gap: var(--card-gap);
        }

        .p6-gallery-side {
          display: flex;
          flex-direction: column;
          gap: var(--card-gap);
        }

        .p6-gallery-stack {
          display: flex;
          flex-direction: column;
          gap: var(--card-gap);
        }

        .p6-gallery-wide {
          width: 100%;
        }

        .p6-gallery-bottom-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--card-gap);
        }

        .p6-gallery-stack .p6-gallery-wide img {
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }

        .p6-gallery-bottom-row .p6-render-card img {
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }

        .p6-render-card {
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(26,24,20,0.12);
          box-shadow: 0 20px 55px rgba(26,24,20,0.08);
          background-color: rgba(253,250,245,0.6);
          display: flex;
          flex-direction: column;
          transition: all 260ms ease;
        }

        .p6-render-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(26,24,20,0.13);
        }

        .p6-render-card img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }

        .p6-gallery-main .p6-render-card img {
          aspect-ratio: 16 / 11;
        }

        .p6-img-caption {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.42);
          padding: 0.75rem 1rem;
          margin: 0;
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        /* ── Placeholder ── */
        .p6-placeholder {
          cursor: default;
        }

        .p6-placeholder-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          aspect-ratio: 4 / 3;
          padding: 1.5rem;
          background-color: rgba(246,231,161,0.18);
          border: 1.5px dashed rgba(26,24,20,0.2);
          border-radius: 22px;
          text-align: center;
        }

        .p6-placeholder-icon {
          font-size: 1.4rem;
          opacity: 0.5;
        }

        .p6-placeholder-label {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(26,24,20,0.58);
          margin: 0;
        }

        .p6-placeholder-hint {
          font-family: var(--font-mono);
          font-size: 0.54rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.32);
        }

        /* ── Detail cards ── */
        .p6-detail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .p6-detail-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          transition: all 240ms ease;
        }

        .p6-detail-card:hover {
          background-color: rgba(246,231,161,0.52);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(26,24,20,0.11);
        }

        .p6-detail-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.6vw, 1.7rem);
          line-height: 0.98;
          letter-spacing: -0.03em;
          color: var(--color-ink);
          margin: 0 0 0.65rem;
        }

        .p6-detail-desc {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.62);
          margin: 0;
          flex: 1;
        }

        /* ── Divider ── */
        .p6-model-divider {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: clamp(3rem, 5vw, 5rem) 0;
        }

        .p6-divider-inner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .p6-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(26,24,20,0.12);
        }

        .p6-divider-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.38);
          white-space: nowrap;
        }

        /* ── Compare ── */
        .p6-compare-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--card-gap);
        }

        .p6-compare-card {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          background-color: rgba(253,250,245,0.96);
          display: flex;
          flex-direction: column;
          transition: all 260ms ease;
        }

        .p6-compare-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(26,24,20,0.12);
        }

        .p6-compare-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .p6-compare-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .p6-compare-text {
          padding: 1.2rem 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .p6-compare-text h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.6vw, 1.8rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin: 0.3rem 0 0;
        }

        .p6-compare-text p {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          line-height: 1.5;
          color: rgba(26,24,20,0.55);
          margin: 0;
        }

        /* ── Reflection ── */
        .p6-reflection-section {
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .p6-reflection-headline {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0 0 var(--content-gap);
          width: min(760px, 100%);
        }

        .p6-reflection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .p6-reflection-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          transition: all 240ms ease;
        }

        .p6-reflection-card:hover {
          background-color: rgba(246,231,161,0.62);
          transform: translateY(-6px);
          box-shadow: 0 22px 60px rgba(26,24,20,0.12);
        }

        .p6-reflection-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.8vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }

        .p6-reflection-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.64);
          margin: 0;
        }

        /* ── Callout ── */
        .p6-callout {
          width: min(900px, 100%);
          margin: 0 auto;
          border-radius: 28px;
          background-color: rgba(246,231,161,0.62);
          border: 1px solid rgba(26,24,20,0.12);
          padding: clamp(1.5rem, 3vw, 2.4rem);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          text-align: center;
        }

        .p6-callout-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.8vw, 2rem);
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: var(--color-ink);
          margin: 0;
        }

        /* ── Footer ── */
        .p6-footer {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: 4rem 0 6rem;
          display: flex;
          justify-content: center;
        }

        .p6-footer a {
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

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .p6-snapshot-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p6-split {
            grid-template-columns: 1fr;
          }

          .p6-split-headline,
          .p6-split-body {
            grid-column: auto;
          }

          .p6-split-body {
            padding-top: 0;
          }

          .p6-gallery-grid,
          .p6-gallery-reverse {
            grid-template-columns: 1fr;
          }

          .p6-gallery-side {
            flex-direction: row;
          }

          .p6-gallery-side .p6-render-card {
            flex: 1;
          }

          .p6-detail-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p6-compare-grid {
            grid-template-columns: 1fr;
          }

          .p6-reflection-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .p6-snapshot-grid {
            grid-template-columns: 1fr;
          }

          .p6-detail-grid {
            grid-template-columns: 1fr;
          }

          .p6-gallery-side {
            flex-direction: column;
          }

          .p6-hero-img-wrap {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </main>
  );
}