"use client";
import Link from "next/link";

const snapshotCards = [
  {
    label: "ROLE",
    main: "Researcher",
    sub: "Visual documentation, interviews, layout",
  },
  {
    label: "TIMELINE",
    main: "March – April 2025",
    sub: "1 month",
  },
  {
    label: "TEAM",
    main: "Team of 4",
    sub: "Rural & cultural exposure project",
  },
  {
    label: "FOCUS",
    main: "Ethnographic research",
    sub: "Agriculture & sustainability",
  },
];

const contextStats = [
  {
    big: "85%",
    small: "of India’s strawberries are produced in Mahabaleshwar",
  },
  {
    big: "Oct–Apr",
    small: "main strawberry cultivation season",
  },
  {
    big: "91%",
    small: "water content in strawberries, making them delicate and highly perishable",
  },
];

const secondaryCards = [
  {
    number: "01",
    title: "Agriculture Systems",
    text: "Traditional, commercial, organic, sustainable, horticulture, and plantation farming practices.",
  },
  {
    number: "02",
    title: "Strawberry Cultivation",
    text: "Propagation through runners and tissue culture, raised beds, mulching, fertilizers, irrigation, pests, and diseases.",
  },
  {
    number: "03",
    title: "Harvesting & Handling",
    text: "Manual harvesting, sorting, stacking, ventilated baskets, clamshell containers, and cold-chain requirements.",
  },
  {
    number: "04",
    title: "Sustainability",
    text: "Water conservation, reduced chemical dependency, soil health, crop diversification, and agricultural waste.",
  },
];

const primaryStats = [
  {
    big: "3 Days",
    small: "of field study and observation",
  },
  {
    big: "~17",
    small: "farmer conversations and informal discussions",
  },
  {
    big: "Field Documentation",
    small: "photos, notes, observations, and transcripts",
  },
  {
    big: "1 Clear Direction",
    small: "post-harvest loss and plant waste",
  },
];

const timelineItems = [
  {
    day: "Day 1",
    title: "First conversations",
    text: "Village visit, farmer/vendor conversations, and initial observations around farming practices.",
  },
  {
    day: "Day 2",
    title: "Farm visits",
    text: "Deeper interviews, field observation, and documentation of strawberry cultivation methods.",
  },
  {
    day: "Day 3",
    title: "Pattern spotting",
    text: "Recurring challenges, synthesis direction, and early problem framing.",
  },
];

const quoteCards = [
  {
    speaker: "Bhavesh Borane",
    role: "Organic farmer",
    quote:
      "“We have been growing strawberries for years, but every season still depends on timing, care, and weather.”",
  },
  {
    speaker: "Bhavesh Borane",
    role: "On cultivation",
    quote:
      "“First we prepare the soil beds, then set up drip irrigation, plant the saplings, and wait for the crop to flower.”",
  },
  {
    speaker: "Sunil Bhilare",
    role: "Strawberry farmer",
    quote:
      "“Strawberries cannot wait for long. Once they are harvested, they need to move quickly or they start losing quality.”",
  },
  {
    speaker: "Sunil Bhilare",
    role: "On shelf life",
    quote:
      "“Even with cold storage, strawberries only stay fresh for a few days. After that, the value starts dropping.”",
  },
  {
    speaker: "Santosh Jadhav",
    role: "Strawberry farmer",
    quote:
      "“If care is delayed in the early stage, the loss shows later. Water, fertilizer, and protection have to happen at the right time.”",
  },
  {
    speaker: "Santosh Jadhav",
    role: "On farming pressure",
    quote:
      "“A strawberry crop needs attention every day. One small delay can affect the whole harvest.”",
  },
];

const funnelSteps = [
  "Agriculture & Sustainability",
  "Mahabaleshwar’s farming ecosystem",
  "Strawberry cultivation",
  "Harvesting and post-harvest handling",
  "Spoilage, shelf life, and discarded plant waste",
];

const synthesisCards = [
  {
    number: "01",
    title: "Shelf Life Pressure",
    text: "Strawberries need to be sold quickly because they spoil within a few days.",
  },
  {
    number: "02",
    title: "Handling & Stacking",
    text: "Surface contact during stacking can bruise the fruit and speed up deterioration.",
  },
  {
    number: "03",
    title: "Plant Waste",
    text: "After harvest, dried strawberry plants are usually discarded instead of being reused.",
  },
];

