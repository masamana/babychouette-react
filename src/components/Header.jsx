import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <header>
      <nav className="nav-menu">
          <div className="logo-container">
            <img
              className="logo"
              src="/img/babychouette-logo-blanc.png"
              alt="Logo Babychouette"
              />
          </div>
        <ul className={`nav-items ${display ? "" : "hiden"}`}>
          <li>
              <Link to="/">Accueil</Link>
          </li>
          <li>
              <Link to="/qui-sommes-nous">Qui sommes-nous ?</Link>
          </li>
          <li>
              <Link to="/mam-babychouette">La Mam</Link>
          </li>
          <li>
              <Link to="/articles">Le blog</Link>
          </li>
          <li>
              <Link to="/contact">Contact</Link>
          </li>
          <li>
              <Link to="/login">Coin des parents</Link>
          </li> 
        </ul>
        <button className="burger" onClick={handleDisplay}>
          <i className="fa-solid fa-bars fa-3x"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;