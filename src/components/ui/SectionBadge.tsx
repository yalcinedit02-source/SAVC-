type SectionBadgeProps = {
  label: string;
  tone?: "muted" | "success" | "accent";
};

const tones: Record<NonNullable<SectionBadgeProps["tone"]>, { background: string; color: string }> = {
  muted: { background: "rgba(255,255,255,0.08)", color: "#d1d1d6" },
  success: { background: "rgba(52,199,89,0.16)", color: "#7ef29a" },
  accent: { background: "rgba(212,0,0,0.18)", color: "#ff7a7a" },
};

export default function SectionBadge({ label, tone = "muted" }: SectionBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...tones[tone],
      }}
    >
      {label}
    </span>
  );
}
