# LUCAS Design System
## Reference for AI-generated presentations, proposals and visual materials

---

## 1. Brand Identity

**Company:** LUCAS — аудиторська та технологічна компанія  
**Character:** Premium B2B. Dark-first. Restrained luxury. Technical precision without coldness.  
**Tone:** Confident, direct, no decorative excess. Numbers and systems, not corporate stock photos.

---

## 2. Color Palette

### Core backgrounds
| Token | Hex | Usage |
|---|---|---|
| `--black` | `#000000` | Hero section, footer |
| `--dark-section` | `#0d0d10` | Service heroes, FAQ, CTA strips |
| `--anthracite` | `#18181b` | Cards on dark, mobile menu |
| `--warm` | `#edeae2` | Main body background, light sections |
| `--offwhite` | `#f4f4f5` | Alternating light surfaces |
| `--paper` | `#ffffff` | Pure white surfaces |

### Accent colors
| Token | Hex | Usage |
|---|---|---|
| `--orange` | `#ff5c1f` | Primary CTA, active states, `.op` punctuation, underlines, eyebrow dot |
| `--cyan` | `#00d8ff` | SAF-T Connector accent, secondary highlights |

### Text
| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0a0a0a` | Body text on light |
| `--ink-soft` | `#52525b` | Secondary text on light |
| `--ink-mute` | `#71717a` | Captions, meta, labels |
| `--on-dark` | `#fafafa` | Primary text on dark |
| `--on-dark-soft` | `rgba(255,255,255,.66)` | Secondary text on dark |
| `--on-dark-mute` | `rgba(255,255,255,.42)` | Muted text on dark |

### Borders / dividers
| Token | Value |
|---|---|
| `--line` | `rgba(10,10,10,.08)` |
| `--line-strong` | `rgba(10,10,10,.14)` |
| `--line-dark` | `rgba(255,255,255,.10)` |

### Glass surfaces
| Token | Value | Usage |
|---|---|---|
| `--glass-light` | `rgba(255,255,255,.58)` | Blog cards, light glassmorphism |
| `--glass-light-border` | `rgba(255,255,255,.75)` | |
| `--glass-light-shadow` | `0 2px 28px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.92)` | |
| `--glass-dark` | `rgba(255,255,255,.07)` | Dark cards |
| `--glass-dark-border` | `rgba(255,255,255,.12)` | |
| `--glass-dark-shadow` | `0 4px 32px rgba(0,0,0,.36), inset 0 1px 0 rgba(255,255,255,.07)` | |

---

## 3. Typography

### Font families
| Role | Family | Fallback |
|---|---|---|
| **Display** (`--display`) | **Onest** | system-ui, -apple-system, "Segoe UI", sans-serif |
| **Body** (`--body`) | **Manrope** | system-ui, -apple-system, "Segoe UI", sans-serif |
| **Mono** (`--mono`) | ui-monospace, SFMono-Regular | Menlo, Monaco, "Cascadia Code", monospace |

> Onest = headings, eyebrows, hero text, section titles, large UI.  
> Manrope = body paragraphs, nav links, captions, buttons.  
> Mono = labels, metadata, timestamps, badges, code fragments, uppercase tags.

### Type scale

| Element | Font | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero H1 | Onest | `clamp(42px, 5.4vw, 80px)` | 500 | `-0.035em` | 1.0 |
| Section H2 large | Onest | `clamp(44px, 5.6vw, 84px)` | 500 | `-0.04em` | 1.0 |
| Section H2 medium | Onest | `clamp(36px, 4vw, 56px)` | 500 | `-0.038em` | 1.05 |
| Service H1 | Onest | `clamp(40px, 5.2vw, 78px)` | 500 | `-0.04em` | 1.0 |
| CTA H2 | Onest | `clamp(32px, 3.6vw, 52px)` | 500 | `-0.035em` | 1.05 |
| Card title | Onest | `clamp(22px, 1.9vw, 28px)` | 500 | `-0.022em` | 1.2 |
| FAQ question | Onest | `clamp(17px, 1.5vw, 21px)` | 500 | `-0.018em` | 1.35 |
| Lead / hero sub | Onest | `clamp(17px, 1.35vw, 20px)` | 400 | — | 1.55 |
| Body text | Manrope | 16px | 400 | — | 1.6 |
| Nav links | Manrope | 14px | 500 | `-0.005em` | — |
| Buttons | Manrope | 14.5px | 500 | `-0.005em` | — |
| Eyebrow label | Manrope | 11.5px | 500 | `0.22em` | — |
| Mono label | Mono | 10–11px | 500–600 | `0.14–0.2em` | — |
| Caption / meta | Mono | 9–10.5px | 500–600 | `0.12–0.18em` | — |

