import "./App.css";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addpage" element={<AddPage />} />
    </Routes>
  );
}

export default App;
