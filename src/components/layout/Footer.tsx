import Link from "next/link";
import SignatureMark from "@/components/ui/SignatureMark";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6vw]">
        <div className="flex justify-between items-start gap-10 flex-wrap pb-[70px]">
          <div>
            <div className="font-serif text-2xl">QLOVIX</div>
            <div className="font-mono text-[11px] text-ink-faint mt-2.5 tracking-[0.05em]">
              BUILDING INTELLIGENCE. DRIVING INNOVATION.
            </div>
          </div>

          <div className="flex gap-16 flex-wrap">
            <FootCol
              title="Company"
              links={[
                { href: "#philosophy", label: "Philosophy" },
                { href: "#capabilities", label: "Capabilities" },
                { href: "#work", label: "Work" },
              ]}
            />
            <FootCol
              title="Connect"
              links={[
                { href: "#", label: "LinkedIn" },
                { href: "mailto:info@qlovix.com", label: "Email" },
                { href: "tel:+918861141189", label: "Contact" },
              ]}
            />
          </div>
        </div>

        <div className="flex justify-between pt-[30px] border-t border-line font-mono text-[11px] text-ink-faint flex-wrap gap-2.5">
          <span>© 2026 QLOVIX. All rights reserved.</span>
          <SignatureMark className="w-[26px] h-[26px] opacity-50" />
        </div>
      </div>
    </footer>
  );
}

function FootCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em] mb-4">
        {title}
      </h5>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="block text-sm text-ink-dim mb-2.5 hover:text-ink transition-colors"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
