import type { CSSProperties, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  style?: CSSProperties;
};

const variants: Record<NonNullable<ActionButtonProps["variant"]>, CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #ff3b30, #d40000)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  secondary: {
    background: "rgba(255,255,255,0.08)",
    color: "#f7f7f7",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  ghost: {
    background: "transparent",
    color: "#f7f7f7",
    border: "1px solid rgba(255,255,255,0.12)",
  },
};

export default function ActionButton({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  style,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: "14px 18px",
        borderRadius: 999,
        fontSize: 15,
        fontWeight: 700,
        letterSpacing: "0.02em",
        cursor: "pointer",
        transition: "transform 180ms ease, background 180ms ease",
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
