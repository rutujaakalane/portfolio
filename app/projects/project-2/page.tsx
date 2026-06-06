"use client";
import Link from "next/link";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────

const snapshotCards = [
  { label: "ROLE", main: "UX Researcher", sub: "Analysis, redesign proposals" },
  { label: "TIMELINE", main: "7 Days", sub: "1 week of research, screen study, and redesign" },
  { label: "TOOLS", main: "Figma, Claude", sub: "Presentation, prototyping, AI-assisted research" },
  { label: "TYPE", main: "Psychology-Based Case Study", sub: "Bias mapping & redesign proposals" },
];

const journeySteps = [
  { screen: "Landing Page", emotion: "Curious", icon: "👀", color: "rgba(246,231,161,0.72)" },
  { screen: "Email Entry", emotion: "Safe", icon: "🔒", color: "rgba(253,250,245,0.96)" },
  { screen: "Plan Selection", emotion: "Guided", icon: "🧭", color: "rgba(246,231,161,0.52)" },
  { screen: "Payment", emotion: "Anxious", icon: "😬", color: "rgba(253,250,245,0.96)" },
  { screen: "Welcome Screen", emotion: "Satisfied", icon: "✨", color: "rgba(246,231,161,0.72)" },
];

const screenAnalysis = [
  {
    screen: "Landing Page",
    number: "01",
    biases: [
      {
        name: "Zero Cognitive Load",
        desc: "Minimal text. One decision. One action. The brain has no alternative.",
      },
      {
        name: "Fitts' Law",
        desc: "One CTA, nothing competing. Your eye has no choice but to land on it.",
      },
      {
        name: "Aspirational Copy",
        desc: `"Unlimited movies, shows, and more" — sells a feeling, not a feature.`,
      },
    ],
  },
  {
    screen: "Email Entry",
    number: "02",
    biases: [
      {
        name: "Commitment Bias",
        desc: "You've started. Your brain wants to finish. The sunk cost begins here.",
      },
      {
        name: "Foot-in-the-Door",
        desc: "Just your email. Small ask = low resistance = high conversion.",
      },
      {
        name: "Loss Aversion",
        desc: `"Cancel anytime." Removes the fear of being trapped before it forms.`,
      },
    ],
  },
  {
    screen: "Plan Selection",
    number: "03",
    biases: [
      {
        name: "Default Bias",
        desc: "One plan is pre-selected. Most users don't question defaults.",
      },
      {
        name: "Decoy Effect",
        desc: "Mobile plan exists to make Standard look like a bargain.",
      },
      {
        name: "Choice Architecture",
        desc: "4 plans: Mobile → Basic → Standard → Premium. Each tier anchors the next.",
      },
    ],
  },
  {
    screen: "Payment Screen",
    number: "04",
    biases: [
      {
        name: "Authority Bias",
        desc: "Security badges like Visa and lock icons reduce anxiety immediately.",
      },
      {
        name: "Sunk Cost Setup",
        desc: `Card details entered = psychological commitment. "I've come this far…"`,
      },
      {
        name: "Dark Pattern",
        desc: "Auto-renewal mentioned in fine print only. User doesn't actively consent.",
      },
    ],
  },
  {
    screen: "Welcome Screen",
    number: "05",
    biases: [
      {
        name: "Positive Reinforcement",
        desc: "Celebration moment = dopamine hit. You feel rewarded for subscribing.",
      },
      {
        name: "Endowment Effect",
        desc: "The moment something feels yours, you value it more and won't cancel.",
      },
      {
        name: "Default Bias",
        desc: "Content is curated and pre-loaded. No active effort needed to stay.",
      },
    ],
  },
];

const psychTable = [
  {
    element: "Pre-selected plan",
    principle: "Default Bias",
    problem: "User upgrades unknowingly",
    solution: "No default, equal visual weight",
  },
  {
    element: "Cancel anytime",
    principle: "Loss Aversion",
    problem: "Hides actual cancel difficulty",
    solution: "Make cancellation genuinely easy",
  },
  {
    element: "4-plan layout",
    principle: "Decoy + Compromise Effect",
    problem: "Pushes toward pricier plan",
    solution: `Add "Help me choose" option`,
  },
  {
    element: "Auto-renewal text",
    principle: "Dark Pattern",
    problem: "Buried, not consented",
    solution: "Prominent opt-in checkbox",
  },
  {
    element: "Red CTA button",
    principle: "Visceral Design",
    problem: "No problem",
    solution: "It's good UX — keep it",
  },
  {
    element: "Welcome celebration",
    principle: "Positive Reinforcement",
    problem: "No problem",
    solution: "It's good UX — keep it",
  },
];

