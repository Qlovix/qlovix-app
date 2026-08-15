import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const capabilities = [
  {
    code: "SYS · AI SYSTEMS",
    title: "Models that make decisions, not just predictions.",
    desc: "We design and ship AI systems that sit inside real workflows — reasoning over your data, not just summarizing it.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="#5c86ff" strokeWidth="1" />
        <circle cx="50" cy="50" r="18" stroke="#5c86ff" strokeOpacity=".5" strokeWidth="1" />
        <path d="M50 20 V80 M20 50 H80" stroke="#5c86ff" strokeOpacity=".3" strokeWidth="1" />
      </svg>
    ),
  },
  {
    code: "WEB · ENTERPRISE WEBSITES",
    title: "Editorial-grade sites for companies with something to prove.",
    desc: "Precision typography, considered motion, and engineering discipline — websites built to change how a market perceives you.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="60" height="60" stroke="#5c86ff" strokeWidth="1" />
        <path d="M20 40 H80 M40 20 V80" stroke="#5c86ff" strokeOpacity=".35" strokeWidth="1" />
      </svg>
    ),
    reverse: true,
  },
  {
    code: "PRD · DIGITAL PRODUCTS",
    title: "Applications engineered for scale from line one.",
    desc: "From internal tools to customer-facing platforms — architected, tested, and built to hold up under real usage.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M30 70 L50 30 L70 70 Z" stroke="#5c86ff" strokeWidth="1" />
        <circle cx="50" cy="50" r="4" fill="#5c86ff" />
      </svg>
    ),
  },
  {
    code: "BI · BUSINESS INTELLIGENCE",
    title: "Dashboards that end debates, not start them.",
    desc: "We turn scattered data into a single source of truth your leadership actually trusts and uses daily.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <path
          d="M25 75 V45 M45 75 V30 M65 75 V55 M85 75 V20"
          stroke="#5c86ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity=".7"
        />
      </svg>
    ),
    reverse: true,
  },
  {
    code: "BRD · BRAND STRATEGY",
    title: "Positioning sharp enough to say no to the wrong clients.",
    desc: "A brand isn't a logo. It's the filter that decides which opportunities are worth your time.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="26" stroke="#5c86ff" strokeWidth="1" />
        <path
          d="M50 24 V16 M50 84 V76 M24 50 H16 M84 50 H76"
          stroke="#5c86ff"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    code: "AUT · AUTOMATION",
    title: "The quiet infrastructure that removes 40 hours a week.",
    desc: "Workflow automation designed around how your team actually operates — not a generic playbook.",
    glyph: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="30" cy="30" r="6" stroke="#5c86ff" strokeWidth="1" />
        <circle cx="70" cy="30" r="6" stroke="#5c86ff" strokeWidth="1" />
        <circle cx="50" cy="70" r="6" stroke="#5c86ff" strokeWidth="1" />
        <path
          d="M34 33 L47 66 M66 33 L53 66 M36 30 H64"
          stroke="#5c86ff"
          strokeOpacity=".35"
          strokeWidth="1"
        />
      </svg>
    ),
    reverse: true,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-[140px] md:py-[200px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal className="mb-[80px] md:mb-[120px]">
          <Eyebrow>What We Build</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[820px]">
            Six disciplines. <em className="italic text-blue-soft">One system of thought.</em>
          </p>
        </Reveal>

        {capabilities.map((cap, i) => (
          <Reveal key={cap.code}>
            <div
              className={`grid md:grid-cols-2 gap-9 md:gap-[70px] items-center py-14 md:py-[90px] border-t border-line ${
                i === capabilities.length - 1 ? "border-b" : ""
              }`}
            >
              <div className={cap.reverse ? "md:order-2" : "md:order-1"}>
                <div className="font-mono text-xs text-blue-soft tracking-[0.1em]">
                  {cap.code}
                </div>
                <h3 className="font-serif text-[clamp(28px,3.4vw,44px)] font-normal mt-3.5 tracking-[-0.01em]">
                  {cap.title}
                </h3>
                <p className="text-ink-dim text-[15px] leading-[1.75] mt-4.5 max-w-[400px] font-light">
                  {cap.desc}
                </p>
              </div>
              <div
                className={`relative aspect-[4/3] rounded-sm overflow-hidden border border-line ${
                  cap.reverse ? "md:order-1" : "md:order-2"
                }`}
                style={{
                  background:
                    "linear-gradient(155deg, var(--bg-elevated-2), var(--bg))",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, var(--blue-glow), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-85">
                  <div className="w-[46%] h-[46%]">{cap.glyph}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
