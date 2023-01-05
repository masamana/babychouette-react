import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const ArticleById = () => {
    

    const { id } = useParams();
    const navigate = useNavigate();
    

    const [article, setArticle] = useState([]);
    const handleDelete = async (id) => {

      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
      const jwtRole = JSON.parse(jwtLocalStorage).roles;
      
      await fetch("http://localhost:8080/api/articles/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authorization":'Bearer' + " " + jwtConnexion
        },
      });
  
      navigate('/dashboard');
      // permet de sortir de la liste l'article qui a été supprimé
      setArticle(article.filter((article) => article.id !== id));
    };
  
    useEffect(() => {
      (async () => {
        const response = await fetch('http://localhost:8080/api/articles/' + id);
        const article = await response.json();
  
        setArticle(article);
        
      })();
    }, []);
   

    return (
        <>
        <Header />
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
             
          </article>
          <Link className="link-btn" to={'/article/update/'+ article.id}>Modifier l'article</Link>
          <button className="link-btn" onClick={() => handleDelete(article.id)}>Supprimer l'article</button><br/>
          <Link className="link-btn" to={'/dashboard'}>Retour à la liste</Link>
        
        </>
    )
}

export default ArticleById;