import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";

type HomeProps = {
  onOpenCase: () => void;
  caseOpening: boolean;
  caseSeconds: number;
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onBack: () => void;
  showHomeBadge?: boolean;
  showTvBadge?: boolean;
  showNotificationsBadge?: boolean;
  showProfileBadge?: boolean;
};

export default function Home({ onOpenCase, caseOpening, caseSeconds, onNavigate, activeTab, onBack, showHomeBadge = true, showTvBadge = true, showNotificationsBadge = true, showProfileBadge = true }: HomeProps) {
  const progress = 1 - caseSeconds / 10;

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "28px 20px 96px" }}>
        <BackButton onBack={onBack} />
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div style={{ color: "#8e8e93", fontSize: 12, letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: 8 }}>
            Investigation
          </div>
          <h1 style={{ fontSize: 34, lineHeight: 1.05, margin: 0, color: "#f5f5f7", fontWeight: 700 }}>Current Case</h1>
          <p style={{ color: "#c7c7cc", marginTop: 10, fontSize: 15, lineHeight: 1.7 }}>
            Review the active file and continue the secure investigative workflow.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.35 }}>
          <Panel tone="accent" style={{ marginTop: 24, padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#ff8d8d", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 8 }}>Open file</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#f5f5f7", lineHeight: 1.15 }}>Forest House Murder</div>
                <div style={{ color: "#d1d1d6", marginTop: 8, fontSize: 14 }}>Mardin / Savur • 18 July 2026</div>
              </div>
              <SectionBadge label="Active" tone="accent" />
            </div>

            <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#d1d1d6", fontSize: 13 }}>
                <span>Case readiness</span>
                <span style={{ color: "#f5f5f7", fontWeight: 600 }}>94%</span>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.12)" }}>
                <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ duration: 0.5 }} style={{ height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #ff6b6b, #d40000)" }} />
              </div>
            </div>
          </Panel>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.35 }}>
          <Panel tone="default" style={{ marginTop: 16, padding: 20 }}>
            <div style={{ color: "#8e8e93", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 10 }}>
              Summary
            </div>
            <p style={{ color: "#d1d1d6", lineHeight: 1.75, fontSize: 15 }}>
              Review scene details, evidence status, and witness notes before entering the secure workspace.
            </p>
          </Panel>
        </motion.div>

        <motion.button
          type="button"
          onClick={onOpenCase}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          style={{
            width: "100%",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
            backdropFilter: "blur(18px)",
            color: "#f5f5f7",
            padding: "16px 18px",
            textAlign: "left",
            cursor: "pointer",
            borderRadius: 22,
            marginTop: 16,
            boxShadow: "0 20px 44px rgba(0,0,0,0.22)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(212,0,0,0.16)" }}>
                <ShieldCheck size={20} color="#ff8d8d" />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>Open case workspace</div>
                <div style={{ color: "#c7c7cc", marginTop: 3, fontSize: 13 }}>Continue to the investigation overview</div>
              </div>
            </div>
            <div style={{ color: "#ff8d8d", fontSize: 24 }}>›</div>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {caseOpening ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.24 }}
            style={{
              position: "fixed",
              left: 16,
              right: 16,
              bottom: "calc(82px + env(safe-area-inset-bottom))",
              display: "flex",
              justifyContent: "center",
              zIndex: 1200,
              pointerEvents: "none",
            }}
          >
            <div style={{ width: "100%", maxWidth: 440, border: "1px solid rgba(255,141,141,0.28)", borderRadius: 16, padding: 16, background: "rgba(18,12,12,0.94)", backdropFilter: "blur(18px)", boxShadow: "0 16px 44px rgba(0,0,0,0.48)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(212,0,0,0.16)" }}>
                  <ShieldCheck size={20} color="#ff8d8d" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#f5f5f7", fontSize: 14, fontWeight: 700 }}>Vaka dosyası hazırlanıyor</div>
                  <div style={{ color: "#a8a8ad", marginTop: 3, fontSize: 12 }}>Güvenli erişim başlatılıyor</div>
                </div>
                <div style={{ color: "#ff8d8d", fontVariantNumeric: "tabular-nums", fontSize: 18, fontWeight: 700 }}>00:{String(caseSeconds).padStart(2, "0")}</div>
              </div>
              <div style={{ height: 4, marginTop: 14, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress * 100}%` }} transition={{ duration: 0.45 }} style={{ height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #ff8d8d, #d40000)" }} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AppShell>
  );
}