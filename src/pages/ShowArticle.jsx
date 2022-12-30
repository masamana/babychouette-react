import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";

const ShowArticle = () => {

    const { id } = useParams();

    const [article, setArticle] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = await fetch('http://localhost:8080/api/articles/' + id);
        const article = await response.json();
  
        setArticle(article);
        
      })();
    }, []);
   

    return (
        <>
        <Header/>
          <article>
              <h1>{article.title}</h1>
              <div className="container">
                <h2>Sous titre de l'article - Catégorie</h2>
                  <div className="img-container">
                    <img className="img-article" src="/img/activite-peinture.jpg" alt=""/>
                  </div>
                <div className="content-article">
                  <p>{article.content}</p>
                </div>
              </div>
             
              <Link className="link-btn" to={"/articles"}>Retour au blog</Link>
          </article>
          <Footer />
        </>
    )
}

export default ShowArticle;
