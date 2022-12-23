import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
          <Header />
            <h1>Contactez-nous</h1>
            <main>
              <section className="contact">

                <div className="form-container">
                  <form>
                    <label for="name">Nom & prénom</label><br />
                    <input type="text" id="name" name="name" placeholder="Votre nom et prénom"/>
                    <br></br>

                    <label for="sujet">Sujet</label><br />
                    <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"/>
                    <br></br>

                    <label for="email">Email</label><br />
                    <input id="email" type="email" name="email" placeholder="Votre email"/>
                    <br></br>


                    <label for="subject">Message</label><br />
                    <textarea id="subject" name="subject" placeholder="Votre message"></textarea>
                    <br></br>

                    <input className="link-btn" type="submit"/>
                  </form>
                </div>


          
              </section>
            </main>
          <Footer />
        </>
      )
}
    
export default Contact;
