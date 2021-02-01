import JsonRenderer from "./JsonRenderer";
import cars from "./Json/test.json"

function App() {
  return (
    <JsonRenderer json={cars} />
  );
}

export default App;
