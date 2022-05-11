import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// PHOTOS
import imageCentrale from "../assets/images/image-centrale.jpeg";

// COMPOSANT
import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=20&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="App">
      <Header />
      <div className="bannière">
        <img className="image-centrale" src={imageCentrale} />
      </div>
      <span className="span-home">FIL D'ACTUALITÉS</span>
      <section className="grid">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <div className="offer">
                <h2>{offer.product_name}</h2>
                <img
                  style={{ height: 150 }}
                  src={offer.product_image.secure_url}
                  alt=""
                />
                <p>{offer.product_price}€</p>
              </div>
            </Link>
          );
        })}
      </section>
      <div className="pages">
        <button className="button-pages" onClick={() => setPage(page - 1)}>
          Page précédente
        </button>
        <button className="button-pages" onClick={() => setPage(page + 1)}>
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default Home;
