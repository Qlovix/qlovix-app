import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const beliefs = [
  {
    title: "Execution is the strategy",
    desc: "A plan is only as good as its worst-implemented detail. We treat delivery as a design discipline.",
  },
  {
    title: "Intelligence is infrastructure",
    desc: "AI isn't a feature to bolt on. It's a layer that belongs in how the business runs, end to end.",
  },
  {
    title: "Craft is a trust signal",
    desc: "The quality of your interface tells clients how seriously to take your claims — before they read a word.",
  },
];

export default function Why() {
  return (
    <section
      id="why"
      className="border-t border-b border-line bg-bg-elevated py-[140px] md:py-[200px]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw] grid md:grid-cols-2 gap-12 md:gap-[100px]">
        <Reveal>
          <Eyebrow>Why We Exist</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5">
            Because most transformation is <em className="italic text-blue-soft">theater.</em>
          </p>
          <p className="text-base leading-[1.75] text-ink-dim font-light mt-6 max-w-[480px]">
            Rebrands without operational change. Dashboards nobody opens. AI
            pilots that never leave the sandbox. We started QLOVIX to close
            the distance between what a business says it&apos;s becoming and
            what it actually is.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-9 mt-2.5">
          {beliefs.map((b) => (
            <div key={b.title} className="pt-6 border-t border-line">
              <h4 className="font-serif text-[19px] font-normal mb-2">
                {b.title}
              </h4>
              <p className="text-sm text-ink-dim leading-[1.7] font-light">
                {b.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