const fruitFlow = [
  "Stacking",
  "Surface contact",
  "Bruising",
  "Faster spoilage",
  "Reduced market value",
];

const plantFlow = [
  "Harvest ends",
  "Plants dry",
  "Discarded waste",
  "Missed material opportunity",
];

const reflectionCards = [
  {
    title: "What worked",
    text: "Starting with research helped us avoid forcing a solution too early. The field visit made the problem more grounded than secondary research alone could have done.",
  },
  {
    title: "What I learned",
    text: "Design research is not just about collecting information. It is about noticing patterns, asking better questions, and understanding the system before deciding what should be designed.",
  },
  {
    title: "My role in this project",
    text: "I contributed across research strategy, secondary research, field interviews, visual documentation, booklet layout, synthesis, and problem statement framing.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="case-label">{children}</p>;
}

function SectionHeader({
  label,
  headline,
  body,
}: {
  label: string;
  headline: string;
  body?: React.ReactNode;
}) {
  return (
    <div className="section-header">
      <SectionLabel>{label}</SectionLabel>
      <h2>{headline}</h2>
      {body && <div className="body-copy">{body}</div>}
    </div>
  );
}

function StatCard({ big, small }: { big: string; small: string }) {
  return (
    <div className="stat-card">
      <h3>{big}</h3>
      <p>{small}</p>
    </div>
  );
}

function FlowLine({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flow-line">
      <p className="flow-title">{title}</p>
      <div className="flow-items">
        {items.map((item, index) => (
          <div className="flow-step-wrap" key={item}>
            <span className="flow-pill">{item}</span>
            {index < items.length - 1 && <span className="flow-arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectThreePage() {
  return (
    <main className="case-page">
      <div className="debug-alignment-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <nav className="case-nav">
        <Link href="/" className="nav-name">
          Rutuja Kalane
        </Link>

        <Link href="/#projects" className="back-link">
          Back to projects ↗
        </Link>
      </nav>

      <header className="case-hero">
        <div className="hero-layout">
          <div className="hero-text">
            <p className="case-label">Research case study</p>
            <h1>Mahabaleshwar Strawberries: A Research Case Study</h1>
            <p className="hero-subtitle">
              Understanding strawberry farming, post-harvest loss, and
              sustainability through field research.
            </p>
          </div>

          <div className="hero-strawberry" aria-hidden="true">
            <img src="/strawberry.png" alt="" />
          </div>
        </div>
      </header>

      <section className="case-section">
        <div className="overview-header">
          <div className="overview-headline">
            <SectionLabel>OVERVIEW</SectionLabel>
            <h2>
              A one-month field research study on Mahabaleshwar’s strawberry
              farming ecosystem.
            </h2>
          </div>

          <div className="overview-body">
            <p>
              This project began as a rural and cultural exposure study focused
              on agriculture and sustainability in Mahabaleshwar. As a team, we
              explored how strawberries are grown, handled, transported, and
              eventually lost or wasted within the farming cycle.
            </p>
            <p>
              Through secondary research, field visits, farmer conversations,
              visual documentation, and thematic analysis, we worked toward one
              clear outcome, that is framing a research-backed problem statement
              rooted in the realities of strawberry farmers.
            </p>
          </div>
        </div>

        <div className="snapshot-grid">
          {snapshotCards.map((card) => (
            <div className="snapshot-card" key={card.label}>
              <p>{card.label}</p>
              <h3>{card.main}</h3>
              <span>{card.sub}</span>
            </div>
          ))}
        </div>

        <div className="large-image-card">
          <img src="/strawberry-2.jpg" alt="Strawberry farm field visit" />
        </div>
      </section>

      <section className="case-section">
  <div className="context-layout">
    <div className="context-heading">
      <SectionLabel>CONTEXT</SectionLabel>

      <h2>
        Mahabaleshwar’s strawberry identity is shaped by climate, cultivation,
        and careful handling.
      </h2>
    </div>

    <div className="context-body">
      <p>
        Mahabaleshwar’s cool climate, hilly terrain, and fertile soil make it
        one of India’s most important strawberry-growing regions. The crop is
        closely connected to the region’s economy, local markets, tourism, and
        seasonal farming practices.
      </p>

      <p>
        But strawberry farming is not just about growing the fruit. It involves
        a complete system — sourcing plants, preparing beds, irrigation, pest
        control, harvesting, sorting, packaging, transport, and market timing.
      </p>
    </div>

    <div className="context-stats-row">
      {contextStats.map((stat) => (
        <StatCard key={stat.big} big={stat.big} small={stat.small} />
      ))}
    </div>
  </div>
</section>

      <section className="case-section">
        <SectionHeader
          label="SECONDARY RESEARCH"
          headline="Before entering the field, we studied the farming system around strawberries."
          body={
            <p>
              We began by studying agriculture and sustainability at a broader
              level, then slowly narrowed our focus toward strawberry farming in
              Mahabaleshwar. This helped us understand the crop cycle, farming
              methods, post-harvest handling, and sustainability concerns before
              speaking to farmers directly.
            </p>
          }
        />

        <div className="research-grid">
          {secondaryCards.map((card) => (
            <div className="research-card" key={card.title}>
              <p>{card.number}</p>
              <h3>{card.title}</h3>
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="PRIMARY RESEARCH"
          headline="Then we went to Mahabaleshwar to listen, observe, and document."
          body={
            <>
              <p>
                The field study helped us understand what secondary research
                could not fully show — the everyday decisions, constraints, and
                lived experiences behind strawberry farming.
              </p>
              <p>
                We visited farms, spoke with farmers and vendors, observed
                cultivation practices, and documented recurring challenges around
                water, labor, shelf life, diseases, packaging, and post-harvest
                handling.
              </p>
            </>
          }
        />

        <div className="stats-grid four">
          {primaryStats.map((stat) => (
            <StatCard key={stat.big} big={stat.big} small={stat.small} />
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="FIELD VISIT"
          headline="Three days of conversations, farms, and observations."
        />

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div className="timeline-item" key={item.day}>
              <div className="timeline-dot">{index + 1}</div>
              <p>{item.day}</p>
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="WHAT WE HEARD"
          headline="The field conversations made the research more human."
          body={
            <>
              <p>
                Instead of treating the farmers’ challenges as isolated data
                points, we looked at what kept repeating across conversations.
                Their stories helped us understand the pressure of timing, crop
                care, labor, disease, shelf life, and waste.
              </p>
              <p className="small-note">
                These dialogues are reconstructed from field conversations and
                interview notes to communicate recurring farmer concerns clearly.
              </p>
            </>
          }
        />

        <div className="quote-grid">
          {quoteCards.map((card) => (
            <div className="quote-card" key={`${card.speaker}-${card.role}`}>
              <blockquote>{card.quote}</blockquote>
              <div>
                <h3>{card.speaker}</h3>
                <p>{card.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="RESEARCH MAP"
          headline="The focus narrowed as patterns started repeating."
          body={
            <p>
              We began with a broad topic — agriculture and sustainability — but
              the fieldwork helped us narrow the direction. The strongest
              pattern was not only how strawberries were grown, but what happened
              after they were harvested.
            </p>
          }
        />

        <div className="funnel">
          {funnelSteps.map((step, index) => (
            <div
              className={`funnel-step ${
                index === funnelSteps.length - 1 ? "final" : ""
              }`}
              key={step}
              style={{
                width: `${100 - index * 9}%`,
              }}
            >
              <span>Step {index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="SYNTHESIS"
          headline="We turned field notes into patterns, then patterns into a direction."
          body={
            <>
              <p>
                After the field visit, we synthesized our secondary research,
                interview notes, observations, and farmer stories. The goal was
                not to choose the most dramatic problem, but to identify a
                focused issue that was repeated, visible, and connected to both
                farmer livelihood and sustainability.
              </p>
              <p>
                Several themes appeared across the research: water scarcity,
                labor shortage, crop dependency, short shelf life, disease
                management, transport pressure, and post-harvest waste.
              </p>
            </>
          }
        />

        <div className="pull-quote">
          Strawberries were losing value after harvest, while plant waste was
          losing value after the season.
        </div>

        <div className="insight-grid">
          {synthesisCards.map((card) => (
            <div className="insight-card" key={card.title}>
              <p>{card.number}</p>
              <h3>{card.title}</h3>
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section">
        <SectionHeader
          label="PROBLEM STATEMENT"
          headline="A focused problem emerged around spoilage, stacking, and unused plant waste."
          body={
            <>
              <p>
                Strawberries are delicate and prone to spoilage, especially when
                stacked during post-harvest handling, packaging, and
                transportation. Direct surface contact can bruise the fruit,
                shorten its shelf life, and reduce the quality of produce
                reaching the market.
              </p>
              <p>
                At the same time, once the harvesting season ends, strawberry
                plants dry up and are typically discarded as waste. These dried
                plants are not reused in a meaningful way, even though they have
                potential to be explored as compost, mulch, or biodegradable
                material.
              </p>
            </>
          }
        />

        <div className="problem-layout">
          <div className="cause-card">
            <FlowLine title="Fruit handling" items={fruitFlow} />
            <FlowLine title="Plant waste" items={plantFlow} />
          </div>

          <div className="final-problem-card">
            <p>Final problem statement</p>
            <h3>
              Post-harvest losses in strawberry farming are significant due to
              fruit spoilage from surface contact during stacking. Additionally,
              dried strawberry plants are discarded after the harvest season,
              representing an underutilized agricultural byproduct.
            </h3>
          </div>
        </div>
      </section>

      <section className="case-section scope-section">
        <SectionHeader
          label="SCOPE"
          headline="This case study ends at problem framing."
          body={
            <p>
              Although solution directions were explored later, this portfolio
              case study focuses only on the research and problem-identification
              phase. The aim is to show how we moved from a broad agricultural
              topic to a focused problem statement through secondary research,
              fieldwork, farmer conversations, and synthesis.
            </p>
          }
        />
      </section>

      <section className="case-section reflection-section">
        <SectionHeader
          label="REFLECTION"
          headline="What this project taught me about research-led design."
        />

        <div className="reflection-grid">
          {reflectionCards.map((card) => (
            <div className="reflection-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/#projects">Back to projects</Link>
      </footer>

      <style jsx global>{`
        .case-page {
          --section-y: clamp(6rem, 8vw, 8rem);
          --content-gap: clamp(3rem, 4vw, 4.5rem);
          --inner-text-gap: clamp(1.5rem, 2vw, 2rem);
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

        .debug-alignment-grid {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 50%;
          z-index: 99999;
          width: min(1180px, calc(100vw - 3rem));
          transform: translateX(-50%);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--card-gap);
          pointer-events: none;
        }

        .debug-alignment-grid span {
          background: rgba(255, 0, 0, 0.07);
          border-left: 1px solid rgba(255, 0, 0, 0.35);
          border-right: 1px solid rgba(255, 0, 0, 0.35);
        }

        .case-nav {
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
          pointer-events: auto;
        }

        .nav-name,
        .back-link,
        .case-footer a {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-stone);
          text-decoration: none;
          border-radius: 999px;
        }

        .back-link,
        .case-footer a {
          color: var(--color-ink);
          border: 1px solid rgba(26, 24, 20, 0.16);
          padding: 0.65rem 1rem;
          background: rgba(253, 250, 245, 0.66);
        }

        .case-hero,
        .case-section,
        .case-footer {
          width: min(1180px, calc(100vw - 3rem));
          margin: 0 auto;
        }

        .case-hero {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 6rem;
        }

        .case-label {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.52);
          margin: 0 0 1rem;
        }

        .case-hero h1 {
          width: min(820px, 100%);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(3.1rem, 6.8vw, 6.9rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--color-ink);
          margin: 0;
        }

        .hero-subtitle {
          width: min(660px, 100%);
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          line-height: 1.65;
          color: rgba(26, 24, 20, 0.68);
          margin: 2rem 0 0;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) 420px;
          align-items: center;
          gap: clamp(2rem, 5vw, 5rem);
        }

        .hero-text {
          min-width: 0;
        }

        .hero-strawberry {
          width: 100%;
          max-width: 420px;
          justify-self: end;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-strawberry img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 24px 45px rgba(26, 24, 20, 0.16));
        }

        .case-section {
          padding: var(--section-y) 0;
          border-top: 1px solid rgba(26, 24, 20, 0.08);
        }

        .case-section > * {
          margin-top: 0;
          margin-bottom: 0;
        }

        .case-section > * + * {
          margin-top: var(--content-gap);
        }

        .section-header + .stats-grid,
        .section-header + .research-grid,
        .section-header + .timeline,
        .section-header + .quote-grid,
        .section-header + .funnel,
        .section-header + .pull-quote,
        .section-header + .problem-layout,
        .section-header + .reflection-grid,
        .overview-header + .snapshot-grid,
        .snapshot-grid + .large-image-card,
        .pull-quote + .insight-grid {
          margin-top: var(--content-gap);
        }

        .section-header {
          width: min(920px, 100%);
        }

        .section-header h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.7rem, 2.45vw, 3rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .context-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--card-gap);
  align-items: start;
}

.context-heading {
  grid-column: 1 / span 2;
}

.context-heading h2 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.7rem, 2.45vw, 3rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  margin: 0;
}

.context-body {
  grid-column: 3 / span 2;
  padding-top: var(--inner-text-gap);
}

.context-body p {
  font-family: var(--font-sans);
  font-size: clamp(0.98rem, 1.1vw, 1.1rem);
  line-height: 1.8;
  color: rgba(26, 24, 20, 0.68);
  margin: 0;
}

.context-body p + p {
  margin-top: 1rem;
}

.context-stats-row {
  grid-column: 1 / -1;
  width: min(980px, 100%);
  margin: var(--content-gap) auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--card-gap);
}

        .overview-headline h2 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.7rem, 2.45vw, 3rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin: 0;
        }

        .overview-body {
          grid-column: 3 / span 2;
          padding-top: var(--inner-text-gap);
        }

        .overview-body p,
        .body-copy p {
          font-family: var(--font-sans);
          font-size: clamp(0.98rem, 1.1vw, 1.1rem);
          line-height: 1.8;
          color: rgba(26, 24, 20, 0.68);
          margin: 0;
        }

        .overview-body p + p,
        .body-copy p + p {
          margin-top: 1rem;
        }

        .body-copy {
          width: min(760px, 100%);
          margin-top: var(--inner-text-gap);
        }

        .small-note {
          font-family: var(--font-mono) !important;
          font-size: 0.72rem !important;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.45) !important;
          margin-top: 1.4rem !important;
        }

        .snapshot-grid,
        .stats-grid,
        .research-grid,
        .quote-grid,
        .timeline,
        .insight-grid,
        .reflection-grid,
        .problem-layout {
          display: grid;
          gap: var(--card-gap);
        }

        .snapshot-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .stats-grid.three {
          grid-template-columns: repeat(3, 1fr);
        }

        .stats-grid.four {
          grid-template-columns: repeat(4, 1fr);
        }

        .research-grid,
        .quote-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .timeline {
          grid-template-columns: repeat(3, 1fr);
        }

        .insight-grid,
        .reflection-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .problem-layout {
          grid-template-columns: 1.25fr 0.9fr;
          align-items: stretch;
        }

        .snapshot-card,
        .stat-card,
        .research-card,
        .quote-card,
        .insight-card,
        .reflection-card,
        .cause-card,
        .final-problem-card {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.14);
          box-shadow: 0 24px 70px rgba(26, 24, 20, 0.08);
        }

        .snapshot-card,
        .stat-card,
        .research-card,
        .insight-card,
        .reflection-card,
        .cause-card,
        .final-problem-card {
          padding: 1.35rem;
        }

        .snapshot-card {
          min-height: 210px;
        }

        .snapshot-card p,
        .research-card p,
        .insight-card p,
        .final-problem-card p,
        .flow-title {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.52);
          margin: 0 0 0.75rem;
        }

        .snapshot-card h3,
        .research-card h3,
        .insight-card h3,
        .reflection-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.5rem, 2vw, 2.2rem);
          line-height: 0.95;
          letter-spacing: -0.045em;
          margin: 0 0 0.7rem;
        }

        .snapshot-card span,
        .research-card span,
        .insight-card span,
        .timeline-item span {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.55;
          color: rgba(26, 24, 20, 0.62);
        }

        .large-image-card {
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: 34px;
          overflow: hidden;
          background-color: rgba(246, 231, 161, 0.32);
          border: 1px solid rgba(26, 24, 20, 0.14);
          box-shadow: 0 24px 70px rgba(26, 24, 20, 0.08);
        }

        .large-image-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .stat-card {
  min-height: 165px;
  padding: 1.35rem;
  background-color: rgba(246, 231, 161, 0.74);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

        .stat-card h3 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 0 0 0.7rem;
}

.stat-card p {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  line-height: 1.55;
  color: rgba(26, 24, 20, 0.62);
  margin: 0;
}

        .timeline-item {
          border-radius: 28px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.14);
          padding: 1.35rem;
          box-shadow: 0 24px 70px rgba(26, 24, 20, 0.08);
        }

        .timeline-dot {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          background-color: rgba(246, 231, 161, 0.9);
          border: 1px solid rgba(26, 24, 20, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          margin-bottom: 1rem;
        }

        .timeline-item p {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.52);
          margin: 0 0 0.65rem;
        }

        .timeline-item h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.6rem, 2.2vw, 2.5rem);
          line-height: 0.95;
          letter-spacing: -0.045em;
          margin: 0 0 0.7rem;
        }

        .quote-card {
          padding: 1.5rem;
          background-color: rgba(253, 250, 245, 0.96);
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-card blockquote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.6rem, 2.5vw, 2.8rem);
          line-height: 1.05;
          letter-spacing: -0.045em;
          color: var(--color-ink);
          margin: 0;
        }

        .quote-card h3 {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 1.4rem 0 0.3rem;
        }

        .quote-card p {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: rgba(26, 24, 20, 0.55);
          margin: 0;
        }

        .funnel {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }

        .funnel-step {
          border-radius: 999px;
          background-color: rgba(253, 250, 245, 0.96);
          border: 1px solid rgba(26, 24, 20, 0.14);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 18px 50px rgba(26, 24, 20, 0.07);
          text-align: center;
        }

        .funnel-step span {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26, 24, 20, 0.45);
          white-space: nowrap;
        }

        .funnel-step p {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: rgba(26, 24, 20, 0.7);
          margin: 0;
        }

        .funnel-step.final {
          background-color: rgba(246, 231, 161, 0.82);
          border-color: rgba(26, 24, 20, 0.18);
        }

        .pull-quote {
          border-radius: 34px;
          background-color: rgba(246, 231, 161, 0.74);
          border: 1px solid rgba(26, 24, 20, 0.14);
          padding: clamp(1.5rem, 4vw, 3rem);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(2rem, 4vw, 4.7rem);
          line-height: 1;
          letter-spacing: -0.055em;
          box-shadow: 0 24px 70px rgba(26, 24, 20, 0.08);
        }

        .flow-line + .flow-line {
          margin-top: 2rem;
        }

        .flow-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
        }

        .flow-step-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .flow-pill {
          font-family: var(--font-sans);
          font-size: 0.86rem;
          color: rgba(26, 24, 20, 0.72);
          border-radius: 999px;
          border: 1px solid rgba(26, 24, 20, 0.13);
          background-color: rgba(253, 250, 245, 0.8);
          padding: 0.6rem 0.8rem;
          white-space: nowrap;
        }

        .flow-arrow {
          font-family: var(--font-mono);
          color: rgba(26, 24, 20, 0.45);
        }

        .final-problem-card {
          background-color: rgba(246, 231, 161, 0.82);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .final-problem-card h3 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.8rem, 3vw, 3.4rem);
          line-height: 1.03;
          letter-spacing: -0.05em;
          margin: 0;
        }

        .scope-section {
          border-top: 1px solid rgba(26, 24, 20, 0.14);
          border-bottom: 1px solid rgba(26, 24, 20, 0.14);
        }

        .reflection-card p {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.65;
          color: rgba(26, 24, 20, 0.66);
          margin: 0;
        }

        .case-footer {
          padding: 4rem 0 6rem;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .debug-alignment-grid {
            display: none;
          }

          .context-layout,
.overview-header {
  grid-template-columns: 1fr;
}

.context-heading,
.context-body,
.context-stats-row,
.overview-headline,
.overview-body {
  grid-column: auto;
}

.context-body {
  padding-top: 0;
}

.context-stats-row {
  width: 100%;
  grid-template-columns: 1fr;
  margin-top: 2.5rem;
}

          .overview-body {
            padding-top: 0;
          }

          .hero-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-strawberry {
            max-width: 240px;
            justify-self: start;
          }

          .case-nav {
            height: 60px;
          }

          .case-hero {
            min-height: 84vh;
          }

          .case-section {
            padding: 5rem 0;
          }

          .case-section > * + * {
            margin-top: 2.5rem;
          }

          .snapshot-grid,
          .stats-grid.three,
          .stats-grid.four,
          .timeline,
          .insight-grid,
          .reflection-grid,
          .problem-layout {
            grid-template-columns: 1fr;
          }

          .research-grid,
          .quote-grid {
            grid-template-columns: 1fr;
          }

          .large-image-card {
            aspect-ratio: 4 / 3;
          }

          .funnel-step {
            width: 100% !important;
            border-radius: 24px;
            flex-direction: column;
            gap: 0.4rem;
          }

          .flow-items {
            flex-direction: column;
            align-items: flex-start;
          }

          .flow-step-wrap {
            flex-direction: column;
            align-items: flex-start;
          }

          .flow-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </main>
  );
}