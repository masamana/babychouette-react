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
          <div className="dashboard">
            <table border={1}>
              <thead>
                  <tr>
                      <th colSpan={2}>Id</th>
                      <th colSpan={6}>Titre</th>
                      <th colSpan={12}>Contenu</th>
                      <th colSpan={4}>Image</th>
                      <th colSpan={4}></th>
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
          </div>
          </section>
        </main>
      </>
    );
  };
  


export default ListArticlesAdmin;
