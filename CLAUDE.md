# Kola Growth Agency Website

Static site for [kolagrowthagency.com](https://kolagrowthagency.com). Hosted on Vercel, auto-deploys on push.

## Design System

**Always use Impeccable skills for design work** — they're installed globally at `~/.claude/skills/`. Start with `frontend-design`, layer on others as needed.

### Brand Personality
**Confident, warm, premium.** Not corporate-stiff, not startup-casual. Senior advisor who knows what they're doing — no hedging, no fluff.

### Aesthetic Direction
- **Light editorial mode** — warm cream backgrounds (`oklch(0.97 0.008 75)`), never dark-mode-by-default
- **Copper accent** (`oklch(0.48 0.16 50)`) — warm, distinctive, NOT cyan/purple AI slop
- **Sora** (display, 700-800) + **DM Sans** (body, 400-600) — never Inter, Roboto, or system fonts
- **Left-aligned, asymmetric layouts** — break the centered-everything pattern
- **Thin borders over shadows** — `1px solid var(--border)`, not drop shadows on rounded rectangles
- **Warm noise texture overlay** — subtle `fractalNoise` SVG at 2.5% opacity, multiply blend

### Design Principles
1. **Clarity over decoration** — every element earns its place
2. **Content-first hierarchy** — typography and spacing, not color or effects
3. **Warm, not dark** — light backgrounds with warm-tinted neutrals
4. **Editorial restraint** — one accent color, two font families, 6px radius
5. **Anti-slop by default** — if it looks like "AI made this," redesign it

### Tokens
See `design-system.css` for the full shared CSS with all tokens, components, and responsive breakpoints.

## Files
- `index.html` — single-page site (hero, problem, system, results, why us, process, FAQ, CTA)
- `design-system.css` — shared tokens, typography, components (can be linked from future pages)

## Deployment
- **Host:** Vercel (hobby plan)
- **Repo:** `akolachalam/kola-growth-website`
- **Domain:** `kolagrowthagency.com` (DNS at GoDaddy, A record → Vercel)
- **Auto-deploy:** push to `main` triggers deploy
