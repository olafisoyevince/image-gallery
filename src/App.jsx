import "./App.css";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/*" element={<App />} />
    </Routes>
  );
}

export default App;
