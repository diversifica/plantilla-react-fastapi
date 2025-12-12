import { useEffect, useState } from "react";
import { fetchHealth } from "../services/api";
import LLMAdvisor from "../components/LLMAdvisor.jsx";

function Dashboard() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchHealth()
      .then((res) => setStatus(res.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section>
      <header>
        <h1>Learning Missions</h1>
        <p>Stack listo para orquestar juegos educativos impulsados por LLM.</p>
      </header>
      <div className="cards">
        <article className="card">
          <h3>API</h3>
          <p>Estado: {status}</p>
        </article>
      </div>
      <LLMAdvisor />
    </section>
  );
}

export default Dashboard;