"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────

const snapshotCards = [
  { label: "ROLE", main: "UX Designer", sub: "Research, ideation, prototyping" },
  { label: "TIMELINE", main: "1.5 Months", sub: "April 2026" },
  { label: "TOOLS", main: "Figma, Claude", sub: "Design, prototyping & AI backend" },
  { label: "TYPE", main: "Live Product", sub: "Fully developed & working AI" },
];

const secondaryStats = [
  { big: "73%", small: "of Gen Z report feeling emotionally unsupported by the people around them" },
  { big: "1 in 4", small: "young adults feel they do not have a safe space to process emotions honestly" },
  { big: "68%", small: "of users say AI chatbots agree with everything they say, even when they're wrong" },
];

const primaryInsights = [
  {
    number: "01",
    title: "Over-agreeable AI",
    text: "Most AI companions validate every thought without challenge — leaving users stuck in unhealthy patterns rather than helping them grow.",
  },
  {
    number: "02",
    title: "Therapy is inaccessible",
    text: "Cost, availability, and stigma keep most young adults from accessing professional mental health support when they need it most.",
  },
  {
    number: "03",
    title: "Overthinking alone",
    text: "Users described a cycle of rumination with no productive outlet — they needed a space to think out loud and get honest feedback.",
  },
  {
    number: "04",
    title: "The honesty gap",
    text: "People around them either agreed to avoid conflict or gave unsolicited harsh opinions. There was nothing in between.",
  },
];

const personas = [
  {
    type: "PRIMARY PERSONA",
    name: "Aryan Mehta",
    image: "/aryan-persona.png",
    meta: "22 · Engineering student · Mumbai",
    quote: '"I just want someone to tell me if I\'m actually wrong, not just agree with me to be nice."',
    goals: ["Process difficult emotions without judgment", "Get honest feedback on decisions", "Break cycles of overthinking"],
    frustrations: ["Friends always take his side", "Can't afford therapy", "AI chatbots feel hollow and sycophantic"],
    tag1: "Overthinker",
    tag2: "Self-aware",
    tag3: "Emotionally intelligent",
  },
  {
    type: "SECONDARY PERSONA",
    name: "Priya Sharma",
    image: "/priya-persona.png",
    meta: "26 · Working professional · Bangalore",
    quote: '"I need something that actually challenges me, not just tells me what I want to hear."',
    goals: ["Manage work-related anxiety", "Make better decisions under pressure", "Build emotional resilience"],
    frustrations: ["No time for therapy appointments", "Journaling feels one-sided", "Wants growth, not just comfort"],
    tag1: "Ambitious",
    tag2: "Stressed",
    tag3: "Growth-oriented",
  },
];

const scamperCards = [
  { letter: "S", word: "Substitute", title: "Replace validation", desc: "Substitute hollow validation responses with grounded, honest reflection prompts that challenge the user's thinking." },
  { letter: "C", word: "Combine", title: "Therapy + AI", desc: "Combine therapeutic communication techniques with AI accessibility to bridge the gap between expensive therapy and nothing." },
  { letter: "A", word: "Adapt", title: "CBT principles", desc: "Adapt Cognitive Behavioural Therapy frameworks into conversational AI responses without requiring a therapist." },
  { letter: "M", word: "Modify", title: "Tone calibration", desc: "Modify response tone based on emotional context — knowing when to be gentle, when to push back, when to simply listen." },
  { letter: "P", word: "Put to other use", title: "Daily check-ins", desc: "Use the AI not just in crisis moments but as a daily emotional check-in habit that builds long-term resilience." },
  { letter: "E", word: "Eliminate", title: "Remove sycophancy", desc: "Eliminate agreement-by-default from the AI response model entirely — honesty becomes the core design principle." },
  { letter: "R", word: "Reverse", title: "Flip the dynamic", desc: "Instead of the AI asking 'how are you?', it asks 'what do you actually need right now?' — reversing the passive support model." },
];

