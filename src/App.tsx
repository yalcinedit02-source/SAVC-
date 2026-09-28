import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Case1 from "./pages/Case1";
import {
  CASE1_BROADCASTS,
  type Case1Notification,
  getScheduledCase1Broadcasts,
  YAYIN_ONCESI_BILDIRIM_SURESI,
} from "./data/case1Broadcasts";

type Tab = "home" | "tv" | "notifications" | "profile";

type View = "landing" | "home" | "case" | "tv" | "notifications" | "profile";

const CASE_OPENED_AT_KEY = "savci.case1.openedAt";
const WATCHED_BROADCASTS_KEY = "savci.case1.watchedBroadcasts";
const OPEN_STATEMENTS_KEY = "savci.case1.openStatements";
const NOTIFICATIONS_KEY = "savci.notifications";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [caseOpening, setCaseOpening] = useState(false);
  const [caseOpenedAt, setCaseOpenedAt] = useState<number | null>(null);
  const [caseSeconds, setCaseSeconds] = useState(10);
  const [now, setNow] = useState(() => Date.now());
  const [watchedBroadcastIds, setWatchedBroadcastIds] = useState<string[]>([]);
  const [openStatementIds, setOpenStatementIds] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Case1Notification[]>([]);
  const [pendingStatementId, setPendingStatementId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [currentView, setCurrentView] = useState<View>("landing");
  const [previousView, setPreviousView] = useState<View>("landing");
  const [showHomeBadge, setShowHomeBadge] = useState(true);
  const [showTvBadge, setShowTvBadge] = useState(true);
  const [showNotificationsBadge, setShowNotificationsBadge] = useState(true);
  const [showProfileBadge, setShowProfileBadge] = useState(true);
  const caseReady = caseOpenedAt !== null;

  useEffect(() => {
    window.localStorage.removeItem(CASE_OPENED_AT_KEY);
    window.localStorage.removeItem(WATCHED_BROADCASTS_KEY);
    window.localStorage.removeItem(OPEN_STATEMENTS_KEY);
    window.localStorage.removeItem(NOTIFICATIONS_KEY);
  }, []);

  const addOpenStatementId = (statementTargetId: string) => {
    if (!statementTargetId) return;

    setOpenStatementIds((current) => {
      if (current.includes(statementTargetId)) return current;
      const next = [...current, statementTargetId];
      window.localStorage.setItem(OPEN_STATEMENTS_KEY, JSON.stringify(next));
      return next;
    });
  };

  const navigateTo = (view: View) => {
    setPreviousView(currentView);
    setCurrentView(view);
  };

  const handleTabSelect = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === "home") {
      setShowHomeBadge(false);
    }
    if (tab === "tv") {
      setShowTvBadge(false);
    }
    if (tab === "notifications") {
      setShowNotificationsBadge(false);
    }
    if (tab === "profile") {
      setShowProfileBadge(false);
    }
    navigateTo(tab);
  };

  useEffect(() => {
    if (!caseOpening) return;

    const timer = window.setTimeout(() => {
      if (caseSeconds <= 1) {
        setCaseOpening(false);
        const openedAt = Date.now();
        setCaseOpenedAt(openedAt);
        window.localStorage.setItem(CASE_OPENED_AT_KEY, String(openedAt));
        setCurrentView("case");
        return;
      }

      setCaseSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [caseOpening, caseSeconds]);

  useEffect(() => {
    if (!caseOpenedAt) return;

    const timer = window.setInterval(() => {
      const currentTime = Date.now();
      setNow(currentTime);
      setNotifications((currentNotifications) => {
        const scheduledBroadcasts = getScheduledCase1Broadcasts(caseOpenedAt);
        const additions = scheduledBroadcasts
          .filter((broadcast) => currentTime >= broadcast.scheduledAt - YAYIN_ONCESI_BILDIRIM_SURESI)
          .filter((broadcast) => !currentNotifications.some((notification) => notification.id === `broadcast-${broadcast.id}-upcoming`))
          .map<Case1Notification>((broadcast) => ({
            id: `broadcast-${broadcast.id}-upcoming`,
            title: "🔴 SAVCI TV",
            detail: "SAVCI TV kanalı biraz sonra canlı yayında. Yayını kaçırmayın.",
            createdAt: currentTime,
            target: "tv",
          }));

        if (additions.length === 0) return currentNotifications;
        const nextNotifications = [...additions, ...currentNotifications];
        window.localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(nextNotifications));
        return nextNotifications;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [caseOpenedAt]);

  const handleOpenCase = () => {
    if (caseReady) {
      setCurrentView("case");
      return;
    }

    if (!caseOpening) {
      setCaseSeconds(10);
      setCaseOpening(true);
    }
  };

  const handleVideoEnded = (broadcastId: string) => {
    if (!watchedBroadcastIds.includes(broadcastId)) {
      const nextWatchedIds = [...watchedBroadcastIds, broadcastId];
      setWatchedBroadcastIds(nextWatchedIds);
      window.localStorage.setItem(WATCHED_BROADCASTS_KEY, JSON.stringify(nextWatchedIds));
    }

    if (openStatementIds.includes(broadcastId)) return;

    const broadcast = CASE1_BROADCASTS.find((item) => item.id === broadcastId);
    if (!broadcast?.statementTargetId) return;

    const publishedStatements = [
      { statementName: broadcast.statementName, statementTargetId: broadcast.statementTargetId },
      ...(broadcast.additionalStatements ?? []),
    ];
    publishedStatements.forEach((statement) => addOpenStatementId(statement.statementTargetId));
    setPendingStatementId(broadcast.statementTargetId);
    setPreviousView(currentView);
    setCurrentView("case");
    setActiveTab("home");

    const publishedStatementNames = publishedStatements.map((statement) => statement.statementName).join(" ve ");
    const statementNotification: Case1Notification = {
      id: `statement-${broadcast.id}-published`,
      title: publishedStatementNames,
      detail: `${publishedStatementNames} Vaka Dosyası'nda birlikte yayında.`,
      createdAt: Date.now(),
      target: "statement",
      targetId: broadcast.statementTargetId,
    };
    setNotifications((currentNotifications) => {
      if (currentNotifications.some((notification) => notification.id === statementNotification.id)) return currentNotifications;
      const nextNotifications = [statementNotification, ...currentNotifications];
      setShowHomeBadge(true);
      setShowTvBadge(true);
      setShowNotificationsBadge(true);
      setShowProfileBadge(true);
      window.localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(nextNotifications));
      return nextNotifications;
    });
  };

  const handleNotificationSelect = (notification: Case1Notification) => {
    setShowNotificationsBadge(false);
    setShowHomeBadge(false);
    setShowTvBadge(false);
    setShowProfileBadge(false);
    if (notification.target === "tv") {
      setActiveTab("tv");
      navigateTo("tv");
      return;
    }

    const targetId = notification.targetId ?? null;
    if (targetId) {
      addOpenStatementId(targetId);
    }
    setPendingStatementId(targetId);
    setActiveTab("home");
    navigateTo("case");
  };

  const goBack = () => {
    if (currentView === "case") {
      setPendingStatementId(null);
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
      return <Case1 onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge} openStatementIds={openStatementIds} pendingStatementId={pendingStatementId} onStatementClose={() => setPendingStatementId(null)} />;
    }

    if (currentView === "tv") {
      return <TV onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} showBadge={showTvBadge} caseOpenedAt={caseOpenedAt} now={now} watchedBroadcastIds={watchedBroadcastIds} onVideoEnded={handleVideoEnded} />;
    }

    if (currentView === "notifications") {
      return <Notifications onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} showBadge={showNotificationsBadge} notifications={notifications} onNotificationSelect={handleNotificationSelect} />;
    }

    if (currentView === "profile") {
      return <Profile onBack={goBack} activeTab={activeTab} onNavigate={handleTabSelect} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge} />;
    }

    return <Home onOpenCase={handleOpenCase} caseOpening={caseOpening} caseSeconds={caseSeconds} onNavigate={handleTabSelect} activeTab={activeTab} onBack={() => { setOpened(false); setCurrentView("landing"); }} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge} />;
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "radial-gradient(circle at top, rgba(255,96,96,0.12) 0%, rgba(5,5,5,0.96) 18%, rgba(2,2,2,1) 58%)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={opened ? currentView : "landing"}
          initial={{ opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 1.002 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            willChange: "transform, opacity",
            contain: "paint",
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}