import Header from "../components/Header";
import Footer from "../components/Footer";
import LastArticles from "../components/LastArticles";
import { Link } from "react-router-dom";

const Qsn = () => {

    return (
        <>
          <Header />
          <main>
          <h1>Qui sommes-nous ?</h1>
          <section className="qsn">
            <div className="container">
              <div className="content">
                <img className="img-size" src="/img/joelle.jpg" alt="" />
                <h2>Nounou Joëlle</h2>
                <p>Joëlle est une assistante maternelle aimable et attentionnée. Elle se consacre à chaque enfant et leur donne toute l'attention dont ils ont besoin. Elle est très patiente et est capable de s'adapter à tous les enfants, quel que soit leur âge. Elle est douce et bienveillante, et sait comment les divertir et les encourager. Elle met l'accent sur leur bien-être et leur sécurité, et les aide à développer leurs compétences sociales et leur imagination. Elle est toujours à l'écoute des besoins des enfants et des parents, et sait comment les soutenir et les aider.
                </p>
              </div>
              <div className="content">
                <img className="img-size" src="/img/christelle.jpg" alt="" />
                <h2>Nounou Christelle</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, fugit eveniet totam tempora repudiandae quod sequi nemo, tenetur eos minus suscipit numquam, porro pariatur officia fugiat! Harum, repellendus eveniet.</p>
              </div>
            </div>
          </section>
          <LastArticles />
          </main>
          <Footer />
        </>
      );
    };
    
export default Qsn;
