# 🤝 Contribuir

1. Haz fork o crea una rama desde develop.
2. Ejecuta los chequeos locales:
   - rontend: 
pm run validate
   - ackend: make validate o 	ox
3. Sigue [Conventional Commits](https://www.conventionalcommits.org/):
   - eat:, ix:, chore:, docs:, efactor:, 	est:
4. Abre un Pull Request con descripción de la feature y capturas si aplica.
5. Espera a que CI pase; no se puede mergear sin verde.

## Estructura de ramas
- main: rama estable y protegida.
- develop: rama de integración.
- eature/<feature-name> para nuevas funcionalidades.
- hotfix/<issue> para parches críticos.

## Checklist de PR
- [ ] Actualicé README o docs si apli ca.
- [ ] Agregué/actualicé tests.
- [ ] 
pm run validate y make validate terminan sin errores.
- [ ] No incluí secretos ni credenciales.

## Estilo de Código
- Frontend: ESLint + Prettier (config en rontend/eslint.config.js).
- Backend: Ruff + Black + isort (tasks en pyproject.toml).
- Se permiten comentarios breves explicando decisiones arquitectónicas.

## Reporte de bugs
Abrir Issues con:
- Descripción
- Pasos para reproducir
- Logs/adjuntos
- Impacto

## Seguridad
Para vulnerabilidades, escribe a seguridad@diversifica.com antes de crear un issue público.