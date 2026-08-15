export default function SignatureMark({
  className,
  strokeWidth = 2.2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="var(--blue)"
        strokeWidth={strokeWidth}
        strokeDasharray="7 5"
      />
      <path
        d="M62 62 L78 78"
        stroke="var(--blue)"
        strokeWidth={strokeWidth + 0.2}
        strokeLinecap="round"
      />
    </svg>
  );
}
