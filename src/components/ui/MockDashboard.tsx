export default function MockDashboard({
  kpi,
  kpiLabel,
  bars,
}: {
  kpi: string;
  kpiLabel: string;
  bars: number[];
}) {
  return (
    <div
      className="relative rounded-[10px] overflow-hidden border border-line-strong aspect-video shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)]"
      style={{ background: "linear-gradient(160deg, #10131c, #06070a)" }}
    >
      <div className="h-[34px] flex items-center gap-1.5 px-4 border-b border-line">
        <span className="w-[7px] h-[7px] rounded-full bg-line-strong" />
        <span className="w-[7px] h-[7px] rounded-full bg-line-strong" />
        <span className="w-[7px] h-[7px] rounded-full bg-line-strong" />
      </div>
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 h-[calc(100%-34px)]">
        <div className="hidden md:block border-r border-line pr-6">
          <div className="h-2 rounded bg-line-strong mb-3 w-[70%]" />
          <div className="h-2 rounded bg-line-strong mb-3 w-[40%]" />
          <div className="h-2 rounded bg-line-strong mb-3 w-[70%]" />
          <div className="h-2 rounded bg-line-strong mb-3 w-[40%]" />
          <div className="h-2 rounded bg-line-strong w-[70%]" />
        </div>
        <div>
          <div className="font-mono text-[34px] text-blue-soft tracking-[-0.02em]">
            {kpi}
          </div>
          <div className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.1em] mt-2">
            {kpiLabel}
          </div>
          <div className="mt-6 h-[70px] flex items-end gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm opacity-55"
                style={{
                  height: `${h}%`,
                  background: "linear-gradient(180deg, var(--blue-soft), transparent)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
