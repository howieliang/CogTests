# CogTests

A suite of touch-first cognitive tests implemented as standalone HTML applications, designed for supervised sessions on portrait tablets (1080×1920). Each test is a single self-contained file — no build system, framework, or dependencies.

Contact: Dr. Rong-Hao Liang (r.liang@tue.nl)

## Tests

| Test | File | Measures | Session |
|---|---|---|---|
| Corsi Block-Tapping Task | `corsi.html` | Visuospatial working memory | Adaptive: sequence length starts at 2 and grows; two attempts per length, ends when both fail |
| Visual Search Task | `visualsearch.html` | Attention / feature vs. conjunction search | 12 practice trials + two 32-trial blocks; set size (4/8/16/32) × target presence, 4 trials per condition |
| Dimensional Change Card Sort (DCCS) | `dccs.html` | Cognitive flexibility (children, "Shape First" PsyToolkit paradigm) | Tap learning → practice → 12 shape + 12 color trials; grows if errors force repeats |
| Wisconsin Card Sorting Test (WCST) | `wcsi.html` | Set shifting / perseveration | 60 trials; the sorting rule (color/shape/count) switches after randomized runs of 4, 6, or 8 trials |

All tests share a common participant-facing pattern: title, always-visible one-line instruction, a detailed instruction card with a Start button, a progress indicator during play (bar with milestone ticks, or "Length x, round y" for Corsi), per-round countdown bars where a response deadline applies, and a plain "Task complete / Try again" ending. **No results are ever shown to the participant** — all metrics go to the logs.

## Running

Open `index.html` in a modern browser (Chrome/Safari/Firefox), directly from disk or served over HTTP:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## User ID

On first launch, `index.html` asks the session manager to set a User ID (password-protected) or skip as `guest`. The ID persists in `localStorage` under `cogtests_user_id`, is shown on the menu and in a badge on every test page, and is stamped into every log entry. It can be changed anytime from the menu via the password-protected "Change" flow.

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
- **Offline resilience** — failed sends queue in `localStorage` (`cogtests_pending_log`) and are retried on every page load and after each successful send. The menu shows a "N unsent log(s)" warning that opens a view of the queued data with a manual Retry All.

Logged metrics per test:

- **Corsi**: span, total score (correct sequences), total errors, spatial transposition errors (adjacent-block taps), other errors
- **Visual Search**: mean correct RT and accuracy per block × presence × set size, search slopes (ms/item), raw per-trial data
- **DCCS**: learning/practice trial counts, correct counts and mean RTs per block, errors, timeouts, raw per-trial data
- **WCST**: total errors, perseveration errors, non-perseveration errors, timeouts

## Repository layout

```
index.html          Menu, user-ID setup/reset, pending-log indicator
corsi.html          Corsi Block-Tapping Task
visualsearch.html   Visual Search Task
dccs.html           Dimensional Change Card Sort
wcsi.html           Wisconsin Card Sorting Test
favicon.png         Shared favicon
```

## Notes

- Everything is inline: each `.html` carries its own CSS and JS. Reaction times use `performance.now()`.
- Sessions are participant-safe by design: results, error counts, and scores are never displayed on screen.
