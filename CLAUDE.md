# kolagrowthagency.com

This repository serves no site. Kola Growth Agency's outbound pages were retired
on 2026-08-28, and the domain now redirects every path to kolaautomations.com,
which is the active business.

## What is here

`vercel.json`, containing a single permanent redirect. Nothing else.

## What was removed, and why

The marketing pages (`index.html`, `case-studies.html`, `thank-you.html`)
published outbound service copy along with pipeline metrics and a client
testimonial.

A per-prospect sales deck at `/deck/<slug>`, backed by
`_deck-shell.html` and `api/public-sales-decks/[slug].js`, rendered the same
outbound pitch with prospect research loaded from Supabase. It was briefly kept
alive on the assumption that shared links might still be in use. They were not,
and its Supabase backend had already stopped responding. Keeping it would have
left the last page selling outbound services standing on a domain that was
supposed to stop doing that.

Everything above remains in git history if it is ever needed again.

## Loose ends this left behind

The Supabase project holding the `public_sales_decks` table is now unused by
anything. It was not touched here, because deleting a database is not a cleanup
task to perform in passing. Decide on it deliberately.

Three environment variables remain configured on the Vercel project and no
longer have a consumer: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and
`PUBLIC_SALES_DECKS_TABLE`. The service role key is a live credential with full
database access. Removing it from the project, and rotating it in Supabase, is
worth doing rather than leaving it configured against nothing.

## Deployment

Hosted on Vercel, projects `kola-growth-website` and `kola-growth-b2b`, both
auto-deploying from `main`.

## Where the active site lives

kolaautomations.com is served from `akolachalam/kola-automations-website`.
