import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <Header />
            <main>
                <h1>Connexion à l'espace parents</h1>
                <section className="login">
                    <p>Cher(s) parent(s), en vous connectant, vous aurez la possibilité de laisser un avis sur l'accueil à la Mam Babychouette, et partager votre expérience mais surtout celle de votre enfant !</p>
                    <div className="form-container">
                        <form>
                        
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