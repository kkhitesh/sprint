import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Stream } from "./pages/stream";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Stream />} />
      </Routes>
    </div>
  );
}

export default App;
