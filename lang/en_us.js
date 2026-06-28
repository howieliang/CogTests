const LANG = {

  // ── Shared ───────────────────────────────────────────────────────────────
  back_btn:                "Back",

  // ── Index ─────────────────────────────────────────────────────────────────
  index_page_title:        "Cognitive Tests",
  index_heading:           "Cognitive Tests",
  index_subtitle:          "Select a test to begin.",
  index_btn_corsi:         "Corsi Block-Tapping Task",
  index_btn_vs:            "Visual Search Task",
  index_btn_wcst:          "Wisconsin Card Sorting Test",

  // ── Corsi Block-Tapping Task ──────────────────────────────────────────────
  corsi_page_title:        "Corsi Block-Tapping Task",
  corsi_heading:           "Corsi Block Task",
  corsi_status_start:      'Press "Start Game" to begin',
  corsi_btn_start:         "Start Game",
  corsi_btn_play_again:    "Play Again",
  corsi_status_watch:      length => `Watch the sequence (Length: ${length})`,
  corsi_status_your_turn:  "Your turn! Repeat the sequence.",
  corsi_status_incorrect:  lives  => `Incorrect! You have ${lives} attempt left for this length.`,
  corsi_status_game_over:  span   => `Game Over! Your final Corsi Span is: ${span}`,
  corsi_status_correct:    "Correct! Moving to next level...",

  // ── Visual Search Task ────────────────────────────────────────────────────
  vs_page_title:           "Visual Search Experiment",
  vs_heading:              "Visual Search Task",
  vs_instructions:         "Target: <strong>Red Circle</strong>. Spot it as fast as you can!",
  vs_label_type:           "Type:",
  vs_option_feature:       "Feature (Easy)",
  vs_option_conjunction:   "Conjunction (Hard)",
  vs_label_items:          "Items:",
  vs_btn_start:            "Start Next Trial",
  vs_btn_present:          "Present",
  vs_btn_absent:           "Absent",
  vs_feedback_correct:     rt      => `Correct! &#9989; Response Time: ${rt}ms`,
  vs_feedback_incorrect:   present => `Incorrect &#10060; Target was actually ${present ? "Present" : "Absent"}.`,

  // ── Wisconsin Card Sorting Test ───────────────────────────────────────────
  wcst_page_title:         "Wisconsin Card Sorting Test (WCST)",
  wcst_heading:            "Wisconsin Card Sorting Test",
  wcst_subtitle:           "PsyToolkit JS Implementation",
  wcst_ins1_title:         "Instructions (1/3)",
  wcst_ins1_p1:            "You will see four target cards on the right side of the screen.",
  wcst_ins1_p2:            "A new card will appear at the top of the screen on every turn.",
  wcst_ins2_title:         "Instructions (2/3)",
  wcst_ins2_p1:            "Your task is to match the top card to one of the four target cards by tapping your choice.",
  wcst_ins2_p2:            "The app will tell you if your match is correct or wrong.",
  wcst_ins3_title:         "Instructions (3/3)",
  wcst_ins3_p1:            "The matching rule might change without warning during the test.",
  wcst_ins3_p2:            "Use the feedback to figure out the current correct rule.",
  wcst_btn_start:          "Start",
  wcst_btn_next:           "Next",
  wcst_btn_begin:          "Begin Test",
  wcst_feedback_correct:   "CORRECT",
  wcst_feedback_error:     "ERROR",
  wcst_feedback_too_slow:  "TOO SLOW",
  wcst_results_title:      "Feedback on your WCST performance",
  wcst_results_note:       "(Note: There were in total 60 trials)",
  wcst_stats_errors:       "Error count:",
  wcst_stats_pers:         "Perseveration error count:",
  wcst_stats_nonpers:      "Non-perseveration error count:",
  wcst_results_restart:    "Press space bar or tap below to restart",
  wcst_btn_restart:        "Restart Test",

};

// Apply all static string translations on page load.
// Elements with data-i18n="key" get their innerHTML replaced by LANG[key].
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
