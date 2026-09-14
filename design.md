# DESIGN.md --- Rayhan / Cinematic Creative Developer Portfolio

> **Design direction:** premium creative-developer portfolio with an
> anime-cinematic + game-world atmosphere, editorial composition,
> tactile motion, and serious engineering credibility.
>
> **Core reference blend:** anime environmental storytelling, modern
> game title screens, cinematic portfolio sites, Japanese/editorial art
> direction, and Awwwards-level interaction design.
>
> **Important:** the site should be *inspired by the visual language* of
> anime and games, not look like a fan site. Do not copy characters,
> logos, proprietary UI, screenshots, icons, typography treatments, or
> recognizable assets from any specific game/anime.

------------------------------------------------------------------------

## 0. Executive Design Statement

The portfolio should feel less like a conventional developer website and
more like entering the opening sequence of a beautifully directed game.

The visitor should immediately understand:

1.  who Rayhan is,
2.  what he builds,
3.  what kind of engineering/design thinking he has,
4.  what projects deserve attention,
5.  how to explore deeper,
6.  how to contact him.

The experience should communicate this without sacrificing usability.

### Desired emotional response

The first 5--10 seconds should produce:

> "This feels like a real creative developer's portfolio, not another
> React template."

The next 20--30 seconds should produce:

> "There is serious engineering underneath the visual direction."

The deeper interaction should produce:

> "I want to see how this person built these things."

### The central principle

**Cinematic, not gimmicky.**

The site can contain dramatic motion, particles, parallax, shader-like
effects, atmospheric imagery, and game-inspired interaction language.
However, every effect must support hierarchy, storytelling, or
discoverability.

Never add an effect simply because it is technically possible.

------------------------------------------------------------------------

# 1. Reference Research

The visual direction is informed by several open-source portfolio and
creative-web references.

## 1.1 Anime-themed portfolio references

### Shinei Portfolio

An anime-themed portfolio demonstrates the usefulness of: - dark
atmospheric backgrounds, - neon accents, - animated cards, - hover
interactions, - anime-oriented imagery, - responsive layouts, - custom
typography.

The lesson is **not** to copy the neon-anime presentation literally.

Instead, extract: - visual confidence, - thematic consistency, -
animated interaction, - strong section identity.

Reference: `Shineii86/Portfolio`

------------------------------------------------------------------------

## 1.2 Anime-VFX / Neo-Kyoto reference

The Neo-Kyoto portfolio direction combines: - deep obsidian surfaces, -
cyan/violet accents, - glass effects, - particles, - smooth scrolling, -
timeline storytelling, - interactive skills, - Framer Motion
choreography.

Useful lessons: - an anime aesthetic can coexist with professional
developer information; - particles should be atmospheric rather than
decorative clutter; - technical content can be presented as part of the
visual system.

Reference: `Anandhu9255/Portfolio-website-personal`

------------------------------------------------------------------------

## 1.3 Playable/game-style portfolio

The game portfolio concept turns project exploration into a playable 3D
environment.

Useful lessons: - project browsing can feel like exploration; - depth
creates emotional engagement; - interactive environments can become a
memorable portfolio differentiator.

However, the Rayhan portfolio should **not** require visitors to play a
game to understand the content.

The experience should remain: - scroll-first, - keyboard-accessible, -
touch-friendly, - fast, - readable.

Reference: `Navaneeth223/game-portfolio`

------------------------------------------------------------------------

## 1.4 Immersive Awwwards-style portfolio

The Awwwards-inspired references demonstrate: - full-screen hero
compositions, - GSAP/ScrollTrigger choreography, - Three.js scenes, -
large typography, - strong visual transitions, - dark cinematic
environments, - magnetic interactions, - page transitions, -
noise/grain, - carefully staged project reveals.

Useful lesson:

**The page should feel art-directed rather than component-assembled.**

Reference: `evsphereofficial/officialportfolio`

------------------------------------------------------------------------

## 1.5 Creative 3D portfolio references

Three.js portfolio implementations demonstrate: - WebGL hero
environments, - 3D objects, - camera movement, - scroll-linked
transformations, - layered depth, - interactive project presentation.

The important takeaway is not "put a 3D object everywhere."

The takeaway is:

> **Use depth where depth communicates something.**

Reference: `Brigoliboon/modern-portfolio`

------------------------------------------------------------------------

## 1.6 Stylized WebGL / anime rendering reference

The `stylized-components` project is particularly relevant because it
explores real-time anime-inspired rendering using: - Three.js, - React
Three Fiber, - GLSL, - cel-shading, - stylized water, - procedural
grass, - atmospheric effects.

