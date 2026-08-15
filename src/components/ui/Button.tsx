import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "font-mono text-[12.5px] tracking-[0.05em] px-[30px] py-[15px] rounded-full inline-flex items-center gap-2 transition-all duration-400 ease-out hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-white"
      : "border border-line-strong text-ink hover:border-blue-soft hover:bg-blue-glow";

  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
