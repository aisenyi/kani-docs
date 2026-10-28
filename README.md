# Kani Docs

User documentation site, built with [VitePress](https://vitepress.dev). Deployed as a static site at `docs.kani.co.tz`.

## Local development

```bash
npm install
npm run dev       # dev server with hot reload, http://localhost:5173
npm run build     # outputs static site to .vitepress/dist
npm run preview   # serve the built output locally
```

Content is plain Markdown under topic folders (`getting-started/`, `clearing-and-forwarding/`, `fleet-management/`, etc.). Navigation and sidebar structure are defined in `.vitepress/config.mjs`.

Pages marked with an `::: info Page in progress :::` box are stubs — fill in the real steps/screenshots and remove the box.

## Deploying to docs.kani.co.tz

This follows the same pattern as `website/kani.co.tz` — a static build served directly by nginx on the VPS.

1. **DNS** — add an `A` record for `docs.kani.co.tz` pointing at the same server IP as `kani.co.tz`.
2. **Build** — on the server (or in CI), run `npm ci && npm run build`. This produces `.vitepress/dist`.
3. **nginx** — copy `docs.kani.co.tz` (the server block file in this folder) into `/etc/nginx/sites-available/`, symlink it into `sites-enabled/`, then `nginx -t && systemctl reload nginx`.
4. **SSL** — run `certbot --nginx -d docs.kani.co.tz` to provision a certificate (matches however `kani.co.tz` and `devapp.kani.co.tz` are already secured).
5. **Redeploy on content changes** — re-run `npm run build` and reload nginx (no restart needed, it just serves static files). A simple option is a small deploy script or a CI job that SSHes in, pulls, and rebuilds; wire that up when you're ready.

## Editing content

Anyone comfortable with Markdown can add or edit a page — no Vue knowledge required. To add a new page: create a `.md` file under the right topic folder, then add it to the `sidebar` array in `.vitepress/config.mjs` so it shows up in navigation.