This suggests a powerful direction for subtle background/environment
effects: - water ripples, - floating particles, - stylized foliage, -
soft volumetric movement, - painterly gradients, - cel-shaded
environmental fragments.

These should remain background atmosphere rather than becoming the
portfolio's main product.

Reference: `cortiz2894/stylized-components`

------------------------------------------------------------------------

## 1.7 Interactive/editorial/game references

Interactive game UI experiments show that: - depth-based panels, -
layered UI, - parallax, - animated transitions, - cinematic loading, -
atmospheric lighting

can create a game-like feeling without building an actual game.

The portfolio should borrow the **cinematic pacing**, not the literal
game HUD.

------------------------------------------------------------------------

# 2. Visual Identity

## 2.1 Overall aesthetic

The visual identity is:

**Anime cinematic + editorial + dark fantasy atmosphere + modern
creative technology.**

Not:

-   generic cyberpunk,
-   gamer RGB,
-   anime fan page,
-   glassmorphism dashboard,
-   neon hacker UI,
-   generic 3D portfolio template.

### Keywords

-   cinematic
-   atmospheric
-   restrained
-   mysterious
-   elegant
-   tactile
-   editorial
-   asymmetrical
-   immersive
-   intelligent
-   handcrafted
-   technical
-   youthful but mature
-   quiet confidence

------------------------------------------------------------------------

# 3. Visual Influences

Use the following as visual vocabulary rather than direct references.

## Anime influence

Borrow: - environmental lighting, - dramatic skies, - painterly
gradients, - atmospheric perspective, - expressive framing, - strong
silhouettes, - delicate particles, - wind/water motion, - cinematic
composition, - visual storytelling.

Avoid: - copied characters, - recognizable character silhouettes, -
anime screenshots as UI decoration, - fan-service, - excessive Japanese
text, - cliché "otaku" styling.

------------------------------------------------------------------------

## Game influence

Borrow: - title-screen pacing, - chapter-like navigation, -
collectible/project presentation, - subtle status indicators, -
environmental transitions, - interactive objects, - cinematic camera
movement, - world-building.

Avoid: - fake XP bars, - meaningless "LEVEL 99" labels, - fake quests, -
RPG stats that don't communicate actual information, - excessive HUD
elements, - forced game mechanics.

------------------------------------------------------------------------

## Hollow-Knight-like influence

Borrow the *mood*: - darkness, - negative space, - quietness, -
atmospheric particles, - restrained typography, - lonely/environmental
feeling, - deep blue-black surfaces, - subtle luminous accents.

Do not copy: - characters, - masks, - logos, - UI, - specific icons, -
exact environments.

------------------------------------------------------------------------

## Genshin-like influence

Borrow the *cinematic environmental quality*: - rich scenery, - cool
atmospheric color, - flowing transitions, - elegant motion, -
environmental storytelling, - magical-looking light.

Do not copy: - characters, - fonts, - UI, - game icons, - elemental
symbols, - maps, - recognizable locations.

------------------------------------------------------------------------

# 4. Color System

The portfolio must avoid becoming yellow/gold dominant.

## Primary palette

### Ink / Void

`#080A0F`

Main background.

### Abyss

`#0D1118`

Secondary dark surface.

### Deep Blue

`#101A2B`

Atmospheric surface.

### Midnight Blue

`#16243A`

Secondary visual layer.

### Ivory

`#F0EEE7`

Primary light text.

### Soft Silver

`#B8C0CC`

Secondary text.

### Mist

`#778294`

Muted text.

------------------------------------------------------------------------

## Accent system

### Moon Cyan

`#8DEBFF`

Primary interactive accent.

Use for: - links, - focus states, - small highlights, - active
navigation, - selected states.

### Spirit Blue

`#5F8CFF`

Secondary accent.

### Violet

`#9B7BFF`

Rare secondary accent.

### Pale Blue-White

`#DDF8FF`

Glow/highlight color.

------------------------------------------------------------------------

## Accent philosophy

Do not use all accents simultaneously.

A page should normally have:

-   1 dominant neutral system,
-   1 primary accent,
-   1 occasional secondary accent.

The portfolio should feel cinematic rather than rainbow-colored.

------------------------------------------------------------------------

# 5. Texture

A subtle texture layer should exist across the site.

Possible layers:

1.  extremely subtle film grain,
2.  soft radial atmospheric gradients,
3.  faint vignette,
4.  very low-opacity dust particles,
5.  occasional horizontal light streak,
6.  extremely subtle paper/ink texture in editorial sections.

