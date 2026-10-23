# Code and Consent screens

Prototype for device code entry and OAuth consent, using Garden buttons and Flora-aligned tokens.

## Run

```bash
npm install
npm run dev
```

## Top console

The dark PrototypeBar includes:

- **Version switcher** — Code entry / Consent
- **Inspect** — hover/click to read spacing, color, typography; select then hover to measure gaps; mint bar when active. Deep link: `?inspect=true`
- **Comment** — pin comments on the work area (⌘/Ctrl+Click while Inspect is also on). Shared storage via Supabase when `.env.local` is set — see [`src/comments/SETUP.md`](src/comments/SETUP.md)

## Screens

Code entry is **380px** wide (full-width buttons). Consent is **755px** (buttons max **277px**). All consent text uses `fg/default`.