### Typographic rules for presentations
- **Never use font-weight 700+ for display headings** — Onest 500 is the standard weight
- **Letter-spacing is always negative for display type** (−0.035em to −0.04em at large sizes)
- **Line-height 1.0–1.05** for large headings; **1.55–1.7** for body
- **Orange accent** (`.op`) used for trailing punctuation: periods, colons in headings
- **ALL CAPS + mono** = labels, categories, timestamps — never for body text

---

## 4. Spacing & Layout

### Key tokens
| Token | Value | Usage |
|---|---|---|
| `--max` | `1280px` | Max container width |
| `--gut` | `32px` (desktop) / `18px` (mobile) | Horizontal gutter |
| `--section-py` | `120px` (desktop) / `80px` (tablet) / `64px` (mobile) | Section vertical padding |
| `--eyebrow-mb` | `32px` | Margin below eyebrow label |

### Section rhythm
- All sections: `padding: 120px 0` → `80px` at ≤1080px → `64px` at ≤720px
- Content max-width: 1280px, centered
- Hero: full-viewport-height, centered content, cards below text

### Grid patterns used
- **2-column equal**: blog grid, features
- **3-column features**: concept cards (bento-style, asymmetric)
- **4-column footer**: `2fr 1fr 1fr 1.6fr`
- **`grid-template-columns: auto 1fr auto`**: header layout
- **Negative margins overlap**: hero cards overlap with `margin-right: -32px`

---

## 5. Visual Style Principles

### Dark sections
Background `#0d0d10` or `#000`. Use `rgba(255,255,255,...)` for all text layers:
- Primary: `#fff` or `rgba(255,255,255,.85)`
- Secondary: `rgba(255,255,255,.66)`
- Muted: `rgba(255,255,255,.42–.55)`
- Borders: `rgba(255,255,255,.08–.12)`

### Atmospheric backgrounds (hero pattern)
Three-layer radial gradient blur, slow-drifting:
```
background:
  radial-gradient(ellipse 50% 40% at 22% 38%, rgba(255,92,31,.22), transparent 65%),   /* orange glow, left */
  radial-gradient(ellipse 55% 45% at 78% 62%, rgba(0,216,255,.13), transparent 65%),   /* cyan glow, right */
  radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,255,255,.06), transparent 70%); /* top white haze */
filter: blur(80px);
```

### Grid overlay (hero)
Faint `64×64px` grid fades out radially from center:
```
background-image:
  linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,.045) 1px, transparent 1px);
background-size: 64px 64px;
mask-image: radial-gradient(ellipse 80% 65% at 50% 40%, #000 25%, transparent 95%);
```

### Glassmorphism cards (dark)
Used for hero product cards and dark-surface UI:
```
background: linear-gradient(180deg, rgba(28,28,32,.78) 0%, rgba(18,18,22,.88) 100%);
backdrop-filter: blur(24px) saturate(1.5);
border: 1px solid rgba(255,255,255,.08);
border-radius: 16px;
box-shadow: inset 0 1px 0 rgba(255,255,255,.07),
            0 24px 48px -12px rgba(0,0,0,.55),
            0 60px 120px -30px rgba(0,0,0,.7);
```

### Glassmorphism cards (light)
Used for blog cards on `--warm` background:
```
background: rgba(255,255,255,.58);
backdrop-filter: blur(24px) saturate(1.35);
border: 1px solid rgba(255,255,255,.75);
border-radius: 18px;
box-shadow: 0 2px 28px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.92);
```

### Corner accent (signature detail)
Orange L-shaped corner on cards/containers (top-left only):
```
::after {
  width: 44px; height: 44px;           /* or 32px for .corner-sm */
  border-top: 2px solid #ff5c1f;
  border-left: 2px solid #ff5c1f;
  border-top-left-radius: inherit;
}
```
Cyan variant: `border-color: #00d8ff`

