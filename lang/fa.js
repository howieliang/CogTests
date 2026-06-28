const LANG = {

  // ── مشترک ────────────────────────────────────────────────────────────────
  back_btn:                "بازگشت",

  // ── صفحه اصلی ────────────────────────────────────────────────────────────
  index_page_title:        "آزمون‌های شناختی",
  index_heading:           "آزمون‌های شناختی",
  index_subtitle:          "یک آزمون را برای شروع انتخاب کنید.",
  index_btn_corsi:         "آزمون بلوک‌های کورسی",
  index_btn_vs:            "آزمون جستجوی بصری",
  index_btn_wcst:          "آزمون طبقه‌بندی کارت‌های ویسکانسین",

  // ── آزمون بلوک‌های کورسی ─────────────────────────────────────────────────
  corsi_page_title:        "آزمون بلوک‌های کورسی",
  corsi_heading:           "آزمون بلوک کورسی",
  corsi_status_start:      "برای شروع «شروع بازی» را فشار دهید",
  corsi_btn_start:         "شروع بازی",
  corsi_btn_play_again:    "دوباره بازی کن",
  corsi_status_watch:      length => `دنباله را تماشا کنید (طول: ${length})`,
  corsi_status_your_turn:  "نوبت شماست! دنباله را تکرار کنید.",
  corsi_status_incorrect:  lives  => `اشتباه! ${lives} تلاش برای این طول باقی مانده.`,
  corsi_status_game_over:  span   => `بازی تمام شد! گستره کورسی شما: ${span}`,
  corsi_status_correct:    "درست! به مرحله بعد می‌رویم…",

  // ── آزمون جستجوی بصری ────────────────────────────────────────────────────
  vs_page_title:           "آزمایش جستجوی بصری",
  vs_heading:              "آزمون جستجوی بصری",
  vs_instructions:         "هدف: <strong>دایره قرمز</strong>. هرچه سریع‌تر آن را پیدا کنید!",
  vs_label_type:           "نوع:",
  vs_option_feature:       "ویژگی (آسان)",
  vs_option_conjunction:   "ترکیبی (سخت)",
  vs_label_items:          "تعداد اشیاء:",
  vs_btn_start:            "شروع آزمون بعدی",
  vs_btn_present:          "موجود",
  vs_btn_absent:           "غایب",
  vs_feedback_correct:     rt      => `درست! &#9989; زمان واکنش: ${rt} میلی‌ثانیه`,
  vs_feedback_incorrect:   present => `اشتباه &#10060; هدف در واقع ${present ? "موجود" : "غایب"} بود.`,

  // ── آزمون طبقه‌بندی کارت‌های ویسکانسین ──────────────────────────────────
  wcst_page_title:         "آزمون طبقه‌بندی کارت‌های ویسکانسین (WCST)",
  wcst_heading:            "آزمون طبقه‌بندی کارت‌های ویسکانسین",
  wcst_subtitle:           "پیاده‌سازی JS با PsyToolkit",
  wcst_ins1_title:         "دستورالعمل‌ها (۱/۳)",
  wcst_ins1_p1:            "چهار کارت هدف در سمت راست صفحه نمایش داده می‌شوند.",
  wcst_ins1_p2:            "در هر نوبت یک کارت جدید در بالای صفحه ظاهر می‌شود.",
  wcst_ins2_title:         "دستورالعمل‌ها (۲/۳)",
  wcst_ins2_p1:            "وظیفه شما تطبیق کارت بالایی با یکی از چهار کارت هدف با لمس آن است.",
  wcst_ins2_p2:            "برنامه به شما خواهد گفت که انتخاب شما درست است یا غلط.",
  wcst_ins3_title:         "دستورالعمل‌ها (۳/۳)",
  wcst_ins3_p1:            "قانون تطبیق ممکن است بدون هشدار در طول آزمون تغییر کند.",
  wcst_ins3_p2:            "از بازخورد برای کشف قانون صحیح فعلی استفاده کنید.",
  wcst_btn_start:          "شروع",
  wcst_btn_next:           "بعدی",
  wcst_btn_begin:          "شروع آزمون",
  wcst_feedback_correct:   "درست",
  wcst_feedback_error:     "خطا",
  wcst_feedback_too_slow:  "خیلی کند",
  wcst_results_title:      "بازخورد عملکرد WCST شما",
  wcst_results_note:       "(توجه: در مجموع ۶۰ آزمون وجود داشت)",
  wcst_stats_errors:       "تعداد خطاها:",
  wcst_stats_pers:         "تعداد خطاهای تداوم‌گرایانه:",
  wcst_stats_nonpers:      "تعداد خطاهای غیر تداوم‌گرایانه:",
  wcst_results_restart:    "برای شروع مجدد، کلید فاصله را فشار دهید یا روی دکمه زیر ضربه بزنید",
  wcst_btn_restart:        "شروع مجدد آزمون",

};

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('dir', 'rtl');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