Opacity should remain low enough that the user does not consciously
notice the texture.

The texture should make the site feel *physical*, not noisy.

------------------------------------------------------------------------

# 6. Typography

Typography should combine:

### Display font

A sophisticated grotesk/editorial display typeface.

Potential directions: - Space Grotesk - Sora - Manrope - Geist -
Neue-style grotesks if legally available

Use for: - hero headline, - section titles, - project names, - large
statements.

### Body font

Use a highly readable neutral sans.

Potential directions: - Inter - Geist Sans - IBM Plex Sans - Manrope

### Mono font

Use a monospace font sparingly.

Potential directions: - Geist Mono - IBM Plex Mono - JetBrains Mono

Use only for: - metadata, - project year, - tech stack, - tiny labels, -
coordinates, - status indicators.

Do not make the entire portfolio look like a terminal.

------------------------------------------------------------------------

# 7. Typography Scale

Desktop:

-   Hero eyebrow: 12--14px
-   Hero title: clamp(64px, 10vw, 160px)
-   Section title: clamp(48px, 7vw, 112px)
-   Project title: clamp(32px, 5vw, 72px)
-   Body: 16--19px
-   Small body: 14px
-   Metadata: 11--13px
-   Mono labels: 10--12px

Mobile:

-   Hero title: 52--78px
-   Section title: 42--58px
-   Project title: 32--44px
-   Body: 15--17px

Typography should be allowed to become enormous.

Do not artificially constrain everything to card widths.

------------------------------------------------------------------------

# 8. Layout Philosophy

## Reject the "box inside box" approach

Avoid:

-   card inside section,
-   section inside card,
-   card inside glass panel,
-   card inside another rounded container.

That makes the site feel like a SaaS dashboard.

Instead use:

-   open space,
-   full-bleed imagery,
-   edge-aligned typography,
-   oversized text,
-   overlapping layers,
-   asymmetrical grids,
-   thin rules,
-   image crops,
-   editorial columns.

------------------------------------------------------------------------

# 9. Grid System

Use a flexible 12-column desktop grid.

Recommended:

-   outer margin: 5--7vw
-   content width: 86--90vw
-   max width: 1600px
-   gutter: 20--32px

The grid should occasionally break.

Examples:

### Hero

Text occupies 7 columns.

Visual occupies 5 columns.

### Project

Image occupies 8 columns.

Metadata occupies 3 columns.

### About

Text occupies 5 columns.

Portrait/visual occupies 6 columns.

### Statement

Huge text crosses the full 12-column width.

------------------------------------------------------------------------

# 10. Navigation

The navigation should feel like a cinematic control layer.

## Desktop

Fixed navigation.

Left: `RAYHAN`

Center/right: - Work - About - Experience - Contact

Far right: small status indicator:

`AVAILABLE FOR SELECTED WORK`

or

`OPEN TO OPPORTUNITIES`

Do not overdecorate the navbar.

------------------------------------------------------------------------

## Navigation behavior

At page load: - transparent, - integrated into hero.

After scrolling: - slightly denser, - subtle backdrop, - thin bottom
border, - compact height.

Avoid a huge glass pill.

------------------------------------------------------------------------

# 11. Hero Section

The hero is the most important visual sequence.

## Composition

Full viewport.

Background:

-   dark atmospheric image/video,
-   abstract anime-like environment,
-   subtle depth layers,
-   particles,
-   very slow movement.

Foreground:

Large typographic statement.

Example structure:

`RAYHAN`

`ENGINEER / BUILDER / CREATIVE TECHNOLOGIST`

Then:

> I build software with the curiosity of an engineer and the eye of a
> storyteller.

The exact copy should remain concise and human.

------------------------------------------------------------------------

## Hero visual

The hero should have a large cinematic visual element.

Possible implementation:

-   real photograph,
-   abstract environmental image,
-   custom generated atmosphere,
-   3D scene,
-   shader-based gradient,
-   depth-mapped image.

Do not use a generic floating developer avatar.

------------------------------------------------------------------------

## Hero motion

At initial load:

1.  background fades in,
2.  atmospheric layer drifts,
3.  typography reveals,
4.  small metadata appears,
5.  CTA becomes active.

Timing:

-   background: 1.2--1.8s
-   title: 0.8--1.2s
-   supporting text: 0.6--0.8s
-   metadata: 0.4--0.6s

Do not delay content unnecessarily.

------------------------------------------------------------------------

# 12. Hero Interaction

Mouse movement should create extremely subtle depth.

Layer response:

Background: `1–3px`

Middle atmosphere: `3–7px`

