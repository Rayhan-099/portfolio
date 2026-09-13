# Rayhan-099 Portfolio — Master Product Requirements Document

**Status:** Active Master Specification  
**Project Root:** `/mnt/d/Vyuk Projects/Rayhan-099`  
**Canonical Repository:** `https://github.com/Rayhan-099/portfolio.git`  
**Primary Builder:** ANGY autonomous engineering agent

## 1. Mission

Build an exceptional personal portfolio directly inside `/mnt/d/Vyuk Projects/Rayhan-099`. There is **NO `/portfolio` subdirectory**. The site is a professional software-engineering portfolio first and a cinematic visual experience second. It must communicate engineering ability, technical depth, curiosity, creativity, personality, maturity, and exceptional visual craft.

## 2. Autonomous Execution

ANGY owns the complete implementation lifecycle. It must autonomously inspect the repository, read all source material, inspect dependencies and tools, resolve compatibility, install required packages, search and use 21st.dev, use Motion extensively, use installed skills, use Impeccable, use Playwright, source and optimize appropriate visual assets, implement the application, run it, browser-test it, fix problems, commit each phase, push each phase, and continue without routine approval.

The user must not manually orchestrate routine work. Do not repeatedly ask whether to continue. Only stop for a genuine unresolved factual/product ambiguity.

## 3. Source of Truth

Use this priority:

1. `prd.md` — product/design/technical requirements
2. `about.md` — factual personal content
3. `resume.pdf` — factual résumé content
4. actual filesystem/repository — implementation reality
5. explicit project-conversation decisions

Never invent employers, internships, clients, achievements, awards, metrics, certifications, education, projects, experience, GitHub activity, testimonials, or claims. Unknown information is `TBD`, `configurable`, or omitted.

## 4. Repository Baseline

The project may contain:

```text
.agents/
.codex/
.github/
.impeccable/
node_modules/
tests/
.gitignore
about.md
package.json
package-lock.json
playwright.config.ts
prd.md
rayhan-headshot.jpg
resume.pdf
robots.ts
sitemap.ts
skills-lock.json
```

Inspect the real filesystem; do not trust this list blindly. Do not delete anything until its purpose is understood.

## 5. Tooling Mandate

ANGY must inspect and meaningfully use relevant existing tooling. Known/relevant tools include:

- Playwright
- Impeccable
- Motion
- TypeScript
- agent skills/configuration
- 21st.dev tooling/skills where available
- LiquidGlassJS
- Three.js / React Three Fiber / ShaderGradient when compatible and useful
- `skills-lock.json`

“All installed things should be used” means every relevant installed tool must be evaluated and used where it improves the result. Do not force meaningless technology into the site.

## 6. Dependency Discipline

Before installing or changing dependencies, inspect `package.json`, `package-lock.json`, installed versions, and peer requirements. Resolve conflicts deliberately. **Never use `--force` or `--legacy-peer-deps`.** If React/Next/R3F/Three/ShaderGradient or another package conflicts, select compatible versions and document the decision.

## 7. Framework

Prefer the existing framework if suitable. If the repository is only a tooling shell, establish a production-quality React/TypeScript application with routing, reusable components, structured content, styling, design tokens, metadata, testing, and production scripts. Do not rewrite a suitable stack for fashion.

## 8. Product Identity

The site must feel like a **premium software-engineering portfolio with a cinematic atmospheric identity**. It must not feel like a generic developer template, SaaS landing page, AI-generated portfolio, résumé dump, Tailwind demo, or component showcase.

## 9. Information Architecture

Keep professional terminology:

```text
Home
About
Skills
Projects
Experience / Achievements
Education
Certifications
Contact
```

Never use visitor-facing game concepts such as Character, Quest, Abilities, Inventory, Summon, Realm, Lore, XP, Level, Skill Tree, or Artifact. Fantasy influence is visual only.

## 10. Creative Direction

Combine:

**modern software engineering + Genshin-inspired elegance + Hollow Knight-inspired atmosphere + premium cinematic web design**

Desired qualities:

- cinematic
- mysterious
- elegant
- atmospheric
- ethereal
- sophisticated
- dark
- premium
- modern
- memorable

