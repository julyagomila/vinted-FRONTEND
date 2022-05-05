import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
