import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo-footer">
                    <img className="logo"
              src="/img/babychouette-logo-blanc.png"
              alt="Logo Babychouette" />
                </div>
                <div className="content-footer">
                    <ul>
                        <li><Link to="/contact">Contactez-nous</Link></li>
                        <li>3 ter rue Félix Nadar</li>
                        <li>33700 Mérignac</li>
                        <li>
                            <a href="mailto:mam-babychouette@gmail.com"
                            >mam-babychouette@gmail.com</a
                            >
                        </li>
                        <li>
                            <a class="icon-footer" href=""
                            ><i class="fa-brands fa-facebook-f fa-lg custom-icon"></i>
                            </a>
                            <a class="icon-footer" href=""
                            ><i class="fa-brands fa-instagram fa-xl custom-icon"></i
                            ></a>
                        </li>
                    </ul>
                </div>
                <nav className="content-footer">
                    <ul>
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
                    </ul>
                </nav>
            </div>
            <div className="mentions-legales">
                <ul>
                    <li>
                        <a href="">Copyright</a>
                    </li>
                    <li>
                        <a href="">Mentions légales</a>
                    </li>
                </ul>
            </div>


        </footer>


    )


}

export default Footer;