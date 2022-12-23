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
              <Link className="link-btn" to={"/articles"}>Retour au blog</Link>
              <div className="content-article">
                <p>{article.content}</p>
                <img className="img-article" src="/img/activite-peinture.jpg" alt=""/>
              </div>
          </article>
          <Footer />
        </>
    )
}

export default ShowArticle;
