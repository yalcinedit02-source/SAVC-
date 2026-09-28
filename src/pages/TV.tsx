import { motion } from "framer-motion";
import { useRef, useState } from "react";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import { getPublishedCase1Broadcasts, type ScheduledCase1Broadcast } from "../data/case1Broadcasts";

type TVProps = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showBadge?: boolean;
  caseOpenedAt: number | null;
  now: number;
  watchedBroadcastIds: string[];
  onVideoEnded: (broadcastId: string) => void;
};

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
}

function getVideoErrorMessage(error: MediaError | null): string {
  if (!error) {
    return "Video oynatılamadı. Sunucu veya video formatı ile ilgili bir sorun oluştu.";
  }

  switch (error.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      return "Video oynatma iptal edildi.";
    case MediaError.MEDIA_ERR_NETWORK:
      return "Ağ hatası nedeniyle video yüklenemedi. Lütfen bağlantınızı kontrol edin.";
    case MediaError.MEDIA_ERR_DECODE:
      return "Tarayıcı bu video formatını çözemedi. H.264/AAC MP4 kullanılması gerekir.";
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      return "Bu video formatı tarayıcı tarafından desteklenmiyor. H.264/AAC MP4 dosyası gerekli.";
    default:
      return "Video yüklenemedi veya oynatılamadı. Kaynak formatı uyumlu değil.";
  }
}

function ChannelCard({ broadcast, watched, onVideoEnded }: { broadcast: ScheduledCase1Broadcast | null; watched: boolean; onVideoEnded: (broadcastId: string) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  const handleVideoError = () => {
    const errorMessage = getVideoErrorMessage(videoRef.current?.error ?? null);
    setVideoError(errorMessage);
  };

  if (!broadcast) {
    return (
      <Panel tone="accent" style={{ padding: 24 }}>
        <div style={{ color: "#8e8e93", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase" }}>Channel 1</div>
        <h2 style={{ fontSize: 22, margin: "8px 0" }}>SAVCI TV</h2>
        <p style={{ color: "#c7c7cc", lineHeight: 1.6, margin: 0 }}>İlk yayın henüz başlamadı.</p>
      </Panel>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Panel tone="accent" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "18px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <div style={{ color: "#8e8e93", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase" }}>Channel 1</div>
            <h2 style={{ fontSize: 20, fontWeight: 600, margin: "6px 0 0" }}>{broadcast.title}</h2>
            <div style={{ color: "#8e8e93", fontSize: 13, marginTop: 6 }}>Yayın zamanı: {formatTime(broadcast.scheduledAt)}</div>
          </div>
          <div style={{ color: watched ? "#9ee6b5" : "#ff8d8d", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>{watched ? "İZLENDİ" : "YAYINDA"}</div>
        </div>

        <div style={{ margin: "0 18px 18px", borderRadius: 20, overflow: "hidden", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)", minHeight: 268, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {broadcast.videoUrl ? (
            videoError ? (
              <div style={{ padding: 28, textAlign: "center", color: "#ffd9d9", lineHeight: 1.6, maxWidth: 480 }}>
                <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ff8d8d", marginBottom: 10 }}>Video Hatası</div>
                <div>{videoError}</div>
              </div>
            ) : (
              <video
                ref={videoRef}
                controls
                preload="metadata"
                playsInline
                src={broadcast.videoUrl}
                onCanPlay={() => setVideoError(null)}
                onLoadedMetadata={() => setVideoError(null)}
                onError={handleVideoError}
                onEnded={() => onVideoEnded(broadcast.id)}
                style={{ display: "block", width: "100%", maxHeight: 460, background: "#000" }}
              />
            )
          ) : (
            <div style={{ padding: 28, textAlign: "center", color: "#d1d1d6", lineHeight: 1.6 }}>
              Video URL'si henüz merkezi config'e eklenmedi.
            </div>
          )}
        </div>
      </Panel>
    </motion.div>
  );
}

export default function TV({ onBack, activeTab, onNavigate, showBadge = true, caseOpenedAt, now, watchedBroadcastIds, onVideoEnded }: TVProps) {
  const publishedBroadcasts = caseOpenedAt ? getPublishedCase1Broadcasts(caseOpenedAt, now) : [];
  const activeBroadcast = publishedBroadcasts.at(-1) ?? null;

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate} showTvBadge={showBadge} showNotificationsBadge={true}>
      <div style={{ minHeight: "100vh", padding: "20px 20px 110px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <div style={{ marginBottom: 18 }}>
            <div style={{ color: "#8e8e93", fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase" }}>SAVCI TV</div>
            <h1 style={{ fontSize: 30, margin: "6px 0 0", fontWeight: 700 }}>Canlı TV</h1>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            <ChannelCard broadcast={activeBroadcast} watched={activeBroadcast ? watchedBroadcastIds.includes(activeBroadcast.id) : false} onVideoEnded={onVideoEnded} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
