import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  tone?: "default" | "elevated" | "accent" | "alert";
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const tones: Record<NonNullable<PanelProps["tone"]>, CSSProperties> = {
  default: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.09)",
    boxShadow: "0 16px 42px rgba(0,0,0,0.24)",
    backdropFilter: "blur(18px)",
  },
  elevated: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 24px 56px rgba(0,0,0,0.3)",
    backdropFilter: "blur(20px)",
  },
  accent: {
    background: "linear-gradient(135deg, rgba(212,0,0,0.16), rgba(20,20,20,0.95))",
    border: "1px solid rgba(212,0,0,0.28)",
    boxShadow: "0 20px 46px rgba(0,0,0,0.28)",
    backdropFilter: "blur(20px)",
  },
  alert: {
    background: "linear-gradient(135deg, rgba(88,20,20,0.28), rgba(14,14,14,0.98))",
    border: "1px solid rgba(255,90,90,0.26)",
    boxShadow: "0 20px 42px rgba(0,0,0,0.26)",
    backdropFilter: "blur(20px)",
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
