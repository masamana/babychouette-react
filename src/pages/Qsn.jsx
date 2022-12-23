import Header from "../components/Header";
import Footer from "../components/Footer";
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, fugit eveniet totam tempora repudiandae quod sequi nemo, tenetur eos minus suscipit numquam, porro pariatur officia fugiat! Harum, repellendus eveniet.
                </p>
              </div>
              <div className="content">
                <img className="img-size" src="/img/christelle.jpg" alt="" />
                <h2>Nounou Christelle</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, fugit eveniet totam tempora repudiandae quod sequi nemo, tenetur eos minus suscipit numquam, porro pariatur officia fugiat! Harum, repellendus eveniet.</p>
              </div>
            </div>
          </section>
          </main>
          <Footer />
        </>
      );
    };
    
export default Qsn;
