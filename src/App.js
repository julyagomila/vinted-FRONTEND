import "./App.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// COMPONENTS
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
