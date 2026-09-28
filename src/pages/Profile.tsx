import { motion } from "framer-motion";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";

type ProfileProps = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showHomeBadge?: boolean;
  showTvBadge?: boolean;
  showNotificationsBadge?: boolean;
  showProfileBadge?: boolean;
};

const achievements = ["First Contact", "Evidence Collector", "Casebreaker", "Night Shift"];

export default function Profile({ onBack, activeTab, onNavigate, showHomeBadge = true, showTvBadge = true, showNotificationsBadge = true, showProfileBadge = true }: ProfileProps) {
  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge}>
      <div style={{ minHeight: "100vh", padding: "20px 20px 110px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Panel tone="accent" style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div>
                <div style={{ color: "#ff8d8d", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Investigator</div>
                <div style={{ fontSize: 24, fontWeight: 600, marginTop: 6 }}>Detective Elena Voss</div>
                <div style={{ color: "#d1d1d6", marginTop: 6 }}>Senior field investigator • Premium access active</div>
              </div>
              <SectionBadge label="Premium" tone="accent" />
            </div>
            </Panel>
          </motion.div>

          <Panel tone="default" style={{ marginBottom: 12 }}>
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Overview</div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ color: "#8e8e93" }}>Completed cases</span>
              <span style={{ fontWeight: 600 }}>12</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ color: "#8e8e93" }}>Evidence reviewed</span>
              <span style={{ fontWeight: 600 }}>84</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span style={{ color: "#8e8e93" }}>Current focus</span>
              <span style={{ fontWeight: 600 }}>Case 001</span>
            </div>
          </Panel>

          <Panel tone="default">
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}>Achievements</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {achievements.map((item) => (
                <div key={item} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "8px 12px", color: "#d1d1d6" }}>{item}</div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