Foreground: `5–12px`

Typography: `1–3px`

Never create a seasick effect.

Touch devices should disable mouse parallax.

------------------------------------------------------------------------

# 13. Scroll Indicator

Instead of a generic bouncing mouse icon:

Use:

`SCROLL`

with a thin vertical line.

The line slowly extends/retracts.

Minimal.

------------------------------------------------------------------------

# 14. Intro / Identity Section

Immediately after hero:

A large editorial statement.

Example structure:

> I design and engineer digital experiences where systems, interaction
> and atmosphere meet.

Then a small paragraph.

The goal is to establish identity before showing a wall of projects.

------------------------------------------------------------------------

# 15. Projects Section

This is the core of the portfolio.

Projects should not look like generic cards.

## Project presentation

Each project is a cinematic scene.

Structure:

### Top metadata

`01 / 2026`

`WEB APPLICATION`

### Large title

`PROJECT NAME`

### Short description

2--3 sentences maximum.

### Stack

`NEXT.JS · TYPESCRIPT · THREE.JS · ...`

### Visual

Large image/video.

### Interaction

Hovering changes: - crop, - image scale, - lighting, - title position, -
small metadata, - cursor.

------------------------------------------------------------------------

# 16. Project Grid

Recommended composition:

### Project 01

Full-width cinematic feature.

### Project 02 + Project 03

Asymmetric split.

### Project 04

Large vertical composition.

### Project 05

Editorial horizontal layout.

This prevents the portfolio from feeling like a Shopify product grid.

------------------------------------------------------------------------

# 17. Project Hover

Desktop:

On hover:

1.  image slightly zooms,
2.  cursor becomes a custom project cursor,
3.  metadata brightens,
4.  a small arrow appears,
5.  image lighting changes,
6.  title shifts by a few pixels.

Maximum movement:

\~12--20px.

The interaction should feel expensive, not chaotic.

------------------------------------------------------------------------

# 18. Project Case Study Pages

Every important project should have a dedicated route.

Suggested structure:

`/work/project-name`

### Case study hero

Huge project title.

Large visual.

One-line summary.

------------------------------------------------------------------------

### Context

What problem existed?

------------------------------------------------------------------------

### Role

What did Rayhan personally build?

------------------------------------------------------------------------

### Architecture

Show actual engineering decisions.

Potential visualization:

-   frontend,
-   API,
-   database,
-   AI,
-   infrastructure,
-   deployment.

------------------------------------------------------------------------

### Process

Show:

1.  problem,
2.  exploration,
3.  architecture,
4.  implementation,
5.  iteration,
6.  result.

------------------------------------------------------------------------

### Technical details

Use diagrams, code fragments, screenshots, metrics and architecture
visuals.

------------------------------------------------------------------------

### Outcome

Explain what improved.

Avoid fake percentages.

------------------------------------------------------------------------

### Next project

At the bottom, show the next project as a full-screen transition.

Example:

`NEXT CASE STUDY →`

------------------------------------------------------------------------

# 19. About Section

The About section should feel more personal than technical.

Use a large portrait/photo.

Possible layout:

Left: portrait.

Right: large text.

Below: short biography.

Then selected facts.

Do not turn the About section into a résumé dump.

------------------------------------------------------------------------

# 20. About Copy Philosophy

Writing should be:

-   concise,
-   direct,
-   intelligent,
-   human,
-   slightly poetic,
-   never corporate.

Avoid:

> "I am a passionate and highly motivated software developer with a
> strong passion for innovation..."

Prefer:

> I like taking complicated systems apart, understanding why they work,
> then rebuilding them into something people actually enjoy using.

------------------------------------------------------------------------

# 21. Skills / Technology

Do not use circular percentage meters.

They communicate almost nothing.

Instead use categories.

### Engineering

-   C
-   C++
-   Python
-   JavaScript
-   TypeScript

### Frontend

-   React
-   Next.js
-   Tailwind
-   WebGL
-   Three.js

### Backend / Systems

-   Node.js
-   APIs
-   Databases
-   Cloud
-   Linux

### Creative Technology

-   GSAP
-   Framer Motion
-   React Three Fiber
-   GLSL
-   Web animations

Each technology can appear as an animated typographic list.

------------------------------------------------------------------------

# 22. Skills Interaction

Hovering a technology:

-   subtly highlights the item,
-   updates a small description,
-   optionally reveals an associated project,
-   may change the background atmosphere.

Example:

`THREE.JS`

> Used for interactive 3D scenes, visual experiments and spatial
> interfaces.

This makes the skills section evidence-driven.

------------------------------------------------------------------------

