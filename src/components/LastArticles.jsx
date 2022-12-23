import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const LastArticles = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8080/api/articles/last-articles');
      const articles = await response.json();
  
      // const MAX_ARTICLES = 4;
      // let articlesToDisplay = [];
      // for(let i = 0; i < MAX_ARTICLES; i++){
      //   articlesToDisplay.push(articles[i])
      // }
      setArticles(articles);
      
    })();
  }, []);

    return (
        // faire fetch route /articles et retourner un tableau avec mes 4 derniers éléments ajoutés
        <>
        <section className="last-articles">

          <h2>Le Blog</h2>
          <div className="grid-container">
        {articles.map((article) => {
          return (
          <> 

            <div className={`grid-style item-${article.id}`} key={article.id}>
              <img className="img-size" src="/img/cheval-bascule.jpg" alt="" />
              <article className="content">
                <h3>{article.title}</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                <Link className="link-btn" to={"/article/show/" + article.id}>Lire la suite</Link>
              </article>
            </div>

            {/* <div className="grid-style item-b">
              <img className="img-size" src="/img/coloriage.jpg" alt="" />
              <article className="content">
                <h3>{article.title}</h3>
                <Link className="link-btn" to={"/article/show/" + article.id}>Lire la suite</Link>
              </article>
            </div>
          
            <div className="grid-style item-c">
              <img className="img-size" src="/img/jouetsBois.jpg" alt="" />
              <article className="content">
                <h3>{article.title}</h3>
                <Link className="link-btn" to={"/article/show/" + article.id}>Lire la suite</Link>
              </article>
            </div>
           
            <div className="grid-style item-d">
              <img className="img-size" src="/img/crayonsPot.jpg" alt="" />
              <article className="content">
                <h3>{article.title}</h3>
                <Link className="link-btn" to={"/article/show/" + article.id}>Lire la suite</Link>
              </article>
            </div> */}
            
          </> 
          )
        })}
          </div>
        </section>
        </>
    ) 
}

export default LastArticles;