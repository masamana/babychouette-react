import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    
        fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password    
          }),
        });
    };

    return (
        <>
        <Header />
            <main>
                <h1>Connexion à l'espace parents</h1>
                <section className="login">
                    <p>Cher(s) parent(s), en vous connectant, vous aurez la possibilité de laisser un avis sur l'accueil à la Mam Babychouette, et partager votre expérience mais surtout celle de votre enfant !</p>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                        
                            <label>Entrez votre adresse mail *</label><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="abc@gmail.com"
                                required
                            /><br /><br />

                            <label>Entrez votre mot de passe</label><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Mot de passe"
                            /><br /><br />
                            
                            <input className="link-btn" type="submit" value="Connexion" />
                        </form>
                    </div>
                    <div className="signup-container">
                        <div className="content">
                            <p>Si vous n'avez pas encore de compte, c'est par ici !</p>
                            <Link className="link-btn" to="/creation-compte">Créer un compte</Link>
                        </div>
                    </div>
                </section>
            </main>
            
       
        < Footer />
        </>
    ) 



}


export default Login;