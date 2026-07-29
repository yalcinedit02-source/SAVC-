import type { ReactNode } from "react";
import BottomNav from "../BottomNav";

type AppShellProps = {
  children: ReactNode;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showBottomNav?: boolean;
};

export default function AppShell({ children, activeTab, onNavigate, showBottomNav = true }: AppShellProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "#f5f5f7" }}>
      <div style={{ paddingBottom: showBottomNav ? 110 : 24 }}>{children}</div>
      {showBottomNav ? <BottomNav activeTab={activeTab} onNavigate={onNavigate} /> : null}
    </div>
  );
}
