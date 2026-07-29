import type { ReactNode } from "react";

type StatTileProps = {
  label: string;
  value: string | number;
  accent?: string;
  detail?: ReactNode;
};

export default function StatTile({ label, value, accent, detail }: StatTileProps) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 150,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 16,
      }}
    >
      <div style={{ color: "#8e8e93", fontSize: 13, marginBottom: 6 }}>{label}</div>
      <div style={{ color: accent ?? "#f5f5f7", fontSize: 28, fontWeight: 700 }}>{value}</div>
      {detail ? <div style={{ color: "#8e8e93", marginTop: 6, fontSize: 13 }}>{detail}</div> : null}
    </div>
  );
}
