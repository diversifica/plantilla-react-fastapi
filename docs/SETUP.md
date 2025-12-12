# 📘 Setup

## Requisitos
- Node.js 18+
- Python 3.10+
- Docker + Docker Compose (opcional pero recomendado)
- GitHub CLI (gh)

## 1. Crear proyecto desde la plantilla
`ash
gh repo create mi-equipo/mi-app --template diversifica/plantilla-react-fastapi --public --clone
`

## 2. Configurar variables de entorno
Copiar los ejemplos:
`ash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
`
Personaliza:
- OPENAI_API_KEY
- DATABASE_URL (Postgres o SQLite)
- ALLOWED_ORIGINS
- VITE_API_URL

## 3. Backend
`ash
cd backend
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv/Scripts/activate     # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
`

## 4. Frontend
`ash
cd frontend
npm install
npm run dev
`

## 5. Docker Compose
`ash
docker compose -f docker-compose.dev.yml up --build
`

## 6. Tests
`ash
# Frontend
cd frontend
npm run test

# Backend
cd backend
pytest
`

## 7. Scripts útiles
- scripts/seed_content.py: carga unidades desde data/json a la base de datos.
- scripts/generate_prompts.py: renderiza prompts LLM de prueba.

## 8. Troubleshooting
| Problema | Solución |
| --- | --- |
| psycopg2 falla en Windows | Instala pip install psycopg2-binary y usa WSL/ Docker |
| Frontend no encuentra API | Verifica VITE_API_URL y CORS en ackend/app/core/config.py |
| Deploy Easypanel no se dispara | Revisa secretos EASYPANEL_* y logs del workflow |