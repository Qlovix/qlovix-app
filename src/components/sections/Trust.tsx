import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const tags = ["Internal Projects", "Concept Demonstrations", "Engineering Experiments"];

export default function Trust() {
  return (
    <section id="trust" className="pb-[140px] md:pb-[200px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal
          className="border border-line rounded-sm grid md:grid-cols-2 gap-10 md:gap-[60px] items-center px-8 py-12 md:px-[60px] md:py-[70px]"
        >
          <div
            style={{
              background:
                "linear-gradient(160deg, var(--bg-elevated), var(--bg))",
            }}
          >
            <Eyebrow>A Note on Transparency</Eyebrow>
            <p className="font-serif font-light text-[clamp(22px,2.6vw,30px)] mt-5 leading-[1.25]">
              We&apos;d rather show real work than fake reviews.
            </p>
          </div>
          <div>
            <p className="text-base leading-[1.75] text-ink-dim font-light">
              The case studies above are selected internal projects and
              concept demonstrations built to production standard. As our
              client roster grows, this section will feature their results
              directly — with their permission, never before.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] tracking-[0.06em] uppercase border border-line-strong px-4 py-2 rounded-full text-ink-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
