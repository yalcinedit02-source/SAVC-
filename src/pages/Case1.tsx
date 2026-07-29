import { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";

const cards = [
  { icon: "📄", title: "Case Details", subtitle: "Overview, location, timeline and status." },
  { icon: "🧭", title: "Crime Scene", subtitle: "Photographs, notes and scene observations." },
  { icon: "🧪", title: "Evidence", subtitle: "Recovered material, catalog and chain of custody." },
  { icon: "👤", title: "Suspects", subtitle: "Profiles, movement and prior associations." },
  { icon: "🗣️", title: "Witnesses", subtitle: "Witness statements and contact points." },
  { icon: "🧬", title: "Laboratory", subtitle: "Forensic reports and analysis results." },
];

type Case1Props = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
};

export default function Case1({ onBack, activeTab, onNavigate }: Case1Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate}>
      <div style={{ minHeight: "100vh", background: "#050505", color: "#f5f5f7", padding: "18px 18px 110px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Panel tone="accent" style={{ marginBottom: 16 }}>
            <div style={{ color: "#ff8d8d", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Case file</div>
            <div style={{ fontSize: 28, fontWeight: 600, marginTop: 6 }}>Forest House Murder</div>
            <div style={{ color: "#d1d1d6", marginTop: 8 }}>2026 / 001 • Mardin / Savur • 18 July 2026</div>
            <div style={{ marginTop: 14 }}>
              <SectionBadge label="Active investigation" tone="success" />
            </div>
          </Panel>
        </motion.div>

        <div style={{ display: "grid", gap: 12 }}>
          {cards.map((card) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setSelected(card.title)}
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                padding: 0,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <Panel tone={selected === card.title ? "elevated" : "default"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ fontSize: 22 }}>{card.icon}</div>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 600 }}>{card.title}</div>
                      <div style={{ color: "#8e8e93", marginTop: 4, fontSize: 14 }}>{card.subtitle}</div>
                    </div>
                  </div>
                  <div style={{ color: "#ff5b5b", fontSize: 22 }}>›</div>
                </div>
              </Panel>
            </button>
          ))}
        </div>
        </div>
      </div>
    </AppShell>
  );
}
