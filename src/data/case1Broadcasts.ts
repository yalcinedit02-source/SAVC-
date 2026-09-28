import { CASE1_STATEMENTS } from "./case1Statements";

export const TEST_YAYIN_ARALIGI = 2 * 60 * 1000;
export const YAYIN_ONCESI_BILDIRIM_SURESI = 30 * 1000;

export type Case1Broadcast = {
  id: string;
  videoUrl: string;
  title: string;
  statementName: string;
  statementText: string;
  statementTargetId: string;
  additionalStatements?: {
    statementName: string;
    statementText: string;
    statementTargetId: string;
  }[];
};

export type ScheduledCase1Broadcast = Case1Broadcast & {
  scheduledAt: number;
};

export type Case1Notification = {
  id: string;
  title: string;
  detail: string;
  createdAt: number;
  target: "tv" | "statement";
  targetId?: string;
};

export const CASE1_BROADCASTS: Case1Broadcast[] = [
  { id: "nazif", videoUrl: "https://savci-video.yalcinedit02.workers.dev/nazif%20ifadesi%20savci.mp4", title: "Nazif U. İfadeye Çağrıldı", statementName: "Nazif U. İlk İfadesi", statementText: CASE1_STATEMENTS.nazif, statementTargetId: "nazif" },
  { id: "leyla", videoUrl: "https://savci-video.yalcinedit02.workers.dev/leyla-ifade.mp4", title: "Leyla A. İfadeye Çağrıldı", statementName: "Leyla A. İlk İfadesi", statementText: CASE1_STATEMENTS.leyla, statementTargetId: "leyla" },
  { id: "murat", videoUrl: "https://savci-video.yalcinedit02.workers.dev/murat-%C3%A7-ifade.mp4", title: "Murat Ç. İfadeye Çağrıldı", statementName: "Murat Ç. İlk İfadesi", statementText: CASE1_STATEMENTS.murat, statementTargetId: "murat" },
  { id: "serif", videoUrl: "https://savci-video.yalcinedit02.workers.dev/%C5%9Ferif-%C3%A7-ilk-ifade.mp4", title: "Şerif Ç. İfadeye Davet Edildi", statementName: "Şerif Ç. İlk İfade / Davet Tutanağı", statementText: CASE1_STATEMENTS.serif, statementTargetId: "serif" },
  { id: "kurye", videoUrl: "https://savci-video.yalcinedit02.workers.dev/kurye-ifade.mp4", title: "Kurye İfade Verdi", statementName: "Ahmet Y. (Kurye) İfadesi", statementText: CASE1_STATEMENTS.kurye, statementTargetId: "kurye" },
  { id: "osman-b", videoUrl: "https://savci-video.yalcinedit02.workers.dev/exported%2BC415590B-B6E5-4E64-83A8-4050E619C2C6.mp4", title: "Osman B. İfade Verdi", statementName: "Osman B. İfadesi", statementText: CASE1_STATEMENTS["osman-b"], statementTargetId: "osman-b" },
  { id: "fatih-k", videoUrl: "https://savci-video.yalcinedit02.workers.dev/exported%2B5A9B021F-DB81-4B6C-8F07-0C3004016ACD.mp4", title: "Fatih K. İfade Verdi", statementName: "Fatih K. İfadesi", statementText: CASE1_STATEMENTS["fatih-k"], statementTargetId: "fatih-k" },
  { id: "lokanta-sahibi", videoUrl: "https://savci-video.yalcinedit02.workers.dev/lokanta%20sahibi%20ifade.mp4", title: "Lokanta Sahibi İfade Verdi", statementName: "Kadir Y. (Lokanta Sahibi) İfadesi", statementText: CASE1_STATEMENTS["lokanta-sahibi"], statementTargetId: "lokanta-sahibi" },
  { id: "serif-2", videoUrl: "https://savci-video.yalcinedit02.workers.dev/%C5%9Ferif%20b%202.%20ifade%20zorla%20g%C3%B6t%C3%BCr%C3%BCld%C3%BC.mp4", title: "Şerif Ç. 2. İfade Verdi", statementName: "Şerif Ç. 2. İfadesi", statementText: CASE1_STATEMENTS["serif-2"], statementTargetId: "serif-2" },
  { id: "murat-2", videoUrl: "https://savci-video.yalcinedit02.workers.dev/murat%202.%20ifade.mp4", title: "Murat Ç. 2. İfade Verdi", statementName: "Murat Ç. 2. İfadesi", statementText: CASE1_STATEMENTS["murat-2"], statementTargetId: "murat-2", additionalStatements: [{ statementName: "Leyla A. 2. İfadesi", statementText: CASE1_STATEMENTS["leyla-2"], statementTargetId: "leyla-2" }] },
  { id: "murat-es", videoUrl: "https://pub-e630fe7ecd3449bab5b1845d5eb2fb84.r2.dev/exported%2B5194371C-9920-4109-9F2C-E4CE856186A2.mp4", title: "Murat Ç.’nin Eşi İfade Verdi", statementName: "Murat Ç.’nin Eşinin İfadesi", statementText: CASE1_STATEMENTS["murat-es"], statementTargetId: "murat-es" },
  { id: "nazif-2", videoUrl: "https://savci-video.yalcinedit02.workers.dev/nazif%202.mp4", title: "Nazif U. 2. İfade Verdi", statementName: "Nazif U. 2. İfadesi", statementText: CASE1_STATEMENTS["nazif-2"], statementTargetId: "nazif-2" },
  { id: "fatih-k-es", videoUrl: "https://savci-video.yalcinedit02.workers.dev/fatih%20k%20e%C5%9Fi", title: "Fatih K.’nin Eşi İfade Verdi", statementName: "Fatih K.’nin Eşinin İfadesi", statementText: CASE1_STATEMENTS["fatih-k-es"], statementTargetId: "fatih-k-es" },
  { id: "nazif-es", videoUrl: "https://savci-video.yalcinedit02.workers.dev/nazifin%20e%C5%9Fi.mp4", title: "Nazif U.’nun Eşi İfade Verdi", statementName: "Nazif U.’nun Eşinin İfadesi", statementText: CASE1_STATEMENTS["nazif-es"], statementTargetId: "nazif-es" },
  { id: "final", videoUrl: "https://savci-video.yalcinedit02.workers.dev/su%C3%A7lu%20su%C3%A7unu%20itir", title: "Final — Suçlu Suçunu İtiraf Etti", statementName: "Final", statementText: "", statementTargetId: "" },
];

export function getScheduledCase1Broadcasts(caseOpenedAt: number): ScheduledCase1Broadcast[] {
  return CASE1_BROADCASTS.map((broadcast, index) => ({
    ...broadcast,
    scheduledAt: caseOpenedAt + TEST_YAYIN_ARALIGI * (index + 1),
  }));
}

export function getPublishedCase1Broadcasts(caseOpenedAt: number, now = Date.now()): ScheduledCase1Broadcast[] {
  return getScheduledCase1Broadcasts(caseOpenedAt).filter((broadcast) => broadcast.scheduledAt <= now);
}
