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
  ],
}
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
    problem: "Creates a clear, confident action",
    solution: "Strong design decision",
  },
  {
    element: "Welcome celebration",
    principle: "Positive Reinforcement",
    problem: "Guides user forward naturally",
    solution: "Already serving the user well",
  },
];

const painPoints = [
  {
    title: "Selected Default Plan",
    sub: "",
    desc: "Pre-selected subscription pushes users toward higher spend without active choice.",
    icon: "☑️",
    yellow: true,
  },
  {
    title: "Hidden Auto-Renewal",
    sub: "",
    desc: "Buried in fine print. User doesn't actively opt in to recurring charges.",
    icon: "🔁",
    yellow: false,
  },
];

const redesignCards = [
  {
    label: "REDESIGN 01",
    title: "No default plan selection",
    desc: `Removing the pre-selected plan gives every user equal footing. The "Most Popular" badge stays as a soft informational nudge — but the decision belongs to the user.`,
    image: "/redesign-1.png",
  },
  {
    label: "REDESIGN 02",
    title: `"Help me choose" quiz`,
    desc: `Two quick questions — "How many people watch?" and "What device?" — cuts through noise instantly and recommends the right plan.`,
    image: "/redesign-2.png",
  },
  {
    label: "REDESIGN 03",
    title: "Visible auto-renewal consent",
    desc: "Moving the renewal notice above the fold and making it a required checkbox forces awareness. The user must actively read and agree — not passively scroll past.",
    image: "/redesign-3.png",
  },
];

