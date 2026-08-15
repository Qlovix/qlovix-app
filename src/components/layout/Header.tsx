import SignatureMark from "@/components/ui/SignatureMark";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#technology", label: "Technology" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[6vw] py-6 md:py-[26px]">
      <a
        href="#hero"
        className="flex items-center gap-2.5 font-serif text-xl tracking-tight"
      >
        <SignatureMark className="w-[22px] h-[22px]" />
        QLOVIX
      </a>

      <nav className="hidden md:flex gap-10 text-[13px] text-ink-dim">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative py-1 hover:text-ink transition-colors group"
          >
            {l.label}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-blue transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <a
        href="mailto:info@qlovix.com"
        className="font-mono text-xs tracking-[0.06em] border border-line-strong px-[18px] py-[9px] rounded-full hover:border-blue-soft hover:bg-blue-glow transition-colors"
      >
        Get in touch
      </a>
    </header>
  );
}