# 23. Experience / Timeline

Use an editorial vertical timeline.

Do not use giant glowing cards.

Each entry:

`2026`

`ROLE`

`ORGANIZATION`

short description.

A thin vertical line connects entries.

As the visitor scrolls:

-   line progresses,
-   active entry brightens,
-   inactive entries become muted.

------------------------------------------------------------------------

# 24. Education

Keep education concise.

Use the same timeline language.

Do not make it visually more important than actual work/projects unless
required.

------------------------------------------------------------------------

# 25. Resume

Resume access should always be obvious.

Possible CTA:

`VIEW RESUME`

Secondary:

`DOWNLOAD PDF`

The resume itself remains conventional.

The website can be experimental; the resume should be practical.

------------------------------------------------------------------------

# 26. Contact Section

The ending should feel like the end of a journey.

Large statement:

`LET'S BUILD SOMETHING WORTH REMEMBERING.`

Below:

-   email,
-   GitHub,
-   LinkedIn,
-   other relevant profiles.

Use a huge arrow or directional motion.

------------------------------------------------------------------------

# 27. Footer

Minimal.

Left:

`RAYHAN`

Center:

small status / location / availability.

Right:

social links.

Bottom:

`© 2026 Rayhan`

Do not fill the footer with unnecessary links.

------------------------------------------------------------------------

# 28. Cursor

Desktop-only custom cursor.

Two layers:

### Dot

Small center point.

### Ring

Larger soft ring.

Normal: small.

Interactive: expands.

Project: displays:

`VIEW`

or

`OPEN`

Important:

-   disable on touch devices,
-   preserve native cursor semantics where needed,
-   do not hide the cursor globally if it harms usability.

------------------------------------------------------------------------

# 29. Magnetic Buttons

Use only on major CTAs.

Magnetic strength:

\~10--20px.

Movement should be smooth and restrained.

Buttons should remain easy to click.

------------------------------------------------------------------------

# 30. Page Transitions

Page transitions should resemble moving between chapters.

Recommended sequence:

1.  current content fades/slides,
2.  dark atmospheric layer passes,
3.  new page appears,
4.  hero visual enters,
5.  content reveals.

Avoid long theatrical transitions.

Target:

`350–800ms`

depending on complexity.

------------------------------------------------------------------------

# 31. Scroll Physics

Use smooth scrolling carefully.

Recommended:

-   Lenis or equivalent,
-   GSAP ScrollTrigger,
-   requestAnimationFrame-based animation.

The page should have: - inertia, - slight cinematic weight, - no
rubber-band weirdness, - no excessive lag.

Do not make the page feel slow simply because it is "smooth."

------------------------------------------------------------------------

# 32. Motion System

Motion should have hierarchy.

## Level 1 --- Micro

100--250ms.

Used for: - hover, - button states, - icon movement.

## Level 2 --- UI

300--600ms.

Used for: - menus, - cards, - transitions.

## Level 3 --- Cinematic

600--1400ms.

Used for: - hero, - section reveals, - major image transitions.

## Level 4 --- Environmental

Continuous but slow.

Used for: - particles, - clouds, - gradients, - background atmosphere.

------------------------------------------------------------------------

# 33. Easing

Preferred:

-   `power2.out`
-   `power3.out`
-   `power4.out`
-   `expo.out`

For atmospheric motion:

-   sine,
-   gentle spring,
-   long ease.

Avoid: - linear UI transitions, - excessive bounce, - cartoon easing.

------------------------------------------------------------------------

# 34. Scroll Storytelling

The portfolio should have a visual rhythm.

### Sequence

**Arrival**

Hero.

↓

**Identity**

Statement.

↓

**Proof**

Featured work.

↓

**Depth**

Case studies.

↓

**Person**

About.

↓

**Capability**

Skills / experience.

↓

**Evidence**

Resume / achievements.

↓

**Invitation**

Contact.

This sequence is intentional.

------------------------------------------------------------------------

# 35. Background System

Instead of one static background for the whole site, create
environmental zones.

## Zone A --- Arrival

Deep blue-black.

## Zone B --- Work

Slightly lighter blue.

## Zone C --- About

Ivory or desaturated blue transition.

## Zone D --- Experience

Dark again.

## Zone E --- Contact

Deep atmospheric blue.

Transitions should be gradual.

------------------------------------------------------------------------

# 36. Environmental Effects

Possible effects:

### Floating dust

Tiny particles.

### Light shafts

Soft gradients.

### Fog

Extremely subtle.

### Water

Only if relevant to a project or section.

### Paper grain

