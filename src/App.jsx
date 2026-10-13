
import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Running");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Docker<span>Hub</span></h2>
        <span className="badge">React App</span>
      </nav>

      <main className="container">
        <div className="icon">🐳</div>

        <h1>
          Container is <span>Alive!</span>
        </h1>

        <p className="subtitle">
          Your React application is running successfully
          inside a Docker container.
        </p>

        <div className="card">
          <div className="card-header">
            <h3>Container Status</h3>
            <span className="dot"></span>
          </div>

          <div className="info">
            <span>Application</span>
            <strong>React + Vite</strong>
          </div>

          <div className="info">
            <span>Environment</span>
            <strong>Docker</strong>
          </div>

          <div className="info">
            <span>Port</span>
            <strong>5173</strong>
          </div>

          <div className="info">
            <span>Status</span>
            <strong className="success">{status}</strong>
          </div>

          <button
            onClick={() =>
              setStatus(status === "Running" ? "Healthy" : "Running")
            }
          >
            Check Container Status ↻
          </button>
        </div>

        <p className="footer">
          Built with React ⚛️ and Docker 🐳
        </p>
      </main>
    </div>
  );
}

export default App;
