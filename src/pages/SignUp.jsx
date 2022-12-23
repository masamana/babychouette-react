import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <>
        <Header />
        <form>
         <input type="radio" name="radio1" value="monsieur" />
          <label>M.</label>
          <input type="radio" name="radio1" value="madame" />
          <label>Mme.</label><br /><br />

          <label>Entrez votre prénom *</label><br />
          <input
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="Prénom"
            required
          /><br /><br />

          <label>Entrez votre nom *</label><br />
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="nom"
            required
          /><br /><br />

  
          <input className="link-btn" type="submit" value="Envoyer" />
          </form>

          <Link className="link-btn" to="/login">Retour</Link>


        <Footer />
        </>
    )

}

export default SignUp;
