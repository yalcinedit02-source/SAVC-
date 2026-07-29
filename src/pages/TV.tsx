import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";

type TVProps = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
};

type ChannelCardProps = {
  title: string;
  subtitle: string;
  badge: string;
  tone: "accent" | "default";
  isPlayable: boolean;
  message: string;
};

function ChannelCard({ title, subtitle, badge, tone, isPlayable, message }: ChannelCardProps) {
  return (
    <Panel tone={tone} style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ padding: "18px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div>
          <div style={{ color: "#8e8e93", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase" }}>{title}</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>{subtitle}</div>
        </div>
        <div
          style={{
            padding: "7px 10px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            background: badge === "LIVE" ? "rgba(255,59,48,0.18)" : "rgba(255,255,255,0.08)",
            color: badge === "LIVE" ? "#ff8d8d" : "#d1d1d6",
            border: badge === "LIVE" ? "1px solid rgba(255,59,48,0.25)" : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {badge}
        </div>
      </div>

      <div
        style={{
          height: 268,
          margin: "0 18px 18px",
          borderRadius: 24,
          background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at top left, rgba(255,59,48,0.16), transparent 56%)",
          }}
        />
        <div style={{ textAlign: "center", maxWidth: 320, position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              margin: "0 auto 14px",
              display: "grid",
              placeItems: "center",
              background: isPlayable ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
              color: "#f5f5f7",
              fontSize: 24,
            }}
          >
            {isPlayable ? "▶" : "◌"}
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{isPlayable ? "Now playing" : "Unavailable"}</div>
          <div style={{ color: "#d1d1d6", lineHeight: 1.6 }}>{message}</div>
        </div>
      </div>
    </Panel>
  );
}

export default function TV({ onBack, activeTab, onNavigate }: TVProps) {
  const now = new Date();
  const currentHour = now.getHours();
  const isChannelOneLive = currentHour >= 20 && currentHour < 22;

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate}>
      <div style={{ minHeight: "100vh", background: "#050505", color: "#f5f5f7", padding: "18px 18px 110px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <div style={{ marginBottom: 18 }}>
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase" }}>Apple TV</div>
            <h1 style={{ fontSize: 30, margin: "6px 0 0", fontWeight: 600 }}>Channels</h1>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            <ChannelCard
              title="Channel 1"
              subtitle="Investigation Broadcast"
              badge={isChannelOneLive ? "LIVE" : "OFFLINE"}
              tone="accent"
              isPlayable={isChannelOneLive}
              message={
                isChannelOneLive
                  ? "Scheduled live broadcast is currently playing."
                  : "Broadcast is currently offline. Please come back during the scheduled live time."
              }
            />

            <ChannelCard
              title="Channel 2"
              subtitle="Archive Playback"
              badge="OFFLINE"
              tone="default"
              isPlayable={false}
              message="No broadcast available."
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}