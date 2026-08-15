import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`font-mono text-[11px] tracking-[0.22em] uppercase text-blue-soft flex items-center gap-2.5 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-[5px] h-[5px] rounded-full bg-blue shadow-[0_0_8px_2px_var(--blue-glow)] inline-block" />
      {children}
    </div>
  );
}
