import { Link } from "react-router-dom";

const BlogExtract = () => {
    return (
        <>
        <section className="last-articles">
          <h2>Le Blog</h2>
          <div className="grid-container">
            <div className="item-a">
              <img className="img-size" src="/img/cheval-bascule.jpg" alt="" />
              <article className="content">
                <h3>Titre de l'article</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link className="link-btn" to="/articles/show/:id">Lire la suite</Link>
              </article>
            </div>

            <div className="item-b">
              <img className="img-size" src="/img/coloriage.jpg" alt="" />
              <article className="content">
                <h3>Titre de l'article</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="link-btn" to="/articles/show/:id">Lire la suite</Link>
              </article>
            </div>
          
            <div className="item-c">
              <img className="img-size" src="/img/jouetsBois.jpg" alt="" />
              <article className="content">
                <h3>Titre de l'article</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="link-btn" to="/articles/show/:id">Lire la suite</Link>
              </article>
            </div>
           
            <div className="item-d">
              <img className="img-size" src="/img/crayonsPot.jpg" alt="" />
              <article className="content">
                <h3>Titre de l'article</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="link-btn" to="/articles/show/:id">Lire la suite</Link>
              </article>
            </div>
            
          </div>
        </section>
        </>
    ) 
}

export default BlogExtract;