const painPoints = [
  {
    title: "Selected Default Plan",
    sub: "Violates: User Control & Freedom",
    desc: "Pre-selected subscription pushes users toward higher spend without active choice.",
    icon: "🖥",
    yellow: true,
  },
  {
    title: "Hidden Auto-Renewal",
    sub: "Violates: Transparency & Honesty",
    desc: "Buried in fine print. User doesn't actively opt in to recurring charges.",
    icon: "🎞",
    yellow: false,
  },
];

const redesignCards = [
  {
    label: "REDESIGN 01",
    title: "No default plan selection",
    desc: `Removing the pre-selected plan gives every user equal footing. The "Most Popular" badge stays as a soft informational nudge — but the decision belongs to the user.`,
  },
  {
    label: "REDESIGN 02",
    title: `"Help me choose" quiz`,
    desc: `Two quick questions — "How many people watch?" and "What device?" — cuts through noise instantly and recommends the right plan. Less confusion, more confidence.`,
  },
  {
    label: "REDESIGN 03",
    title: "Visible auto-renewal consent",
    desc: "Moving the renewal notice above the fold and making it a required checkbox forces awareness. The user must actively read and agree — not passively scroll past.",
  },
];

const reflectionCards = [
  {
    title: "What I noticed",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Studying Netflix showed how invisible psychology can be when it's executed well. Every screen is a deliberate decision.",
  },
  {
    title: "What I learned",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The line between persuasion and manipulation is thin. Design can guide without deceiving — the redesigns show that.",
  },
  {
    title: "What this changed",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. I now look at every UI asking: who does this actually serve? The user, or the business metric behind it?",
  },
];

// ── Interactive Story Component ───────────────────────────────

function StoryWalkthrough() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      scene: "You walk into a fancy restaurant for dinner tonight.",
      you: "Hmm, let me look at the menu… 🤔",
      other: null,
      otherLabel: null,
    },
    {
      scene: null,
      you: "Hmm, let me look at the menu… 🤔",
      other: "Sir, might I suggest the Paneer Tikka? It's our most ordered dish. Almost everyone who comes here picks it. 😊",
      otherLabel: "WAITER",
    },
    {
      scene: "You hadn't even opened the menu fully. But suddenly… the decision felt already made.",
      you: "Oh… if everyone orders it, it must be good, right?",
      other: "Excellent choice, sir! Most popular for a reason. ✨",
      otherLabel: "WAITER",
    },
    {
      scene: null,
      you: null,
      other: null,
      otherLabel: null,
      reveal: true,
    },
  ];

  const current = steps[step];

  return (
    <div
  style={{
    minHeight: "340px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1.5rem",
  }}
>
      {/* Scene box */}
      {current.scene && (
        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "rgba(246,231,161,0.45)",
            border: "1px solid rgba(26,24,20,0.12)",
            padding: "1.1rem 1.4rem",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.05rem, 1.25vw, 1.22rem)",
            lineHeight: 1.65,
            color: "rgba(26,24,20,0.72)",
            textAlign: "center",
          }}
        >
          {current.scene}
        </div>
      )}

      {/* Reveal card */}
      {current.reveal && (
        <div
          style={{
            borderRadius: "28px",
            backgroundColor: "rgba(246,231,161,0.72)",
            border: "1px solid rgba(26,24,20,0.14)",
            padding: "2rem",
            textAlign: "center",
            boxShadow: "0 24px 60px rgba(26,24,20,0.10)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(26,24,20,0.52)",
              margin: "0 0 1rem",
            }}
          >
            The psychology principle
          </p>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
              margin: "0 0 1rem",
            }}
          >
             Nudge Theory
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
              lineHeight: 1.7,
              color: "rgba(26,24,20,0.68)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            You never really chose. The waiter nudged you. And Netflix? Netflix does something remarkably similar — pre-selecting a plan and labelling it 'Most Popular' to make the decision feel already made."
          </p>
        </div>
      )}

      {/* Dialogue */}
      {!current.reveal && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            alignItems: "end",
          }}
        >
          {/* You */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {current.you && (
              <div
                style={{
                  borderRadius: "18px 18px 18px 4px",
                  backgroundColor: "rgba(253,250,245,0.96)",
                  border: "1px solid rgba(26,24,20,0.14)",
                  padding: "0.9rem 1.1rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "rgba(26,24,20,0.76)",
                  boxShadow: "0 8px 24px rgba(26,24,20,0.06)",
                  maxWidth: "86%",
                }}
              >
                {current.you}
              </div>
            )}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.56rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(26,24,20,0.42)",
              }}
            >
              You
            </span>
          </div>

          {/* Other */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.6rem",
            }}
          >
            {current.other && (
              <div
                style={{
                  borderRadius: "18px 18px 4px 18px",
                  backgroundColor: "rgba(246,231,161,0.72)",
                  border: "1px solid rgba(26,24,20,0.12)",
                  padding: "1.05rem 1.25rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "rgba(26,24,20,0.76)",
                  boxShadow: "0 8px 24px rgba(26,24,20,0.06)",
                  maxWidth: "86%",
                  textAlign: "right",
                }}
              >
                {current.other}
              </div>
            )}
            {current.otherLabel && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.56rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(26,24,20,0.42)",
                }}
              >
                {current.otherLabel}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {steps.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === step ? "1.8rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "999px",
                backgroundColor:
                  i === step
                    ? "rgba(26,24,20,0.6)"
                    : "rgba(26,24,20,0.18)",
                transition: "all 280ms ease",
                display: "block",
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.6rem" }}>
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(26,24,20,0.55)",
                background: "rgba(253,250,245,0.7)",
                border: "1px solid rgba(26,24,20,0.14)",
                borderRadius: "999px",
                padding: "0.55rem 1rem",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                background: "rgba(246,231,161,0.82)",
                border: "1px solid rgba(26,24,20,0.14)",
                borderRadius: "999px",
                padding: "0.55rem 1.1rem",
                cursor: "pointer",
              }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setStep(0)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                background: "rgba(246,231,161,0.82)",
                border: "1px solid rgba(26,24,20,0.14)",
                borderRadius: "999px",
                padding: "0.55rem 1.1rem",
                cursor: "pointer",
              }}
            >
              Restart ↺
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Interactive Journey Map ───────────────────────────────────

function JourneyMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.75rem",
          alignItems: "stretch",
        }}
      >
        {journeySteps.map((step, i) => (
          <button
            key={step.screen}
            onClick={() => setActive(active === i ? null : i)}
            style={{
              borderRadius: "20px",
              backgroundColor: active === i ? "rgba(246,231,161,0.88)" : step.color,
              border: `1px solid ${
                active === i ? "rgba(26,24,20,0.22)" : "rgba(26,24,20,0.12)"
              }`,
              boxShadow: active === i
                ? "0 16px 40px rgba(26,24,20,0.12)"
                : "0 8px 20px rgba(26,24,20,0.06)",
              padding: "1.4rem 0.8rem",
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.4rem",
              transition: "all 240ms ease",
              transform: active === i ? "translateY(-4px)" : "none",
            }}
          >
            <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>
              {step.icon}
            </span>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.54rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(26,24,20,0.4)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(0.95rem, 1.2vw, 1.25rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
              }}
            >
              {step.screen}
            </span>

            <span
              style={{
                width: "28px",
                height: "1px",
                backgroundColor: "rgba(26,24,20,0.18)",
                display: "block",
                margin: "0.2rem 0",
              }}
            />

            <span
  style={{
    fontFamily: "var(--font-mono)",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(26,24,20,0.86)",
    backgroundColor: "rgba(253,250,245,0.78)",
    border: "1px solid rgba(26,24,20,0.14)",
    borderRadius: "999px",
    padding: "0.34rem 0.78rem",
  }}
>
  {step.emotion}
</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "rgba(246,231,161,0.38)",
            border: "1px solid rgba(26,24,20,0.10)",
            padding: "1rem 1.3rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.88rem",
            lineHeight: 1.6,
            color: "rgba(26,24,20,0.68)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(26,24,20,0.45)",
              marginRight: "0.5rem",
            }}
          >
            Emotion at this step →
          </span>
          User feels{" "}
          <strong style={{ color: "var(--color-ink)" }}>
            {journeySteps[active].emotion.toLowerCase()}
          </strong>{" "}
          on the {journeySteps[active].screen}. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit — this is a placeholder note about what
          this emotional state means for conversion.
        </div>
      )}
    </div>
  );
}

