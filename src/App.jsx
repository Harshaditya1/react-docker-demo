
import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Running");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>
          Docker<span>Hub</span>
        </h2>
        <span className="badge">React + Vite</span>
      </nav>

      <main className="container">
        <div className="icon">🐳</div>

        <h1>
          Welcome to <span>Docker World!</span>
        </h1>

        <p className="subtitle">
          Updated successfully! This React application is
          containerized with Docker and powered by Vite.
        </p>

        <div className="card">
          <div className="card-header">
            <h3>Container Information</h3>
            <span className="dot"></span>
          </div>

          <div className="info">
            <span>Application</span>
            <strong>React + Vite</strong>
          </div>

          <div className="info">
            <span>Container Name</span>
            <strong>react-demo</strong>
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
            <span>Application Status</span>
            <strong className="success">{status}</strong>
          </div>

          <button
            onClick={() =>
              setStatus((current) =>
                current === "Running" ? "Healthy" : "Running"
              )
            }
          >
            Check Application Status ↻
          </button>
        </div>

        <div className="success-message">
          <span>✓</span>
          <p>Your application is ready to use!</p>
        </div>

        <p className="footer">
          Built with React ⚛️ and Docker 🐳
        </p>
      </main>
    </div>
  );
}

export default App;
