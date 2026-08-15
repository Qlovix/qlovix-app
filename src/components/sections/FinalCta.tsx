import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="py-[160px] md:py-[260px] text-center relative overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--blue-glow), transparent 65%)",
        }}
      />
      <div className="relative z-[2] max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal>
          <p className="font-serif font-light text-[clamp(34px,6vw,76px)] leading-[1.1] tracking-[-0.015em]">
            Ready to build
            <br />
            something <em className="italic text-blue-soft">extraordinary?</em>
          </p>
          <div className="mt-14 flex justify-center">
            <Button href="mailto:info@qlovix.com" variant="primary">
              Book Strategy Session
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
