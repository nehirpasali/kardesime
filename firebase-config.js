// 1) Firebase Console > Proje Ayarları > "Web uygulaması ekle" kısmındaki config'i buraya yapıştır.
export const firebaseConfig = {
  apiKey: "AIzaSyAGbNtP8gDb3z_b4owdHaG9JbYmXS5vKi8",
  authDomain: "berilodev-684de.firebaseapp.com",
  projectId: "berilodev-684de",
  storageBucket: "berilodev-684de.firebasestorage.app",
  messagingSenderId: "442238824165",
  appId: "1:442238824165:web:b6586770682355b9f3ee0c"
};

// 2) Dersleri istediğin gibi değiştir / ekle / çıkar.
export const COURSES = [
  "Matematik",
  "Fizik",
  "Kimya",
  "Biyoloji",
  "Türkçe",
  "Edebiyat",
  "Tarih",
  "Coğrafya",
  "İngilizce"
];

// Yardımcı fonksiyonlar (iki sayfa da kullanıyor)
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
