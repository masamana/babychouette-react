import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListArticles = () => {
    const [articles, setArticles] = useState([]);
  
    // const handleDelete = async (id) => {
    //   await fetch("http://localhost:8080/api/articles/" + id, {
    //     method: "DELETE",
    //   });
  
      // permet de sortir de la liste l'article qui a été supprimé
    //   setArticles(articles.filter((article) => article.id !== id));
    // };
  
    useEffect(() => {
      (async () => {
        const response = await fetch('http://localhost:8080/api/articles');
        const articles = await response.json();
  
        setArticles(articles);
        
      })();
    }, []);
  
    return (
      <>
        <Header />
        <main> 
          <h1>Blog</h1>
          <section className="list-articles">
              {articles.map((article) => {
                return (
                  <article className="card-article" key={article.id}>
                    <div class="card-header">
                      <img className="img-size" src="/img/jeuCouleur.jpg" alt=""/>
                      {/* ajouter img.article pour appeler mon api et consommer ma donnée (fetch) */}
                      {/* <button onClick={() => handleDelete(article.id)}>Supprimer</button> */}
                    </div>
                    <div className="card-body">

                      <h2>{article.title}</h2>
                      {/* <p>{article.content}</p> */}
                      {/* ajouter une limite d'affichage aux 200 premiers caractères */}
                      {/* <div>first 40 chars <span style="visibility:hidden">last 120 chars</span></div> */}
                      <Link className="link-btn" to={"/article/show/" + article.id}>Lire l'article</Link>
                    </div>
                  </article>
                );
              })}
          </section>
        </main>
        <Footer />
      </>
    );
  };
  


export default ListArticles;
