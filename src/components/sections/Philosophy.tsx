import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-line py-[160px] md:py-[220px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw] grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <Reveal>
          <Eyebrow>The Belief</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[960px]">
            Most companies build software. <em className="italic text-blue-soft">Few build intelligence.</em>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base leading-[1.75] text-ink-dim font-light max-w-[480px]">
            Software tells a business what happened. Intelligence tells it
            what to do next. QLOVIX exists in that second category -
            designing the systems, interfaces and automations that let
            ambitious companies think and move faster than their market.
          </p>
          <p className="text-base leading-[1.75] text-ink-dim font-light max-w-[480px] mt-5">
            That is the work. Not decoration. Not a redesign. A rebuilt
            foundation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
