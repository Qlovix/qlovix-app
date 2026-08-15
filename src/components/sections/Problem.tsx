import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const items = [
  {
    tag: "01 / Strategy alone",
    text: "A plan without engineering is a slide deck waiting to expire.",
  },
  {
    tag: "02 / Engineering alone",
    text: "Code without direction becomes a liability the moment the market moves.",
  },
  {
    tag: "03 / Automation alone",
    text: "Automation without judgment just makes noise happen faster.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-b border-line bg-bg-elevated py-[100px] md:py-[160px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal>
          <Eyebrow>Why Transformation Fails</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[960px]">
            The gap isn&apos;t strategy. It isn&apos;t technology.{" "}
            <em className="italic text-blue-soft">
              It&apos;s the space between them.
            </em>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px mt-[70px] md:mt-[90px] bg-line">
          {items.map((item, i) => (
            <Reveal key={item.tag} delay={i * 0.1}>
              <div className="bg-bg-elevated px-8 md:px-10 py-12 h-full">
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em]">
                  {item.tag}
                </div>
                <p className="font-serif text-[22px] leading-[1.4] mt-4.5 font-normal">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