Use in editorial areas.

### Ink bloom

Use during transitions.

### Soft aurora

Occasional background movement.

Avoid constantly moving everything.

------------------------------------------------------------------------

# 37. Three.js Strategy

Three.js should be optional enhancement, not the site's foundation.

Use WebGL for:

-   hero atmosphere,
-   one major interactive visual,
-   selected project scenes,
-   subtle environmental effects.

Do not use WebGL for:

-   basic typography,
-   navigation,
-   text,
-   simple cards,
-   every section.

If WebGL fails, the site must remain completely usable.

------------------------------------------------------------------------

# 38. Three.js Hero Concept

Potential hero scene:

A dark abstract landscape with:

-   floating geometric fragments,
-   soft blue atmospheric fog,
-   distant light,
-   subtle particles,
-   slow camera drift.

No literal fantasy character.

No giant rotating sphere just because it is 3D.

The scene should feel like an environment rather than a tech demo.

------------------------------------------------------------------------

# 39. Shader Language

If shaders are used, prefer:

-   soft gradients,
-   Fresnel-like glow,
-   noise,
-   subtle distortion,
-   depth-based fog,
-   cel-like lighting,
-   water ripple,
-   procedural particles.

Avoid: - RGB glitch everywhere, - extreme chromatic aberration, -
overdone scanlines, - constant distortion.

------------------------------------------------------------------------

# 40. Image Direction

Photography and artwork should feel:

-   cinematic,
-   atmospheric,
-   slightly desaturated,
-   cool,
-   high contrast,
-   textured.

Potential imagery:

-   architecture,
-   landscapes,
-   night scenes,
-   abstract technology,
-   close-up details,
-   silhouettes,
-   environmental textures.

Do not use random anime wallpapers as decoration.

------------------------------------------------------------------------

# 41. Image Treatment

Images may use:

-   grayscale-to-color hover,
-   subtle blue grading,
-   masked reveals,
-   soft blur during transitions,
-   slow scale,
-   cinematic crop.

Avoid heavy filters.

The original image should remain recognizable.

------------------------------------------------------------------------

# 42. Mobile Design

Mobile is not a collapsed desktop layout.

It should be separately art-directed.

## Mobile hero

-   large title,
-   vertical composition,
-   reduced effects,
-   one primary CTA.

## Mobile projects

One project per viewport-like section.

Large image.

Title.

Metadata.

Short description.

No hover-dependent information.

------------------------------------------------------------------------

# 43. Mobile Navigation

Use a compact menu.

Menu opening:

-   full-height overlay,
-   large typography,
-   staggered links,
-   subtle background image/gradient.

Avoid tiny hamburger menus with six nested options.

------------------------------------------------------------------------

# 44. Accessibility

Must support:

-   keyboard navigation,
-   visible focus states,
-   semantic headings,
-   alt text,
-   reduced-motion preference,
-   sufficient text contrast,
-   accessible buttons,
-   accessible external links.

When:

`prefers-reduced-motion: reduce`

disable:

-   parallax,
-   large page transitions,
-   cursor effects,
-   unnecessary particles,
-   continuous camera movement.

Content must remain fully usable.

------------------------------------------------------------------------

# 45. Performance

Performance is part of the design.

Target:

-   fast first contentful paint,
-   minimal JavaScript before interaction,
-   lazy-loaded media,
-   compressed WebP/AVIF images,
-   lazy-loaded videos,
-   dynamic WebGL imports,
-   GPU-friendly transforms,
-   no expensive blur stacks,
-   no unnecessary re-renders.

Do not sacrifice a good portfolio for a Lighthouse number, but do not
use poor performance as an excuse for unnecessary effects.

------------------------------------------------------------------------

# 46. WebGL Performance Rules

-   Detect WebGL capability.
-   Dynamically import 3D scenes.
-   Keep DPR capped.
-   Avoid huge textures.
-   Dispose geometries/materials.
-   Pause animation when offscreen.
-   Reduce particle count on mobile.
-   Use lower-quality effects on weak devices.
-   Respect reduced-motion.
-   Provide a non-WebGL fallback.

------------------------------------------------------------------------

# 47. Loading Experience

The loader should be short.

Possible design:

Black screen.

Small text:

`INITIALIZING / RAYHAN`

Then:

`01`

`02`

`03`

A thin progress line.

Maximum perceived duration:

\~1.2--2.0 seconds unless genuinely required by asset loading.

Never create a fake 5-second loader.

------------------------------------------------------------------------

# 48. Microcopy

UI language should feel like a creative studio, not a videogame.

Good:

