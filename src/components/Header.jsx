import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <nav className="nav-menu">
      <ul>
        <li id="logo">
          <img
            className="logo"
            src="/img/babychouette-logo.png"
            alt="Logo Babychouette"
          />
        </li>
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
            <Link to="/article/create">Créer un article</Link>
        </li>
        {/* <li>
            <Link to="/coin-des-parents">Coin des parents</Link>
        </li> */}
        
      </ul>
    </nav>
    {/* <h1>Bienvenue à la Mam babychouette</h1> */}
  </header>
  );
};

export default Header;