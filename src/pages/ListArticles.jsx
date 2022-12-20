import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
            <article className="card-article">
              {articles.map((article) => {
                return (
                  <div key={article.id}>
                    {/* <button onClick={() => handleDelete(article.id)}>Supprimer</button> */}
                    <h2>{article.title}</h2>
                    <img src="/img/jeuCouleur.jpg" alt=""/>
                    <p>{article.content}</p>
                    <Link className="link-btn" to={"/article/show/" + article.id}>Lire l'article</Link>
                  </div>
                );
              })}
            </article>
          </section>
        </main>

        <article class="actualite">
            <h3>ACTUALITÉS</h3>
            <div class="article-cover">
              <img
                src="assets/img/Launch-Details-580.jpg"
                alt="fond"
                class="img-size"
              />
            </div>
            <div class="contenu">
              <h4>Actualités du jour</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ut eius eligendi voluptate porro iste quos temporibus
                veniam autem. At.
              </p>
            </div>
          </article>
      </>
    );
  };
  


export default Blog;
