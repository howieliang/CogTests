const LANG = {

  // ── Compartido ────────────────────────────────────────────────────────────
  back_btn:                "Volver",

  // ── Página de inicio ──────────────────────────────────────────────────────
  index_page_title:        "Pruebas Cognitivas",
  index_heading:           "Pruebas Cognitivas",
  index_subtitle:          "Selecciona una prueba para comenzar.",
  index_btn_corsi:         "Tarea de Bloques de Corsi",
  index_btn_vs:            "Tarea de Búsqueda Visual",
  index_btn_wcst:          "Test de Clasificación de Tarjetas de Wisconsin",

  // ── Tarea de Bloques de Corsi ─────────────────────────────────────────────
  corsi_page_title:        "Tarea de Bloques de Corsi",
  corsi_heading:           "Tarea de Bloques de Corsi",
  corsi_status_start:      'Pulsa "Iniciar Juego" para comenzar',
  corsi_btn_start:         "Iniciar Juego",
  corsi_btn_play_again:    "Jugar de Nuevo",
  corsi_status_watch:      length => `Observa la secuencia (Longitud: ${length})`,
  corsi_status_your_turn:  "¡Tu turno! Repite la secuencia.",
  corsi_status_incorrect:  lives  => `¡Incorrecto! Te queda${lives === 1 ? "" : "n"} ${lives} intento${lives === 1 ? "" : "s"} para esta longitud.`,
  corsi_status_game_over:  span   => `¡Juego terminado! Tu amplitud de Corsi es: ${span}`,
  corsi_status_correct:    "¡Correcto! Pasando al siguiente nivel…",

  // ── Tarea de Búsqueda Visual ──────────────────────────────────────────────
  vs_page_title:           "Experimento de Búsqueda Visual",
  vs_heading:              "Tarea de Búsqueda Visual",
  vs_instructions:         "Objetivo: <strong>Círculo Rojo</strong>. ¡Encuéntralo lo más rápido posible!",
  vs_label_type:           "Tipo:",
  vs_option_feature:       "Característica (Fácil)",
  vs_option_conjunction:   "Conjunción (Difícil)",
  vs_label_items:          "Elementos:",
  vs_btn_start:            "Iniciar Siguiente Ensayo",
  vs_btn_present:          "Presente",
  vs_btn_absent:           "Ausente",
  vs_feedback_correct:     rt      => `¡Correcto! &#9989; Tiempo de reacción: ${rt}ms`,
  vs_feedback_incorrect:   present => `Incorrecto &#10060; El objetivo estaba ${present ? "presente" : "ausente"}.`,

  // ── Test de Clasificación de Tarjetas de Wisconsin ────────────────────────
  wcst_page_title:         "Test de Clasificación de Tarjetas de Wisconsin (WCST)",
  wcst_heading:            "Test de Clasificación de Tarjetas de Wisconsin",
  wcst_subtitle:           "Implementación JS de PsyToolkit",
  wcst_ins1_title:         "Instrucciones (1/3)",
  wcst_ins1_p1:            "Verás cuatro tarjetas objetivo en el lado derecho de la pantalla.",
  wcst_ins1_p2:            "En cada turno aparecerá una nueva tarjeta en la parte superior.",
  wcst_ins2_title:         "Instrucciones (2/3)",
  wcst_ins2_p1:            "Tu tarea es emparejar la tarjeta superior con una de las cuatro tarjetas objetivo tocándola.",
  wcst_ins2_p2:            "La aplicación te dirá si tu elección es correcta o incorrecta.",
  wcst_ins3_title:         "Instrucciones (3/3)",
  wcst_ins3_p1:            "La regla de emparejamiento puede cambiar sin aviso durante la prueba.",
  wcst_ins3_p2:            "Usa la retroalimentación para descubrir la regla correcta en cada momento.",
  wcst_btn_start:          "Iniciar",
  wcst_btn_next:           "Siguiente",
  wcst_btn_begin:          "Comenzar Prueba",
  wcst_feedback_correct:   "CORRECTO",
  wcst_feedback_error:     "ERROR",
  wcst_feedback_too_slow:  "DEMASIADO LENTO",
  wcst_results_title:      "Resultados de tu WCST",
  wcst_results_note:       "(Nota: Hubo 60 ensayos en total)",
  wcst_stats_errors:       "Número de errores:",
  wcst_stats_pers:         "Errores de perseveración:",
  wcst_stats_nonpers:      "Errores no perseverativos:",
  wcst_results_restart:    "Pulsa la barra espaciadora o toca el botón para reiniciar",
  wcst_btn_restart:        "Reiniciar Prueba",

};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LANG[el.dataset.i18n];
    if (typeof val === 'string') el.innerHTML = val;
  });
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = LANG[titleEl.dataset.i18n] || titleEl.textContent;
});
