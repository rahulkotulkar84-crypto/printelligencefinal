# Printelligence — Luxury Printing Starter

This repository is a starter template for the **Printelligence** luxury printing website described by the user. It contains a Next.js (app dir) single-file starter page plus scaffolding for Tailwind, a mock FastAPI backend and CI.

## What's included
- Next.js app (app/page.tsx starter)
- Tailwind/PostCSS config
- Minimal package.json and TypeScript config
- Mock FastAPI backend in `/backend` with example endpoints
- GitHub Actions workflow (CI) and .gitignore

## How to run (frontend)
1. `npm install`
2. Configure Tailwind per official docs
3. `npm run dev`

## How to run (backend)
1. Create and activate Python venv
2. `pip install -r backend/requirements.txt`
3. `uvicorn backend.main:app --reload --port 8000`

