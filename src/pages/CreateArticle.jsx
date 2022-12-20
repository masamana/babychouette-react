import Header from "../components/Header";

const CreateArticle = () => {
  // créer un formulaire avec un champ title et un champ content
  // lors du submit du formulaire, on envoie les données du formulaire au serveur avec
  // une requête fetch de type POST sur l'URL http://localhost:5000/api/articles

  const handleSubmit = (event) => {
    event.preventDefault();

    // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction

    

    const title = event.target.title.value;
    const content = event.target.content.value;
    const img = event.target.img.value;
    const id_users = event.target.id_users.value;
    const id_categories = event.target.id_categories.value;

    console.log(event);

    fetch("http://localhost:8080/api/articles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        img,
        id_users,
        id_categories
        
      }),
    });
  };


//   [{"message":"\"id_users\" is required","path":["id_users"],"type":"any.required","context":{"label":"id_users","key":"id_users"}}]

  return (
    <>
      <Header />
      <div>
        <h1>Page de création d'article</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Titre
            <input type="text" name="title" />
          </label>
          <label>
            Contenu
            <input type="text" name="content" />
          </label>
          <label>
            Image
            <input type="text" name="img" /> 
            {/* voir input type=file */}
          </label>
          <label>
            id_users
            <input type="text" name="id_users" />
          </label>
          <label>
            id_categories
            <input type="text" name="id_categories" />
          </label>
          <button type="submit">Créer l'article</button>
          {/* ajouter message ' l'article a bien été ajouté' */}
        </form>
      </div>
    </>
  );
};

export default CreateArticle;
