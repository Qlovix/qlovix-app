import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import MockDashboard from "@/components/ui/MockDashboard";

const cases = [
  {
    label: "Concept 01 — Operations Intelligence",
    title: "A logistics dashboard that predicts delays before they happen.",
    sector: "Logistics",
    focus: "BI + Automation",
    kpi: "−34%",
    kpiLabel: "Delay incidents, quarter over quarter",
    bars: [30, 55, 40, 70, 50, 85, 60, 95],
    challenge:
      "Regional delays were discovered days after they cost real money, buried across five disconnected systems.",
    transformation:
      "A unified intelligence layer forecasting risk 48 hours ahead, surfaced in one interface.",
    result:
      "Delay-related losses reduced by over a third within the first operating quarter.",
  },
  {
    label: "Concept 02 — Enterprise Web Platform",
    title:
      "A financial services site built to earn trust in the first three seconds.",
    sector: "Financial Services",
    focus: "Brand + Web",
    kpi: "2.1s",
    kpiLabel: "Full load, largest contentful paint",
    bars: [20, 45, 65, 35, 80, 55, 90, 70],
    challenge:
      "A 12-year-old site was actively costing the firm credibility with institutional clients.",
    transformation:
      "A rebuilt identity and platform — editorial, restrained, and engineered for compliance-heavy content.",
    result: "Qualified inbound inquiries nearly doubled within 90 days of launch.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-line bg-bg-elevated py-[140px] md:py-[200px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal>
          <Eyebrow>Selected Concept Work</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[760px]">
            Engineering experiments, built to production standard.
          </p>
        </Reveal>

        {cases.map((c) => (
          <div key={c.label} className="py-[90px] md:py-[130px] border-b border-line last:border-b-0">
            <div className="flex justify-between items-end gap-10 flex-wrap mb-[50px] md:mb-[60px]">
              <div>
                <Eyebrow>{c.label}</Eyebrow>
                <h3 className="font-serif text-[clamp(30px,4vw,54px)] font-normal max-w-[640px] mt-4">
                  {c.title}
                </h3>
              </div>
              <div className="flex gap-10 font-mono text-[11px] text-ink-faint uppercase tracking-[0.08em]">
                <span>
                  Sector
                  <b className="block font-sans text-[13px] text-ink-dim normal-case tracking-normal font-normal mt-1.5">
                    {c.sector}
                  </b>
                </span>
                <span>
                  Focus
                  <b className="block font-sans text-[13px] text-ink-dim normal-case tracking-normal font-normal mt-1.5">
                    {c.focus}
                  </b>
                </span>
              </div>
            </div>

            <Reveal>
              <MockDashboard kpi={c.kpi} kpiLabel={c.kpiLabel} bars={c.bars} />
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-[50px]">
              <div>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em]">
                  Challenge
                </div>
                <p className="text-[14.5px] text-ink-dim leading-[1.7] mt-3 font-light">
                  {c.challenge}
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em]">
                  Transformation
                </div>
                <p className="text-[14.5px] text-ink-dim leading-[1.7] mt-3 font-light">
                  {c.transformation}
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em]">
                  Result
                </div>
                <p className="text-[14.5px] text-ink-dim leading-[1.7] mt-3 font-light">
                  {c.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
