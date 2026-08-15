"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import SignatureMark from "@/components/ui/SignatureMark";

const HeroScene = dynamic(() => import("@/components/canvas/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center items-center text-center pt-[120px] pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 38%, var(--blue-glow), transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(92,134,255,0.06), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 z-[1]">
        <HeroScene />
      </div>

      <div className="relative z-[2] max-w-[980px] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[92px] h-[92px] mx-auto mb-9"
        >
          <SignatureMark className="w-full h-full" strokeWidth={1.4} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif font-normal text-[clamp(42px,7vw,92px)] leading-[1.04] tracking-[-0.015em]"
        >
          Where Vision Becomes
          <br />
          <em className="italic opacity-90">Intelligent Reality.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="mt-7 mx-auto max-w-[560px] text-[17px] leading-[1.65] text-ink-dim font-light"
        >
          We help ambitious businesses transform through AI, intelligent
          software, and digital experiences engineered for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center mt-11"
        >
          <Link
            href="#final-cta"
            className="font-mono text-[12.5px] tracking-[0.05em] px-[30px] py-[15px] rounded-full bg-ink text-bg hover:bg-white transition-all hover:-translate-y-0.5"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-ink-faint"
      >
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue to-transparent" />
      </motion.div>
    </section>
  );
}
