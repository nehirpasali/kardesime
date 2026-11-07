// ---- Firebase ayarları (hazır)
export const firebaseConfig = {
  apiKey: "AIzaSyAGbNtP8gDb3z_b4owdHaG9JbYmXS5vKi8",
  authDomain: "berilodev-684de.firebaseapp.com",
  projectId: "berilodev-684de",
  storageBucket: "berilodev-684de.firebasestorage.app",
  messagingSenderId: "442238824165",
  appId: "1:442238824165:web:b6586770682355b9f3ee0c"
};

// ---- Öğrenci
export const STUDENT_NAME = "Beril";

// ---- Dersler ve renkleri (istediğin zaman değiştirebilirsin)
export const COURSES = [
  "Matematik",
  "Türkçe",
  "Fen Bilimleri",
  "Din Kültürü",
  "Sosyal Bilgiler",
  "İngilizce",
  "Almanca"
];
export const COURSE_COLORS = {
  "Matematik": "#5B8DEF",
  "Türkçe": "#EF7B6C",
  "Fen Bilimleri": "#4FB286",
  "Din Kültürü": "#E0A93B",
  "Sosyal Bilgiler": "#9A7BD6",
  "İngilizce": "#E872A6",
  "Almanca": "#3BA7B8"
};

// ---- Google Takvim bağlantısı (admin panelinde kullanılır)
// Aşağıdaki iki satır doluysa, admin panelinde görev eklerken
// "Google Takvim'e ekle" kutusu çıkar. Boş bırakırsan çıkmaz.
export const GOOGLE_CLIENT_ID = "442238824165-iccatel1iu7sci7pktu7gesid5nmjqjm.apps.googleusercontent.com";   // Google Cloud > OAuth istemci kimliği
export const BERIL_EMAIL = "pasaliberil13@gmail.com";        // Beril'in Google hesabı (davet buraya gider)
export const CLOUDINARY_CLOUD_NAME = "jdbvyjr1";
export const CLOUDINARY_UPLOAD_PRESET = "nv0rwrpc";

// ---- Yardımcı fonksiyonlar
export function parseDay(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}
export function daysLeft(str) {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return Math.round((parseDay(str) - t) / 86400000);
}
export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
export function dueLabel(n) {
  if (n < -1) return `${-n} gün geçti`;
  if (n === -1) return "Dün bitti";
  if (n === 0) return "Bugün";
  if (n === 1) return "Yarın";
  return `${n} gün kaldı`;
}
export function dateText(str) {
  return parseDay(str).toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" });
}