-   `SELECTED WORK`
-   `CASE STUDY`
-   `EXPLORE`
-   `VIEW PROJECT`
-   `ARCHITECTURE`
-   `PROCESS`
-   `EXPERIMENTS`
-   `ABOUT`
-   `CONTACT`

Avoid:

-   `START QUEST`
-   `ENTER THE REALM`
-   `XP`
-   `LEVEL UP`
-   `PLAYER ONE`
-   `MISSION`
-   `BOSS FIGHT`

The visual language can be game-inspired without the copy becoming
childish.

------------------------------------------------------------------------

# 49. Interaction Rules

Every interaction must answer at least one question:

-   What can I click?
-   What changed?
-   Where am I?
-   What should I explore?
-   Why is this moving?
-   What does this reveal?

If an animation answers none of these, remove it.

------------------------------------------------------------------------

# 50. Visual Hierarchy

Every viewport should have:

### Primary

One dominant element.

Examples: - hero title, - project image, - statement.

### Secondary

Supporting content.

### Tertiary

Metadata.

Never allow every element to glow equally.

------------------------------------------------------------------------

# 51. Avoid These Patterns

Absolutely avoid:

-   generic glassmorphism dashboards,
-   excessive rounded rectangles,
-   neon rainbow gradients,
-   giant 3D floating developer heads,
-   excessive purple,
-   yellow/gold dominance,
-   excessive cards,
-   fake terminal UI,
-   random Japanese text,
-   anime wallpaper backgrounds,
-   constant particles,
-   giant skill percentage circles,
-   unnecessary loading screens,
-   cursor effects on mobile,
-   every element animating simultaneously,
-   huge text that makes content unreadable,
-   animations that delay navigation,
-   fake metrics.

------------------------------------------------------------------------

# 52. Component Architecture

Recommended structure:

``` text
src/
├── app/
│   ├── page.tsx
│   ├── work/
│   ├── about/
│   └── contact/
│
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── projects/
│   ├── case-study/
│   ├── about/
│   ├── experience/
│   ├── contact/
│   ├── footer/
│   ├── motion/
│   └── webgl/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── site.ts
│
├── lib/
│   ├── motion.ts
│   ├── utils.ts
│   └── webgl.ts
│
└── styles/
    ├── globals.css
    └── tokens.css
```

Keep content separate from components.

------------------------------------------------------------------------

# 53. Design Tokens

Create centralized tokens.

Example:

``` css
:root {
  --bg-void: #080A0F;
  --bg-abyss: #0D1118;
  --bg-blue: #101A2B;

  --text-primary: #F0EEE7;
  --text-secondary: #B8C0CC;
  --text-muted: #778294;

  --accent-cyan: #8DEBFF;
  --accent-blue: #5F8CFF;
  --accent-violet: #9B7BFF;

  --line: rgba(240, 238, 231, 0.12);

  --content-width: 1600px;
  --page-padding: 6vw;

  --radius-small: 6px;
  --radius-medium: 12px;

  --ease-cinematic: cubic-bezier(.16, 1, .3, 1);
}
```

Do not scatter arbitrary colors throughout the codebase.

------------------------------------------------------------------------

# 54. Motion Architecture

Centralize motion presets.

Example:

``` ts
export const motionPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  },

  imageReveal: {
    hidden: {
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
};
```

Motion should feel like one system.

------------------------------------------------------------------------

# 55. Recommended Technology Stack

Preferred implementation:

-   Next.js
-   TypeScript
-   Tailwind CSS
-   GSAP
-   Framer Motion where useful
-   Lenis
-   Three.js
-   React Three Fiber
-   Drei
-   custom GLSL only where justified
-   modern image optimization
-   accessible semantic HTML

Use 21st.dev / shadcn-style components selectively as primitives, not as
the site's visual identity.

The final result must look custom.

------------------------------------------------------------------------

# 56. Content Architecture

Homepage:

``` text
Hero
↓
Identity statement
↓
Selected work
↓
Featured case study
↓
About
↓
Experience
↓
Skills / technology
↓
Resume CTA
↓
Contact
↓
Footer
```

Dedicated routes:

``` text
/work
/work/[slug]
/about
/experiments
/contact
```

Optional:

``` text
/notes
```

Only add a blog/notes section if there is enough real content to justify
it.

------------------------------------------------------------------------

# 57. Experiments Section

This can become one of the most distinctive parts of the portfolio.

Show:

-   WebGL experiments,
-   shader experiments,
-   algorithms,
-   small games,
-   UI prototypes,
-   animation studies,
-   visual experiments.

Each experiment should be small.

