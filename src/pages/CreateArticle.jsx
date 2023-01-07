import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

const CreateArticle = () => {
  // créer un formulaire avec champs requis
  // lors du submit du formulaire, on envoie les données du formulaire via la route de l'api
  const [articles, setArticles] = useState([]);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
    const jwtRole = JSON.parse(jwtLocalStorage).roles;
    
    (async () => {
      const response = await fetch('http://localhost:8080/api/articles', {
        method: 'get', 
        headers: {
          'authorization': 'Bearer' + " " + jwtConnexion,
          'Content-Type': 'application.json'
        },
      });
      
      const articles = await response.json();

      setArticles(articles);
      setRole(jwtRole);
      
    })();
  }, [role]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction
    
    const jwtLocalStorage = localStorage.getItem('jwt');
    const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;

   
    const title = event.target.title.value;
    const content = event.target.content.value;
    const img = event.target.img.value;
    const id_users = event.target.id_users.value;
    const id_categories = event.target.id_categories.value;
    // faire en sorte de récupérer automatiquement l'id du user et l'id de la catégorie avec son nom


    const addArticle = await fetch("http://localhost:8080/api/articles", {
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
    navigate('/dashboard');
  };


  return (
    <>
      <Header />

      {role === 'admin' &&  
            
      <main>
        <h1>Page de création d'article</h1>
        <section className="create-article">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                Titre de l'article
                <input type="text" name="title" /><br /><br />
              </label>
              <label>
                Contenu
                <textarea id="content" name="content"></textarea><br /><br />
        
              </label>
              <label>
                Image
                <input type="text" name="img" /><br /><br />
                {/* input type=file */}
              </label>
              <label>
                id_users
                <input type="text" name="id_users" /><br /><br />
              </label>
              <label>
                Catégorie de l'article (id_categories) 
                <input type="text" name="id_categories" /><br /><br />
              </label>

              <button className="link-btn" type="submit">Créer l'article</button>
              
              {/* {validated ? <p>Article créé</p> : <p>Une erreur est survenue</p>} */}
              {/* ajouter message ' l'article a bien été ajouté' */}
            </form>
          </div>
        </section>
        </main>

      }
      
    </>
  );
};

export default CreateArticle;
