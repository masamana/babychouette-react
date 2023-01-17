import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CreateArticle = () => {
  
//  je crée ici un état avec le hook de React useState, où je stock les données dont j'ai besoin
  const [articles, setArticles] = useState([]);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // J'utillise le hook useEffect pour bloquer le rendu du composant après l'appel fetch vers l'API
  // Pour éviter un render "infini"
  useEffect(() => {
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    const jwtRole = JSON.parse(jwtLocalStorage).roles;
    // Je fais appel à l'API avec une fonction asynchrone pour permettre l'exécution du reste du code
    (async () => {
      const response = await fetch('http://localhost:8080/api/babychouette/articles', {
        method: 'get', 
        headers: {
          'authorization': 'Bearer' + " " + jwtConnexion,
          'Content-Type': 'application.json'
        },
      });
      
      const articles = await response.json();

      setArticles(articles);
      setRole(jwtRole);
      
      if (jwtRole != 'admin') {
        navigate('/login');
      }

    })();
  }, [role]);

  const handleSubmit = async (event) => {
    event.preventDefault();
     // lors du submit du formulaire, on envoie les données du formulaire via la route de l'api
    // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction
    
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    const jwtRole = JSON.parse(jwtLocalStorage).roles;

   
    const title = event.target.title.value;
    const content = event.target.content.value;
    const img = event.target.img.value;
    const id_users = event.target.id_users.value;
    const id_categories = event.target.id_categories.value;
    // faire en sorte de récupérer automatiquement l'id du user et l'id de la catégorie avec son nom


    const addArticle = await fetch("http://localhost:8080/api/babychouette/articles", {
      method: "POST",
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
    alert("L'article a été ajouté avec succès !");
    navigate('/espace-admin');
  };


  return (
    <>
      <Header />
      {/* Je peux ici conditionner l'affichage de ma page au seul rôle 'admin' */}
      {role === 'admin' &&         
      <main>
        <h1>Page de création d'article</h1>
        <section className="create-article">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">
                Titre de l'article
                <input type="text" name="title" id="title"/><br /><br />
              </label>
              <label htmlFor="content">
                Contenu
                <textarea name="content" id="content"></textarea><br /><br />
        
              </label>
              <label htmlFor="img">
                Image
                <input type="text" name="img" id="img"/><br /><br />
                {/* input type=file */}
              </label>
              <label htmlFor="id_users">
                {/* Récupérer l'id de l'admin par son prénom */}
                Créé par : 
                <input type="text" name="id_users" id="id_users"/><br /><br />
              </label>
              <label htmlFor="id_categories">
                Catégorie de l'article : 
                 {/*Récupérer l'id de la catégorie par son nom  */}
                <input type="text" name="id_categories" id="id_categories"/><br /><br />
              </label>
              <button className="link-btn" type="submit">Créer l'article</button>
            </form>
          </div>
        </section>
        </main>
      }
      <Footer />
    </>
  );
};

export default CreateArticle;
