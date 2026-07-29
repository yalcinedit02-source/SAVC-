import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";

type HomeProps = {
  onOpenCase: () => void;
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onBack: () => void;
};

export default function Home({ onOpenCase, onNavigate, activeTab, onBack }: HomeProps) {
  const [confirm, setConfirm] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!countdown) return;

    if (seconds <= 0) {
      setCountdown(false);
      onOpenCase();
      return;
    }

    const timer = window.setTimeout(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [countdown, onOpenCase, seconds]);

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 20px 0" }}>
        <BackButton onBack={onBack} />
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase" }}>Investigation</div>
          <h1 style={{ fontSize: 32, margin: "6px 0 0", color: "#f5f5f7", fontWeight: 600 }}>Current Case</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Panel tone="accent" style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <div style={{ color: "#ff8d8d", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Open file</div>
                <div style={{ fontSize: 24, fontWeight: 600, marginTop: 6 }}>Forest House Murder</div>
                <div style={{ color: "#d1d1d6", marginTop: 6 }}>Mardin / Savur • 18 July 2026</div>
              </div>
              <SectionBadge label="Active" tone="success" />
            </div>
          </Panel>
        </motion.div>

        <Panel tone="default" style={{ marginBottom: 16 }}>
          <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Case summary</div>
          <div style={{ color: "#f5f5f7", lineHeight: 1.7 }}>
            Review the file, examine the evidence, and continue the inquiry from the secure case workspace.
          </div>
        </Panel>

        <Panel tone="default" style={{ marginBottom: 16 }}>
          <button
            type="button"
            onClick={() => setConfirm(true)}
            style={{
              width: "100%",
              border: "none",
              background: "transparent",
              color: "#f5f5f7",
              padding: 0,
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Open case workspace</div>
                <div style={{ color: "#8e8e93", marginTop: 4 }}>Continue to the investigation overview.</div>
              </div>
              <div style={{ color: "#ff5b5b", fontSize: 24 }}>›</div>
            </div>
          </button>
        </Panel>

        {countdown ? (
          <Panel tone="default" style={{ marginTop: 8 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>Preparing</div>
              <div style={{ fontSize: 44, fontWeight: 600, marginTop: 8, color: "#f5f5f7" }}>00:{String(seconds).padStart(2, "0")}</div>
            </div>
          </Panel>
        ) : null}

        {confirm ? (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.78)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1100,
              padding: 20,
            }}
          >
            <Panel tone="elevated" style={{ width: 360, maxWidth: "100%" }}>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Open case file?</div>
              <div style={{ color: "#c7c7cc", lineHeight: 1.7 }}>
                This will begin the secure investigation sequence and take you into the case workspace.
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <button
                  type="button"
                  onClick={() => setConfirm(false)}
                  style={{
                    flex: 1,
                    padding: "12px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#f5f5f7",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConfirm(false);
                    setSeconds(60);
                    setCountdown(true);
                  }}
                  style={{
                    flex: 1,
                    padding: "12px 14px",
                    borderRadius: 999,
                    border: "none",
                    background: "linear-gradient(135deg, #ff3b30, #d40000)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Continue
                </button>
              </div>
            </Panel>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}