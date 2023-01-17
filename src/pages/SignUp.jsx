import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const repassword = event.target.repassword.value;
    const name = event.target.name.value;
    const first_name = event.target.first_name.value;
    const tel = event.target.tel.value;
    const adress = event.target.adress.value;


    fetch("http://localhost:8080/api/babychouette/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        repassword,
        name,
        first_name,
        tel,
        adress
        
      }),
    });
    alert("Le compte a bien été créé !")
    navigate('/login')
  };


  return (
  <>
    <Header />
      <h1>Création d'un compte</h1>
      <section className="create-account">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
          <input type="radio" name="radio1" value="monsieur" />
            <label>M.</label>
            <input type="radio" name="radio1" value="madame" />
            <label>Mme.</label><br /><br />
            
            <label htmlFor="name">Entrez votre nom *</label><br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom"
              required
            /><br /><br />

            <label htmlFor="first_name">Entrez votre prénom *</label><br />
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Prénom"
              required
            /><br /><br />
            <label htmlFor="email">Entrez votre email *</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              required
            /><br /><br />

            <label htmlFor="password">Entrez votre mot de passe</label><br />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                required
            /><br /><br />

            <label htmlFor="repassword">Vérification mot de passe</label><br />
            <input
                type="password"
                id="repassword"
                name="repassword"
                placeholder="Mot de passe"
                required
            /><br /><br />

            <label htmlFor="tel">Téléphone *</label><br />
            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="Tél"
              required
            /><br /><br />

            <label htmlFor="adress">Adresse *</label><br />
            <input
              type="text"
              id="adress"
              name="adress"
              placeholder="Adresse"
              required
            /><br /><br />

            <button className="link-btn" type="submit" value="Envoyer">Créer le compte</button>
          </form>
        </div>
        {/* <div className="signup-container">
          <div className="content">
              <p>Maintenant vous pouvez vous connecter !</p>
              <Link className="link-btn" to="/login">Retour</Link>
          </div>
        </div>  */}
      </section>
    <Footer />
  </>
  )
}

export default SignUp;
