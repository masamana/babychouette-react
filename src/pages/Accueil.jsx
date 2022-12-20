import Header from "../components/Header";
import { Link } from "react-router-dom";
import BlogExtract from "../components/LastArticles";


const Accueil = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Bienvenue à la Mam Babychouette</h1>
        <section className="home">
          <div className="container">
            <article className="content">
              <h2>Qui sommes-nous ?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className="link-btn" to="/Qui-sommes-nous">Qui sommes-nous ?</Link>
            </article>
          </div>
        </section>

        <section className="home-mam">
        <div className="container">
            <article className="content">
              <h2>La mam</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Link className="link-btn" to="/mam-babychouette">Visiter</Link>
            </article>
          </div>
        </section>
      
        <BlogExtract />

      </main>
    </> 
  );
};

export default Accueil;