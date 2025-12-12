import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Configurator from "./pages/Configurator.jsx";
import Records from "./pages/Records.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/config" element={<Configurator />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </Layout>
  );
}

export default App;