Target feeling: **a premium engineer portfolio discovered inside an atmospheric fantasy world.**

## 11. Genshin Visual Reference

Use the visual principles of Genshin for:

- refined ornamentation;
- delicate linework;
- elegant UI framing;
- circular geometry;
- constellation-like motifs;
- layered surfaces;
- cinematic lighting;
- restrained accents;
- particles;
- typography;
- premium transitions.

Do not reproduce the game's UI wholesale and do not make copyrighted game artwork the site's identity.

## 12. Hollow Knight Visual Reference

Use Hollow Knight for:

- near-black environments;
- enormous negative space;
- ivory linework;
- pale-blue illumination;
- organic curves;
- environmental depth;
- dust/particle atmosphere;
- hand-drawn-feeling ornamentation;
- restrained drama;
- strong silhouettes.

Create an original implementation rather than a fan site.

## 13. Visual Synthesis

The target aesthetic is:

> **Genshin UI elegance discovered inside a Hollow Knight-like atmospheric environment.**

Use dark environmental backgrounds, fine linework, controlled highlights, soft atmospheric depth, subtle particles, layered surfaces, elegant borders, and strong typography.

Avoid purple gradient soup, random glowing blobs, neon overload, excessive glass, visual noise, and excessive rounded cards.

## 14. Art Direction

The page must feel composed rather than assembled. Use intentional asymmetry, negative space, focal points, visual rhythm, depth hierarchy, strong typography, fine details, environmental transitions, and recurring motifs. Every decorative element needs a reason.

## 15. Typography

Use sophisticated display typography, highly readable body typography, compact technical metadata, and restrained labels. Maintain readability across cinematic moments, technical content, recruiter scanning, and mobile.

## 16. Color System

Use semantic tokens such as:

```text
--background
--background-elevated
--surface
--surface-glass
--text-primary
--text-secondary
--text-muted
--line
--accent
--accent-soft
--glow
--success
--warning
--error
```

Base environment: dark. Accents: restrained and purposeful. Avoid excessive gradients.

## 17. Surfaces

Surfaces may use transparency, blur, fine borders, displacement, soft illumination, texture, shadow, and atmospheric depth. Use LiquidGlassJS selectively. Glass is a material, not the entire design.

## 18. Hero

Immediately communicate **who Rayhan is + what he does + why the portfolio is worth exploring**. Use factual source content. The hero may include name, positioning, supporting statement, headshot, CTAs, atmosphere, particles, navigation, scroll cue, and layered typography. It should be the strongest visual moment without becoming a game intro.

## 19. About

Use factual `about.md` and résumé content. Do not dump biography text. Create a visual narrative around professional positioning, education, interests where appropriate, technical identity, and personality. Use Motion for progressive reveal.

## 20. Skills

Present a sophisticated technical profile, not star ratings. Communicate languages, frameworks, libraries, databases, cloud/tools, AI/ML, engineering domains, and interests. Filtering, grouping, hover details, animated relationships, and responsive exploration are encouraged. Do not create a fake game skill tree.

## 21. Projects

Projects are the core proof of engineering ability.

Feature:

1. **Lumine** — AI-powered skin intelligence platform.
2. **Current Capital** — finance management platform.
3. **Health Assistant Platform** — healthcare / SIH project.
4. **Real-Time Hand Tracking Visualizer** — Three.js / WebGL / MediaPipe computer-vision project.

Use only factual information from source files. Where available show purpose, problem, solution, role, technologies, architecture, functionality, outcome, repository, demo, media, and technical details. Never invent metrics.

## 22. Project Presentation

Projects should behave like interactive case studies rather than generic cards. Consider cinematic horizontal carousels, stacked panels, media-led cards, scroll transitions, expandable details, hover previews, project-to-project transitions, and animated technical metadata. Choose one coherent system and adapt it for touch/mobile.

## 23. Experience / Achievements

Use only factual information. Use an editorial timeline/list/milestone system with date markers, linework, progressive reveal, and layered chronology where appropriate.

## 24. Education

Present verified institution, program/degree, dates, and relevant factual details with clear professional hierarchy.

## 25. Certifications

Use only verified certifications. Present issuer, title, date/details, and supporting links where available. Avoid a boring certificate grid.

