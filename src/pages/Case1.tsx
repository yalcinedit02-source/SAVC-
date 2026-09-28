import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import AppShell from "../components/ui/AppShell";
import BackButton from "../components/ui/BackButton";
import Panel from "../components/ui/Panel";
import SectionBadge from "../components/ui/SectionBadge";
import { CASE1_BROADCASTS } from "../data/case1Broadcasts";
import { CASE1_DOCUMENTS } from "../data/case1Documents";

type Case1Props = {
  onBack: () => void;
  activeTab: "home" | "tv" | "notifications" | "profile";
  onNavigate: (tab: "home" | "tv" | "notifications" | "profile") => void;
  showHomeBadge?: boolean;
  showTvBadge?: boolean;
  showNotificationsBadge?: boolean;
  showProfileBadge?: boolean;
  openStatementIds: string[];
  pendingStatementId: string | null;
  onStatementClose?: () => void;
};

export default function Case1({ onBack, activeTab, onNavigate, showHomeBadge = true, showTvBadge = true, showNotificationsBadge = true, showProfileBadge = true, openStatementIds, pendingStatementId, onStatementClose }: Case1Props) {
  const [showSummary, setShowSummary] = useState(false);
  const [openStatementId, setOpenStatementId] = useState<string | null>(null);
  const [openedStatementIds, setOpenedStatementIds] = useState<string[]>([]);

  const visibleStatementIds = Array.from(new Set([...openStatementIds, ...openedStatementIds, ...(pendingStatementId ? [pendingStatementId] : [])]));
  const statementRecords = CASE1_BROADCASTS.flatMap((broadcast) => [
    { statementName: broadcast.statementName, statementText: broadcast.statementText, statementTargetId: broadcast.statementTargetId },
    ...(broadcast.additionalStatements ?? []),
  ]);
  const availableStatements = statementRecords.filter((statement) => visibleStatementIds.includes(statement.statementTargetId));
  const activeStatement = availableStatements.find((broadcast) => broadcast.statementTargetId === (pendingStatementId ?? openStatementId));

  const handleOpenStatement = (statementTargetId: string) => {
    setOpenStatementId(statementTargetId);
    setOpenedStatementIds((current) => (current.includes(statementTargetId) ? current : [...current, statementTargetId]));
  };

  const handleBackToStatements = () => {
    setOpenStatementId(null);
    onStatementClose?.();
  };

  if (activeStatement) {
    return (
      <div style={{ minHeight: "100vh", background: "#fff", color: "#171717", padding: "24px 20px 56px", fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button type="button" onClick={handleBackToStatements} style={{ border: "none", background: "transparent", color: "#333", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 15 }}>
            Vaka ekranına dön
          </button>
          <main style={{ marginTop: 44, borderTop: "2px solid #171717", borderBottom: "1px solid #bdbdbd", padding: "28px 0 52px" }}>
            <div style={{ color: "#555", fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Vaka dosyası / ifade</div>
            <h1 style={{ margin: "18px 0 10px", fontSize: "clamp(30px, 7vw, 44px)", lineHeight: 1.08, fontWeight: 600 }}>{activeStatement.statementName}</h1>
            <div style={{ borderTop: "1px solid #d5d5d5", marginTop: 24, paddingTop: 24, fontSize: 16, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
              {activeStatement.statementText || "İfade metni henüz eklenmedi."}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (showSummary) {
    return (
      <div style={{ minHeight: "100vh", background: "#fff", color: "#171717", padding: "24px 20px 56px", fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button type="button" onClick={() => setShowSummary(false)} style={{ border: "none", background: "transparent", color: "#333", padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 15 }}>
            Vaka ekranına dön
          </button>
          <main style={{ marginTop: 44, borderTop: "2px solid #171717", borderBottom: "1px solid #bdbdbd", padding: "28px 0 52px" }}>
            <header style={{ borderBottom: "1px solid #d5d5d5", paddingBottom: 24 }}>
              <div style={{ color: "#555", fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Savcılık soruşturma dosyası</div>
              <h1 style={{ margin: "18px 0 10px", fontSize: "clamp(30px, 7vw, 44px)", lineHeight: 1.08, fontWeight: 600 }}>Vaka Özeti</h1>
              <div style={{ color: "#444", fontSize: 20, lineHeight: 1.4 }}>Mehmet Ç. Vakası</div>
            </header>

            <section style={{ marginTop: 32 }}>
              <h2 style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Olayın özeti</h2>
              <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, margin: "18px 0 28px", padding: "16px 0", borderTop: "1px solid #e1e1e1", borderBottom: "1px solid #e1e1e1", fontFamily: 'Arial, sans-serif' }}>
                <div>
                  <dt style={{ color: "#666", fontSize: 12 }}>Olay tarihi</dt>
                  <dd style={{ margin: "4px 0 0", fontSize: 15 }}>06.08.2026</dd>
                </div>
                <div>
                  <dt style={{ color: "#666", fontSize: 12 }}>İhbar saati</dt>
                  <dd style={{ margin: "4px 0 0", fontSize: 15 }}>00:30</dd>
                </div>
                <div>
                  <dt style={{ color: "#666", fontSize: 12 }}>Olay yeri</dt>
                  <dd style={{ margin: "4px 0 0", fontSize: 15 }}>Pendik / [ŞEHİR GİZLENDİ]</dd>
                </div>
              </dl>

              <figure style={{ margin: "0 0 28px", borderBottom: "1px solid #e1e1e1", paddingBottom: 20 }}>
                <img
                  src="https://savci-video.yalcinedit02.workers.dev/olay%20yeri.jpg"
                  alt="Mehmet Ç. vakasının olay yeri fotoğrafı"
                  loading="lazy"
                  style={{ display: "block", width: "100%", maxHeight: 560, objectFit: "contain", background: "#f1f1f1" }}
                />
                <figcaption style={{ marginTop: 8, color: "#666", fontFamily: 'Arial, sans-serif', fontSize: 12 }}>Olay yeri fotoğrafı</figcaption>
              </figure>

              <div style={{ display: "grid", gap: 18, fontSize: 16, lineHeight: 1.8 }}>
                <p>06.08.2026 tarihinde saat 00.30 sıralarında gelen ihbarda, ihbarcı üst kat komşusu Mehmet Ç. (01.03.1960) isimli şahıstan yaklaşık bir gündür haber alamadığını bildirmiştir.</p>
                <p>İhbarcı, Mehmet Ç.’nin yaklaşık iki yıl önce eşini kanser nedeniyle kaybettiğini ve evde tek başına yaşadığını, apartmanın yaklaşık 30 yıllık eski bir yapı olması nedeniyle normal şartlarda üst kattan gelen seslerin alt daireden rahatlıkla duyulabildiğini, ancak uzun süredir daireden hiçbir ses gelmediğini ifade etmiştir. Durumdan şüphelenerek üst kata çıktığını, defalarca kapıyı çalmasına rağmen cevap alamadığını ve şahsın hayatından endişe ettiği için polis, sağlık ve itfaiye ekiplerinin ivedilikle olay yerine yönlendirilmesini talep etmiştir.</p>
                <p>İhbarın ardından komşu, Mehmet Ç.’nin aynı şehirde yaşayan çocukları Murat Ç. ve Leyla A.’ya da haber vermiştir. Kısa süre sonra iki kardeş de olay yerine ulaşmış ve apartman sakinleriyle birlikte daire önünde ekiplerin kapıyı açmasını beklemiştir.</p>
                <p>Kapının içeriden kilitli olması nedeniyle itfaiye ekipleri tarafından kontrollü şekilde açılan daireye ilk olarak polis ekipleri girmiştir. Bu sırada Murat Ç. isimli şahıs, polis ekiplerinin uyarılarına rağmen içeri girmeye çalışmış, kısa süreli müdahalenin ardından banyo bölümüne kadar ulaşarak babasını yerde hareketsiz halde görmüş ve büyük üzüntü yaşamıştır. Polis ekipleri tarafından olay yerinin güvenliğinin sağlanması amacıyla daire dışına çıkarılmıştır.</p>
                <p>Yapılan ilk incelemede ev içerisinde dikkat çeken herhangi bir dağınıklık, mücadele izi veya zorlanma bulgusuna rastlanmamıştır.</p>
                <p>Olay yerine gelen [KURUM ADI GİZLENDİ] ekipleri tarafından yapılan değerlendirmede Mehmet Ç. isimli şahsın yaşam bulgularının bulunmadığı, ölüm katılığının başladığı tespit edilmiş ve olay şüpheli ölüm kapsamında değerlendirilmiştir.</p>
                <p>Cumhuriyet Savcısına bilgi verilmesinin ardından olay hakkında adli soruşturma başlatılmış, olay yeri inceleme ekipleri görevlendirilmiş ve cenazenin kesin ölüm nedeninin belirlenebilmesi amacıyla otopsi yapılmasına karar verilmiştir.</p>
              </div>

              <section aria-label="Vaka belgeleri" style={{ marginTop: 42, borderTop: "1px solid #d5d5d5", paddingTop: 24 }}>
                <h2 style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Vaka Belgeleri</h2>
                <div style={{ marginTop: 16, borderTop: "1px solid #e1e1e1" }}>
                  {CASE1_DOCUMENTS.map((document) => (
                    <details key={document.id} style={{ borderBottom: "1px solid #e1e1e1" }}>
                      <summary style={{ cursor: "pointer", padding: "16px 4px", fontFamily: 'Arial, sans-serif', fontSize: 15, fontWeight: 600, color: "#222" }}>
                        {document.title}
                      </summary>
                      <div style={{ margin: "0 0 18px", padding: 16, background: "#f5f5f5", borderLeft: "3px solid #777", color: "#222", fontFamily: '"Courier New", monospace', fontSize: 12, lineHeight: 1.65, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                        {document.content}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {availableStatements.length > 0 ? (
                <section style={{ marginTop: 42, borderTop: "1px solid #d5d5d5", paddingTop: 24 }}>
                  <h2 style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Dosya / İfadeler</h2>
                  <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
                    {availableStatements.map((statement) => (
                      <button key={statement.statementTargetId} type="button" onClick={() => handleOpenStatement(statement.statementTargetId)} style={{ border: "1px solid #d5d5d5", background: "#fff", color: "#171717", padding: "14px 16px", textAlign: "left", cursor: "pointer", fontFamily: "inherit", fontSize: 16 }}>
                        {statement.statementName}
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}
            </section>
          </main>
        </div>
      </div>
    );
  }

  return (
    <AppShell activeTab={activeTab} onNavigate={onNavigate} showHomeBadge={showHomeBadge} showTvBadge={showTvBadge} showNotificationsBadge={showNotificationsBadge} showProfileBadge={showProfileBadge}>
      <div style={{ minHeight: "100vh", padding: "20px 20px 110px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <BackButton onBack={onBack} />

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <Panel tone="accent" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div>
                  <div style={{ color: "#ff8d8d", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase" }}>Case workspace</div>
                  <h1 style={{ fontSize: 32, fontWeight: 700, color: "#f5f5f7", margin: "8px 0 6px" }}>Forest House Murder</h1>
                  <div style={{ color: "#d1d1d6", fontSize: 15 }}>Mardin / Savur • 18 July 2026</div>
                </div>
                <SectionBadge label="Active" tone="accent" />
              </div>

              <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#d1d1d6", fontSize: 13 }}>
                  <span>Investigation progress</span>
                  <span style={{ color: "#f5f5f7", fontWeight: 600 }}>72%</span>
                </div>
                <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.12)" }}>
                  <div style={{ width: "72%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #ff6b6b, #d40000)" }} />
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setShowSummary(true)}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            style={{ width: "100%", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))", backdropFilter: "blur(18px)", padding: "16px 18px", textAlign: "left", cursor: "pointer", borderRadius: 22, boxShadow: "0 16px 36px rgba(0,0,0,0.18)", marginTop: 18 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)" }}>
                  <FileText size={20} color="#ff8d8d" />
                </div>
                <div>
                  <div style={{ color: "#f5f5f7", fontSize: 17, fontWeight: 700 }}>Vaka Özeti</div>
                  <div style={{ color: "#c7c7cc", marginTop: 4, fontSize: 13 }}>Mehmet Ç. vakasının temel bilgileri</div>
                </div>
              </div>
              <ArrowRight size={18} color="#ff8d8d" />
            </div>
          </motion.button>

          {availableStatements.length > 0 ? (
            <div style={{ marginTop: 18, padding: 18, borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ color: "#8e8e93", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 12 }}>
                İfadeler
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {availableStatements.map((statement) => (
                  <button
                    key={statement.statementTargetId}
                    type="button"
                    onClick={() => handleOpenStatement(statement.statementTargetId)}
                    style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f5f5f7", padding: "12px 14px", textAlign: "left", cursor: "pointer", fontFamily: "inherit", fontSize: 15, borderRadius: 12 }}
                  >
                    {statement.statementName}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </AppShell>
  );
}
