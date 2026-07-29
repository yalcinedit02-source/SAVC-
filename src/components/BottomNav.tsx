import { motion } from "framer-motion";
import { Bell, House, Tv, User } from "lucide-react";

type BottomNavProps = {
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
};

const items = [
  { key: "home" as const, icon: House, label: "Home" },
  { key: "tv" as const, icon: Tv, label: "TV" },
  { key: "notifications" as const, icon: Bell, label: "Alerts" },
  { key: "profile" as const, icon: User, label: "Profile" },
];

export default function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        left: 20,
        right: 20,
        bottom: 20,
        borderRadius: 24,
        background: "rgba(14,14,14,0.92)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 18px 48px rgba(0,0,0,0.34)",
        zIndex: 1000,
        padding: "10px 10px",
        pointerEvents: "auto",
        isolation: "isolate",
      }}
    >
      {items.map(({ key, icon: Icon, label }) => {
        const active = activeTab === key;
        return (
          <motion.button
            key={label}
            type="button"
            onClick={() => onNavigate(key)}
            whileTap={{ scale: 0.95, y: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              minWidth: 60,
              minHeight: 56,
              color: active ? "#f5f5f7" : "#8e8e93",
              fontSize: 11,
              fontWeight: 600,
              background: "transparent",
              border: "none",
              padding: "6px 8px",
              cursor: "pointer",
              pointerEvents: "auto",
              borderRadius: 999,
            }}
          >
            {active ? (
              <motion.span
                layoutId="tab-indicator"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "linear-gradient(135deg, rgba(255,59,48,0.16), rgba(255,59,48,0.28))",
                  boxShadow: "0 0 0 1px rgba(255,59,48,0.22), 0 10px 24px rgba(255,59,48,0.12)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
              />
            ) : null}
            <motion.div
              animate={{ scale: active ? 1.04 : 1, y: active ? -1 : 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Icon size={20} />
            </motion.div>
            <motion.span
              animate={{ opacity: active ? 1 : 0.9, y: active ? 0 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ position: "relative", zIndex: 1, letterSpacing: "0.01em" }}
            >
              {label}
            </motion.span>
          </motion.button>
        );
      })}
    </nav>
  );
}