import type { ReactNode } from "react";

type BackButtonProps = {
  onBack: () => void;
  label?: ReactNode;
};

export default function BackButton({ onBack, label = "Back" }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onBack}
      style={{
        background: "transparent",
        border: "none",
        color: "#f5f5f7",
        padding: 0,
        marginBottom: 18,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 15,
        fontWeight: 500,
      }}
    >
      <span style={{ fontSize: 18, lineHeight: 1 }}>←</span>
      {label}
    </button>
  );
}