### Section deco blobs (service/blog heroes)
Single soft radial gradient behind hero text:
```
/* Orange (service pages) */
background: radial-gradient(ellipse at center, rgba(255,92,31,.07), transparent 65%);

/* Cyan (blog, SAF-T) */
background: radial-gradient(ellipse at center, rgba(0,216,255,.06), transparent 65%);

filter: blur(80px);
width: 1100px; height: 520px;
```

---

## 6. UI Components

### Eyebrow label
Small uppercase tag placed above section titles:
- Font: Manrope, 11.5px, weight 500, uppercase, `letter-spacing: 0.22em`
- Color on light: `--ink-mute` (`#71717a`)
- Color on dark: `rgba(255,255,255,.5–.7)`
- Orange 6px circle dot prepended (`::before`)
- Cyan dot variant: `background: var(--cyan)` on `::before`

```
● АУДИТ ТА ЗВІТНІСТЬ
```

### Buttons
**Primary dark** (default `.btn`): `background: #0a0a0a`, white text, `border-radius: 999px`, 14×28px padding, hover → orange
**CTA orange** (`.btn.cta-orange`): `background: #ff5c1f`, hover → white/dark
**Ghost dark** (`.btn.ghost-dark`): `rgba(255,255,255,.08)` + `border: rgba(255,255,255,.24)`, hover → solid white
**Arrow icon**: inline SVG mask, `14×10px`, shifts `translateX(4px)` on hover

### Status dots
```css
/* Live indicator */
.dot-cyan { background: var(--cyan); border-radius: 50%; width: 7px; height: 7px;
            box-shadow: 0 0 0 3px rgba(0,216,255,.20);
            animation: pulseDot 1.8s ease-in-out infinite; }
.dot-orange { background: var(--orange); }
.dot-green  { background: #22c55e; }
```

### Monospace badge / tag
```css
font-family: --mono; font-size: 9–11px; font-weight: 600;
letter-spacing: 0.14–0.2em; text-transform: uppercase;
color: var(--ink-mute) or rgba(255,255,255,.4);
```

### Breadcrumb (service pages)
Mono font, 11px, `letter-spacing: 0.1em`, color `rgba(255,255,255,.4)`, separators `/` at `.25` opacity

---

## 7. Section Patterns

### Section type A — Dark hero (service pages, blog)
- Background: `#0d0d10`
- Padding: `160px [gut] 100px`
- Blob deco (orange or cyan, blurred)
- Eyebrow → H1 → lead → CTA buttons
- Breadcrumb above eyebrow

### Section type B — Light content (Warm background)
- Background: `var(--warm)` `#edeae2`
- White or glassmorphic cards on warm
- Eyebrow → H2 → body text → grid/bento

### Section type C — Pure black (footer, closing CTA)
- Background: `#000`
- All text in white opacity layers

### Section type D — Full viewport hero (homepage)
- Background: `#000`
- 3-layer atmospheric blurs (orange/cyan/white)
- 64px grid overlay
- Centered text + floating 3D product cards below

---

## 8. Presentation Slide Layouts

Based on the site's section structure, these slide templates match the LUCAS style:

### Slide: Title / Cover
- Background: `#000` or `#0d0d10`
- 3-layer atmospheric blob in corner (orange dominant)
- Eyebrow label (mono, orange dot)
- Large H1 (Onest 500, white, `letter-spacing: -0.04em`)
- Subtitle in `rgba(255,255,255,.6)`
- Optional: corner accent on a card element

### Slide: Section opener
- Background: `#0d0d10`
- Eyebrow top-left
- H2 left-aligned, max 16ch, orange `.op` punctuation
- Supporting text right column or below, `rgba(255,255,255,.6)`
- Cyan or orange radial blob behind heading

### Slide: 2-column feature
- Background: `--warm` (`#edeae2`)
- Left: heading + body text
- Right: dark glassmorphic card with data/code/UI mock
- Card: `rgba(28,28,32,.78)`, `border: rgba(255,255,255,.08)`, `border-radius: 16px`

### Slide: 3-up cards (bento)
- Background: `--warm`
- 3 cards in row, card 01 taller (featured)
- Corner accent (`.has-corner`) on featured card
- Card content: number label (01/02/03), title, body in `--ink-soft`

