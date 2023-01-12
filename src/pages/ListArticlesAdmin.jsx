import { useEffect, useState } from "react";
import ArticleDetails from "./ArticleDetails";
import { Link } from "react-router-dom";

const ListArticlesAdmin = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;

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
        
      })();
    }, []);
  
    return (
      <>
        <main> 
        <section className="dashboard-admin">
          <div className="container">
            <Link className="link-btn" to="/create-article">Créer un article</Link>
          </div>
            <table border="2px">

              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Titre</th>
                      <th>Contenu</th>
                      <th>Image</th>
                      {/* <th>Date</th>  */}
                  </tr>
              </thead>

              <tbody>
                  {articles.map((article) =>{
                    return(

                    <ArticleDetails key={article.id}   article={article}/>
                    )

                  })}
              </tbody>
            </table>
          </section>
        </main>
      </>
    );
  };
  


export default ListArticlesAdmin;
