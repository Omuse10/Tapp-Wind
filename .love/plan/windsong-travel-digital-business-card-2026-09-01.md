# Windsong Travel Digital Business Card

A mobile-first, premium NFC profile page. Tap card → profile opens → save contact.

## Decisions I made (questions were skipped)

- Profile data lives in a typed code data file (`src/data/profiles.ts`) — fastest possible load after an NFC tap, no backend, easy to edit and to migrate to Lovable Cloud later.
- Isaac's details use clearly marked placeholder values (surname, phone, email) that are trivial to replace; only real, known values are shipped as-is (company, website).
- Profile photo: elegant generated portrait placeholder, swappable with one import.
- `/` renders Isaac's card (same component as `/p/isaac`), so the NFC URL can be either.
- Links render only when present in the data — no empty buttons.

## Pages

- `/` — Isaac's profile card
- `/p/$slug` — any consultant profile; unknown slug shows a graceful "profile not found" screen
- Each route sets its own title/description/og metadata from the profile

## Page structure (mobile-first, centered card on desktop)

```text
Windsong logo (small, elegant)
Portrait (softly rounded, gentle fade-in)
ISAAC [SURNAME] · Travel Consultant · Windsong Travel
"Creating journeys worth remembering."
[ SAVE CONTACT ]            <- strongest CTA, above the fold
Call · Email · Website (subtle line icons)
ABOUT ME + short bio
Editorial travel photograph (edge-to-edge, rounded)
WINDSONG TRAVEL + short copy + [ VISIT WINDSONG TRAVEL ]
I CAN HELP YOU WITH (compact list, toggleable per profile)
LinkedIn · Instagram (only if provided)
Powered by TAPP (tiny, understated)
```

## Save Contact behaviour

- Generates a real RFC-compliant `.vcf` (N, FN, TITLE, ORG, TEL, EMAIL, URL, ADR, social URLs, base64 PHOTO when the portrait is available and small enough).
- Triggers via a Blob download with the filename `Isaac-Windsong-Travel.vcf`; iOS Safari opens it straight into Add to Contacts.
- Fallback: if the download is blocked, show a short calm message with the contact details and tap-to-copy, plus Call/Email links.

## Visual direction

Editorial luxury-travel language taken from windsongtravel.com.au: warm off-white paper background, deep ink text, a muted brand accent, and a serif display face paired with a quiet sans for body. Generous whitespace, hairline dividers, restrained motion (fade/rise on scroll, soft press feedback). No gradients, glassmorphism, or heavy shadows.

## Technical notes

- Tokens defined in `src/styles.css` (`@theme inline` + `:root`), fonts loaded via `<link>` in `__root.tsx`.
- Profile type: `id, first_name, last_name, job_title, company, profile_photo, phone, email, website, linkedin, instagram, biography, address, vcard_enabled, profile_slug, services[], tagline`.
- vCard builder in `src/lib/vcard.ts` (pure function, unit-testable).
- Animation via small CSS keyframes + one IntersectionObserver hook — no animation library, keeping the payload light.
- Images generated, compressed, lazy-loaded below the fold; the portrait loads eagerly.
