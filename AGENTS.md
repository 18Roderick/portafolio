# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 portfolio website** (Spanish-language). Fully static — no database, no external APIs, no environment variables required.

### Prerequisites

- **Node.js >= 24** (specified in `.nvmrc` and `engines` field). Use `nvm install 24 && nvm use 24` if Node 22 is the default.
- **pnpm** as the package manager (see `pnpm-workspace.yaml`). Install with `npm install -g pnpm` if not available for the active Node version.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (serves at `http://localhost:3000`) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |

### Caveats

- There is **no lockfile** committed; `pnpm install` generates a fresh `pnpm-lock.yaml` each time.
- There are **no automated tests** configured — no test framework or test scripts exist.
- The codebase has both `app/` (App Router, primary) and `pages/` (legacy Pages Router with a sample API route at `/api/hello`). The App Router is the active routing mechanism.
- After switching Node versions with nvm, `pnpm` may not be available and needs to be reinstalled globally (`npm install -g pnpm`).
