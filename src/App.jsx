import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { Sprint } from "./pages/sprint/Sprint";
import { Stream } from "./pages/stream";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sprint" element={<Stream />} />
      </Routes>
    </div>
  );
}

export default App;
