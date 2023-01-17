import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
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
        const response = await fetch('http://localhost:8080/api/babychouette/articles');
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
                      {/* ajouter article.img pour appeler mon api et consommer ma donnée (fetch) */}
                      
                    </div>
                    <div className="card-body">
                      <div className="content">
                        <h2>{article.title}</h2>
                        {/* <p>{article.content}</p> */}
                        {/* ajouter une limite d'affichage aux 200 premiers caractères */}
                        {/* <div>first 40 chars <span style="visibility:hidden">last 120 chars</span></div> */}
                        <Link className="link-btn" to={"/article/" + article.id}>Lire l'article</Link>
                      </div>
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
  


export default Blog;
