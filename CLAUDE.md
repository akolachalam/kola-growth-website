# kolagrowthagency.com

This repository no longer serves a marketing site. Kola Growth Agency's
outbound-agency pages were retired on 2026-08-28. The domain now redirects to
kolaautomations.com, which is the active business.

## What this repository still does

One thing: it delivers shareable sales decks at `kolagrowthagency.com/deck/<slug>`.

- `_deck-shell.html` renders a deck in the browser. It is self-contained apart
  from Google Fonts.
- `api/public-sales-decks/[slug].js` reads the deck payload from Supabase.
- `vercel.json` rewrites `/deck/:slug` to the shell and redirects everything
  else off the domain.

The deck route was deliberately excluded from the redirect so that links already
shared with clients keep working. If those links are no longer needed, remove the
exclusion from the redirect source in `vercel.json` and the whole domain will
redirect.

## Configuration

The deck API reads three environment variables from Vercel project settings, not
from this repository: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and
`PUBLIC_SALES_DECKS_TABLE`. This repository is public. Never commit those values
or any other credential to it.

## Deployment

Hosted on Vercel, project `kola-growth-website`, auto-deploying from `main`.
A push to `main` publishes to the live domain, so changes go through a pull
request and a preview first.

## Where the active site lives

kolaautomations.com is served from `akolachalam/kola-automations-website`. Work
on the live business belongs there, not here.
