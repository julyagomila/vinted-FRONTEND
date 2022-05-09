import { Link } from "react-router-dom";
import logoVinted from "../assets/images/logo-vinted-bis.jpeg";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <header>
      {/* <div className="left-part">
        <img className="logo-vinted" src={logoVinted} />

        <button className="button-menu">
          <div className="menu">
            <ul>
              <li>
                <a href="" title="Articles">
                  Articles
                </a>
                <ul>
                  <li>
                    <a href="" title="Membres">
                      Membres
                    </a>
                  </li>
                  <li>
                    <a href="" title="Forum">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="" title="Centre d'aide">
                      Centre d'aide
                    </a>
                  </li>
                  <li>
                    <a href="" title="Transports en communs">
                      Transports
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </button>

        <div className="searchbar">
          <form action="" className="formulaire">
            <input
              className="search"
              type="text"
              placeholder="Rechercher un article"
              value={""}
            />
          </form>
        </div>
      </div> */}

      <div className="right-part">
        {token === null ? (
          <div>
            <Link to="/signup">
              <button className="buttons-header">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="buttons-header"> Se connecter </button>
            </Link>
          </div>
        ) : (
          <button
            onClick={() => {
              //Je me déconnecte et je redirige l'utilsateur vers la home page
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        )}
        <div>
          {" "}
          <button className="buttons-header">Vendre ses articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
