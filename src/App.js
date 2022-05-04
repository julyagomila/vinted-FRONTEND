import "./App.css";

//PHOTOS
import imageBanniere from "./images/image-centrale.jpeg";

import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// COMPOSANTS
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="App">
      <Header />
      <main>
        <div className="bannière">
          <img className="image bannière" src="imageBanniere" />
        </div>
      </main>
      <Router>
        <nav className="container">
          <Link to="/home">Go to home</Link>
          <Link to="/offer/:offerId">Go to offer</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/offer/:offerId" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
