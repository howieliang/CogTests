# CogTests

A suite of touch-first cognitive tests for longitudinal use, implemented as standalone HTML applications and designed for supervised sessions on portrait tablets (1080×1920). Participants follow an 8-week schedule with two test days per week; each test day, they complete four tests. Every page is a single self-contained file — no build system, framework, or dependencies.

Contact: Dr. Rong-Hao Liang (r.liang@tue.nl)

## The tests

| Test | File | Measures | Session (~duration) |
|---|---|---|---|
| Corsi Block-Tapping | `corsi.html` | Visuospatial working memory | Adaptive: sequence length starts at 2 and grows; two rounds per length, ends when both fail (~3 min) |
| Visual Search | `visualsearch.html` | Attention / feature vs. conjunction search | 12 practice trials + two 32-trial blocks; set size (4/8/16/32) × target presence, 4 trials per condition; 5 s response window (~5 min) |
| Dimensional Change Card Sort (DCCS) | `dccs.html` | Cognitive flexibility (children, "Shape First" paradigm) | Tap learning → practice → 12 shape + 12 color trials; grows if errors force repeats; 15 s response window (~5 min) |
| Wisconsin Card Sorting (WCST) | `wcsi.html` | Set shifting / perseveration | 60 trials; the sorting rule (color/shape/count) switches after randomized runs of 4, 6, or 8 trials; 15 s response window (~10 min) |

All tests share a common participant-facing pattern: title, always-visible one-line instruction, a detailed instruction card with a Start button, progress indicators during play (progress bar with milestone ticks, per-round countdown bars near the deadline, step dots and a color-coded board outline in Corsi), audio feedback, and a plain "Task complete / Try again" ending. **No results are ever shown to the participant** — all metrics go to the logs.

## Weekly schedule

`index.html` (the "Portal") shows an 8-week calendar (9 Monday-aligned week rows × Mon–Sun columns) and links to the companion [Mind In Images game](https://howieliang.github.io/mim-app/), playable any time. **Mondays are test days** — only the **current week's** Monday is tappable (throughout that week) and opens the test menu (`menu.html`); other Mondays are shown as scheduled, and all remaining days are inactive. The schedule starts on the day the User ID is configured and runs for 8 weeks.

Completion tracking:

- Tests completed today show **green** on the menu.
- Once all four are done, today's calendar cell turns green — and completed days **stay green** across the schedule, building a visible compliance history.
- Menu colors reset automatically each new day; changing the User ID resets the schedule and history.

Navigation: index (setup → calendar) → the current week's Monday → menu → test → Back → menu → Back → calendar.

## Running

Open `index.html` in a modern browser (Chrome/Safari/Firefox), directly from disk or served over HTTP:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## User ID

On first launch, the session manager sets a User ID (password-protected) or skips as `guest`. The ID persists in `localStorage`, is shown on the calendar, menu, and every test page, and is stamped into every log entry. It can be changed anytime from the calendar via the password-protected "Change" flow — which also resets the schedule's starting date.

## Developer mode

Setting the User ID to `0` enables testing tools:

- **Dev date** dropdowns (year/month/day) on the calendar override "today", so schedule availability and completion colors can be previewed for any date. The simulated date also governs completion marking, so switching days behaves like real day changes. "reset" returns to the real clock.
- A **Set done** button on the menu marks all four tests complete for the current (simulated) day.

Research logs always carry real timestamps, regardless of the simulated date.

## Data logging

Each completed session produces one entry:

```
{ user_id, game_type, timestamp (yyyy-mm-dd-hh-mm-ss), ...metrics }
```

- **Console / DevTools** — every entry prints with a `COGTEST_LOG` prefix and accumulates in a global `sessionLog` array (`console.table(sessionLog)`), mirrored to `sessionStorage` so it spans page navigations within a tab.
- **Remote (Data Foundry)** — entries POST in real time to per-test datasets:

  | game_type | Test | Dataset | Activity |
  |---|---|---|---|
  | 1 | Corsi | 25600 | `corsi` |
  | 2 | Visual Search | 25601 | `vst` |
  | 3 | DCCS | 25602 | `dccs` |
  | 4 | WCST | 25603 | `wcst` |

  Nested per-trial arrays (`trials` in Visual Search and DCCS) are stringified into a single JSON field.
- **Offline resilience** — failed sends queue in `localStorage` and are retried on every page load and after each successful send. The calendar shows a "N unsent log(s)" warning that opens a view of the queued data with a manual Retry All.

Logged metrics per test:

- **Corsi**: span, total score (correct sequences), total errors, spatial transposition errors (adjacent-block taps), other errors
- **Visual Search**: mean correct RT and accuracy per block × presence × set size, search slopes (ms/item), raw per-trial data
- **DCCS**: learning/practice trial counts, correct counts and mean RTs per block, errors, timeouts, raw per-trial data
- **WCST**: total errors, perseveration errors, non-perseveration errors, timeouts

## Repository layout

```
index.html          User-ID setup/reset, 8-week schedule calendar, pending-log indicator
menu.html           Test menu with completion status (reached from today's test day)
corsi.html          Corsi Block-Tapping
visualsearch.html   Visual Search
dccs.html           Dimensional Change Card Sort
wcsi.html           Wisconsin Card Sorting
favicon.png         Shared favicon
```

## Notes

- Everything is inline: each `.html` carries its own CSS and JS. Reaction times use `performance.now()`.
- All shared state (User ID, schedule, completion history, offline log queue) lives in the browser's `localStorage` — per browser profile, per device.
- Sessions are participant-safe by design: results, error counts, and scores are never displayed on screen.
