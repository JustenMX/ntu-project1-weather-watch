import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