Example:

``` text
01
FLUID NOISE

Interactive shader experiment.

[VISUAL]

THREE.JS · GLSL
```

This section proves curiosity and technical depth.

------------------------------------------------------------------------

# 58. Easter Eggs

Use extremely subtle Easter eggs.

Examples:

-   keyboard shortcut,
-   hidden visual transition,
-   tiny environmental change,
-   alternate cursor mode,
-   console message.

Never make an Easter egg necessary to understand the portfolio.

------------------------------------------------------------------------

# 59. Audio

Audio should be OFF by default.

Do not autoplay music.

If sound is implemented:

-   provide explicit toggle,
-   remember preference,
-   respect reduced motion/accessibility expectations,
-   use subtle UI sounds only.

The portfolio must work perfectly without audio.

------------------------------------------------------------------------

# 60. SEO

Every page should have:

-   unique title,
-   meta description,
-   Open Graph image,
-   Twitter/X card,
-   canonical URL,
-   semantic structure.

Project pages should have project-specific metadata.

------------------------------------------------------------------------

# 61. Responsive Breakpoints

Suggested:

``` text
< 640px
Mobile

640–900px
Large mobile / tablet

900–1200px
Tablet / small desktop

1200–1600px
Desktop

> 1600px
Large desktop
```

Do not blindly use these breakpoints for every component.

Components should respond to their own available space.

------------------------------------------------------------------------

# 62. Desktop Interaction Priority

Desktop gets:

-   cursor,
-   magnetic buttons,
-   parallax,
-   hover reveals,
-   WebGL,
-   cinematic transitions.

Mobile gets:

-   touch interactions,
-   tap reveals,
-   swipe where useful,
-   simplified effects,
-   full readability.

------------------------------------------------------------------------

# 63. Visual Rhythm Rules

After every visually dense section, provide breathing room.

Suggested rhythm:

``` text
DENSE
↓
BREATHING SPACE
↓
TYPOGRAPHIC STATEMENT
↓
IMAGE
↓
DETAIL
↓
BREATHING SPACE
```

Do not stack:

image + image + card + card + text + text.

------------------------------------------------------------------------

# 64. Case Study Visual Language

Case studies should resemble editorial spreads.

Use:

-   oversized numbers,
-   large images,
-   diagrams,
-   thin lines,
-   captions,
-   annotations,
-   code snippets,
-   architecture maps.

Example:

``` text
01

THE PROBLEM

Large statement.

Supporting explanation.

[Large image]

02

THE SYSTEM

[Architecture diagram]

03

THE BUILD

[Code / screenshot]

04

THE RESULT

Outcome.
```

------------------------------------------------------------------------

# 65. Engineering Credibility

The portfolio should prove that the visual design is backed by
engineering.

Show:

-   architecture,
-   real stack,
-   technical decisions,
-   constraints,
-   performance decisions,
-   debugging/iteration,
-   deployment,
-   measurable outcomes when real.

Do not hide engineering behind visual effects.

------------------------------------------------------------------------

# 66. "Peak" Quality Bar

Before considering the site complete, ask:

### Visual

-   Does it look custom?
-   Does it have a distinct art direction?
-   Is the first viewport memorable?
-   Does it avoid generic portfolio patterns?

### Motion

-   Does movement feel intentional?
-   Is there hierarchy?
-   Is scrolling smooth but not slow?
-   Are transitions coherent?

### Content

-   Can a recruiter understand the site in 30 seconds?
-   Can a developer understand the technical depth?
-   Can a client understand what Rayhan can build?

### Engineering

-   Is the site fast?
-   Does it work without WebGL?
-   Does it work on mobile?
-   Does reduced motion work?
-   Are assets optimized?

### Identity

Most importantly:

> **Could someone remove the name and still recognize that this is
> Rayhan's portfolio?**

If not, the visual identity is not strong enough.

------------------------------------------------------------------------

# 67. Final Art Direction

The final visual formula should be approximately:

``` text
35% cinematic editorial design
20% anime environmental atmosphere
15% game-inspired interaction language
15% modern creative-development aesthetics
10% technical visualization
5% experimental weirdness
```

The site should feel:

> **quietly spectacular.**

Not loud.

Not childish.

Not corporate.

Not like a template.

Not like an anime fan site.

Not like a game UI clone.

It should feel like a **personal digital world built by an engineer who
cares about visual storytelling.**

------------------------------------------------------------------------

# 68. One-Sentence Design North Star

> **Build a portfolio that feels like the opening sequence of an
> extraordinary game, but communicates like the portfolio of an
> exceptional engineer.**
