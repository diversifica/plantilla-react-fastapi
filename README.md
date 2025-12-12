# 🌐 Plantilla React + FastAPI

Plantilla oficial para proyectos fullstack que combinan **React (Vite)** en el frontend y **FastAPI** en el backend. Replica la metodología determinista de plantilla-web-frontend pero alineada con el stack actual de StudyQuest: monorepo, tooling listo para LLM, CI/CD y despliegues vía Docker.

[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![Python Version](https://img.shields.io/badge/python-%3E%3D3.10-blue)](https://www.python.org)
[![CI](https://github.com/diversifica/plantilla-react-fastapi/actions/workflows/ci.yml/badge.svg)](https://github.com/diversifica/plantilla-react-fastapi/actions)

## ⚙️ Stack
- **Frontend:** React 19 + Vite 7, React Router 7, React Query opcional, Testing Library + Vitest, ESLint 9.
- **Backend:** FastAPI, SQLModel/SQLAlchemy, Pydantic, Pytest, LLM helpers (OpenAI) y scripts CLI.
- **Infra:** Docker Compose (prod/dev), Postgres 15, Adminer opcional, GitHub Actions para CI y despliegue Easypanel.

## 🚀 Inicio Rápido
`ash
# Clonar el repo generado desde esta plantilla
gh repo create mi-proyecto --template diversifica/plantilla-react-fastapi --public --clone
cd mi-proyecto

# Backend
cd backend
python -m venv .venv
.venv/Scripts/activate  # Windows
pip install -r requirements.txt
cp .env.example .env

# Frontend
cd ../frontend
npm install
`

### Ejecutar en modo local
`ash
# Terminal 1
cd backend
uvicorn app.main:app --reload

# Terminal 2
cd frontend
npm run dev -- --host
`
Visita http://localhost:5173 y las APIs en http://localhost:8000/docs.

### Ejecutar todo con Docker Compose
`ash
docker compose -f docker-compose.dev.yml up --build
`

## 📁 Estructura
`
plantilla-react-fastapi/
├── .github/workflows/        # CI frontend + backend + deploy hooks
├── docs/                     # Documentación (setup, contrib, prompts LLM)
├── docker-compose*.yml       # Orquestación prod/dev
├── backend/                  # FastAPI + SQLModel + servicios LLM
│   ├── app/api/              # Routers y dependencias
│   ├── app/core/             # Configuración, logging, seguridad
│   ├── app/services/         # Integraciones (LLM, PDF, etc.)
│   ├── app/tests/            # Pytest con cobertura
│   └── requirements.txt
├── frontend/                 # React (Vite) con arquitectura por dominios
│   ├── src/components/       # UI reutilizable
│   ├── src/pages/            # Vistas y rutas
│   ├── src/services/         # Cliente API tipado
│   ├── src/stores/           # Estado global opcional
│   └── vitest.config.js
└── scripts/                  # Utilidades CLI (ingesta, seeds, etc.)
`

## ✅ Calidad Automática
- 
pm run validate dentro de rontend/ → lint + tests + análisis accesibilidad básico.
- uv run task validate (o make validate) en ackend/ → Ruff + Pytest + type-checking opcional.
- GitHub Actions ejecuta ambos pipelines en cada PR.

## 🔐 Variables de Entorno
- ackend/.env.example contiene llaves para DB, OpenAI y ajustes de seguridad.
- rontend/.env.example define VITE_API_URL y toggles de features.

## 📦 Despliegue
- Workflows rontend-deploy.yml y ackend-deploy.yml disparan webhooks de Easypanel (o cualquier plataforma) usando secretos EASYPANEL_*.
- Puedes cambiar fácilmente a Railway, Render o Fly editando los jobs de deploy.

## 🧭 Formación LLM
Incluye prompts base en docs/prompts/ y scripts en ackend/scripts/ para ingestión de PDFs/JSON alineados a StudyQuest.

## 🤝 Contribuir
1. Crear rama desde develop: git checkout -b feature/nueva-funcionalidad.
2. Ejecutar 
pm run validate y make validate.
3. Abrir PR siguiendo Conventional Commits.

## 📄 Licencia
MIT © Diversifica