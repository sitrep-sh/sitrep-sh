# sitrep-sh

A Bun monorepo containing the Sitrep suite of tools.

## Packages

| Package | Description | Framework |
|---------|-------------|-----------|
| [sitrep-api](./packages/sitrep-api) | Backend API server | Elysia |
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
