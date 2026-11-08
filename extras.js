// Yeni özellikler için ortak ayarlar. firebase-config.js'e dokunmana gerek yok.

// İçerik türleri (admin panelinde seçilir, derslerde filtre olarak çıkar)
export const KINDS = ["Ödev", "Ders notu", "Test", "Sınav provası", "Çalışma kâğıdı"];

// Ders programında günde en fazla kaç ders saati olsun
export const SCHEDULE_SLOTS = 8;

// Ders programı yazarken öneri olarak çıkacak diğer dersler
export const EXTRA_LESSONS = [
  "Beden Eğitimi", "Görsel Sanatlar", "Müzik", "Rehberlik",
  "Kulüp", "Teknoloji ve Tasarım", "Bilişim Teknolojileri", "Seçmeli"
];

export const DAY_NAMES = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
export const DAY_SHORT = ["Pzt", "Sal", "Çar", "Per", "Cum"];

export const hasDue = t => !!(t && t.due);
export const kindOf = t => (t && t.kind) || "Ödev";

export const ALL_DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
// Net: 3 yanlış 1 doğruyu götürür (4 seçenekli sınavlar)
export const netOf = (d, y) => Math.round((d - y / 3) * 100) / 100;
