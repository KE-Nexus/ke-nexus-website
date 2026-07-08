# K&E Nexus

**Custom software, workflow automation, and web & mobile applications — built for businesses that were told they couldn't afford custom digital solutions.**

This repository contains the marketing site for K&E Nexus, a founder-led software consultancy. It's built with React, TypeScript, and Vite.

🔗 [kenexus.com](https://kenexus.com)

## About the business

K&E Nexus was founded on a simple observation: the businesses that need custom software the most are usually the ones told they can't afford it. We closed that gap.

You work directly with the two engineers behind K&E Nexus — no account managers, no relayed messages, no layers between you and the people writing your code. We start with how your business actually operates, not a feature list or a tech stack, and we stay on after launch as a long-term partner rather than a vendor who disappears at delivery.

**Vision:** a world where every business has access to custom digital solutions.

### Services

- **Custom Software** — internal tools, dashboards, legacy system modernization, API & integrations
- **Workflow Automation** — process audits, automated pipelines, cross-tool orchestration
- **Web & Mobile Apps** — responsive web apps, iOS & Android, progressive web apps
- **Cloud & Infrastructure** — cloud architecture, CI/CD pipelines, cost-optimized hosting
- **Strategic Consulting** — technical roadmapping, build vs. buy analysis, scoping & feasibility
- **Support & Maintenance** — ongoing maintenance, monitoring & uptime, iterative improvements

### How we work

1. **Discover** — map operations, bottlenecks, stakeholders, and constraints before writing a line of code
2. **Design** — deliberate architecture and interface decisions, tradeoffs documented and validated with you
3. **Build** — agile sprints with working software early and often, not a black box for three months
4. **Deliver** — rigorous testing, staged rollout, and a launch plan built around your business
5. **Support** — monitoring, iterating, and evolving the system as your business changes shape

### Why clients work with us

- **Two engineers, direct access** — no account managers relaying messages
- **Built for your size, not a template** — every engagement scoped to what you actually need, not a package tier
- **Fixed-visibility pricing** — clear scope, clear cost, no surprise invoices
- **We stay after launch** — supporting and evolving what we build, not disappearing at delivery

Remote-first, serving clients across industries and time zones — logistics, healthcare, retail, professional services, manufacturing, nonprofit, and more.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tooling and dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animation
- [Lucide](https://lucide.dev/) — icons
- [Oxlint](https://oxc.rs/) — linting

## Getting started

```bash
npm install
npm run dev
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, Logo
│   ├── sections/    # Hero, About, Services, Process, Portfolio, Testimonials, Contact, etc.
│   └── ui/          # Reusable UI primitives (Button, Reveal, ThemeToggle, ...)
├── data/            # Site content — services, process steps, projects, testimonials, stats
├── hooks/           # Custom React hooks
└── theme/           # Theme context (light/dark mode)
```

## Contact

- **Email:** hello@kenexus.com
- **Location:** Remote-first — serving clients worldwide