const hmwCards = [
  { q: "How might we design an AI that feels honest without feeling harsh?", a: "By calibrating tone with empathy — truth delivered with care, not judgment." },
  { q: "How might we make emotional support accessible to those who can't afford therapy?", a: "By building a free, always-available AI grounded in evidence-based techniques." },
  { q: "How might we help users break cycles of overthinking?", a: "By prompting structured reflection instead of open-ended venting loops." },
  { q: "How might we build trust in an AI's honesty?", a: "By being transparent about what the AI is doing and why it responds the way it does." },
  { q: "How might we ensure the AI doesn't replace human connection?", a: "By positioning SAGE as a thinking partner, not a substitute for relationships." },
  { q: "How might we design for emotional safety while still challenging the user?", a: "By letting users set their own honesty level — from gentle nudge to direct challenge." },
];

const pillars = [
  { icon: "🧭", title: "Radical Honesty", body: "SAGE tells you what you need to hear, not what you want to hear — always delivered with care." },
  { icon: "🛡️", title: "Emotional Safety", body: "A judgment-free space where users can think out loud, process, and explore without fear." },
  { icon: "🌱", title: "Growth-Oriented", body: "Every interaction is designed to move the user forward — not just to comfort them in place." },
];

const reflectionCards = [
  {
    title: "What surprised me",
    text: "The hardest design problem wasn't making SAGE smart — it was making it feel honest without feeling cold. Tone is a design decision.",
  },
  {
    title: "What I learned",
    text: "Design thinking works best when the problem is genuinely hard. The gap between over-agreeable AI and therapy was a real, painful space to design into.",
  },
  {
    title: "What SAGE became",
    text: "What started as a college assignment became a working product that anyone can use. That shift — from concept to live tool — changed how I think about what design is for.",
  },
];

// ── Animated Stat ─────────────────────────────────────────────

function AnimatedStat({ big, small }: { big: string; small: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="s3-stat-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <h3>{big}</h3>
      <p>{small}</p>
    </div>
  );
}

// ── Tension Diagram ───────────────────────────────────────────

function TensionDiagram() {
  return (
    <div className="s3-tension">
      <div className="s3-tension-side s3-tension-left">
        <p className="s3-tension-label">OVER-AGREEABLE AI</p>
        <h3>Tells you what<br />you want to hear</h3>
        <p className="s3-tension-desc">Validates everything. Challenges nothing. Leaves you stuck.</p>
      </div>

      <div className="s3-tension-center">
        <div className="s3-tension-arrow-left">←</div>
        <div className="s3-sage-badge">SAGE</div>
        <div className="s3-tension-arrow-right">→</div>
      </div>

      <div className="s3-tension-side s3-tension-right">
  <p className="s3-tension-label">EMPATHY GAP IN AI</p>
  <h3>Lacks emotional<br />depth and care</h3>
  <p className="s3-tension-desc">
    AI companions can sound supportive, but often fall short in providing meaningful mental health support.
  </p>
</div>
    </div>
  );
}

// ── Ideation Tabs ─────────────────────────────────────────────

