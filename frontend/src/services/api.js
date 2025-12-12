const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export async function fetchHealth() {
  const res = await fetch(`${API_URL}/api/health`);
  if (!res.ok) throw new Error("API unavailable");
  return res.json();
}

export async function fetchSummary(topic) {
  const res = await fetch(`${API_URL}/api/llm/summary?topic=${encodeURIComponent(topic)}`);
  if (!res.ok) throw new Error("LLM summary failed");
  return res.json();
}