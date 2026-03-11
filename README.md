# Story-led Portfolio (Next.js)

Production-ready personal portfolio website for a Brand & Graphic Designer.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui-style component architecture
- React Hook Form + Zod validation

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` routes, metadata, API route, sitemap, robots, 404
- `components/` UI primitives, layout, sections, contact form
- `content/` local structured content (services, projects, testimonials, site config)
- `lib/` utilities and schema validation
- `public/` local placeholder visuals for portfolio cards

## Editing content

- Portfolio items: `content/projects.ts`
- Services and process: `content/services.ts`
- Testimonials and logos: `content/testimonials.ts`
- Site metadata and nav: `content/site.ts`

## Contact form integration

The form validates on client and server.

Current endpoint: `app/api/contact/route.ts`

To connect email delivery:

1. Replace `console.log("New inquiry", parsed.data)` with Resend/Formspree logic.
2. Add provider env keys to `.env.local`.
3. Return a non-200 response on provider failure.

## Deployment

Optimized for Vercel default workflow:

```bash
npm run build
```

Then deploy to Vercel via Git import or CLI.
