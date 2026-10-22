// ─── UI language + translations (shared across the CogTests pages) ────────────
// Loaded as a classic <script> before each page's inline script, so these globals
// (uiLang, LANG_NAMES, LANG_FLAGS, LANG_LOCALES, TRANSLATIONS, t, setLang,
// applyTranslations) are shared with it. Works over http:// and file://.
//
// Supported languages: en (default), es, nl, tr. The choice is persisted in
// localStorage.cogtests_lang so it carries across the separate game pages.
//
// NOTE: the es/nl/tr strings below are best-effort translations and should be
// verified by a native speaker before the study is run.

const LANG_KEY = 'cogtests_lang';

// Native language names + national flags shown on the language buttons.
const LANG_NAMES = { en: 'English', es: 'Español', nl: 'Nederlands', tr: 'Türkçe' };
const LANG_FLAGS = { en: '🇬🇧', es: '🇪🇸', nl: '🇳🇱', tr: '🇹🇷' };
// Intl locale per language, used for localized calendar dates / weekday names.
const LANG_LOCALES = { en: 'en-US', es: 'es-ES', nl: 'nl-NL', tr: 'tr-TR' };

// Selected UI language; restored from storage at load, defaults to English.
let uiLang = (() => {
  try { const s = localStorage.getItem(LANG_KEY); if (LANG_NAMES[s]) return s; } catch (e) {}
  return 'en';
})();

