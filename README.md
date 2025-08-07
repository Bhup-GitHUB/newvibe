# Mentiting — SaaS Landing Page (Next.js + Tailwind)

## Local development
- Install: `npm install`
- Run: `npm run dev` → http://localhost:3000
- Build: `npm run build` and preview: `npm run start`

## Environment
Optionally set the public site URL (used for sitemap/robots and OG):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to Vercel
1. Push this repo to GitHub/GitLab/Bitbucket
2. Create a new project on Vercel and import the repo
3. Framework preset: Next.js (auto-detected)
4. Environment variables: add `NEXT_PUBLIC_SITE_URL` to your production domain
5. Deploy. Vercel will build and serve static assets globally

No extra configuration is required; the app uses Next.js App Router and Tailwind v4.
