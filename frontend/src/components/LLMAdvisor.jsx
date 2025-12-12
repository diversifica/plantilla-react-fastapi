import { useState } from "react";
import { fetchSummary } from "../services/api";

function LLMAdvisor() {
  const [topic, setTopic] = useState("Feudalismo");
  const [summary, setSummary] = useState("Describe un tema para probar la integración LLM.");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetchSummary(topic);
      setSummary(response.summary);
    } catch (error) {
      setSummary(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>LLM Advisor</h2>
      <p>Genera resúmenes y quests a partir de un tema.</p>
      <div className="field">
        <label htmlFor="topic">Tema</label>
        <input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
      </div>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Consultando..." : "Generar"}
      </button>
      <pre>{summary}</pre>
    </section>
  );
}

export default LLMAdvisor;