const TRANSLATIONS = {
  en: {
    // shared
    back: 'Back', change: 'Change', save: 'Save', cancel: 'Cancel',
    confirm: 'Confirm', close: 'Close', retry_all: 'Retry All',
    continue: 'Continue', try_again: 'Try Again',
    password: 'Password', userid: 'User ID',
    ph_password: 'Enter password', ph_userid: 'Enter user ID',
    user_label: 'User:', userid_label: 'User ID:',
    err_pwd: 'Incorrect password.', err_userid: 'Please enter a user ID.',
    err_new_id: 'Please enter a new ID.',
    // index — setup
    setup_h1: 'Cognitive Tests', setup_sub: 'Set a User ID to begin.',
    setup_note: 'Setting a new User ID will reset the starting date.',
    skip_guest: 'Skip (Guest)',
    // index — calendar
    portal_title: 'Portal',
    cal_note: 'Complete the cognitive tests on each scheduled day. <br/> Play the Mind In Images Game any time you like.',
    pending_msg: 'unsent log(s) — tap to view',
    dev_date: 'Dev date:', dev_reset: 'reset', dev_clear: 'clear history',
    mim_btn: 'Go to Mind In Images Game',
    dev_confirm_msg: 'Clear completion history, session log, and pending upload queue?',
    reset_title: 'Change User ID', new_userid: 'New User ID', ph_new_userid: 'Enter new ID',
    pending_title: 'Unsent logs (stored locally)',
    // menu
    menu_sub: 'Complete these tests',
    menu_corsi: 'Corsi Block-Tapping (~3 minutes)',
    menu_vst: 'Visual Search (~5 minutes)',
    dev_set_done: 'Set done',
    // visual search
    vs_title: 'Visual Search Task',
    vs_instructions: 'Target: <span class="inline-target"></span>. Tap <strong>Present</strong> if you see it, <strong>Absent</strong> if you don\'t.',
    vs_intro: 'The session starts with a short practice block (12 trials with feedback), followed by two blocks of 32 trials each: Feature search and Conjunction search. Respond as quickly and accurately as possible.',
    vs_start: 'Start Practice',
    vs_present: '<span class="inline-target"></span> Present',
    present_word: 'Present', absent_word: 'Absent',
    phase_practice: 'Practice', phase_feature: 'Feature search', phase_conj: 'Conjunction search',
    vs_progress: '{label} — Trial {i} / {n}',
    vs_practice_done: 'Practice complete! The main experiment starts now — no more feedback will be given. ',
    vs_block: 'Block {n} of 2: {label} — 32 trials.',
    vs_timeout: 'Time out. Try to respond in 5 seconds.',
    vs_correct: 'Correct! &#9989; Response Time: {rt}ms',
    vs_incorrect: 'Incorrect &#10060; Target was actually {state}.',
    thank_you_done: 'Thank you! Task completed.',
    // corsi
    corsi_title: 'Corsi Block Task',
    corsi_instructions: 'Watch the blocks light up, tap them in the same order.',
    corsi_intro: 'The sequence starts at 2 blocks and grows as you succeed. You get two attempts at each length; the test ends when both attempts at a length fail.',
    corsi_start: 'Start Test',
    corsi_round: 'Round {n} (of 2)',
    corsi_done: 'Task complete. Thank you.',
    corsi_watch: 'Watch the sequence',
    corsi_your_turn: 'Your turn! Repeat the sequence.',
    corsi_correct_next: 'Correct! Moving to next level...',
    corsi_incorrect_next: 'Incorrect! Moving to the next length…',
    corsi_correct_more: 'Correct! One more sequence at this length…',
    corsi_incorrect_retry: 'Incorrect! You have 1 attempt left for this length.',
  },

  es: {
    back: 'Atrás', change: 'Cambiar', save: 'Guardar', cancel: 'Cancelar',
    confirm: 'Confirmar', close: 'Cerrar', retry_all: 'Reintentar todo',
    continue: 'Continuar', try_again: 'Intentar de nuevo',
    password: 'Contraseña', userid: 'ID de usuario',
    ph_password: 'Introduce la contraseña', ph_userid: 'Introduce el ID de usuario',
    user_label: 'Usuario:', userid_label: 'ID de usuario:',
    err_pwd: 'Contraseña incorrecta.', err_userid: 'Introduce un ID de usuario.',
    err_new_id: 'Introduce un nuevo ID.',
    setup_h1: 'Pruebas cognitivas', setup_sub: 'Configura un ID de usuario para empezar.',
    setup_note: 'Configurar un nuevo ID de usuario reiniciará la fecha de inicio.',
    skip_guest: 'Omitir (Invitado)',
    portal_title: 'Portal',
    cal_note: 'Completa las pruebas cognitivas en cada día programado. <br/> Juega al Mind In Images Game cuando quieras.',
    pending_msg: 'registro(s) sin enviar — toca para ver',
    dev_date: 'Fecha dev:', dev_reset: 'restablecer', dev_clear: 'borrar historial',
    mim_btn: 'Ir al Mind In Images Game',
    dev_confirm_msg: '¿Borrar el historial de finalización, el registro de sesión y la cola de subida pendiente?',
    reset_title: 'Cambiar ID de usuario', new_userid: 'Nuevo ID de usuario', ph_new_userid: 'Introduce el nuevo ID',
    pending_title: 'Registros sin enviar (guardados localmente)',
    menu_sub: 'Completa estas pruebas',
    menu_corsi: 'Bloques de Corsi (~3 minutos)',
    menu_vst: 'Búsqueda visual (~5 minutos)',
    dev_set_done: 'Marcar como hecho',
    vs_title: 'Tarea de búsqueda visual',
    vs_instructions: 'Objetivo: <span class="inline-target"></span>. Pulsa <strong>Presente</strong> si lo ves, <strong>Ausente</strong> si no.',
    vs_intro: 'La sesión empieza con un breve bloque de práctica (12 ensayos con retroalimentación), seguido de dos bloques de 32 ensayos cada uno: búsqueda por característica y búsqueda por conjunción. Responde con la mayor rapidez y precisión posible.',
    vs_start: 'Empezar práctica',
    vs_present: '<span class="inline-target"></span> Presente',
    present_word: 'Presente', absent_word: 'Ausente',
    phase_practice: 'Práctica', phase_feature: 'Búsqueda por característica', phase_conj: 'Búsqueda por conjunción',
    vs_progress: '{label} — Ensayo {i} / {n}',
    vs_practice_done: '¡Práctica completada! El experimento principal empieza ahora — ya no habrá retroalimentación. ',
    vs_block: 'Bloque {n} de 2: {label} — 32 ensayos.',
    vs_timeout: 'Tiempo agotado. Intenta responder en 5 segundos.',
    vs_correct: '¡Correcto! &#9989; Tiempo de respuesta: {rt}ms',
    vs_incorrect: 'Incorrecto &#10060; El objetivo en realidad estaba {state}.',
    thank_you_done: '¡Gracias! Tarea completada.',
    corsi_title: 'Tarea de bloques de Corsi',
    corsi_instructions: 'Observa cómo se iluminan los bloques y tócalos en el mismo orden.',
    corsi_intro: 'La secuencia empieza con 2 bloques y crece a medida que aciertas. Tienes dos intentos en cada longitud; la prueba termina cuando fallan ambos intentos de una longitud.',
    corsi_start: 'Empezar prueba',
    corsi_round: 'Ronda {n} (de 2)',
    corsi_done: 'Tarea completada. Gracias.',
    corsi_watch: 'Observa la secuencia',
    corsi_your_turn: '¡Tu turno! Repite la secuencia.',
    corsi_correct_next: '¡Correcto! Pasando al siguiente nivel...',
    corsi_incorrect_next: '¡Incorrecto! Pasando a la siguiente longitud…',
    corsi_correct_more: '¡Correcto! Una secuencia más en esta longitud…',
    corsi_incorrect_retry: '¡Incorrecto! Te queda 1 intento en esta longitud.',
  },

  nl: {
    back: 'Terug', change: 'Wijzigen', save: 'Opslaan', cancel: 'Annuleren',
    confirm: 'Bevestigen', close: 'Sluiten', retry_all: 'Alles opnieuw',
    continue: 'Doorgaan', try_again: 'Opnieuw proberen',
    password: 'Wachtwoord', userid: 'Gebruikers-ID',
    ph_password: 'Voer wachtwoord in', ph_userid: 'Voer gebruikers-ID in',
    user_label: 'Gebruiker:', userid_label: 'Gebruikers-ID:',
    err_pwd: 'Onjuist wachtwoord.', err_userid: 'Voer een gebruikers-ID in.',
    err_new_id: 'Voer een nieuwe ID in.',
    setup_h1: 'Cognitieve tests', setup_sub: 'Stel een gebruikers-ID in om te beginnen.',
    setup_note: 'Een nieuwe gebruikers-ID instellen zet de startdatum terug.',
    skip_guest: 'Overslaan (Gast)',
    portal_title: 'Portaal',
    cal_note: 'Voltooi de cognitieve tests op elke geplande dag. <br/> Speel de Mind In Images Game wanneer je wilt.',
    pending_msg: 'niet-verzonden logboek(en) — tik om te bekijken',
    dev_date: 'Dev-datum:', dev_reset: 'herstellen', dev_clear: 'geschiedenis wissen',
    mim_btn: 'Ga naar de Mind In Images Game',
    dev_confirm_msg: 'Voltooiingsgeschiedenis, sessielogboek en wachtrij voor uploads wissen?',
    reset_title: 'Gebruikers-ID wijzigen', new_userid: 'Nieuwe gebruikers-ID', ph_new_userid: 'Voer nieuwe ID in',
    pending_title: 'Niet-verzonden logboeken (lokaal opgeslagen)',
    menu_sub: 'Voltooi deze tests',
    menu_corsi: 'Corsi-blokken tikken (~3 minuten)',
    menu_vst: 'Visueel zoeken (~5 minuten)',
    dev_set_done: 'Markeer als klaar',
    vs_title: 'Visuele zoektaak',
    vs_instructions: 'Doel: <span class="inline-target"></span>. Tik op <strong>Aanwezig</strong> als je het ziet, <strong>Afwezig</strong> als je het niet ziet.',
    vs_intro: 'De sessie begint met een kort oefenblok (12 trials met feedback), gevolgd door twee blokken van elk 32 trials: kenmerkzoeken en conjunctiezoeken. Reageer zo snel en nauwkeurig mogelijk.',
    vs_start: 'Oefening starten',
    vs_present: '<span class="inline-target"></span> Aanwezig',
    present_word: 'Aanwezig', absent_word: 'Afwezig',
    phase_practice: 'Oefening', phase_feature: 'Kenmerkzoeken', phase_conj: 'Conjunctiezoeken',
    vs_progress: '{label} — Trial {i} / {n}',
    vs_practice_done: 'Oefening voltooid! Het echte experiment begint nu — er wordt geen feedback meer gegeven. ',
    vs_block: 'Blok {n} van 2: {label} — 32 trials.',
    vs_timeout: 'Tijd om. Probeer binnen 5 seconden te reageren.',
    vs_correct: 'Correct! &#9989; Reactietijd: {rt}ms',
    vs_incorrect: 'Onjuist &#10060; Het doel was eigenlijk {state}.',
    thank_you_done: 'Bedankt! Taak voltooid.',
    corsi_title: 'Corsi-bloktaak',
    corsi_instructions: 'Kijk welke blokken oplichten en tik ze in dezelfde volgorde aan.',
    corsi_intro: 'De reeks begint met 2 blokken en wordt langer naarmate je slaagt. Je krijgt twee pogingen per lengte; de test eindigt wanneer beide pogingen op een lengte mislukken.',
    corsi_start: 'Test starten',
    corsi_round: 'Ronde {n} (van 2)',
    corsi_done: 'Taak voltooid. Bedankt.',
    corsi_watch: 'Bekijk de reeks',
    corsi_your_turn: 'Jouw beurt! Herhaal de reeks.',
    corsi_correct_next: 'Correct! Naar het volgende niveau...',
    corsi_incorrect_next: 'Onjuist! Naar de volgende lengte…',
    corsi_correct_more: 'Correct! Nog één reeks op deze lengte…',
    corsi_incorrect_retry: 'Onjuist! Je hebt nog 1 poging voor deze lengte.',
  },

  tr: {
    back: 'Geri', change: 'Değiştir', save: 'Kaydet', cancel: 'İptal',
    confirm: 'Onayla', close: 'Kapat', retry_all: 'Tümünü yeniden dene',
    continue: 'Devam', try_again: 'Tekrar dene',
    password: 'Parola', userid: 'Kullanıcı Kimliği',
    ph_password: 'Parolayı girin', ph_userid: 'Kullanıcı kimliğini girin',
    user_label: 'Kullanıcı:', userid_label: 'Kullanıcı Kimliği:',
    err_pwd: 'Yanlış parola.', err_userid: 'Lütfen bir kullanıcı kimliği girin.',
    err_new_id: 'Lütfen yeni bir kimlik girin.',
    setup_h1: 'Bilişsel Testler', setup_sub: 'Başlamak için bir Kullanıcı Kimliği belirleyin.',
    setup_note: 'Yeni bir Kullanıcı Kimliği belirlemek başlangıç tarihini sıfırlar.',
    skip_guest: 'Atla (Misafir)',
    portal_title: 'Portal',
    cal_note: 'Planlanan her gün bilişsel testleri tamamlayın. <br/> Mind In Images Game\'i istediğiniz zaman oynayın.',
    pending_msg: 'gönderilmemiş kayıt — görüntülemek için dokunun',
    dev_date: 'Dev tarihi:', dev_reset: 'sıfırla', dev_clear: 'geçmişi temizle',
    mim_btn: 'Mind In Images Game\'e git',
    dev_confirm_msg: 'Tamamlanma geçmişi, oturum kaydı ve bekleyen yükleme kuyruğu temizlensin mi?',
    reset_title: 'Kullanıcı Kimliğini Değiştir', new_userid: 'Yeni Kullanıcı Kimliği', ph_new_userid: 'Yeni kimliği girin',
    pending_title: 'Gönderilmemiş kayıtlar (yerel olarak saklanır)',
    menu_sub: 'Bu testleri tamamlayın',
    menu_corsi: 'Corsi Blok Dokunma (~3 dakika)',
    menu_vst: 'Görsel Arama (~5 dakika)',
    dev_set_done: 'Tamamlandı olarak işaretle',
    vs_title: 'Görsel Arama Görevi',
    vs_instructions: 'Hedef: <span class="inline-target"></span>. Görüyorsanız <strong>Var</strong>, görmüyorsanız <strong>Yok</strong> düğmesine dokunun.',
    vs_intro: 'Oturum kısa bir alıştırma bloğuyla başlar (geri bildirimli 12 deneme), ardından her biri 32 denemelik iki blok gelir: özellik araması ve bağlaşım araması. Mümkün olduğunca hızlı ve doğru yanıt verin.',
    vs_start: 'Alıştırmayı başlat',
    vs_present: '<span class="inline-target"></span> Var',
    present_word: 'Var', absent_word: 'Yok',
    phase_practice: 'Alıştırma', phase_feature: 'Özellik araması', phase_conj: 'Bağlaşım araması',
    vs_progress: '{label} — Deneme {i} / {n}',
    vs_practice_done: 'Alıştırma tamamlandı! Asıl deney şimdi başlıyor — artık geri bildirim verilmeyecek. ',
    vs_block: 'Blok {n} / 2: {label} — 32 deneme.',
    vs_timeout: 'Süre doldu. 5 saniye içinde yanıt vermeye çalışın.',
    vs_correct: 'Doğru! &#9989; Yanıt süresi: {rt}ms',
    vs_incorrect: 'Yanlış &#10060; Hedef aslında {state}.',
    thank_you_done: 'Teşekkürler! Görev tamamlandı.',
    corsi_title: 'Corsi Blok Görevi',
    corsi_instructions: 'Blokların yanmasını izleyin ve aynı sırayla dokunun.',
    corsi_intro: 'Dizi 2 blokla başlar ve başardıkça uzar. Her uzunlukta iki deneme hakkınız vardır; bir uzunlukta her iki deneme de başarısız olduğunda test biter.',
    corsi_start: 'Testi başlat',
    corsi_round: 'Tur {n} (2 turdan)',
    corsi_done: 'Görev tamamlandı. Teşekkürler.',
    corsi_watch: 'Diziyi izleyin',
    corsi_your_turn: 'Sıra sizde! Diziyi tekrarlayın.',
    corsi_correct_next: 'Doğru! Sonraki seviyeye geçiliyor...',
    corsi_incorrect_next: 'Yanlış! Sonraki uzunluğa geçiliyor…',
    corsi_correct_more: 'Doğru! Bu uzunlukta bir dizi daha…',
    corsi_incorrect_retry: 'Yanlış! Bu uzunluk için 1 denemeniz kaldı.',
  },
};

// Translate a key for the current language, with {var} substitution and an
// English fallback for any missing key.
function t(key, vars) {
  const table = TRANSLATIONS[uiLang] || TRANSLATIONS.en;
  let s = (table[key] != null) ? table[key] : (TRANSLATIONS.en[key] != null ? TRANSLATIONS.en[key] : key);
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

// Re-render every static element tagged with data-i18n / data-i18n-ph /
// data-i18n-html for the current language. Dynamic strings use t() at render time.
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
}

// Switch language: persist the choice and re-render static UI. Pages that also
// render dynamic content (e.g. the calendar) can define window.onLangChange to
// hook in their own re-render.
function setLang(code) {
  uiLang = LANG_NAMES[code] ? code : 'en';
  try { localStorage.setItem(LANG_KEY, uiLang); } catch (e) {}
  applyTranslations();
  if (typeof window.onLangChange === 'function') window.onLangChange();
}

// Scripts are placed after the page markup, so the DOM is ready here. Apply the
// stored-language text once at load (keeps attributes and content in sync).
applyTranslations();
