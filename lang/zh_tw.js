const LANG = {

  // ── 共用 ────────────────────────────────────────────────────────────────────
  back_btn:                "返回",

  // ── 首頁 ────────────────────────────────────────────────────────────────────
  index_page_title:        "認知測驗",
  index_heading:           "認知測驗",
  index_subtitle:          "請選擇要開始的測驗。",
  index_btn_corsi:         "科西積木敲擊作業",
  index_btn_vs:            "視覺搜尋作業",
  index_btn_wcst:          "威斯康辛卡片分類測驗",

  // ── 科西積木敲擊作業 ────────────────────────────────────────────────────────
  corsi_page_title:        "科西積木敲擊作業",
  corsi_heading:           "科西積木作業",
  corsi_status_start:      "按下「開始遊戲」以開始",
  corsi_btn_start:         "開始遊戲",
  corsi_btn_play_again:    "再玩一次",
  corsi_status_watch:      length => `觀看序列（長度：${length}）`,
  corsi_status_your_turn:  "換你了！請重複序列。",
  corsi_status_incorrect:  lives  => `答錯了！此長度還剩 ${lives} 次機會。`,
  corsi_status_game_over:  span   => `遊戲結束！你的科西廣度為：${span}`,
  corsi_status_correct:    "正確！進入下一關…",

  // ── 視覺搜尋作業 ────────────────────────────────────────────────────────────
  vs_page_title:           "視覺搜尋實驗",
  vs_heading:              "視覺搜尋作業",
  vs_instructions:         "目標：<strong>紅色圓形</strong>。盡快找到它！",
  vs_label_type:           "類型：",
  vs_option_feature:       "特徵搜尋（簡單）",
  vs_option_conjunction:   "連結搜尋（困難）",
  vs_label_items:          "項目數：",
  vs_btn_start:            "開始下一次試驗",
  vs_btn_present:          "有目標",
  vs_btn_absent:           "無目標",
  vs_feedback_correct:     rt      => `正確！&#9989; 反應時間：${rt} 毫秒`,
  vs_feedback_incorrect:   present => `錯誤 &#10060; 目標實際上${present ? "存在" : "不存在"}。`,

  // ── 威斯康辛卡片分類測驗 ────────────────────────────────────────────────────
  wcst_page_title:         "威斯康辛卡片分類測驗（WCST）",
  wcst_heading:            "威斯康辛卡片分類測驗",
  wcst_subtitle:           "PsyToolkit JS 實作",
  wcst_ins1_title:         "說明（1/3）",
  wcst_ins1_p1:            "畫面右側將顯示四張目標卡片。",
  wcst_ins1_p2:            "每回合頂端會出現一張新卡片。",
  wcst_ins2_title:         "說明（2/3）",
  wcst_ins2_p1:            "請點選右側其中一張目標卡片，以配對頂端的卡片。",
  wcst_ins2_p2:            "系統會告訴你配對是否正確。",
  wcst_ins3_title:         "說明（3/3）",
  wcst_ins3_p1:            "配對規則可能在測驗中途改變，且不會提前告知。",
  wcst_ins3_p2:            "請利用回饋來判斷目前的正確規則。",
  wcst_btn_start:          "開始",
  wcst_btn_next:           "下一步",
  wcst_btn_begin:          "開始測驗",
  wcst_feedback_correct:   "正確",
  wcst_feedback_error:     "錯誤",
  wcst_feedback_too_slow:  "太慢了",
  wcst_results_title:      "WCST 測驗結果",
  wcst_results_note:       "（注意：共有 60 次試驗）",
  wcst_stats_errors:       "錯誤次數：",
  wcst_stats_pers:         "保留性錯誤次數：",
  wcst_stats_nonpers:      "非保留性錯誤次數：",
  wcst_results_restart:    "按空白鍵或點選下方按鈕以重新開始",
  wcst_btn_restart:        "重新測驗",

};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
