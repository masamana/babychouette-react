import { useEffect, useState } from "react";
import ArticleDetails from "./ArticleDetails";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListArticlesAdmin = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;

      (async () => {
        const response = await fetch('http://localhost:8080/api/articles', {
          method: 'get', 
          headers: {
            'authorization': 'Bearer' + " " +jwtConnexion,
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
        <Link className="link-btn" to="/create-article">Créer un article</Link>
          <table border="1px">

            <thead >
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
        </main>
      </>
    );
  };
  


export default ListArticlesAdmin;
