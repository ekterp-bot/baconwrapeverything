# BaconWrapEverything Deployment

## Vercel

- Project: `baconwrapeverything`
- Team: `ekterp-bots-projects`
- Production URL: `https://baconwrapeverything.vercel.app`
- Custom domain: `baconwrapeverything.com`
- Stack: React + Vite + TypeScript + Tailwind
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: `dist`

Supabase is intentionally not connected yet.

## Current Domain Status

The Vercel deployment is live, but `baconwrapeverything.com` currently resolves to
Hostinger parking DNS instead of Vercel.

Hostinger parking means the domain is still pointed at Hostinger's default parking
service. The site may return HTTP 200, but the content is the parking page, not
the deployed BaconWrapEverything app.

Current conflicting DNS observed:

```txt
A      @      2.57.91.91
CNAME  www    baconwrapeverything.com
```

## Required DNS Records

Vercel currently recommends these records:

```txt
A      @      216.198.79.1
A      @      64.29.17.1
CNAME  www    1089c368922b830a.vercel-dns-017.com
```

Remove conflicting Hostinger parking records for `@` and `www`. Do not modify
unrelated DNS records such as MX, email TXT, SPF, DKIM, DMARC, or unrelated TXT
records.

## Verification Commands

```powershell
nslookup baconwrapeverything.com
nslookup www.baconwrapeverything.com

Resolve-DnsName baconwrapeverything.com
Resolve-DnsName www.baconwrapeverything.com

curl.exe -I https://baconwrapeverything.com
curl.exe -I https://www.baconwrapeverything.com
curl.exe -I https://baconwrapeverything.vercel.app

npx vercel domains verify baconwrapeverything.com --scope ekterp-bots-projects --non-interactive
npx vercel domains verify www.baconwrapeverything.com --scope ekterp-bots-projects --non-interactive
```

## Success Looks Like

- `baconwrapeverything.com` resolves to Vercel DNS, not `2.57.91.91`.
- `www.baconwrapeverything.com` points to Vercel and either loads or redirects cleanly.
- `curl.exe -I https://baconwrapeverything.com` shows Vercel headers.
- Vercel domain verification returns `ok`.
- The deployed app loads on the apex domain.
- Refreshing a client route like `/episodes/chicken-bake` returns the app, not a 404.

## SPA Routing

This Vite SPA uses `vercel.json` rewrites so direct refreshes on nested routes
return the app entry point:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
