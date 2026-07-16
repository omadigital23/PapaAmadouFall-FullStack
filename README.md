# Papa Amadou Fall — Full Stack Engineer Portfolio

A recruiter-focused portfolio presenting Papa Amadou Fall’s full-stack product engineering, React/TypeScript, Python/Django, database, cloud and automation experience.

- Live site: <https://omadigital23.github.io/PapaAmadouFall-FullStack/>
- GitHub profile: <https://github.com/omadigital23>
- Contact: <fallpape199@gmail.com>

## Stack

- Next.js 16 App Router and React 19
- Strict TypeScript
- Tailwind CSS 4 plus a project-specific CSS design system
- Static export for GitHub Pages
- ESLint and TypeScript quality gates
- GitHub Actions Pages deployment

The site is server-rendered and statically exported. It contains no runtime API, tracking script or client-side state library.

## Local setup

Requires Node.js 22.13 or newer. GitHub Actions uses Node.js 24.

```bash
npm install
npm run dev
```

Open <http://localhost:3000/PapaAmadouFall-FullStack>.

## Scripts

```bash
npm run dev        # local development
npm run lint       # ESLint
npm run typecheck  # strict TypeScript check
npm run build      # static production export
npm run quality    # lint, typecheck and build
```

## Project structure

```text
app/
  layout.tsx       global metadata and document layout
  page.tsx         portfolio content and structured data
  globals.css      responsive visual system
  robots.ts        robots metadata
  sitemap.ts       generated sitemap
  not-found.tsx    static 404 experience
public/assets/     downloadable Full Stack resume
.github/workflows/ GitHub Pages CI/CD
```

## Deployment

`next.config.ts` enables static export, trailing slashes and the `/PapaAmadouFall-FullStack` base path. A push to `main` runs the GitHub Actions workflow, validates the application, uploads `out/` and deploys it through GitHub Pages.

In repository settings, Pages must use **GitHub Actions** as its source. No deployment secret is required; the workflow uses GitHub’s Pages OIDC permissions.

## Accessibility and performance

- Semantic landmarks and ordered heading hierarchy
- Keyboard-accessible navigation and skip link
- Visible focus states and strong color contrast
- Reduced-motion support
- Responsive layouts without client-side JavaScript
- System font stack to avoid render-blocking font requests
- No stock photography, third-party embeds or layout-shifting media

## Security and content integrity

The repository contains no credentials, API keys or private documents. Infrastructure descriptions omit identifiers and secrets. Public and private project evidence is clearly distinguished, and the portfolio makes no unverified scale, revenue, traffic or certification claims.

## Updating content

Edit project, skill and experience data in `app/page.tsx`. Update visual tokens and responsive rules in `app/globals.css`. Keep public links verifiable and label private client work explicitly. Replace `public/assets/Papa_Amadou_Fall_Full_Stack_Resume.pdf` only with a reviewed Full Stack resume using the same filename.

## Copyright

© Papa Amadou Fall. Portfolio content is provided for professional presentation. All product names and trademarks belong to their respective owners.
