import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(email, password);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup"
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
      <div>
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
};

export default Signup;
