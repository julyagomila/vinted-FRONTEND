const Header = () => {
  return (
    <header>
      <div className="left-part">
        <img className="logo-vinted" rc="/images/logo-vinted-bis.jpeg" />

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
              className="champ"
              type="text"
              value=""
              placeholder="Recherche des articles"
            />
          </form>
        </div>
      </div>

      <div className="right-part">
        <button className="buttons-header">S'inscrire</button>
        <button className="buttons-header">Se connecter</button>
        <button className="button-header">Vendre ses articles</button>
      </div>
    </header>
  );
};

export default Header;
