import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";

type NotificationsProps = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
};

const updates = [
  { title: "New lead received", detail: "A witness statement now places a vehicle near the gate at 00:19.", time: "2 min ago", tone: "accent" as const },
  { title: "Evidence logged", detail: "The keycard has been cataloged and marked as priority evidence.", time: "18 min ago", tone: "success" as const },
  { title: "Timeline updated", detail: "The suspect movement sequence has been revised after re-checking the record.", time: "1 hr ago", tone: "muted" as const },
];

export default function Notifications({ onBack, activeTab, onNavigate }: NotificationsProps) {
  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate}>
      <div style={{ minHeight: "100vh", background: "#050505", color: "#f5f5f7", padding: "18px 18px 110px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>Updates</div>
            <h1 style={{ fontSize: 28, margin: "6px 0 0" }}>Investigation feed</h1>
          </div>

          {updates.map((item) => (
            <Panel key={item.title} tone="default" style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <SectionBadge label={item.time} tone={item.tone} />
                  </div>
                  <div style={{ color: "#8e8e93", lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
