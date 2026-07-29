import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Case1 from "./pages/Case1";

type Tab = "home" | "tv" | "notifications" | "profile";

type View = "landing" | "home" | "case" | "tv" | "notifications" | "profile";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [currentView, setCurrentView] = useState<View>("landing");
  const [previousView, setPreviousView] = useState<View>("landing");

  const navigateTo = (view: View) => {
    setPreviousView(currentView);
    setCurrentView(view);
  };

  const handleTabSelect = (tab: Tab) => {
    setActiveTab(tab);
    navigateTo(tab);
  };

  const goBack = () => {
    if (currentView === "case") {
      setCurrentView(previousView);
      return;
    }

    if (currentView === "home") {
      setOpened(false);
      setCurrentView("landing");
      return;
    }

    setCurrentView(previousView);
  };

  const renderContent = () => {
    if (!opened) {
      return <Landing onOpen={() => { setPreviousView("landing"); setOpened(true); setCurrentView("home"); }} />;
    }

    if (currentView === "case") {
      return <Case1 onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} />;
    }

    if (currentView === "tv") {
      return <TV onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} />;
    }

    if (currentView === "notifications") {
      return <Notifications onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} />;
    }

    if (currentView === "profile") {
      return <Profile onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} />;
    }

    return <Home onOpenCase={() => navigateTo("case")} onNavigate={handleTabSelect} activeTab={activeTab} onBack={() => { setOpened(false); setCurrentView("landing"); }} />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={opened ? "app" : "landing"}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
}