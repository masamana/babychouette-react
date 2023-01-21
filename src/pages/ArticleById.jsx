import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";

const ArticleById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const [article, setArticle] = useState([]);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    const jwtRole = JSON.parse(jwtLocalStorage).roles;
    
    (async () => {
      const response = await fetch('http://localhost:8080/api/babychouette/articles/' + id, {
        method: 'get', 
        headers: {
          'authorization': 'Bearer' + " " + jwtConnexion,
          'Content-Type': 'application.json'
        },
      });
      
      const article = await response.json();

      setArticle(article);
      setRole(jwtRole);
      
      if (jwtRole != 'admin') {
        alert("Vous devez être administrateur !")
        navigate('/login');
      } 
    })();
  }, []);

  const handleDelete = async (id) => {

    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    // const jwtRole = JSON.parse(jwtLocalStorage).roles;
    
    await fetch("http://localhost:8080/api/babychouette/articles/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization":'Bearer' + " " + jwtConnexion
      },
    });
    alert("L'article a bien été supprimé !")
    navigate('/espace-admin');
    // permet de sortir de la liste l'article qui a été supprimé
    setArticle(article.filter((article) => article.id !== id));
  };

  return (
  <>
    <Header />

    { role === 'admin' && 

    <main>
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
    <div className="btns">
      <Link className="link-btn" to={'/article/update/'+ article.id}>Modifier l'article</Link>
      <button className="link-btn" onClick={() => handleDelete(article.id)}>Supprimer l'article</button>
      <Link className="link-btn" to={'/espace-admin'}>Retour à la liste</Link>
    </div>
  </main>

    }
  <Footer />
  </>
  )
}

export default ArticleById;