### Slide: Stats / data
- Background: `#000` or `#0d0d10`
- Large number: Onest, `clamp(52px, 7vw, 96px)`, weight 500, orange or white
- Label below: Manrope, muted white
- Dividers: `rgba(255,255,255,.1)` lines

### Slide: Quote / statement
- Background: `#0d0d10`
- Full-width centered text
- Font: Onest 500, `clamp(28px, 3.5vw, 48px)`, white
- Orange period at end
- Eyebrow attribution above or below in mono

### Slide: Timeline / steps
- Background: `--warm`
- Left column: numbered steps in mono (I · II · III), orange vertical line
- Right column: heading + body per step
- Pattern mirrors `.credentials` section

### Slide: Product/tech card
- Dark glassmorphic card (`rgba(28,28,32,.78)`, blur, border)
- Header row: title left, status badge right (mono, 10px)
- Body: code-like structure or data rows
- Footer row: status dot (green/cyan) + mono label
- Optional: corner accent (orange or cyan)

---

## 9. Animation & Motion Principles

**Easing:** `cubic-bezier(.16,.84,.3,1)` — custom ease-out (fast start, soft landing)  
**Transitions:** 0.2–0.35s for UI; 1.0–1.4s for entrance animations

| Animation | Duration | Easing | Pattern |
|---|---|---|---|
| Hero text entrance (`.ha`) | 1s (desktop) / 0.5s (mobile) | `--ease` | `opacity: 0 → 1`, `translateY(28px → 0)`, staggered |
| Card entrance | 1.4s | `--ease` | `opacity: 0 → 1`, `translateY(40px → 0)` |
| Underline draw | 0.8s, delay 1.2s | `cubic-bezier(.4,0,.2,1)` | `scaleX(0 → 1)` from left |
| Atmospheric blob | 32s infinite | `ease-in-out` | slow translate + scale drift |
| Card float (desktop) | 11–13s infinite | `ease-in-out` | gentle translateY oscillation |
| Reveal sections | scroll-triggered | `--ease` | `opacity: 0 → 1`, `translateY` |
| Pulse dot | 1.8s infinite | `ease-in-out` | box-shadow radius expansion |

**Rule:** Animations reveal content from bottom to top, staggered. Never horizontal. Never bounce.

---

## 10. AI Prompt Template

Use this prompt to instruct AI tools (Midjourney, Figma AI, Gamma, Beautiful.ai, Canva AI) to generate materials in the LUCAS style:

```
Design in the LUCAS brand style:
- Background: deep black (#000) or near-black (#0d0d10)
- Primary accent: orange (#ff5c1f) for CTA elements, period punctuation, dots
- Secondary accent: cyan (#00d8ff) for technical/data highlights
- Body background when light: warm beige (#edeae2)
- Fonts: Onest (headings, weight 500, tight tracking -0.035em) + Manrope (body, 400–500)
- Mono font for labels, badges, metadata in uppercase with wide letter-spacing
- Glassmorphism dark cards: rgba(28,28,32,.78) background, blur(24px), 1px rgba(255,255,255,.08) border, 16px radius
- Atmospheric background: two soft radial glows (orange 22% opacity left, cyan 13% right), blurred 80px
- No photography. No decorative illustrations. Data, code, UI mockups as visuals.
- Minimalist. Premium. Technical precision. Confident spacing.
- Section titles: large, white, weight 500, max 16 characters per line
- Orange period or colon as typographic accent at end of key phrases
- Corner accent detail: thin L-shaped orange border at top-left of featured cards
```

---

## 11. What NOT to do

- ✗ Font weight 700+ for headings — always 500
- ✗ Rounded sans-serif fonts (Nunito, Poppins, Comic Sans) — Onest/Manrope only
- ✗ Bright saturated colors beyond `#ff5c1f` and `#00d8ff`
- ✗ Drop shadows with color (always `rgba(0,0,0,...)` or `rgba(255,255,255,...)`)
- ✗ Gradients with more than 2 colors on UI surfaces
- ✗ Photography or stock illustrations
- ✗ Centered body text (only headings are centered)
- ✗ Outline/stroke text effects
- ✗ Multiple accent colors on the same slide (pick orange OR cyan, not both)
- ✗ Tight padding — use generous spacing (sections: 80–120px vertical)
- ✗ All-caps headings — ALL CAPS is reserved for mono labels/eyebrows only
