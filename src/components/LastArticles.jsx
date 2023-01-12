import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LastArticles = () => {
//Je crée un état local (state) pour stocker les articles récupérés
  const [articles, setArticles] = useState([]);

  // Je bloque le rendu du composant après l'appel fetch vers l'API
  // Pour éviter un render "infini"
  useEffect(() => {
    // J'utilise une fonction asynchrone afin de ne pas bloquer l'exécution du reste de l'application
    (async () => {

      const response = await fetch('http://localhost:8080/api/babychouette/articles/last-articles');
    // J'utilise await pour attendre la récupération des données avant de les utiliser
      const articles = await response.json();
    // Je récupère la réponse grâce à une promesse (await)
    // la méthode .json() permet de convertir la réponse de l'API en objet JavaScript
    // que je renvoie dans mon état via setArticles
      setArticles(articles);
    // la constante articles a donc récupéré la valeur initialisé dans le state après l'appel fetch  
    })();
  }, []);

  return (
    <>
    {/* J'utilise un Fragment pour retourner plusieurs éléments sans ajouter de balises dans le DOM */}
      <section className="last-articles">
      <h2>Le Blog</h2>
      <div className="grid-container">
      {/* Je fais une boucle avec map sur mes articles récupérés */}
      {articles.map((article) => {
        return (
        <> 
        {/* Je récupère les éléments que je souhaite afficher dans mon interface utilisateur */}
          <div className={`grid-style item-${article.id}`} key={article.id}>
            <img className="img-size" src="/img/cheval-bascule.jpg" alt="" />
            <article className="content">
              <h3>{article.title}</h3>
              {/* Je renvoie ici vers l'article via le router de React, lié au composant ShowArticle qui me permet d'afficher un seul article par son id*/}
              <Link className="link-btn" to={"/article/" + article.id}>Lire la suite</Link>
            </article>
          </div>
        </> 
        )
      })}
      </div>
      </section>
    </>
  ); 
};

export default LastArticles;