## 26. Contact

Create a premium but extremely usable contact experience using verified contact methods. Possible features include form, copy-email interaction, social links, résumé access, and animated success state. Reliability and accessibility always beat visual effects.

## 27. Navigation

Navigation must be elegant, minimal, contextual, keyboard accessible, and mobile friendly. Possible behaviors include active-section state, smooth scroll, cinematic transitions, subtle progress, and animated underlines/ornaments. Do not make it a dashboard.

# 28. MOTION — FIRST-CLASS REQUIREMENT

The user explicitly wants **crazy, peak-level motion and animation**. Interpret “crazy” as highly sophisticated, layered, cinematic, technically impressive motion — not chaotic motion.

Motion must be deeply integrated and not merely installed.

## 29. Motion Coverage

Use Motion extensively for:

- page entrance;
- hero reveal;
- word/character-level typography;
- staggered content;
- section reveals;
- scroll-linked transforms;
- parallax;
- depth shifts;
- project transitions;
- project hover;
- image zoom/displacement;
- navigation/menu transitions;
- dialogs;
- magnetic interactions;
- button micro-interactions;
- border tracing;
- underlines;
- light sweeps;
- ambient movement;
- particles;
- carousels;
- route transitions;
- cursor interactions.

Do not animate indiscriminately.

## 30. Advanced Motion

Combine Motion where useful with CSS transforms, SVG, masks, clip-path, blur, opacity, scale, spring physics, scroll progress, pointer position/velocity, WebGL, and shader uniforms.

## 31. Motion Quality

Motion must feel smooth, expensive, physical, cinematic, responsive, and intentional; restrained at rest and dramatic during meaningful transitions. Avoid excessive bouncing, random rotation, distracting infinite loops, long waits, blocked content, or motion that harms reading.

Every major animation needs a trigger, purpose, timing, easing, mobile behavior, and reduced-motion behavior.

## 32. Reduced Motion

Support `prefers-reduced-motion: reduce`. Disable unnecessary parallax/loops, shorten transitions, remove excessive transforms, and preserve all content/usability.

# 33. 21ST.DEV — AUTONOMOUS

21st.dev is **not manual**. ANGY owns:

```text
SEARCH → REVIEW → SHORTLIST → INSPECT → CHECK COMPATIBILITY/LICENSE → INSTALL → ADAPT → INTEGRATE → TEST → REFINE
```

The user must never have to manually search, copy, paste, install, or adapt obvious 21st.dev components.

## 34. 21st.dev Search Targets

Search for useful components such as cinematic heroes, animated typography, navigation, project carousels, magnetic buttons, image reveals, liquid/glass surfaces, WebGL backgrounds, particles, scroll effects, timelines, elegant cards, hover interactions, cursor effects, and section transitions.

Do not bulk-install random components. Select the best pieces and adapt them deeply.

## 35. 21st.dev Adaptation

Every imported component must be adapted to the portfolio's typography, colors, spacing, borders, motion, responsive behavior, accessibility, visual density, and content. The final result must not resemble a 21st.dev demo collection.

## 36. Asset Acquisition

ANGY is responsible for sourcing appropriate visual references/assets when required. It may search, evaluate, download permissible images/videos, convert formats, compress assets, create poster frames, organize media, and integrate it.

## 37. Copyright / Licensing

Genshin Impact and Hollow Knight are visual references, not the site's ownership identity.

Preferred order:

1. original CSS;
2. original SVG;
3. original shaders;
4. original particles;
5. self-created motifs;
6. appropriately licensed assets;
7. permitted reference material.

Do not blindly scrape or redistribute copyrighted game assets. If an asset is not clearly appropriate for redistribution, use it as inspiration and recreate the visual concept. Preserve attribution where required.

## 38. Asset Structure

Use a clean structure such as:

```text
public/
├── images/
├── videos/
├── textures/
├── icons/
├── fonts/
└── media/
```

Use meaningful filenames. Prefer WebP/AVIF where appropriate, compressed MP4/WebM, responsive image variants, video posters, lazy loading, and critical-media preload only.

## 39. WebGL / Shaders

