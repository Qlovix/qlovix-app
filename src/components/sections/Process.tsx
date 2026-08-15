"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We study the business before the brief - market, operations, and where value actually leaks.",
  },
  {
    n: "02",
    title: "Understand",
    desc: "Translating findings into a clear thesis: what needs to be true for this transformation to succeed.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Systems and interfaces are architected together, so form never outruns function.",
  },
  {
    n: "04",
    title: "Build",
    desc: "Production-grade engineering from day one - no throwaway prototypes.",
  },
  {
    n: "05",
    title: "Launch",
    desc: "A controlled release, instrumented from the first hour to the first quarter.",
  },
  {
    n: "06",
    title: "Optimize",
    desc: "The system keeps improving after launch - informed by what the data actually shows.",
  },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 65%"],
  });
  const fillHeight = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section id="process" className="py-[140px] md:py-[220px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal className="mb-[70px] md:mb-[110px]">
          <Eyebrow>How We Work</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 max-w-[760px]">
            A method, run the same way <em className="italic text-blue-soft">every time.</em>
          </p>
        </Reveal>

        <div ref={trackRef} className="relative max-w-[760px] mx-auto">
          <div className="absolute left-[14px] top-1.5 bottom-1.5 w-px bg-line" />
          <motion.div
            className="absolute left-[14px] top-1.5 w-px bg-gradient-to-b from-blue to-blue-soft origin-top"
            style={{ scaleY: fillHeight, height: "calc(100% - 12px)" }}
          />

          {steps.map((step) => (
            <ProcessStep key={step.n} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
}: {
  step: { n: string; title: string; desc: string };
}) {
  return (
    <div className="flex gap-9 py-11 relative">
      <motion.div
        initial={{ borderColor: "var(--line-strong)", color: "var(--ink-faint)" }}
        whileInView={{
          borderColor: "var(--blue)",
          color: "var(--blue-soft)",
          boxShadow: "0 0 20px 2px var(--blue-glow)",
        }}
        viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
        transition={{ duration: 0.5 }}
        className="w-[29px] h-[29px] rounded-full border bg-bg flex-none flex items-center justify-center font-mono text-[10px] z-[2]"
      >
        {step.n}
      </motion.div>
      <div>
        <h3 className="font-serif text-[26px] font-normal">{step.title}</h3>
        <p className="text-[14.5px] text-ink-dim mt-2 max-w-[420px] font-light leading-[1.7]">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