const reflectionCards = [
  {
    title: "What I noticed",
    text: "Psychology is everywhere in product design — most of the time you just don't stop to name it. Every screen in the Netflix flow has a deliberate reason for looking exactly the way it does.",
  },
  {
    title: "What I learned",
    text: "Understanding the principles behind a design decision is more valuable than just knowing what looks good. Naming what's happening is the first step to doing it better.",
  },
  {
    title: "What this changed",
    text: "I now approach every interface asking what each element is actually doing — not just visually, but behaviourally. That shift in perspective is the real takeaway from this project.",
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
              backgroundColor: "rgba(253,250,245,0.96)",
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
              transform: active === i ? "translateY(-6px)" : "none",}}

              onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px) scale(1.025)";
  e.currentTarget.style.boxShadow = "0 20px 55px rgba(26,24,20,0.12)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    active === i ? "translateY(-6px)" : "none";
  e.currentTarget.style.boxShadow =
    active === i
      ? "0 16px 40px rgba(26,24,20,0.12)"
      : "0 8px 20px rgba(26,24,20,0.06)";
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
          width: "100%",
          display: "flex",
          gap: "0.9rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {screenAnalysis.map((s, i) => (
          <button
            key={s.screen}
            onClick={() => setActive(i)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              letterSpacing: "0.11em",
              textTransform: "uppercase",
              color: active === i ? "var(--color-ink)" : "rgba(26,24,20,0.68)",
              backgroundColor:
                active === i
                  ? "rgba(246,231,161,0.9)"
                  : "rgba(253,250,245,0.86)",
              border: `1px solid ${
                active === i ? "rgba(26,24,20,0.22)" : "rgba(26,24,20,0.15)"
              }`,
              borderRadius: "999px",
              padding: "0.9rem 1.35rem",
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
          gridTemplateColumns:
            current.biases.length === 2
              ? "repeat(2, minmax(0, 420px))"
              : "repeat(3, minmax(0, 1fr))",
          gap: "1.2rem",
          width: "100%",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {current.biases.map((bias, i) => (
          <div
            key={bias.name}
            style={{
              borderRadius: "22px",
              backgroundColor: "rgba(253,250,245,0.96)",
              border: "1px solid rgba(26,24,20,0.13)",
              boxShadow: "0 16px 40px rgba(26,24,20,0.07)",
              padding: "1.8rem",
              minHeight: "230px",
              transition: "all 240ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 22px 60px rgba(26,24,20,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(26,24,20,0.07)";
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
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
                fontSize: "clamp(1.55rem, 2vw, 2.25rem)",
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
                fontSize: "1rem",
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

function NetflixPrototype() {
  const [screen, setScreen] = useState<"landing"|"plans"|"payment-method"|"card"|"welcome">("landing");
  const [selectedPlan, setSelectedPlan] = useState<{name:string;price:number}|null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<{people?:string;device?:string}>({});
  const [quizResult, setQuizResult] = useState<{name:string;price:number;reason:string}|null>(null);
  const [renewalChecked, setRenewalChecked] = useState(false);

  const planMap: Record<string, {name:string;price:number;reason:string}> = {
    solo_phone: { name:"Mobile", price:149, reason:"Perfect for solo viewers on mobile. 480p quality at just ₹149/month." },
    solo_laptop: { name:"Basic", price:199, reason:"Great for solo viewers on laptop. HD quality at ₹199/month." },
    solo_tv: { name:"Standard", price:499, reason:"Full HD on your TV for a great solo viewing experience. ₹499/month." },
    couple_phone: { name:"Basic", price:199, reason:"Good HD quality for 2 people watching on phones." },
    couple_laptop: { name:"Standard", price:499, reason:"Full HD on 2 screens simultaneously. Perfect for couples." },
    couple_tv: { name:"Standard", price:499, reason:"Full HD on TV for 2 people. Watch simultaneously on 2 screens." },
    family_phone: { name:"Standard", price:499, reason:"Multiple screens for the family. Great quality on all devices." },
    family_laptop: { name:"Premium", price:649, reason:"4K quality on up to 4 screens. Best for families." },
    family_tv: { name:"Premium", price:649, reason:"4K Ultra HD with Spatial Audio. The best experience for families on TV." },
  };

  const plans = [
    { id:"mobile", name:"Mobile", res:"480p", price:149, quality:"Fair", devices:"Mobile phone, tablet", simultaneous:"1", downloads:"1", headerColor:"linear-gradient(135deg,#2563eb,#1d4ed8)", popular:false },
    { id:"basic", name:"Basic", res:"720p", price:199, quality:"Good", devices:"TV, computer, mobile, tablet", simultaneous:"1", downloads:"1", headerColor:"linear-gradient(135deg,#7c3aed,#5b21b6)", popular:true },
    { id:"standard", name:"Standard", res:"1080p", price:499, quality:"Great", devices:"TV, computer, mobile, tablet", simultaneous:"2", downloads:"2", headerColor:"linear-gradient(135deg,#6366f1,#4338ca)", popular:false },
    { id:"premium", name:"Premium", res:"4K+HDR", price:649, quality:"Best", devices:"TV, computer, mobile, tablet", simultaneous:"4", downloads:"6", headerColor:"linear-gradient(135deg,#b91c1c,#9f1239)", popular:false },
  ];

  const nf = { fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" };

  const goTo = (s: typeof screen) => { setScreen(s); };

  // ── Screens ──

  const ScreenLanding = () => (
    <div style={{ ...nf, minHeight:"560px", background:"#000", position:"relative", display:"flex", flexDirection:"column" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.85) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3imgselect/a73a68c6-4917-4b5c-8073-4b2f03c93050/web/IN-en-20250113-TRIFECTA-perspective_70ed3e1e-21f7-4a60-8b7a-4e0b4741e49e_large.jpg') center/cover no-repeat" }} />
      <div style={{ position:"relative", zIndex:2, padding:"16px 32px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ color:"#E50914", fontWeight:900, fontSize:"28px", fontStyle:"italic", letterSpacing:"-1px" }}>NETFLIX</div>
        <button onClick={()=>goTo("landing")} style={{ background:"#E50914", color:"#fff", border:"none", padding:"7px 16px", borderRadius:"4px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>Sign In</button>
      </div>
      <div style={{ position:"relative", zIndex:2, flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"40px 24px", color:"#fff" }}>
        <h1 style={{ fontSize:"clamp(22px,4vw,44px)", fontWeight:900, lineHeight:1.1, marginBottom:"12px", textShadow:"2px 2px 8px rgba(0,0,0,0.8)" }}>Unlimited movies,<br/>shows, and more</h1>
        <p style={{ fontSize:"clamp(14px,2vw,20px)", marginBottom:"6px", textShadow:"1px 1px 4px rgba(0,0,0,0.8)" }}>Starts at ₹149. Cancel at any time.</p>
        <p style={{ fontSize:"14px", color:"#ddd", marginBottom:"24px" }}>Ready to watch? Enter your email to get started.</p>
        <div style={{ display:"flex", gap:"8px", width:"100%", maxWidth:"540px", flexWrap:"wrap", justifyContent:"center" }}>
          <input placeholder="Email address" style={{ flex:1, minWidth:"200px", padding:"14px 16px", background:"rgba(0,0,0,0.75)", border:"1px solid #8c8c8c", borderRadius:"4px", color:"#fff", fontSize:"15px", outline:"none" }} />
          <button onClick={()=>goTo("plans")} style={{ background:"#E50914", color:"#fff", border:"none", padding:"14px 24px", borderRadius:"4px", fontSize:"18px", fontWeight:700, cursor:"pointer", whiteSpace:"nowrap" }}>Get Started ›</button>
        </div>
      </div>
    </div>
  );

  const ScreenPlans = () => (
    <div style={{ ...nf, background:"#fff", minHeight:"560px" }}>
      <div style={{ background:"#fff", padding:"14px 32px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #e0e0e0" }}>
        <div style={{ color:"#E50914", fontWeight:900, fontSize:"24px", fontStyle:"italic" }}>NETFLIX</div>
        <button onClick={()=>goTo("landing")} style={{ background:"transparent", border:"1px solid #333", color:"#333", padding:"6px 14px", borderRadius:"4px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>Sign Out</button>
      </div>
      <div style={{ background:"#fff", padding:"16px 32px 0" }}>
        <div style={{ fontSize:"13px", color:"#666", marginBottom:"4px" }}>Step <strong style={{color:"#000"}}>1</strong> of 3</div>
        <div style={{ fontSize:"22px", fontWeight:700, color:"#000", paddingBottom:"16px" }}>Choose the plan that's right for you</div>
      </div>
      <div style={{ maxWidth:"920px", margin:"0 auto", padding:"16px 24px 40px" }}>
        <div style={{ background:"#f3f4f6", border:"1.5px solid #e0e0e0", borderRadius:"8px", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px", gap:"12px" }}>
          <p style={{ fontSize:"13px", color:"#333", margin:0 }}>
  <strong>Not sure which plan to pick?</strong>{" "}
  <span
    style={{
      display: "inline-block",
      marginLeft: "6px",
      padding: "2px 7px",
      borderRadius: "999px",
      background: "#22c55e",
      color: "#fff",
      fontSize: "9px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      verticalAlign: "middle",
    }}
  >
    Redesign
  </span>{" "}
  Answer 2 quick questions and we'll suggest the best fit.
</p>
          <button onClick={()=>{ setQuizOpen(true); setQuizStep(1); setQuizAnswers({}); }} style={{ background:"#000", color:"#fff", border:"none", padding:"9px 18px", borderRadius:"4px", fontSize:"12px", fontWeight:600, cursor:"pointer", whiteSpace:"nowrap" }}>Help me choose →</button>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px", marginBottom:"16px" }}>
          {plans.map(plan => (
            <div key={plan.id} onClick={()=>setSelectedPlan({name:plan.name,price:plan.price})}
              style={{
  border: `2px solid ${selectedPlan?.name === plan.name ? "#000" : "#e0e0e0"}`,
  borderRadius: "6px",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  background: "#fff",
  boxShadow: selectedPlan?.name === plan.name ? "0 0 0 1px #000" : "none",
}}>
              
              <div style={{ padding:"12px", color:"#fff", background:plan.headerColor, position:"relative" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "8px",
    }}
  >
    <div style={{ fontSize:"15px", fontWeight:700 }}>{plan.name}</div>

    {plan.popular && (
      <span
        style={{
          background: "rgba(255,255,255,0.18)",
          border: "1px solid rgba(255,255,255,0.42)",
          color: "#fff",
          fontSize: "9px",
          fontWeight: 800,
          padding: "3px 7px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
        }}
      >
        Most Popular
      </span>
    )}
  </div>

  <div style={{ fontSize:"12px", opacity:0.85 }}>{plan.res}</div>
                {selectedPlan?.name===plan.name && <div style={{ position:"absolute", bottom:"6px", right:"6px", width:"18px", height:"18px", background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px" }}>✓</div>}
              </div>
              <div style={{ padding:"10px" }}>
                {[["Monthly price",`₹${plan.price}`],["Quality",plan.quality],["Resolution",plan.res],["Devices",plan.devices],["Screens",plan.simultaneous],["Downloads",plan.downloads]].map(([label,val])=>(
                  <div key={label} style={{ padding:"7px 0", borderBottom:"1px solid #f0f0f0" }}>
                    <div style={{ fontSize:"10px", color:"#666" }}>{label}</div>
                    <div style={{ fontSize:"12px", color:"#000", fontWeight:500 }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=>{ if(selectedPlan) goTo("payment-method"); }}
          style={{ display:"block", width:"100%", maxWidth:"380px", margin:"20px auto 0", background:"#E50914", color:"#fff", border:"none", padding:"14px", borderRadius:"4px", fontSize:"18px", fontWeight:700, cursor: selectedPlan?"pointer":"default", opacity: selectedPlan?1:0.5, textAlign:"center" }}>
          Next
        </button>
      </div>
    </div>
  );

  const ScreenPaymentMethod = () => (
    <div style={{ ...nf, background:"#fff", minHeight:"560px" }}>
      <div style={{ background:"#fff", padding:"14px 32px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #e0e0e0" }}>
        <div style={{ color:"#E50914", fontWeight:900, fontSize:"24px", fontStyle:"italic" }}>NETFLIX</div>
        <button onClick={()=>goTo("landing")} style={{ background:"transparent", border:"1px solid #333", color:"#333", padding:"6px 14px", borderRadius:"4px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>Sign Out</button>
      </div>
      <div style={{ padding:"16px 32px 0" }}>
        <div style={{ fontSize:"13px", color:"#666", marginBottom:"4px" }}>Step <strong style={{color:"#000"}}>2</strong> of 3</div>
        <div style={{ fontSize:"22px", fontWeight:700, color:"#000", paddingBottom:"16px" }}>Choose how to pay</div>
      </div>
      <div style={{ maxWidth:"460px", margin:"0 auto", padding:"20px 24px 40px" }}>
        <div style={{ width:"52px", height:"52px", border:"2px solid #E50914", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px", fontSize:"20px" }}>🔒</div>
        <p style={{ fontSize:"14px", color:"#333", marginBottom:"8px" }}>Your payment is encrypted and you can change how you pay anytime.</p>
        <p style={{ fontSize:"14px", fontWeight:700, color:"#000", marginBottom:"20px", lineHeight:1.8 }}>Secure for peace of mind.<br/>Cancel easily online.</p>
        <div style={{ textAlign:"right", fontSize:"11px", color:"#555", marginBottom:"8px" }}>End-to-end encrypted 🔒</div>
        {[
          { label:"Credit or Debit Card", sub:"VISA  ●●" },
          { label:"UPI AutoPay", sub:"UPI  Paytm  GPay" },
        ].map(opt => (
          <div key={opt.label} onClick={()=>goTo("card")}
            style={{ border:"1px solid #e0e0e0", borderRadius:"6px", padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px", cursor:"pointer", background:"#fff" }}>
            <div style={{ fontSize:"14px", fontWeight:600, color:"#000" }}>{opt.label} <span style={{ fontSize:"12px", color:"#666", fontWeight:400 }}>{opt.sub}</span></div>
            <div style={{ color:"#333", fontSize:"18px" }}>›</div>
          </div>
        ))}
      </div>
    </div>
  );

  const ScreenCard = () => (
    <div style={{ ...nf, background:"#fff", minHeight:"560px" }}>
      <div style={{ background:"#fff", padding:"14px 32px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #e0e0e0" }}>
        <div style={{ color:"#E50914", fontWeight:900, fontSize:"24px", fontStyle:"italic" }}>NETFLIX</div>
        <button onClick={()=>goTo("landing")} style={{ background:"transparent", border:"1px solid #333", color:"#333", padding:"6px 14px", borderRadius:"4px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>Sign Out</button>
      </div>
      <div style={{ padding:"16px 32px 0" }}>
        <div style={{ fontSize:"13px", color:"#666", marginBottom:"4px" }}>Step <strong style={{color:"#000"}}>3</strong> of 3</div>
        <div style={{ fontSize:"22px", fontWeight:700, color:"#000", paddingBottom:"16px" }}>Set up your credit or debit card</div>
      </div>
      <div style={{ maxWidth:"380px", margin:"0 auto", padding:"16px 24px 40px" }}>
        {["Card number","Expiration date","CVV","Name on card"].map(f => (
          <div key={f} style={{ marginBottom:"10px" }}>
            <input placeholder={f} style={{ width:"100%", border:"1px solid #8c8c8c", borderRadius:"4px", padding:"12px 14px", fontSize:"14px", color:"#000", outline:"none", background:"#fff" }} />
          </div>
        ))}
        <div style={{ background:"#f3f3f3", borderRadius:"4px", padding:"12px 14px", display:"flex", justifyContent:"space-between", alignItems:"center", margin:"16px 0 12px" }}>
          <div>
            <div style={{ fontSize:"14px", fontWeight:700, color:"#000" }}>₹{selectedPlan?.price ?? 199}/month</div>
            <div style={{ fontSize:"12px", color:"#555" }}>{selectedPlan?.name ?? "Basic"}</div>
          </div>
          <div onClick={()=>goTo("plans")} style={{ color:"#0071eb", fontSize:"13px", cursor:"pointer", fontWeight:500 }}>Change</div>
        </div>
        {/* Redesign: Auto-renewal above fold */}
        <div style={{ background:"#fff8e1", border:"1.5px solid #f0c040", borderRadius:"6px", padding:"12px 14px", marginBottom:"12px" }}>
          <div style={{ fontSize:"12px", fontWeight:700, color:"#856404", marginBottom:"6px" }}>⚠️ Auto-Renewal Notice <span style={{ background:"#22c55e", color:"#fff", fontSize:"9px", fontWeight:700, padding:"2px 6px", borderRadius:"10px", marginLeft:"4px" }}>✦ REDESIGN</span></div>
          <p style={{ fontSize:"11px", color:"#555", lineHeight:1.6, marginBottom:"8px" }}>Netflix will automatically renew your membership and charge <strong>₹{selectedPlan?.price ?? 199}/month</strong> until you cancel.</p>
          <label style={{ display:"flex", alignItems:"flex-start", gap:"8px", cursor:"pointer" }}>
            <input type="checkbox" checked={renewalChecked} onChange={e=>setRenewalChecked(e.target.checked)} style={{ marginTop:"2px", accentColor:"#000", width:"16px", height:"16px", flexShrink:0 }} />
            <span style={{ fontSize:"12px", color:"#000", fontWeight:500, lineHeight:1.5 }}>I understand and agree to the auto-renewal on my next billing date.</span>
          </label>
        </div>
        <p style={{ fontSize:"11px", color:"#555", lineHeight:1.6, marginBottom:"12px" }}>By clicking "Start Membership" you agree to our Terms of Use and confirm you are over 18.</p>
        <button onClick={()=>{ if(renewalChecked) goTo("welcome"); }}
          style={{ display:"block", width:"100%", background:"#E50914", color:"#fff", border:"none", padding:"14px", borderRadius:"4px", fontSize:"16px", fontWeight:700, cursor: renewalChecked?"pointer":"default", opacity: renewalChecked?1:0.5, textAlign:"center" }}>
          Start Membership
        </button>
      </div>
    </div>
  );

  const ScreenWelcome = () => (
    <div style={{ ...nf, background:"#141414", minHeight:"560px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"40px 24px", color:"#fff" }}>
      <div style={{ color:"#E50914", fontWeight:900, fontSize:"32px", fontStyle:"italic", marginBottom:"28px" }}>NETFLIX</div>
      <div style={{ width:"72px", height:"72px", borderRadius:"50%", background:"#28a745", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:"34px", color:"#fff" }}>✓</div>
      <h2 style={{ fontSize:"28px", fontWeight:700, marginBottom:"10px" }}>You're all set!</h2>
      <p style={{ fontSize:"15px", color:"#b3b3b3", marginBottom:"32px", lineHeight:1.6 }}>Welcome to Netflix. Start watching in seconds.<br/>Choose a profile to get started.</p>
      <div style={{ marginBottom:"32px" }}>
        <h3 style={{ fontSize:"18px", fontWeight:600, marginBottom:"16px" }}>Who's watching?</h3>
        <div style={{ display:"flex", gap:"16px", justifyContent:"center", flexWrap:"wrap" }}>
          {[{emoji:"😊",color:"#2563eb",name:"Me"},{emoji:"👦",color:"#16a34a",name:"Kids"},{emoji:"👧",color:"#ea580c",name:"Partner"},{emoji:"🧑",color:"#7c3aed",name:"Sibling"}].map(p=>(
            <div key={p.name} style={{ textAlign:"center", cursor:"pointer" }}>
              <div style={{ width:"72px", height:"72px", borderRadius:"8px", background:p.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"32px", margin:"0 auto 6px" }}>{p.emoji}</div>
              <div style={{ fontSize:"12px", color:"#b3b3b3" }}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={()=>goTo("landing")} style={{ background:"#fff", color:"#000", border:"none", padding:"12px 36px", borderRadius:"4px", fontSize:"16px", fontWeight:700, cursor:"pointer" }}>Start Watching →</button>
    </div>
  );

  return (
    <div style={{ position:"relative", fontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif" }}>
      {/* Screens */}
      <div style={{ overflowY:"visible", height:"auto" }}>
        {screen==="landing" && <ScreenLanding />}
        {screen==="plans" && <ScreenPlans />}
        {screen==="payment-method" && <ScreenPaymentMethod />}
        {screen==="card" && <ScreenCard />}
        {screen==="welcome" && <ScreenWelcome />}
      </div>

      {/* Quiz Modal */}
      {quizOpen && (
        <div onClick={(e)=>{ if(e.target===e.currentTarget) setQuizOpen(false); }}
          style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.7)", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
          <div style={{ background:"#fff", borderRadius:"8px", padding:"28px 24px", maxWidth:"440px", width:"100%", position:"relative" }}>
            <button onClick={()=>setQuizOpen(false)} style={{ position:"absolute", top:"12px", right:"12px", background:"none", border:"none", fontSize:"20px", cursor:"pointer", color:"#333" }}>✕</button>

            {/* Step 1 */}
            {quizStep===1 && (
              <>
                <div style={{ display:"flex", gap:"6px", marginBottom:"20px" }}>
                  {[1,2,3].map(i=><span key={i} style={{ width:"8px", height:"8px", borderRadius:"50%", background: i<=quizStep?"#000":"#e0e0e0", display:"block" }}/>)}
                </div>
                <h2 style={{ fontSize:"20px", fontWeight:700, color:"#000", marginBottom:"6px" }}>How many people will watch?</h2>
                <p style={{ fontSize:"13px", color:"#555", marginBottom:"16px" }}>Helps us suggest the right number of screens.</p>
                <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                  {[{icon:"🙋",label:"Just me",val:"solo"},{icon:"👫",label:"2 people",val:"couple"},{icon:"👨‍👩‍👧‍👦",label:"Family (3 or more)",val:"family"}].map(o=>(
                    <div key={o.val} onClick={()=>{ setQuizAnswers({people:o.val}); setQuizStep(2); }}
                      style={{ border:"1.5px solid #e0e0e0", borderRadius:"6px", padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:"10px", fontSize:"14px", color:"#000", fontWeight:500 }}>
                      <span style={{ fontSize:"18px" }}>{o.icon}</span>{o.label}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Step 2 */}
            {quizStep===2 && (
              <>
                <div style={{ display:"flex", gap:"6px", marginBottom:"20px" }}>
                  {[1,2,3].map(i=><span key={i} style={{ width:"8px", height:"8px", borderRadius:"50%", background: i<=quizStep?"#000":"#e0e0e0", display:"block" }}/>)}
                </div>
                <h2 style={{ fontSize:"20px", fontWeight:700, color:"#000", marginBottom:"6px" }}>What device do you mostly watch on?</h2>
                <p style={{ fontSize:"13px", color:"#555", marginBottom:"16px" }}>Helps us match the best video quality.</p>
                <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                  {[{icon:"📱",label:"Phone or Tablet",val:"phone"},{icon:"💻",label:"Laptop / Computer",val:"laptop"},{icon:"📺",label:"Smart TV",val:"tv"}].map(o=>(
                    <div key={o.val} onClick={()=>{
                      const key=`${quizAnswers.people}_${o.val}`;
                      const res=planMap[key]||{name:"Standard",price:499,reason:"A great all-around plan for most viewers."};
                      setQuizResult(res);
                      setQuizStep(3);
                    }}
                      style={{ border:"1.5px solid #e0e0e0", borderRadius:"6px", padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:"10px", fontSize:"14px", color:"#000", fontWeight:500 }}>
                      <span style={{ fontSize:"18px" }}>{o.icon}</span>{o.label}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Step 3 Result */}
            {quizStep===3 && quizResult && (
              <>
                <div style={{ display:"flex", gap:"6px", marginBottom:"20px" }}>
                  {[1,2,3].map(i=><span key={i} style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#000", display:"block" }}/>)}
                </div>
                <div style={{ textAlign:"center", padding:"10px 0" }}>
                  <p style={{ fontSize:"13px", color:"#555", marginBottom:"8px" }}>Based on your answers, we recommend:</p>
                  <div style={{ fontSize:"26px", fontWeight:900, color:"#E50914", margin:"8px 0" }}>{quizResult.name} — ₹{quizResult.price}/month</div>
                  <p style={{ fontSize:"13px", color:"#555", marginBottom:"20px" }}>{quizResult.reason}</p>
                  <button onClick={()=>{
                    setSelectedPlan({name:quizResult.name, price:quizResult.price});
                    setQuizOpen(false);
                  }} style={{ background:"#E50914", color:"#fff", border:"none", padding:"12px 28px", borderRadius:"4px", fontSize:"15px", fontWeight:700, cursor:"pointer", width:"100%" }}>
                    Apply This Plan →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
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
              The Netflix onboarding flow is designed so that each screen resolves the emotional state of the previous one — building trust incrementally and reducing friction at every step.
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
            <h2>Netflix knows exactly what it's doing.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              Select a screen to see the psychological principles at work.
            </p>
          </div>
        </div>
        <div className="p2-tabs-wrap">
          <ScreenTabs />
        </div>
      </section>


      {/* Psychology Table */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">PSYCHOLOGY MAPPING</p>
            <h2>Mapping UX elements to biases, effect on users, and opportunities.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              A screen-by-screen map of the psychology shaping the Netflix onboarding experience.
            </p>
          </div>
        </div>

        <div className="p2-table-wrap">
          <div className="p2-table-header">
            <span>UX Element</span>
            <span>Psychology Principle</span>
            <span>Effect on user</span>
            <span>Design Opportunity</span>
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
            <p className="p2-label">OPPORTUNITIES SPOTTED</p>
            <h2>Two areas where the experience could be even better.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              These are not flaws — they are opportunities. Small shifts that could make the experience feel even more transparent and trustworthy.
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

      {/* Redesigned Prototype */}
<section className="p2-section">
  <div className="p2-split-header">
    <div className="p2-split-headline">
      <p className="p2-label">LIVE REDESIGN PROTOTYPE</p>
      <h2>See the redesign in action.</h2>
    </div>

    <div className="p2-split-body">
      <p>
        A working prototype of the redesigned Netflix onboarding flow — built to
        explore what the experience could look like with greater user clarity at
        every step.
      </p>
    </div>
  </div>

  <div className="p2-browser-wrap">
    <div className="p2-browser-bar">
      <div className="p2-browser-dots">
        <span style={{ backgroundColor: "#FF5F57" }} />
        <span style={{ backgroundColor: "#FEBC2E" }} />
        <span style={{ backgroundColor: "#28C840" }} />
      </div>

      
    </div>

    <div className="p2-browser-screen">
      <NetflixPrototype />
    </div>
  </div>
</section>

      {/* Redesign */}
      <section className="p2-section">
        <div className="p2-split-header">
          <div className="p2-split-headline">
            <p className="p2-label">REDESIGN PROPOSALS</p>
            <h2>Three changes that put the user back in the driver's seat.</h2>
          </div>
          <div className="p2-split-body">
            <p>
            
            </p>
          </div>
        </div>

        <div className="p2-redesign-grid">
          {redesignCards.map((card, i) => (
            <div className="p2-redesign-card" key={card.label}>
              <div className="p2-redesign-preview">
  <img src={card.image} alt={card.title} />
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
            <h2>What Netflix gets right — and what it leaves on the table.</h2>
          </div>
          <div className="p2-split-body">
            <p>
              
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
            <p className="p2-label">Room to grow</p>
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
          What I walked away with.
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
  width: min(820px, 100%);
  min-height: 220px;
  margin: 0 auto;
  border-radius: 28px;
  background-color: rgba(246, 231, 161, 0.6);
  border: 1px solid rgba(26, 24, 20, 0.12);
  padding: clamp(1.6rem, 3vw, 2.4rem);
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.25rem, 1.9vw, 2rem);
  line-height: 1.12;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(26, 24, 20, 0.62);
}

        .p2-table-row {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 1.5fr 1.5fr;
  padding: 1.15rem 1.4rem;
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
  font-size: 0.86rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  color: rgba(26, 24, 20, 0.9);
}

.p2-table-principle {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.55;
  color: rgba(26, 24, 20, 0.82);
}

.p2-table-problem {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.55;
  color: rgba(26, 24, 20, 0.78);
}

.p2-table-solution {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.55;
  color: rgba(26, 24, 20, 0.78);
}

        /* Pain points */
        .p2-pain-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--card-gap);
  width: min(980px, 100%);
  margin: clamp(3rem, 5vw, 5rem) auto 0;
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
  transition: all 240ms ease;
}

.p2-pain-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 22px 60px rgba(26, 24, 20, 0.12);
}

        .p2-pain-yellow {
  background-color: rgba(253, 250, 245, 0.96);
}

        .p2-pain-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.55rem;
  line-height: 1;
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

        .p2-browser-wrap {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(26, 24, 20, 0.14);
  box-shadow: 0 24px 70px rgba(26, 24, 20, 0.1);
}

.p2-browser-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.1rem;
  background-color: rgba(246, 231, 161, 0.72);
  border-bottom: 1px solid rgba(26, 24, 20, 0.12);
  min-height: 42px;
}

.p2-browser-dots {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
}

.p2-browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.p2-browser-url {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: rgba(26, 24, 20, 0.52);
  background: rgba(253, 250, 245, 0.72);
  border: 1px solid rgba(26, 24, 20, 0.12);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.p2-browser-open {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink);
  text-decoration: none;
  flex-shrink: 0;
}

.p2-browser-screen {
  width: 100%;
  height: auto;
  min-height: 560px;
  background-color: rgba(253, 250, 245, 0.5);
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
  aspect-ratio: 4 / 3;
  background-color: rgba(253, 250, 245, 0.96);
  border-bottom: 1px solid rgba(26, 24, 20, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p2-redesign-preview img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
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
  margin: clamp(3rem, 5vw, 5rem) auto 0;
}

        .p2-takeaway-card {
  border-radius: 28px;
  background-color: rgba(253, 250, 245, 0.96);
  border: 1px solid rgba(26, 24, 20, 0.13);
  box-shadow: 0 20px 55px rgba(26, 24, 20, 0.07);
  padding: 2rem;
  min-height: 300px;
  transition: all 240ms ease;
}

.p2-takeaway-good,
.p2-takeaway-bad {
  background-color: rgba(253, 250, 245, 0.96);
}

.p2-takeaway-card:hover {
  background-color: rgba(246, 231, 161, 0.62);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 22px 60px rgba(26, 24, 20, 0.12);
}

        .p2-takeaway-card ul {
  font-family: var(--font-sans);
  font-size: 1.08rem;
  line-height: 1.8;
  color: rgba(26, 24, 20, 0.72);
  padding-left: 1.3rem;
  margin: 1rem 0 0;
}

        .p2-takeaway-card li {
  margin-bottom: 0.45rem;
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
  transition: all 240ms ease;
}

.p2-reflection-card:hover {
  background-color: rgba(246, 231, 161, 0.62);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 22px 60px rgba(26, 24, 20, 0.12);
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
