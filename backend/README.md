# Backend (FastAPI)

This folder contains the FastAPI backend for the Todo app. It uses SQLAlchemy for models and postgres as the database. Development is simplest using the included `docker-compose.yml` (Postgres) and a Python virtual environment.

Prerequisites
- Python 3.11+ (or the version used in your `.venv`)
- docker & docker-compose (optional but recommended for Postgres)

Setup (PowerShell)

```powershell
cd backend
python -m venv .venv
. .venv\Scripts\Activate.ps1
pip install -r requirements.txt
# create a file named backend/.env with DATABASE_URL, e.g.:
# DATABASE_URL=postgresql://admin:admin@localhost:5432/mydatabase
```

Start Postgres (if using docker-compose)

```powershell
# from repo root
docker-compose up -d db
```

Run the backend

```powershell
# from repo root, use venv python to be safe
.venv\Scripts\python.exe -m uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

Endpoints
- Swagger UI: `GET /docs`
- API base: `/todos` (list, create, update, delete)

Environment
- `backend/.env` is used to store `DATABASE_URL`. This file is gitignored in this repository. If not present, code falls back to a local default (for development).

Database migrations
- Alembic is available in `requirements.txt` but migration scripts are not configured by default. For production or schema changes, initialize alembic and create migrations.

Troubleshooting
- "No module named app" when running uvicorn: run from repo root with `backend.app.main:app` or cd into `backend` and run `uvicorn app.main:app`.
- If tables are missing after recreating the DB, you can either start the app (it calls `Base.metadata.create_all(...)`) or run Alembic migrations if configured.

Contact
- See repository root README for general project notes.