// ── Screen Analysis Tabs ──────────────────────────────────────

function ScreenTabs() {
  const [active, setActive] = useState(0);
  const current = screenAnalysis[active];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Tab row */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {screenAnalysis.map((s, i) => (
          <button
            key={s.screen}
            onClick={() => setActive(i)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: active === i ? "var(--color-ink)" : "rgba(26,24,20,0.5)",
              backgroundColor:
                active === i
                  ? "rgba(246,231,161,0.82)"
                  : "rgba(253,250,245,0.7)",
              border: `1px solid ${active === i ? "rgba(26,24,20,0.18)" : "rgba(26,24,20,0.12)"}`,
              borderRadius: "999px",
              padding: "0.5rem 0.9rem",
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
          >
            {s.number} {s.screen}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.85rem",
        }}
      >
        {current.biases.map((bias, i) => (
          <div
            key={bias.name}
            style={{
              borderRadius: "22px",
              backgroundColor:
                i === 2
                  ? "rgba(253,250,245,0.96)"
                  : i === 0
                  ? "rgba(246,231,161,0.62)"
                  : "rgba(253,250,245,0.96)",
              border: "1px solid rgba(26,24,20,0.13)",
              boxShadow: "0 16px 40px rgba(26,24,20,0.07)",
              padding: "1.2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.56rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(26,24,20,0.48)",
                margin: "0 0 0.6rem",
              }}
            >
              Principle {String(i + 1).padStart(2, "0")}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 1.5vw, 1.6rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
                margin: "0 0 0.65rem",
              }}
            >
              {bias.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                lineHeight: 1.6,
                color: "rgba(26,24,20,0.64)",
                margin: 0,
              }}
            >
              {bias.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────

export default function ProjectTwoPage() {
  return (
    <main className="p2-page">
      {/* Nav */}
      <nav className="p2-nav">
        <Link href="/" className="p2-nav-name">
          Rutuja Kalane
        </Link>
        <Link href="/?project=2#projects" className="p2-back-link">
          Back to projects ↗
        </Link>
      </nav>

      {/* Hero */}
      <header className="p2-hero">
  <div className="p2-hero-inner">
    <div className="p2-hero-heading-row">
      <div className="p2-hero-copy">
        <p className="p2-label">Psychology & Human Factors — UX Case Study</p>
        <h1>How Netflix Gets You to Subscribe Without You Realising It</h1>
      </div>

      <div className="p2-netflix-logo" aria-hidden="true">
        <img src="/netflix-logo.png" alt="" />
      </div>
    </div>

    <p className="p2-hero-sub">
      A psychology-driven UX analysis of Netflix's onboarding funnel — examining cognitive biases, dark patterns, and redesign opportunities.
    </p>
  </div>
</header>

      {/* Snapshot */}
      <section className="p2-section">
        <div className="p2-snapshot-grid">
          {snapshotCards.map((card) => (
            <div className="p2-snapshot-card" key={card.label}>
              <p>{card.label}</p>
              <h3>{card.main}</h3>
              <span>{card.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">OVERVIEW</p>
            <h2>A closer look at how a world-class product uses psychology — brilliantly.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Netflix has one of the most studied onboarding flows in the digital product world. Every screen, every word, every default is an intentional decision backed by user psychology research. This case study examines five key screens in the subscription journey through the lens of cognitive biases and design.
            </p>
            <p>
              The goal was not only to identify what works but to understand the psychology behind each design decision — and to explore how the same principles could be applied with even greater transparency.
            </p>
          </div>
        </div>
      </section>

      {/* The Hook — Story */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">THE HOOK</p>
            <h2>It starts with a waiter and a paneer tikka.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Before looking at Netflix, consider a restaurant scenario. Walk through it step by step — it's the same psychological mechanism Netflix uses on its plan selection page.
            </p>
          </div>
        </div>
        <div className="p2-story-wrap">
          <StoryWalkthrough />
        </div>
      </section>

      {/* User Journey Map */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">USER JOURNEY MAP</p>
            <h2>Five screens. Five emotional states.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              The Netflix onboarding flow is designed so that each screen resolves the emotional state of the previous one — building trust incrementally and reducing friction at every step. Tap a screen to explore.
            </p>
          </div>
        </div>
        <div className="p2-journey-wrap">
          <JourneyMap />
        </div>
      </section>

      {/* Screen-by-screen analysis */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">SCREEN ANALYSIS</p>
            <h2>Every screen carries at least three psychological principles.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Select a screen to see the psychological principles at work. Some are excellent UX. Some are ethically questionable. The goal is to name them clearly.
            </p>
          </div>
        </div>
        <div className="p2-tabs-wrap">
          <ScreenTabs />
        </div>
      </section>

      {/* Pull quote */}
      <section className="p2-section p2-no-border">
        <div className="p2-pull-quote">
          "You never really chose. The waiter nudged you. Netflix pre-selects a paid plan, labels it 'Most Popular,' and you just… don't disagree."
        </div>
      </section>

      {/* Psychology Table */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">PSYCHOLOGY MAPPING</p>
            <h2>Mapping UX elements to biases, problems, and solutions.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Not every psychological technique is a problem. Some are great UX. The table below distinguishes between patterns that serve users and patterns that exploit them.
            </p>
          </div>
        </div>

        <div className="p2-table-wrap">
          <div className="p2-table-header">
            <span>UX Element</span>
            <span>Psychology Principle</span>
            <span>Problem</span>
            <span>Solution</span>
          </div>
          {psychTable.map((row, i) => (
            <div
              className={`p2-table-row ${i % 2 === 0 ? "p2-row-alt" : ""}`}
              key={row.element}
            >
              <span className="p2-table-element">{row.element}</span>
              <span className="p2-table-principle">{row.principle}</span>
              <span className="p2-table-problem">{row.problem}</span>
              <span className="p2-table-solution">{row.solution}</span>
            </div>
          ))}
        </div>
      </section>

      {/* UX Pain Points */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">UX PAIN POINTS</p>
            <h2>Two patterns that cross the ethical line.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              While most of Netflix's UX is expertly crafted, two specific patterns violate core UX principles — and both involve removing user agency through design instead of explicit deception.
            </p>
          </div>
        </div>

        <div className="p2-pain-grid">
          {painPoints.map((card) => (
            <div
              className={`p2-pain-card ${card.yellow ? "p2-pain-yellow" : ""}`}
              key={card.title}
            >
              <span className="p2-pain-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p className="p2-pain-sub">{card.sub}</p>
              <p className="p2-pain-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Redesign */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">REDESIGN PROPOSALS</p>
            <h2>Three changes that keep psychology honest.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              The redesigns don't remove psychological influence — they redirect it. The goal is to guide users toward good decisions for them, not just profitable ones for Netflix.
            </p>
          </div>
        </div>

        <div className="p2-redesign-grid">
          {redesignCards.map((card, i) => (
            <div className="p2-redesign-card" key={card.label}>
              <div className="p2-redesign-preview">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(26,24,20,0.45)",
                  }}
                >
                  mockup placeholder
                </span>
              </div>
              <div className="p2-redesign-text">
                <p className="p2-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">KEY TAKEAWAYS</p>
            <h2>What Netflix does brilliantly. What it does wrong.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Understanding both sides — good and manipulative — is the point. Design is never neutral.
            </p>
          </div>
        </div>

        <div className="p2-takeaway-grid">
          <div className="p2-takeaway-card p2-takeaway-good">
            <p className="p2-label">What Netflix does brilliantly</p>
            <ul>
              <li>Minimal cognitive load at every step</li>
              <li>Emotional design — celebration, trust, identity</li>
              <li>Foot-in-the-door entry (just email first)</li>
              <li>Authority signals that reduce payment anxiety</li>
              <li>Endowment effect on the welcome screen</li>
            </ul>
          </div>
          <div className="p2-takeaway-card p2-takeaway-bad">
            <p className="p2-label">Good UX gone wrong</p>
            <ul>
              <li>Pre-selected plans exploit Default Bias</li>
              <li>Auto-renewal hidden in fine print</li>
              <li>No genuine plan comparison support</li>
              <li>Consent by inaction, not by choice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="p2-section p2-reflection-section">
        <p className="p2-label">REFLECTION</p>
        <h2 className="p2-reflection-headline">
          What studying Netflix taught me about design ethics.
        </h2>
        <div className="p2-reflection-grid">
          {reflectionCards.map((card) => (
            <div className="p2-reflection-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p2-footer">
        <Link href="/?project=2#projects">Back to projects</Link>
      </footer>

      <style jsx global>{`
        
        .p2-hero-heading-row {
  position: relative;
  display: block;
}

.p2-hero-copy {
  width: 100%;
}

.p2-netflix-logo {
  position: absolute;
  right: -18rem;
  top: 50%;
  transform: translateY(-50%);
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.p2-netflix-logo img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
        
        .p2-page {
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

        .p2-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50000;
          height: 64px;
          padding: 0 var(--container-px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .p2-nav-name {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-stone);
          text-decoration: none;
          border-radius: 999px;
        }

        .p2-back-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink);
          border: 1px solid rgba(26, 24, 20, 0.16);
          padding: 0.65rem 1rem;
          borderRadius: 999px;
          background: rgba(253, 250, 245, 0.66);
          text-decoration: none;
          border-radius: 999px;
        }

        .p2-hero {
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 6rem;
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding-bottom: 4rem;
        }

        .p2-hero-inner {
          max-width: 880px;
        }

        .p2-label {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.5);
          margin: 0 0 1rem;
        }

        .p2-hero h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2.6rem, 5.5vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0;
        }

        .p2-hero-sub {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.65;
          color: rgba(26, 24, 20, 0.65);
          margin: 1.8rem 0 0;
          max-width: 680px;
        }

        .p2-section {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: var(--section-y) 0;
          border-top: 1px solid rgba(26, 24, 20, 0.08);
        }

        .p2-no-border {
          border-top: none;
          padding-top: 0;
        }

        .p2-section > * + * {
          margin-top: var(--content-gap);
        }

        /* Split header */
        .p2-split-header {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
          align-items: start;
        }

        .p2-split-headline {
          grid-column: 1 / span 2;
        }

        .p2-split-headline h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .p2-split-body {
          grid-column: 3 / span 2;
          padding-top: 1.8rem;
        }

        .p2-split-body p {
          font-family: var(--font-sans);
          font-size: clamp(0.96rem, 1.08vw, 1.08rem);
          line-height: 1.8;
          color: rgba(26, 24, 20, 0.66);
          margin: 0;
        }

        .p2-split-body p + p {
          margin-top: 1rem;
        }

        /* Snapshot */
        .p2-snapshot-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
        }

        .p2-snapshot-card {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.13);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
          padding: 1.35rem;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .p2-snapshot-card p {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.48);
          margin: 0 0 0.7rem;
        }

        .p2-snapshot-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.4rem, 1.9vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.6rem;
        }

        .p2-snapshot-card span {
          font-family: var(--font-sans);
          font-size: 0.84rem;
          line-height: 1.5;
          color: rgba(26, 24, 20, 0.58);
        }

        /* Story wrap */
        .p2-story-wrap {
  width: min(940px, 100%);
  min-height: 420px;
  margin: clamp(3rem, 5vw, 5rem) auto 0;
  border-radius: 28px;
  background: rgba(253, 250, 245, 0.78);
  border: 1px solid rgba(26, 24, 20, 0.12);
  padding: clamp(1.8rem, 3vw, 2.7rem);
  box-shadow: 0 24px 70px rgba(26, 24, 20, 0.08);
}

        /* Journey wrap */
        .p2-journey-wrap {
          width: 100%;
        }

        /* Tabs wrap */
        .p2-tabs-wrap {
          width: 100%;
        }

        /* Pull quote */
        .p2-pull-quote {
          width: min(900px, 100%);
          margin: 0 auto;
          border-radius: 28px;
          background-color: rgba(246, 231, 161, 0.6);
          border: 1px solid rgba(26, 24, 20, 0.12);
          padding: clamp(1.5rem, 3vw, 2.4rem);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 2.1vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
        }

        /* Table */
        .p2-table-wrap {
          width: 100%;
          border-radius: 28px;
          border: 1px solid rgba(26, 24, 20, 0.13);
          overflow: hidden;
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
        }

        .p2-table-header {
          display: grid;
          grid-template-columns: 1.2fr 1.4fr 1.5fr 1.5fr;
          gap: 0;
          background-color: rgba(246, 231, 161, 0.72);
          border-bottom: 1px solid rgba(26, 24, 20, 0.12);
          padding: 0.85rem 1.4rem;
        }

        .p2-table-header span {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.52);
        }

        .p2-table-row {
          display: grid;
          grid-template-columns: 1.2fr 1.4fr 1.5fr 1.5fr;
          padding: 0.9rem 1.4rem;
          border-bottom: 1px solid rgba(26, 24, 20, 0.07);
          align-items: start;
          gap: 0;
        }

        .p2-table-row:last-child {
          border-bottom: none;
        }

        .p2-row-alt {
          background-color: rgba(253, 250, 245, 0.96);
        }

        .p2-table-element {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: var(--color-ink);
        }

        .p2-table-principle {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: rgba(26, 24, 20, 0.72);
        }

        .p2-table-problem {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: rgba(26, 24, 20, 0.65);
        }

        .p2-table-solution {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: rgba(26, 24, 20, 0.65);
        }

        /* Pain points */
        .p2-pain-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--card-gap);
          width: min(980px, 100%);
          margin: 0 auto;
        }

        .p2-pain-card {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.13);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .p2-pain-yellow {
          background-color: rgba(246, 231, 161, 0.62);
        }

        .p2-pain-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.4rem;
        }

        .p2-pain-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.5rem, 2vw, 2.1rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .p2-pain-sub {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.48);
          margin: 0;
        }

        .p2-pain-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(26, 24, 20, 0.64);
          margin: 0;
        }

        /* Redesign */
        .p2-redesign-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .p2-redesign-card {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.13);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .p2-redesign-preview {
          width: 100%;
          aspect-ratio: 4/3;
          background-color: rgba(246, 231, 161, 0.42);
          border-bottom: 1px dashed rgba(26, 24, 20, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .p2-redesign-text {
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .p2-redesign-text h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.15rem, 1.5vw, 1.65rem);
          line-height: 0.98;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .p2-redesign-text p {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          line-height: 1.6;
          color: rgba(26, 24, 20, 0.62);
          margin: 0;
        }

        /* Takeaways */
        .p2-takeaway-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--card-gap);
          width: min(980px, 100%);
          margin: 0 auto;
        }

        .p2-takeaway-card {
          border-radius: 28px;
          border: 1px solid rgba(26, 24, 20, 0.13);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
          padding: 1.6rem;
        }

        .p2-takeaway-good {
          background-color: rgba(246, 231, 161, 0.62);
        }

        .p2-takeaway-bad {
          background-color: rgba(253, 250, 245, 0.96);
        }

        .p2-takeaway-card ul {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(26, 24, 20, 0.68);
          padding-left: 1.2rem;
          margin: 0.8rem 0 0;
        }

        .p2-takeaway-card li {
          margin-bottom: 0.25rem;
        }

        /* Reflection */
        .p2-reflection-section {
          border-top: 1px solid rgba(26, 24, 20, 0.08);
        }

        .p2-reflection-headline {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.65rem, 2.4vw, 2.9rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0 0 var(--content-gap);
          width: min(760px, 100%);
        }

        .p2-reflection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--card-gap);
        }

        .p2-reflection-card {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.13);
          box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
          padding: 1.35rem;
        }

        .p2-reflection-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.3rem, 1.8vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }

        .p2-reflection-card p {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(26, 24, 20, 0.64);
          margin: 0;
        }

        /* Footer */
        .p2-footer {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
          padding: 4rem 0 6rem;
          display: flex;
          justify-content: center;
        }

        .p2-footer a {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink);
          border: 1px solid rgba(26, 24, 20, 0.16);
          padding: 0.65rem 1rem;
          background: rgba(253, 250, 245, 0.66);
          text-decoration: none;
          border-radius: 999px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .p2-snapshot-grid,
          .p2-redesign-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .p2-hero-heading-row {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.p2-netflix-logo {
  max-width: 140px;
  justify-self: start;
}

          .p2-split-header {
            grid-template-columns: 1fr;
          }

          .p2-split-headline,
          .p2-split-body {
            grid-column: auto;
          }

          .p2-split-body {
            padding-top: 0;
          }

          .p2-pain-grid,
          .p2-takeaway-grid,
          .p2-reflection-grid {
            grid-template-columns: 1fr;
          }

          .p2-table-header,
          .p2-table-row {
            grid-template-columns: 1fr 1fr;
          }

          .p2-table-problem,
          .p2-table-solution {
            display: none;
          }

          .p2-hero h1 {
            font-size: clamp(2.2rem, 7vw, 3.5rem);
          }
        }

        @media (max-width: 600px) {
          .p2-snapshot-grid,
          .p2-redesign-grid {
            grid-template-columns: 1fr;
          }

          .p2-table-header,
          .p2-table-row {
            grid-template-columns: 1fr;
          }

          .p2-table-principle,
          .p2-table-problem,
          .p2-table-solution {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
