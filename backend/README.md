# BI Events Backend

This is the backend for the BI Events project, built with Node.js, Express, SQLite, and TypeScript.

## Getting Started

### 1. Install dependencies

```
cd backend
npm install
```

### 2. Build and start the server

```
npm start
```

This will compile the TypeScript code and start the server from `dist/server.js`.

The server will:

- Fetch event data from BI’s public API
- Store events in a local SQLite database
- Expose a `/events` endpoint with filtering options

## Project Structure

- `src/` — TypeScript source code
- `dist/` — Compiled JavaScript output
- `events.db` — Local SQLite database
- `.gitignore` — Ignores build, node_modules, and DB files

## API Endpoint

- `GET /events` — Returns events with support for filters:
  - `take` (number)
  - `language` ("no", "en", "all")
  - `campus` (string)
  - `search` (string)
  - `sort` ("asc", "desc")

## Notes

- Make sure you have Node.js and npm installed.
- The SQLite database is created automatically.
- For development, you can use `npm run build` to only compile TypeScript.

---

For frontend setup, see the `frontend/README.md`.
