import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Sitrep</h1>
        <p>Status reporting made simple</p>
      </header>
      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