WebGL is for atmosphere, not a technology demo. Potential uses: atmospheric backgrounds, liquid surfaces, displacement, depth fog, particles, animated light, environmental distortion, and project-media treatment.

Use React Three Fiber, Three.js, ShaderGradient, and related installed tooling when compatible and genuinely valuable. Dispose resources correctly and provide non-WebGL fallbacks.

## 40. LiquidGlassJS

Use the installed LiquidGlassJS package for selected material effects such as hero overlays, project surfaces, floating controls, or navigation material. Do not make the whole site glass.

## 41. Custom Cursor

Encouraged on desktop if it improves the experience. Possible behaviors include magnetic attraction, subtle trail, contextual hover state, project preview, and pointer-responsive lighting. Simplify/disable on touch. Never make it required.

## 42. Carousels

Use sophisticated carousels where useful, especially projects and visual media. Support keyboard, touch, mouse, reduced motion, visible controls, progress/pagination, and accessible labels. Do not hide essential information behind inaccessible interactions.

## 43. Interaction Philosophy

Interactions communicate depth, responsiveness, polish, and intentionality. Provide meaningful feedback for hover, click, focus, scroll, navigation, media, and project exploration.

## 44. Responsive Design

Explicitly test:

```text
1440px
1280px
1024px
768px
390px
landscape mobile
```

Mobile is deliberately designed, not scaled down. Simplify WebGL, particles, parallax, and cursor effects; replace hover with touch; preserve project exploration and typography; prevent horizontal overflow.

## 45. Accessibility

Required: semantic HTML, correct headings, keyboard navigation, visible focus, screen-reader labels, accessible dialogs/carousels/forms, meaningful alt text, adequate contrast, touch-friendly controls, and reduced-motion support. Decorative effects must never be required to understand content.

## 46. Performance

Optimize JavaScript, images, fonts, videos, WebGL, shaders, animations, and DOM complexity. Use lazy loading, responsive media, code splitting where useful, GPU-friendly transforms, intersection-based activation, mobile effect reduction, proper resource disposal, and minimal unnecessary JavaScript. Avoid rerender and layout-thrashing problems.

## 47. SEO

Implement title, metadata, description, canonical URL, Open Graph, social image, favicon/app icons, semantic HTML, sitemap, robots, and appropriate structured data. Inspect/adapt existing `robots.ts` and `sitemap.ts`; remove stale old-portfolio URLs.

## 48. Content Architecture

Keep content separate from UI. Recommended conceptual structure:

```text
src/
├── content/
│   ├── profile
│   ├── projects
│   ├── skills
│   ├── education
│   ├── achievements
│   ├── certifications
│   └── links
├── components/
├── sections/
├── effects/
├── motion/
├── styles/
└── ...
```

Adapt to the chosen framework. Adding a project later should primarily require structured data changes.

## 49. Component Architecture

Use small composable systems. A conceptual hierarchy is:

```text
App
├── SiteShell
├── Navigation
├── AtmosphericBackground
├── Hero
├── About
├── Skills
├── Projects
│   ├── ProjectCarousel
│   ├── ProjectCard
│   └── ProjectDetail
├── Experience
├── Education
├── Certifications
├── Contact
├── Footer
└── GlobalEffects
```

Adapt as needed. Avoid giant components.

## 50. Design Tokens

Centralize colors, spacing, radii, typography, shadows, borders, motion durations/easing, z-index layers, and breakpoints. Motion levels should include `instant`, `micro`, `fast`, `normal`, `slow`, and `cinematic` where useful.

## 51. Loading

A cinematic entry/loading experience is optional. If used it must be short, skippable/fallback-safe, reduced-motion aware, and must not unnecessarily delay meaningful content.

## 52. Fallbacks

If images, videos, shaders, WebGL, fonts, external resources, or animation fail, the core portfolio remains usable. Effects are enhancements, never core dependencies.

## 53. Security

Never commit API keys, tokens, credentials, secrets, or private configuration. Validate form input, use safe external-link behavior, and avoid unnecessary tracking.

# 54. Browser-Driven Development

Once the application runs, ANGY must use Playwright and inspect the actual rendered site. Test desktop, tablet, mobile, landscape mobile, navigation, projects, carousels, dialogs, animations, console, hydration, images, videos, links, accessibility, overflow, loading, and responsive behavior.

