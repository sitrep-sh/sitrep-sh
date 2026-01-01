# sitrep.sh

**Run tight. Stay light.**

SitRep is an open source CLI and platform for action-biased freelancers, founders and teams who want answers, not dashboards.

- **Track everything** — Clients, team, time, money, deliverables. Immediate intel.
- **Query in plain English** — "What's overdue?" "How much did we bill Metacortex?"
- **Nothing under the radar** — Intelligent tracking of what's pressing, what's slipping, what's next.
- **Own your data** — Markdown and CSV. No lock-in. Self-host or cloud.
- **Open source** — MIT licensed. Inspect it, fork it, trust it.


## Packages

This is a Bun monorepo containing the Sitrep suite of tools.

| Package | Description | Framework |
|---------|-------------|-----------|
| [sitrep-api](./packages/sitrep-api) | Backend API server | ElysiaJS |
| [sitrep-cli](./packages/sitrep-cli) | Command-line interface | Clack (Bombshell) |
| [sitrep-webapp](./packages/sitrep-webapp) | Web application | Vite + React + TypeScript |


## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.0 or later

### Installation

```bash
bun install
```

### Development

Run individual packages:

```bash
# Start the API server (port 3000)
bun run dev:api

# Run the CLI
bun run dev:cli

# Start the webapp dev server (port 5173)
bun run dev:webapp
```

### Build

Build all packages:

```bash
bun run build
```


## Project Structure

```
sitrep-sh/
├── packages/
│   ├── sitrep-api/      # Elysia API server
│   ├── sitrep-cli/      # Clack CLI application
│   └── sitrep-webapp/   # Vite React app
├── package.json         # Root workspace config
└── bunfig.toml          # Bun configuration
```
