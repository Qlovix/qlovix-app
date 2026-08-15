"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const CoreScene = dynamic(() => import("@/components/canvas/CoreScene"), {
  ssr: false,
});

const nodes = [
  "AI MODELS",
  "DATA INFRA",
  "AUTOMATION",
  "WEB PLATFORMS",
  "ANALYTICS",
  "CLOUD",
  "INTEGRATIONS",
  "WORKFLOWS",
];

export default function Technology() {
  return (
    <section id="technology" className="py-[140px] md:py-[200px] text-center relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <Reveal>
          <Eyebrow center>The Ecosystem</Eyebrow>
          <p className="font-serif font-light text-[clamp(28px,4.2vw,54px)] leading-[1.18] tracking-[-0.01em] mt-5 mx-auto max-w-[820px]">
            One connected intelligence layer, <em className="italic text-blue-soft">underneath everything.</em>
          </p>
        </Reveal>

        <div className="relative w-full h-[420px] md:h-[560px] mt-16">
          <div className="absolute inset-0">
            <CoreScene />
          </div>

          {nodes.map((label, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const radiusX = 42;
            const radiusY = 38;
            const x = 50 + Math.cos(angle) * radiusX;
            const y = 50 + Math.sin(angle) * radiusY;
            return (
              <motion.div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.1em] text-ink-dim border border-line-strong rounded-full px-3.5 py-1.5 bg-bg/60 backdrop-blur-sm"
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                {label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
