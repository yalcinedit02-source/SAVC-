import type { ReactNode } from "react";
import BottomNav from "../BottomNav";

type AppShellProps = {
  children: ReactNode;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showBottomNav?: boolean;
  showHomeBadge?: boolean;
  showTvBadge?: boolean;
  showNotificationsBadge?: boolean;
  showProfileBadge?: boolean;
};

export default function AppShell({ children, activeTab, onNavigate, showBottomNav = true, showHomeBadge = true, showTvBadge = true, showNotificationsBadge = true, showProfileBadge = true }: AppShellProps) {
  return (
    <div style={{ minHeight: "100vh", background: "radial-gradient(circle at top, rgba(255,91,91,0.10) 0%, #050505 35%, #020202 100%)", color: "#f5f5f7", position: "relative" }}>
      <div style={{ paddingBottom: showBottomNav ? 112 : 24 }}>{children}</div>
      {showBottomNav ? <BottomNav activeTab={activeTab} onNavigate={onNavigate} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge} /> : null}
    </div>
  );
}