A successful build alone is not proof of UI correctness.

## 55. Visual QA Loop

Repeat:

```text
IMPLEMENT
↓
RUN
↓
OPEN IN BROWSER
↓
INSPECT
↓
IDENTIFY
↓
FIX
↓
RELOAD
↓
COMPARE
↓
REFINE
```

Use Impeccable and available design/animation review skills.

# 56. GitHub Replacement

Canonical remote:

`https://github.com/Rayhan-099/portfolio.git`

The remote currently contains an **old portfolio implementation**. Inspect it before replacement: remote, branch, history, files, and current state.

The desired outcome is that the repository contains the new portfolio, not a merge of the old application. The old contents may be cleared/replaced as part of the deliberate migration. Use the safest appropriate Git strategy; never delete unrelated work blindly.

## 57. Phase Git Workflow

After every meaningful phase:

1. validate;
2. fix issues;
3. commit;
4. push to the canonical remote;
5. verify the push.

Suggested commits:

```text
feat(foundation): establish portfolio application
feat(content): establish portfolio content architecture
feat(sections): build core portfolio sections
feat(design): implement visual design system
feat(motion): implement motion system
feat(effects): add advanced visual effects
feat(assets): integrate optimized visual assets
feat(responsive): polish responsive and accessibility behavior
test(qa): complete browser validation
perf(polish): optimize final experience
release: ship portfolio
```

# 58. Phase 0 — Discovery

**Objective:** Understand the real project.

Inspect filesystem, source files, PRD, about, résumé, packages, scripts, tooling, skills, Git, remote, and old implementation.

**Acceptance:** Framework, dependency state, conflicts, tooling, repository state, and replacement architecture are understood.

# 59. Phase 1 — Foundation

**Objective:** Establish production-ready application foundation.

**Deliverables:** framework, TypeScript, routing, styling, design tokens, base layout, metadata, scripts, testing foundation.

**Acceptance:** App runs and builds.

Commit and push.

# 60. Phase 2 — Content

**Objective:** Build structured factual content.

**Deliverables:** profile, projects, skills, education, achievements, certifications, social/contact links.

**Acceptance:** No duplicated factual data and no fabricated information.

Commit and push.

# 61. Phase 3 — Core Sections

**Objective:** Build the complete professional portfolio.

**Deliverables:** navigation, hero, about, skills, projects, experience/achievements, education, certifications, contact, footer.

**Acceptance:** Everything is reachable and usable without effects.

Commit and push.

# 62. Phase 4 — Visual System

**Objective:** Build the signature visual identity.

**Deliverables:** typography, dark environment, ornamental linework, surfaces, borders, lighting, particles, atmospheric depth, responsive tokens.

**Acceptance:** The site clearly feels custom, premium, atmospheric, and unlike a generic portfolio.

Commit and push.

# 63. Phase 5 — Motion

**Objective:** Build the full cinematic Motion system.

**Deliverables:** hero animation, section reveals, typography motion, navigation motion, project transitions, scroll interactions, hover interactions, micro-interactions, carousel motion, reduced-motion system.

**Acceptance:** Motion is impressive, coherent, responsive, accessible, and performant.

Commit and push.

# 64. Phase 6 — Advanced Effects

**Objective:** Add meaningful high-end visual technology.

**Potential:** WebGL, Three.js, React Three Fiber, ShaderGradient, LiquidGlassJS, custom shaders, particles, cursor, media effects.

Use every relevant installed technology that materially improves the experience; never force effects that weaken coherence or performance.

Commit and push.

# 65. Phase 7 — Assets

**Objective:** Acquire and integrate appropriate visual assets.

ANGY autonomously searches, evaluates, downloads permissible assets, optimizes them, creates poster frames, organizes media, and integrates it.

**Acceptance:** No broken media and no obviously inappropriate copyrighted material.

Commit and push.

# 66. Phase 8 — Responsive / Accessibility

Test every specified viewport plus keyboard, screen-reader semantics, focus, touch, reduced motion, mobile interaction, and overflow.

Commit and push.

