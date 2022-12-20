import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const UpdateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/articles/" + id);
      const article = await response.json();
      setArticle(article);
    })();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;
    const img = event.target.img.value;
    const id_categories = event.target.id_categories.value;

    fetch("http://localhost:8080/api/articles", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        img,
        id_categories
      }),
    });
  };

  return (
    <>
      <Header />
      <div>
        <h1>Page de création d'article</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Titre
            <input type="text" name="title" value={article.title} />
          </label>
          <label>
            Contenu
            <input type="text" name="content" value={article.content} />
          </label>
          <label>
            Image
            <input type="text" name="img" />
          </label>
          <label>
            id_categories
            <input type="text" name="id_categories" />
          </label>
          <button type="submit">Modifier l'article</button>
        </form>
      </div>
    </>
  );
};

export default UpdateArticle;