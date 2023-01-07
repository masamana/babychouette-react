import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UpdateArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [role, setRole] = useState(null);

  useEffect(() => {
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    const jwtRole = JSON.parse(jwtLocalStorage).roles;
    
    (async () => {
      const response = await fetch('http://localhost:8080/api/articles/' + id, {
        method: 'get', 
        headers: {
          'authorization': 'Bearer' + " " + jwtConnexion,
          'Content-Type': 'application.json'
        },
      });
      
      const article = await response.json();

      setArticle(article);
      setRole(jwtRole);
      
    })();
  }, [role]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://localhost:8080/api/articles/" + id);
  //     const article = await response.json();
  //     setArticle(article);
  //   })();
  // }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;

    const title = event.target.title.value;
    const content = event.target.content.value;
    const img = event.target.img.value;
    const id_users = event.target.id_users.value;
    const id_categories = event.target.id_categories.value;

    fetch("http://localhost:8080/api/articles/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization":'Bearer' + " " + jwtConnexion
      },
      body: JSON.stringify({
        title,
        content,
        img,
        id_users,
        id_categories
      }),
    });
    alert("L'article a été modifié avec succès !");
    navigate('/dashboard');
  };

  return (
    <>
      <Header />
      <div>
        <h1>Modification d'article</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Titre
            <input type="text" name="title"/>
          </label>
          <label>
            Contenu
            <input type="text" name="content" />
          </label>
          <label>
            Image
            <input type="text" name="img" />
          </label>
          <label>
            id_users
            <input type="text" name="id_users" />
          </label>
          <label>
            id_categories
            <input type="text" name="id_categories" />
          </label>
          <button className="link-btn" type="submit">Modifier l'article</button>
        </form>
      </div>
      <Link className="link-btn" to={'/article/'+ article.id}> Retour à l'article</Link>
    </>
  );
};

export default UpdateArticle;