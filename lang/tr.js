const LANG = {

  // ── Ortak ─────────────────────────────────────────────────────────────────
  back_btn:                "Geri",

  // ── Ana Sayfa ─────────────────────────────────────────────────────────────
  index_page_title:        "Bilişsel Testler",
  index_heading:           "Bilişsel Testler",
  index_subtitle:          "Başlamak için bir test seçin.",
  index_btn_corsi:         "Corsi Blok Testi",
  index_btn_vs:            "Görsel Arama Testi",
  index_btn_wcst:          "Wisconsin Kart Sıralama Testi",

  // ── Corsi Blok Testi ──────────────────────────────────────────────────────
  corsi_page_title:        "Corsi Blok Testi",
  corsi_heading:           "Corsi Blok Testi",
  corsi_status_start:      "Başlamak için \"Oyunu Başlat\" düğmesine basın",
  corsi_btn_start:         "Oyunu Başlat",
  corsi_btn_play_again:    "Tekrar Oyna",
  corsi_status_watch:      length => `Diziyi izleyin (Uzunluk: ${length})`,
  corsi_status_your_turn:  "Sıra sizde! Diziyi tekrarlayın.",
  corsi_status_incorrect:  lives  => `Yanlış! Bu uzunluk için ${lives} deneme hakkınız kaldı.`,
  corsi_status_game_over:  span   => `Oyun bitti! Corsi uzamınız: ${span}`,
  corsi_status_correct:    "Doğru! Sonraki seviyeye geçiliyor…",

  // ── Görsel Arama Testi ────────────────────────────────────────────────────
  vs_page_title:           "Görsel Arama Deneyi",
  vs_heading:              "Görsel Arama Testi",
  vs_instructions:         "Hedef: <strong>Kırmızı Daire</strong>. Onu olabildiğince hızlı bulun!",
  vs_label_type:           "Tür:",
  vs_option_feature:       "Özellik (Kolay)",
  vs_option_conjunction:   "Bağlaşım (Zor)",
  vs_label_items:          "Öğe sayısı:",
  vs_btn_start:            "Sonraki Denemeyi Başlat",
  vs_btn_present:          "Mevcut",
  vs_btn_absent:           "Yok",
  vs_feedback_correct:     rt      => `Doğru! &#9989; Tepki süresi: ${rt}ms`,
  vs_feedback_incorrect:   present => `Yanlış &#10060; Hedef aslında ${present ? "mevcuttu" : "yoktu"}.`,

  // ── Wisconsin Kart Sıralama Testi ─────────────────────────────────────────
  wcst_page_title:         "Wisconsin Kart Sıralama Testi (WCST)",
  wcst_heading:            "Wisconsin Kart Sıralama Testi",
  wcst_subtitle:           "PsyToolkit JS Uygulaması",
  wcst_ins1_title:         "Talimatlar (1/3)",
  wcst_ins1_p1:            "Ekranın sağ tarafında dört hedef kart göreceksiniz.",
  wcst_ins1_p2:            "Her turda ekranın üstünde yeni bir kart belirecek.",
  wcst_ins2_title:         "Talimatlar (2/3)",
  wcst_ins2_p1:            "Göreviniz, üstteki kartı dört hedef karttan biriyle dokunarak eşleştirmek.",
  wcst_ins2_p2:            "Uygulama, seçiminizin doğru mu yanlış mı olduğunu söyleyecek.",
  wcst_ins3_title:         "Talimatlar (3/3)",
  wcst_ins3_p1:            "Eşleştirme kuralı test sırasında uyarı verilmeksizin değişebilir.",
  wcst_ins3_p2:            "Geçerli doğru kuralı bulmak için geri bildirimi kullanın.",
  wcst_btn_start:          "Başlat",
  wcst_btn_next:           "İleri",
  wcst_btn_begin:          "Testi Başlat",
  wcst_feedback_correct:   "DOĞRU",
  wcst_feedback_error:     "YANLIŞ",
  wcst_feedback_too_slow:  "ÇOK YAVAŞ",
  wcst_results_title:      "WCST Performans Geri Bildirimi",
  wcst_results_note:       "(Not: Toplam 60 deneme vardı)",
  wcst_stats_errors:       "Hata sayısı:",
  wcst_stats_pers:         "Perseverasyon hatası sayısı:",
  wcst_stats_nonpers:      "Perseverasyon dışı hata sayısı:",
  wcst_results_restart:    "Yeniden başlatmak için boşluk tuşuna basın veya aşağıya dokunun",
  wcst_btn_restart:        "Testi Yeniden Başlat",

};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
