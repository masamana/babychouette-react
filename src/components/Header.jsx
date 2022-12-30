import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav-menu">
        <ul>
          <li id="logo">
            {/* <Link to="/login/admin"> */}
            <img
              className="logo"
              src="/img/babychouette-logo-blanc.png"
              alt="Logo Babychouette"
            />
            {/* </Link> */}
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
              <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
              <Link to="/article/create">Créer un article</Link>
          </li> */}
          <li>
              <Link to="/login">Coin des parents</Link>
          </li>
        
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;