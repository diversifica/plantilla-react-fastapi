function Configurator() {
  return (
    <section>
      <h1>Configuración LLM</h1>
      <p>Define prompts, pesos de cada estrategia y toggles para nuevas aventuras.</p>
      <ol>
        <li>Sube PDFs o JSON en <code>data/json</code>.</li>
        <li>Ejecuta <code>scripts/seed_content.py</code>.</li>
        <li>Activa la misión en la API.</li>
      </ol>
    </section>
  );
}

export default Configurator;