# 67. Phase 9 — Browser QA

Use Playwright to inspect console, layout, interactions, animations, media, navigation, forms, accessibility, and responsive behavior. Fix all discovered issues.

Commit and push.

# 68. Phase 10 — Final Polish

Review spacing, typography, animation timing, visual rhythm, project storytelling, mobile, performance, micro-interactions, accessibility, asset quality, and consistency. Use Impeccable and design/animation review skills.

Commit and push.

# 69. Phase 11 — Release

Verify production build, tests, TypeScript, lint/quality, Git status, branch, remote, phase history, push state, no secrets, no broken links, and no broken assets. Push and verify the canonical repository.

# 70. Quality Gates

Before completion:

- **Brand:** feels like Rayhan's real portfolio.
- **Engineering:** demonstrates technical competence.
- **Visual:** compositions feel intentional.
- **Typography:** hierarchy and personality are strong.
- **Motion:** exceptional but not annoying.
- **Projects:** demonstrate engineering depth.
- **Exploration:** rewards visitors who explore.
- **Performance:** visual richness does not make it slow.
- **Mobile:** deliberately designed.
- **Accessibility:** usable without a mouse.
- **Authenticity:** does not feel AI-generated.

# 71. Anti-Requirements

Never ship:

- generic portfolio templates;
- generic SaaS layouts;
- gradient soup;
- excessive glassmorphism;
- random glowing blobs;
- meaningless 3D;
- excessive rounded cards;
- animation everywhere;
- fake statistics;
- fake testimonials;
- fabricated experience/achievements;
- generic AI copy;
- visual clutter;
- slow autoplay video;
- inaccessible interactions;
- unnecessary dependencies;
- giant components;
- untouched 21st.dev demos;
- Genshin fan-site framing;
- Hollow Knight fan-site framing;
- game terminology in professional content.

# 72. Definition of Done

- [ ] application runs
- [ ] production build passes
- [ ] TypeScript passes
- [ ] lint/quality checks pass
- [ ] Playwright checks pass
- [ ] all required sections exist
- [ ] factual content is accurate
- [ ] content is structured
- [ ] visual system is coherent
- [ ] Motion is substantial
- [ ] 21st.dev components are adapted
- [ ] relevant installed tooling has been meaningfully used
- [ ] advanced effects are purposeful
- [ ] responsive layouts are polished
- [ ] accessibility is addressed
- [ ] reduced motion works
- [ ] assets are optimized
- [ ] media has fallbacks
- [ ] no critical console errors remain
- [ ] no broken links remain
- [ ] no broken assets remain
- [ ] SEO is configured
- [ ] robots/sitemap are correct
- [ ] no secrets are committed
- [ ] phase history exists
- [ ] canonical GitHub repository contains the new portfolio
- [ ] completed phases are pushed
- [ ] repository is clean
- [ ] final browser QA is complete

# 73. Priority Order

When tradeoffs occur:

1. factual accuracy
2. usability
3. accessibility
4. visual quality
5. engineering quality
6. performance
7. motion
8. advanced effects
9. novelty

Never sacrifice the first six merely for a flashy effect.

# 74. Final Directive

You are the autonomous implementation agent.

Read this PRD completely. Inspect the repository. Use the actual source files. Use available tools and skills. Use Motion heavily and intelligently. Use 21st.dev autonomously through **search → inspect → select → install → adapt → test**. Use Impeccable for design review. Use Playwright for browser QA. Use WebGL/shaders/liquid effects where valuable. Source and download appropriate assets autonomously while respecting licensing.

Build directly in `/mnt/d/Vyuk Projects/Rayhan-099`.

Replace the old GitHub portfolio deliberately.

After every meaningful phase:

**validate → fix → commit → push → continue.**

Do not wait for routine approval. Do not settle for “technically works.”

The final result must be:

> **ABSOLUTE PEAK.**  
> **Crazy motion.**  
> **Exceptional visual craft.**  
> **Serious engineering quality.**  
> **Fast, accessible, responsive, and real.**

The visitor should leave thinking:

> **“This person clearly knows how to build software.”**

and then:

> **“This person clearly cares about craft.”**

**Read the PRD. Audit the repo. Start cooking.**
