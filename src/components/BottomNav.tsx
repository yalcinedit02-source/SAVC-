import { motion } from "framer-motion";
import { Bell, House, Tv, User } from "lucide-react";

type BottomNavProps = {
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showHomeBadge?: boolean;
  showTvBadge?: boolean;
  showNotificationsBadge?: boolean;
  showProfileBadge?: boolean;
};

const items = [
  { key: "home" as const, icon: House, label: "Home" },
  { key: "tv" as const, icon: Tv, label: "TV" },
  { key: "notifications" as const, icon: Bell, label: "Alerts" },
  { key: "profile" as const, icon: User, label: "Profile" },
];

export default function BottomNav({ activeTab, onNavigate, showHomeBadge = true, showTvBadge = true, showNotificationsBadge = true, showProfileBadge = true }: BottomNavProps) {
  return (
    <motion.nav
      initial={{ y: 22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        borderRadius: 26,
        background: "rgba(16,16,16,0.82)",
        backdropFilter: "blur(28px)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 18px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
        zIndex: 1000,
        padding: "8px 10px",
        pointerEvents: "auto",
        isolation: "isolate",
      }}
    >
      {items.map(({ key, icon: Icon, label }) => {
        const active = activeTab === key;
        const showBadge =
          (key === "home" && showHomeBadge) ||
          (key === "tv" && showTvBadge) ||
          (key === "notifications" && showNotificationsBadge) ||
          (key === "profile" && showProfileBadge);
        return (
          <motion.button
            key={label}
            type="button"
            onClick={() => onNavigate(key)}
            whileTap={{ scale: 0.97, y: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              minWidth: 66,
              minHeight: 56,
              color: active ? "#f7f7f7" : "#8e8e93",
              fontSize: 11,
              fontWeight: 600,
              background: "transparent",
              border: "none",
              padding: "6px 8px",
              cursor: "pointer",
              pointerEvents: "auto",
              borderRadius: 18,
            }}
          >
            {active ? (
              <motion.span
                layoutId="tab-indicator"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 18,
                  background: "linear-gradient(135deg, rgba(255,109,109,0.16), rgba(212,0,0,0.18))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 24px rgba(212,0,0,0.12)",
                }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              />
            ) : null}
            {showBadge ? (
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: 4, right: 12, width: 8, height: 8, borderRadius: "50%", background: "#ff5b5b", boxShadow: "0 0 10px rgba(255,91,91,0.7)", zIndex: 2 }}
              />
            ) : null}
            <motion.div animate={{ scale: active ? 1.1 : 1, y: active ? -1 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} style={{ position: "relative", zIndex: 1 }}>
              <Icon size={active ? 21 : 20} />
            </motion.div>
            <motion.span animate={{ opacity: active ? 1 : 0.72, y: active ? 0 : 0 }} transition={{ duration: 0.18 }} style={{ position: "relative", zIndex: 1, letterSpacing: "0.01em", color: active ? "#f7f7f7" : "#9c9ca4" }}>
              {label}
            </motion.span>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}