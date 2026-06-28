const LANG = {

  // ── Gedeeld ───────────────────────────────────────────────────────────────
  back_btn:                "Terug",

  // ── Startpagina ───────────────────────────────────────────────────────────
  index_page_title:        "Cognitieve Tests",
  index_heading:           "Cognitieve Tests",
  index_subtitle:          "Selecteer een test om te beginnen.",
  index_btn_corsi:         "Corsi Blokken Taak",
  index_btn_vs:            "Visuele Zoektaak",
  index_btn_wcst:          "Wisconsin Kaartsorteertaak",

  // ── Corsi Blokken Taak ────────────────────────────────────────────────────
  corsi_page_title:        "Corsi Blokken Taak",
  corsi_heading:           "Corsi Blokken Taak",
  corsi_status_start:      'Druk op "Start Spel" om te beginnen',
  corsi_btn_start:         "Start Spel",
  corsi_btn_play_again:    "Opnieuw Spelen",
  corsi_status_watch:      length => `Bekijk de reeks (Lengte: ${length})`,
  corsi_status_your_turn:  "Jouw beurt! Herhaal de reeks.",
  corsi_status_incorrect:  lives  => `Fout! Je hebt nog ${lives} poging over voor deze lengte.`,
  corsi_status_game_over:  span   => `Spel voorbij! Jouw Corsi-span is: ${span}`,
  corsi_status_correct:    "Correct! Naar het volgende niveau…",

  // ── Visuele Zoektaak ──────────────────────────────────────────────────────
  vs_page_title:           "Visueel Zoekexperiment",
  vs_heading:              "Visuele Zoektaak",
  vs_instructions:         "Doel: <strong>Rode Cirkel</strong>. Vind hem zo snel mogelijk!",
  vs_label_type:           "Type:",
  vs_option_feature:       "Kenmerk (Makkelijk)",
  vs_option_conjunction:   "Conjunctie (Moeilijk)",
  vs_label_items:          "Items:",
  vs_btn_start:            "Volgende Proef Starten",
  vs_btn_present:          "Aanwezig",
  vs_btn_absent:           "Afwezig",
  vs_feedback_correct:     rt      => `Correct! &#9989; Reactietijd: ${rt}ms`,
  vs_feedback_incorrect:   present => `Fout &#10060; Doel was eigenlijk ${present ? "aanwezig" : "afwezig"}.`,

  // ── Wisconsin Kaartsorteertaak ────────────────────────────────────────────
  wcst_page_title:         "Wisconsin Kaartsorteertaak (WCST)",
  wcst_heading:            "Wisconsin Kaartsorteertaak",
  wcst_subtitle:           "PsyToolkit JS Implementatie",
  wcst_ins1_title:         "Instructies (1/3)",
  wcst_ins1_p1:            "Je ziet vier doelkaarten aan de rechterkant van het scherm.",
  wcst_ins1_p2:            "Elke beurt verschijnt er een nieuwe kaart bovenaan het scherm.",
  wcst_ins2_title:         "Instructies (2/3)",
  wcst_ins2_p1:            "Jouw taak is om de bovenste kaart te koppelen aan een van de vier doelkaarten door erop te tikken.",
  wcst_ins2_p2:            "De app vertelt je of jouw keuze correct of fout is.",
  wcst_ins3_title:         "Instructies (3/3)",
  wcst_ins3_p1:            "De koppelregel kan zonder waarschuwing veranderen tijdens de test.",
  wcst_ins3_p2:            "Gebruik de feedback om de huidige correcte regel te achterhalen.",
  wcst_btn_start:          "Start",
  wcst_btn_next:           "Volgende",
  wcst_btn_begin:          "Begin Test",
  wcst_feedback_correct:   "CORRECT",
  wcst_feedback_error:     "FOUT",
  wcst_feedback_too_slow:  "TE LANGZAAM",
  wcst_results_title:      "Feedback op jouw WCST-prestatie",
  wcst_results_note:       "(Opmerking: Er waren in totaal 60 proeven)",
  wcst_stats_errors:       "Aantal fouten:",
  wcst_stats_pers:         "Aantal perseveratiefouten:",
  wcst_stats_nonpers:      "Aantal niet-perseveratiefouten:",
  wcst_results_restart:    "Druk op de spatiebalk of tik hieronder om opnieuw te starten",
  wcst_btn_restart:        "Test Herstarten",

};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
