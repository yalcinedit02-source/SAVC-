import { motion } from "framer-motion";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";
import type { Case1Notification } from "../data/case1Broadcasts";

type NotificationsProps = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showBadge?: boolean;
  notifications: Case1Notification[];
  onNotificationSelect: (notification: Case1Notification) => void;
};

export default function Notifications({ onBack, activeTab, onNavigate, showBadge = true, notifications, onNotificationSelect }: NotificationsProps) {
  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate} showTvBadge={true} showNotificationsBadge={showBadge}>
      <div style={{ minHeight: "100vh", padding: "20px 20px 110px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <div style={{ marginBottom: 18 }}>
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>Bildiriler</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
              <h1 style={{ fontSize: 28, margin: 0, fontWeight: 700 }}>İnceleme akışı</h1>
              {showBadge ? (
                <motion.span animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5b5b", boxShadow: "0 0 10px rgba(255,91,91,0.6)" }} />
              ) : null}
            </div>
          </div>

          {notifications.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              <Panel tone="default" style={{ padding: 22 }}>
                <div style={{ color: "#d1d1d6", fontSize: 16, lineHeight: 1.7 }}>Henüz yeni bildirim yok. Bildirimler burada görünmeye başladığında takip kolaylaşır.</div>
              </Panel>
            </motion.div>
          ) : null}

          {notifications.map((notification, index) => (
            <motion.button key={notification.id} type="button" onClick={() => onNotificationSelect(notification)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.25 }} style={{ display: "block", width: "100%", padding: 0, border: "none", background: "transparent", color: "inherit", textAlign: "left", cursor: "pointer" }}>
              <Panel tone="accent" style={{ marginBottom: 12, border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 14px 28px rgba(0,0,0,0.14)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 15 }}>{notification.title}</div>
                      <SectionBadge label="Yeni" tone="accent" />
                    </div>
                    <div style={{ color: "#c7c7cc", lineHeight: 1.6, fontSize: 14 }}>{notification.detail}</div>
                  </div>
                </div>
              </Panel>
            </motion.button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