function IdeationTabs() {
  const [tab, setTab] = useState<"scamper" | "hmw">("scamper");

  return (
    <div className="s3-tabs-wrap">
      <div className="s3-tab-row">
        <button
          onClick={() => setTab("scamper")}
          className={`s3-tab-btn ${tab === "scamper" ? "s3-tab-active" : ""}`}
        >
          SCAMPER
        </button>
        <button
          onClick={() => setTab("hmw")}
          className={`s3-tab-btn ${tab === "hmw" ? "s3-tab-active" : ""}`}
        >
          How Might We
        </button>
      </div>

      {tab === "scamper" && (
        <div className="s3-scamper-grid">
          {scamperCards.map((card) => (
            <div className="s3-scamper-card" key={card.letter}>
              <span className="s3-scamper-letter">{card.letter}</span>
              <p className="s3-label">{card.word}</p>
              <h3>{card.title}</h3>
              <p className="s3-card-body">{card.desc}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "hmw" && (
        <div className="s3-hmw-grid">
          {hmwCards.map((card, i) => (
            <div className="s3-hmw-card" key={i}>
              <p className="s3-hmw-q">{card.q}</p>
              <span className="s3-hmw-arrow">→</span>
              <p className="s3-hmw-a">{card.a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Design Thinking Funnel ────────────────────────────────────

const dtSteps = [
  { label: "01", title: "Empathise", sub: "Secondary research · user interviews · surveys" },
  { label: "02", title: "Define", sub: "POV statement · problem framing · tension map" },
  { label: "03", title: "Ideate", sub: "SCAMPER · HMW questions · concept sketches" },
  { label: "04", title: "Prototype", sub: "Figma wireframes · AI conversation design" },
  { label: "05", title: "Build", sub: "Live product · Claude backend · deployed" },
];

function DTFunnel() {
  return (
    <div className="s3-dt-funnel">
      {dtSteps.map((step, i) => (
        <div className="s3-dt-step" key={step.label}>
          <div className="s3-dt-node">
            <span className="s3-dt-num">{step.label}</span>
          </div>
          <div className="s3-dt-content">
            <h4>{step.title}</h4>
            <p>{step.sub}</p>
          </div>
          {i < dtSteps.length - 1 && <div className="s3-dt-line" />}
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────

export default function ProjectThreeSagePage() {
  return (
    <main className="s3-page">
      {/* Nav */}
      <nav className="s3-nav">
        <Link href="/" className="s3-nav-name">Rutuja Kalane</Link>
        <Link href="/?project=4#projects" className="s3-back-link">Back to projects ↗</Link>
      </nav>

      {/* Hero */}
      <header className="s3-hero">
        <div className="s3-hero-inner">
          <p className="s3-label">AI Product Design · Live Product · Track A · Juno · April 2026</p>
          <h1>SAGE — The AI That Finally Tells You What You Need to Hear</h1>
          <p className="s3-hero-sub">
            A design thinking project that became a real, working product. SAGE is an AI companion built for the gap between over-agreeable chatbots and therapy.
          </p>
        </div>
        {/* Decorative coded visual */}
        <div className="s3-hero-deco" aria-hidden="true">
          <div className="s3-deco-ring s3-deco-ring-1" />
          <div className="s3-deco-ring s3-deco-ring-2" />
          <div className="s3-deco-ring s3-deco-ring-3" />
          <div className="s3-deco-core">
            <span>SAGE</span>
          </div>
        </div>
      </header>

      {/* Snapshot */}
      <section className="s3-section">
        <div className="s3-snapshot-grid">
          {snapshotCards.map((card) => (
            <div className="s3-snapshot-card" key={card.label}>
              <p className="s3-label">{card.label}</p>
              <h3>{card.main}</h3>
              <span>{card.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">OVERVIEW</p>
            <h2>An AI that grew from a college brief into a live product anyone can use.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              SAGE began as college Assignment— a brief to design a futuristic technology product using design thinking methodology. The team identified a real, painful gap: most AI companions often lack emotional depth and can fall short in providing meaningful mental health support.
            </p>
            <p>
              What started as research and prototyping became a fully developed, working AI. SAGE is live — built with a Claude AI backend and designed to give users honest, growth-oriented responses instead of empty validation.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">THE PROBLEM</p>
            <h2>There was nothing in between “you’re right” and support that actually helped users reflect.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Over-agreeable AI chatbots leave users stuck in validation loops. The people around us either agree to avoid conflict or give unsolicited harsh opinions. The honesty gap is real.
            </p>
          </div>
        </div>
        <TensionDiagram />
      </section>

      {/* Secondary Research */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">SECONDARY RESEARCH</p>
            <h2>The data confirmed what we already felt was true.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Before speaking to users, the team mapped the existing landscape of AI companions, mental health access, and Gen Z emotional patterns. The numbers were stark.
            </p>
          </div>
        </div>
        <div className="s3-stat-grid">
          {secondaryStats.map((s) => (
            <AnimatedStat key={s.big} big={s.big} small={s.small} />
          ))}
        </div>
      </section>

      {/* Primary Research */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">PRIMARY RESEARCH</p>
            <h2>Then we talked to people. Four patterns kept coming up.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Through user interviews and surveys, the team spoke to young adults about their emotional support habits, their experiences with AI companions, and what they actually needed from a tool like this.
            </p>
          </div>
        </div>
        <div className="s3-insights-grid">
          {primaryInsights.map((card) => (
            <div className="s3-insight-card" key={card.number}>
              <p className="s3-label">{card.number}</p>
              <h3>{card.title}</h3>
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Define — POV */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">DEFINE</p>
            <h2>The research pointed to one clear, human problem.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              The team synthesised interviews, secondary data, and observed patterns into a single point of view — the foundation everything else was built on.
            </p>
          </div>
        </div>
        <div className="s3-pov-card">
  <p className="s3-label">PROBLEM STATEMENT</p>

  <div className="s3-pov-text">
    <p>
      Young adults have many places to vent, but very few spaces where they can
      think honestly.
    </p>

    <p>
      They may avoid opening up to people around them because they fear judgment
      or feel like a burden. AI tools often agree without offering meaningful
      reflection.
    </p>

    <p>
      The real gap is not simply access to support — it is access to honest,
      empathetic, and context-aware engagement.
    </p>
  </div>
</div>

<div className="s3-design-tension-card">
  <p className="s3-label">CORE DESIGN TENSION</p>

  <div className="s3-design-tension-grid">
    <div className="s3-design-tension-box">
      <p>Too Honest</p>
      <span>
        Users feel attacked and leave. Trust breaks before it builds.
      </span>
    </div>

    <div className="s3-design-tension-vs">vs</div>

    <div className="s3-design-tension-box">
      <p>Too Warm</p>
      <span>
        Users feel validated but unchanged. Nothing actually shifts.
      </span>
    </div>
  </div>

  <h3>
    SAGE lives in the precise middle — honest enough to challenge, gentle enough
    to feel safe.
  </h3>
</div>

      </section>

      {/* Personas */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">PERSONAS</p>
            <h2>Two people. Two different contexts. The same core need.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Personas were built from research patterns. Each one reflects real frustrations and real goals heard during the interview process.
            </p>
          </div>
        </div>
        <div className="s3-personas-grid">
          {personas.map((p) => (
            <div className="s3-persona-card" key={p.name}>
              <div className="s3-persona-header">
                {/* Image placeholder */}
                <div className="s3-persona-photo">
  <img src={p.image} alt={p.name} />
</div>
                <div>
                  <p className="s3-label">{p.type}</p>
                  <h3>{p.name}</h3>
                  <span className="s3-persona-meta">{p.meta}</span>
                </div>
              </div>
              <div className="s3-persona-body">
                <div className="s3-persona-quote">
                  <p>{p.quote}</p>
                </div>
                <div className="s3-persona-cols">
                  <div>
                    <p className="s3-label">GOALS</p>
                    <ul>
                      {p.goals.map((g) => <li key={g}>{g}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="s3-label">FRUSTRATIONS</p>
                    <ul>
                      {p.frustrations.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="s3-persona-tags">
                  <span>{p.tag1}</span>
                  <span>{p.tag2}</span>
                  <span>{p.tag3}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Thinking Process */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">PROCESS</p>
            <h2>Five stages. One working product at the end.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              The team followed the full design thinking framework — from empathy to prototype — but took it one step further. The prototype became a real, deployed product.
            </p>
          </div>
        </div>
        <DTFunnel />
      </section>

      {/* Ideation */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">IDEATION</p>
            <h2>SCAMPER and HMW helped us pressure-test every assumption.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Before committing to a direction, the team used SCAMPER to challenge the product concept from every angle, and How Might We questions to reframe problems into design opportunities.
            </p>
          </div>
        </div>
        <IdeationTabs />
      </section>

      {/* Prototype / Product */}
      <section className="s3-section">
        <div className="s3-split-header">
          <div className="s3-split-headline">
            <p className="s3-label">THE PRODUCT</p>
            <h2>SAGE is not a concept. It's a real, working AI.</h2>
          </div>
          <div className="s3-split-body">
            <p>
              Built with a Claude AI backend, SAGE is fully developed and accessible to anyone. It was designed around three core pillars that emerged directly from the research and define stages.
            </p>
          </div>
        </div>

        <div className="s3-pillars-grid">
          {pillars.map((p) => (
            <div className="s3-pillar-card" key={p.title}>
              <span className="s3-pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

      
        {/* Screens image placeholder */}
        
      </section>

      {/* Reflection */}
      <section className="s3-section s3-reflection-section">
        <p className="s3-label">REFLECTION</p>
        <h2 className="s3-reflection-headline">What this project taught the team.</h2>
        <div className="s3-reflection-grid">
          {reflectionCards.map((card) => (
            <div className="s3-reflection-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="s3-footer">
        <Link href="/?project=4#projects">Back to projects</Link>
      </footer>

      <style jsx global>{`

        /* ── Page base ── */
        .s3-page {
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
        .s3-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50000;
          height: 64px;
          padding: 0 var(--container-px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .s3-nav-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-stone);
          text-decoration: none;
        }

        .s3-back-link {
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

        /* ── Hero ── */
        .s3-hero {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          min-height: 90vh;
          display: grid;
          grid-template-columns: 1fr 340px;
          align-items: center;
          gap: clamp(2rem, 5vw, 5rem);
          padding-top: 7rem;
          padding-bottom: 4rem;
        }

        .s3-hero-inner {
          max-width: 780px;
        }

        .s3-label {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.5);
          margin: 0 0 1rem;
        }

        .s3-hero h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2.6rem, 5.5vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0;
        }

        .s3-hero-sub {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.65;
          color: rgba(26,24,20,0.65);
          margin: 1.8rem 0 0;
          max-width: 640px;
        }

        /* ── Hero deco ── */
        .s3-hero-deco {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 320px;
          justify-self: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s3-deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(26,24,20,0.1);
          animation: s3-spin linear infinite;
        }

        .s3-deco-ring-1 {
          width: 90%;
          height: 90%;
          border-style: dashed;
          animation-duration: 40s;
        }

        .s3-deco-ring-2 {
          width: 65%;
          height: 65%;
          animation-duration: 28s;
          animation-direction: reverse;
          border-color: rgba(246,231,161,0.6);
        }

        .s3-deco-ring-3 {
          width: 42%;
          height: 42%;
          animation-duration: 18s;
          border-color: rgba(26,24,20,0.14);
        }

        @keyframes s3-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .s3-deco-core {
          position: relative;
          z-index: 2;
          width: 28%;
          height: 28%;
          border-radius: 50%;
          background: rgba(246,231,161,0.72);
          border: 1px solid rgba(26,24,20,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s3-deco-core span {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(0.9rem, 1.2vw, 1.3rem);
          letter-spacing: -0.03em;
          color: var(--color-ink);
        }

        /* ── Section ── */
        .s3-section {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: var(--section-y) 0;
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .s3-section > * + * {
          margin-top: var(--content-gap);
        }

        /* ── Split header ── */
        .s3-split-header {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
          align-items: start;
        }

        .s3-split-headline {
          grid-column: 1 / span 2;
        }

        .s3-split-headline h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .s3-split-body {
          grid-column: 3 / span 2;
          padding-top: 1.8rem;
        }

        .s3-split-body p {
          font-family: var(--font-sans);
          font-size: clamp(0.96rem, 1.08vw, 1.08rem);
          line-height: 1.8;
          color: rgba(26,24,20,0.66);
          margin: 0;
        }

        .s3-split-body p + p {
          margin-top: 1rem;
        }

        /* ── Snapshot ── */
        .s3-snapshot-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .s3-snapshot-card {
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

        .s3-snapshot-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 65px rgba(26,24,20,0.11);
        }

        .s3-snapshot-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.4rem, 1.9vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0.7rem 0 0.6rem;
        }

        .s3-snapshot-card span {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(26,24,20,0.58);
        }

        /* ── Stat cards ── */
        .s3-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .s3-stat-card {
          border-radius: 28px;
          background-color: rgba(246,231,161,0.72);
          border: 1px solid rgba(26,24,20,0.12);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: transform 0.3s ease;
        }

        .s3-stat-card:hover {
          transform: translateY(-6px);
        }

        .s3-stat-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2rem, 3vw, 3.2rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0 0 0.7rem;
        }

        .s3-stat-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(26,24,20,0.68);
          margin: 0;
        }

        /* ── Tension diagram ── */
        .s3-tension {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.25rem;
  align-items: center;
  width: min(980px, 100%);
  margin: clamp(3rem, 5vw, 5rem) auto 0;
}

        .s3-tension-side {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .s3-tension-side:hover {
          transform: translateY(-4px);
        }

        .s3-tension-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.48);
          margin: 0 0 0.75rem;
        }

        .s3-tension-side h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.35rem, 1.8vw, 2rem);
          line-height: 1.0;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }

        .s3-tension-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(26,24,20,0.6);
          margin: 0;
        }

        .s3-tension-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }

        .s3-tension-vs {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.5rem;
          color: rgba(26,24,20,0.3);
        }

        .s3-tension-arrow-left,
        .s3-tension-arrow-right {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          color: rgba(26,24,20,0.3);
        }

        .s3-sage-badge {
          background: rgba(246,231,161,0.9);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 999px;
          padding: 0.6rem 1.2rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.1rem;
          letter-spacing: -0.03em;
          color: var(--color-ink);
          white-space: nowrap;
        }

        /* ── Insights grid ── */
        .s3-insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .s3-insight-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .s3-insight-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 65px rgba(26,24,20,0.11);
        }

        .s3-insight-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.7vw, 1.9rem);
          line-height: 1.0;
          letter-spacing: -0.04em;
          margin: 0.6rem 0 0.6rem;
          color: var(--color-ink);
        }

        .s3-insight-card span {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(26,24,20,0.62);
        }

        /* ── POV card ── */
        .s3-pov-card {
  width: min(900px, 100%);
  margin: clamp(3rem, 5vw, 5rem) auto 0;
  border-radius: 28px;
  background-color: rgba(246,231,161,0.62);
  border: 1px solid rgba(26,24,20,0.12);
  padding: clamp(1.8rem, 3vw, 2.8rem);
  box-shadow: 0 20px 55px rgba(26,24,20,0.07);
}

         .s3-pov-text {
  margin-top: 1.4rem;
  max-width: 880px;
}

.s3-pov-text p {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.35rem, 2vw, 2.15rem);
  line-height: 1.22;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  margin: 0;
}

.s3-pov-text p + p {
  margin-top: 1.15rem;
}

.s3-design-tension-card {
  width: min(980px, 100%);
  margin: clamp(3rem, 5vw, 5rem) auto 0;
  border-radius: 28px;
  background-color: rgba(253, 250, 245, 0.96);
  border: 1px solid rgba(26, 24, 20, 0.13);
  box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
  padding: clamp(1.6rem, 3vw, 2.5rem);
}

.s3-design-tension-card .s3-label {
  margin-bottom: 1.6rem;
}

.s3-design-tension-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.2rem;
  align-items: center;
}

.s3-design-tension-box {
  border-radius: 24px;
  background-color: rgba(253, 250, 245, 0.96);
  border: 1px solid rgba(26, 24, 20, 0.12);
  padding: 1.6rem;
  text-align: center;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 240ms ease;
}

.s3-design-tension-box:hover {
  background-color: rgba(246, 231, 161, 0.5);
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 55px rgba(26, 24, 20, 0.1);
}

.s3-design-tension-box p {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.35rem, 1.9vw, 2rem);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  margin: 0 0 0.8rem;
}

.s3-design-tension-box span {
  font-family: var(--font-sans);
  font-size: clamp(0.95rem, 1.08vw, 1.08rem);
  line-height: 1.65;
  color: rgba(26, 24, 20, 0.66);
}

.s3-design-tension-vs {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.6rem;
  color: rgba(26, 24, 20, 0.34);
}

.s3-design-tension-card h3 {
  width: min(720px, 100%);
  margin: 1.8rem auto 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.35rem, 2vw, 2.15rem);
  line-height: 1.18;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  text-align: center;
  font-weight: 400;
}

@media (max-width: 900px) {
  .s3-design-tension-grid {
    grid-template-columns: 1fr;
  }

  .s3-design-tension-vs {
    text-align: center;
  }
}

        /* ── Image placeholder ── */
        .s3-image-placeholder {
          width: 100%;
          aspect-ratio: 16 / 6;
          border-radius: 28px;
          border: 1.5px dashed rgba(26,24,20,0.2);
          background-color: rgba(253,250,245,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .s3-image-placeholder-tall {
          aspect-ratio: 16 / 7;
        }

        .s3-placeholder-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.35);
        }

        /* ── Personas ── */
        .s3-personas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--card-gap);
        }

        .s3-persona-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .s3-persona-card:hover {
          transform: translateY(-4px);
        }

        .s3-persona-header {
          display: flex;
          gap: 1.25rem;
          padding: 1.75rem;
          background: linear-gradient(135deg, rgba(246,231,161,0.4), rgba(253,250,245,0.4));
          border-bottom: 1px solid rgba(26,24,20,0.08);
          align-items: center;
        }

        .s3-persona-photo {
  width: 86px;
  height: 86px;
  flex-shrink: 0;
  border-radius: 18px;
  background: rgba(253,250,245,0.96);
  border: 1px solid rgba(26,24,20,0.12);
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(26,24,20,0.08);
}

.s3-persona-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

        .s3-persona-header h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.5rem, 2vw, 2.2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0.35rem 0 0.3rem;
        }

        .s3-persona-meta {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          color: rgba(26,24,20,0.55);
        }

        .s3-persona-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .s3-persona-quote {
          padding: 1rem 1.2rem;
          border-left: 2.5px solid rgba(246,231,161,0.9);
          background: rgba(246,231,161,0.15);
          border-radius: 0 12px 12px 0;
        }

        .s3-persona-quote p {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-ink);
          margin: 0;
        }

        .s3-persona-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .s3-persona-cols ul {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(26,24,20,0.65);
          padding-left: 1.1rem;
          margin: 0.5rem 0 0;
        }

        .s3-persona-cols li {
          margin-bottom: 0.3rem;
        }

        .s3-persona-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .s3-persona-tags span {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          background: rgba(253,250,245,0.8);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 999px;
          color: rgba(26,24,20,0.65);
        }

        /* ── DT Funnel ── */
        .s3-dt-funnel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(720px, 100%);
  margin: clamp(3rem, 5vw, 5rem) auto 0;
  gap: 0;
}

        .s3-dt-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .s3-dt-node {
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 50%;
          background-color: rgba(246,231,161,0.8);
          border: 1px solid rgba(26,24,20,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
        }

        .s3-dt-num {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: rgba(26,24,20,0.7);
        }

        .s3-dt-content {
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.12);
          border-radius: 20px;
          padding: 1rem 1.4rem;
          margin: 0.5rem 0 0;
          text-align: center;
          width: 100%;
          max-width: 520px;
          box-shadow: 0 8px 24px rgba(26,24,20,0.05);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .s3-dt-content:hover {
          transform: scale(1.02);
          background-color: rgba(246,231,161,0.4);
        }

        .s3-dt-content h4 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.1rem, 1.4vw, 1.5rem);
          letter-spacing: -0.03em;
          margin: 0 0 0.3rem;
          color: var(--color-ink);
        }

        .s3-dt-content p {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          color: rgba(26,24,20,0.58);
          margin: 0;
        }

        .s3-dt-line {
          width: 1px;
          height: 1.4rem;
          background: linear-gradient(to bottom, rgba(26,24,20,0.2), rgba(26,24,20,0.06));
          margin: 0.4rem 0;
        }

        /* ── Ideation tabs ── */
        .s3-tabs-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .s3-tab-row {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .s3-tab-btn {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.65);
          background: rgba(253,250,245,0.86);
          border: 1px solid rgba(26,24,20,0.14);
          border-radius: 999px;
          padding: 0.8rem 1.4rem;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .s3-tab-active {
          background: rgba(246,231,161,0.9);
          color: var(--color-ink);
          border-color: rgba(26,24,20,0.2);
        }

        .s3-scamper-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .s3-scamper-card {
          border-radius: 22px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 16px 40px rgba(26,24,20,0.07);
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 220px;
        }

        .s3-scamper-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 22px 60px rgba(26,24,20,0.12);
        }

        .s3-scamper-letter {
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 600;
          color: rgba(246,231,161,0.7);
          line-height: 1;
        }

        .s3-scamper-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.05rem, 1.3vw, 1.45rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0.5rem 0 0.6rem;
          color: var(--color-ink);
        }

        .s3-card-body {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(26,24,20,0.62);
          margin: 0;
        }

        .s3-hmw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .s3-hmw-card {
          border-radius: 22px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.12);
          box-shadow: 0 16px 40px rgba(26,24,20,0.07);
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: border-color 0.3s, transform 0.3s;
        }

        .s3-hmw-card:hover {
          border-color: rgba(26,24,20,0.22);
          transform: translateY(-4px);
        }

        .s3-hmw-q {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(0.95rem, 1.1vw, 1.1rem);
          line-height: 1.55;
          color: var(--color-ink);
          margin: 0;
        }

        .s3-hmw-arrow {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(26,24,20,0.35);
        }

        .s3-hmw-a {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(26,24,20,0.62);
          margin: 0;
        }

        /* ── Pillars ── */
        .s3-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .s3-pillar-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .s3-pillar-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, rgba(246,231,161,0.9), rgba(26,24,20,0.12));
        }

        .s3-pillar-card:hover {
          transform: translateY(-6px);
          background-color: rgba(246,231,161,0.3);
        }

        .s3-pillar-icon {
          font-size: 1.8rem;
          display: block;
          line-height: 1;
        }

        .s3-pillar-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 1.6vw, 1.8rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0;
          color: var(--color-ink);
        }

        .s3-pillar-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.64);
          margin: 0;
        }

        /* ── Chat preview ── */
        .s3-chat-preview {
          width: min(680px, 100%);
          margin: 0 auto;
          border-radius: 22px;
          border: 1px solid rgba(26,24,20,0.13);
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(26,24,20,0.1);
        }

        .s3-chat-header {
          padding: 1rem 1.4rem;
          background: rgba(246,231,161,0.7);
          border-bottom: 1px solid rgba(26,24,20,0.1);
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .s3-chat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(26,24,20,0.7), rgba(246,231,161,0.9));
          animation: s3-pulse 2s ease-in-out infinite;
        }

        @keyframes s3-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .s3-chat-header span {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.6);
        }

        .s3-chat-body {
          padding: 1.8rem;
          background: rgba(253,250,245,0.96);
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .s3-chat-msg {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .s3-chat-user {
          align-items: flex-end;
        }

        .s3-chat-sage {
          align-items: flex-start;
        }

        .s3-bubble {
          max-width: 78%;
          padding: 0.9rem 1.1rem;
          border-radius: 18px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .s3-bubble-user {
          background: rgba(246,231,161,0.6);
          border: 1px solid rgba(26,24,20,0.12);
          border-radius: 18px 18px 4px 18px;
          color: rgba(26,24,20,0.8);
        }

        .s3-bubble-sage {
          background: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.12);
          border-radius: 18px 18px 18px 4px;
          color: rgba(26,24,20,0.76);
        }

        .s3-bubble-sage em {
          font-style: normal;
          font-weight: 500;
          color: var(--color-ink);
        }

        .s3-chat-who {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.4);
          padding: 0 0.2rem;
        }

        .s3-chat-note {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(26,24,20,0.35);
          text-align: center;
          padding: 0.75rem 1rem;
          background: rgba(253,250,245,0.6);
          border-top: 1px solid rgba(26,24,20,0.07);
          margin: 0;
        }

        /* ── Reflection ── */
        .s3-reflection-section {
          border-top: 1px solid rgba(26,24,20,0.08);
        }

        .s3-reflection-headline {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0 0 var(--content-gap);
          width: min(760px, 100%);
        }

        .s3-reflection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .s3-reflection-card {
          border-radius: 28px;
          background-color: rgba(253,250,245,0.96);
          border: 1px solid rgba(26,24,20,0.13);
          box-shadow: 0 20px 55px rgba(26,24,20,0.07);
          padding: 1.35rem;
          transition: all 240ms ease;
        }

        .s3-reflection-card:hover {
          background-color: rgba(246,231,161,0.5);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 65px rgba(26,24,20,0.12);
        }

        .s3-reflection-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.8vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }

        .s3-reflection-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(26,24,20,0.64);
          margin: 0;
        }

        /* ── Footer ── */
        .s3-footer {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: 4rem 0 6rem;
          display: flex;
          justify-content: center;
        }

        .s3-footer a {
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
          .s3-hero {
            grid-template-columns: 1fr;
            min-height: 80vh;
          }

          .s3-hero-deco {
            display: none;
          }

          .s3-snapshot-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .s3-stat-grid {
            grid-template-columns: 1fr;
          }

          .s3-split-header {
            grid-template-columns: 1fr;
          }

          .s3-split-headline,
          .s3-split-body {
            grid-column: auto;
          }

          .s3-split-body {
            padding-top: 0;
          }

          .s3-tension {
            grid-template-columns: 1fr;
          }

          .s3-tension-center {
            flex-direction: row;
            justify-content: center;
          }

          .s3-insights-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .s3-personas-grid {
            grid-template-columns: 1fr;
          }

          .s3-scamper-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .s3-hmw-grid {
            grid-template-columns: 1fr;
          }

          .s3-pillars-grid {
            grid-template-columns: 1fr;
          }

          .s3-reflection-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .s3-snapshot-grid {
            grid-template-columns: 1fr;
          }

          .s3-insights-grid {
            grid-template-columns: 1fr;
          }

          .s3-scamper-grid {
            grid-template-columns: 1fr;
          }

          .s3-persona-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}