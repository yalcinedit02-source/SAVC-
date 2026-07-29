import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  tone?: "default" | "elevated" | "accent" | "alert";
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const tones: Record<NonNullable<PanelProps["tone"]>, CSSProperties> = {
  default: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
  },
  elevated: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.11)",
    boxShadow: "0 18px 48px rgba(0,0,0,0.34)",
  },
  accent: {
    background: "linear-gradient(135deg, rgba(212,0,0,0.16), rgba(20,20,20,0.95))",
    border: "1px solid rgba(212,0,0,0.28)",
    boxShadow: "0 18px 46px rgba(0,0,0,0.32)",
  },
  alert: {
    background: "linear-gradient(135deg, rgba(88,20,20,0.28), rgba(14,14,14,0.98))",
    border: "1px solid rgba(255,90,90,0.26)",
    boxShadow: "0 16px 42px rgba(0,0,0,0.3)",
  },
};

export default function Panel({ children, tone = "default", style, onClick }: PanelProps) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 24,
        padding: 20,
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
