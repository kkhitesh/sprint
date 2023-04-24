import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sprint } from "./pages/sprint/Sprint";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sprint" element={<Sprint />} />
      </Routes>
    </div>
  );
}

export default App;
