import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // Je créé les constantes dont je vais avoir besoin dans le code
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        // Je créé la constante asynchrone pour ne pas bloquer l'exécution du reste du code
        // J'ajoute un écouteur d'événement à la soumission du formulaire de connexion
        // qui récupèrera les valeurs suivantes
        event.preventDefault();
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // Je stocke la réponse dans une constante
        // Je fais appel à la route login de mon API avec une méthode HTTP de type 'POST'
        const jwtResponse = await fetch("http://localhost:8080/api/babychouette/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password    
          }),
        });
        // Je récupère la réponse et la convertis en format JSON
        const loginData = await jwtResponse.json();
        // console.log(loginData);
        
        // Je créé une condition afin de vérifier l'authentification
        // en comparant le statut de réponse à la requête (spécifié dans mon backend)
        // et en comparant le rôle, récupéré également dans le backend
        if (jwtResponse.status === 200 && loginData.roles === 'user') {
        // Si mes conditions sont vraies, je stocke le jwt dans le localstorage
          localStorage.setItem ('jwt', JSON.stringify(loginData))
        // et renvoie vers la page adaptée
          navigate('/avis');
        } else if (jwtResponse.status === 200 && loginData.roles === 'admin') {
            localStorage.setItem ('jwt', JSON.stringify(loginData))
          navigate('/espace-admin');
        // sinon je retourne un message d'erreur et renvoi au formulaire de connexion
        } else {
            alert('Combinaison email et mot de pass incorrecte')
            navigate('/login')
        }
    };

    return (
        <>
        <Header />
            <main>
                <h1>Connexion à votre espace</h1>
                <section className="login">
                    <p>Cher(s) parent(s), en vous connectant, vous aurez la possibilité de laisser un avis sur l'accueil à la Mam Babychouette, et partager votre expérience mais surtout celle de votre enfant !</p>
                    <div className="form-container">
                        {/* je passe au formulaire la fonction handleSubmit */}
                        <form onSubmit={handleSubmit}>
                        
                            <label htmlFor="email">Entrez votre adresse mail *</label><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="abc@gmail.com"
                                required
                            /><br /><br />

                            <label htmlFor="password">Entrez votre mot de passe</label><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Mot de passe"
                            /><br /><br />
                            
                            <button className="link-btn" type="submit">Connexion</button>  
                        </form>
                    </div>
                    <div className="signup-container">
                        <div className="content">
                            <p>Si vous n'avez pas encore de compte, c'est par ici !</p>
                            <Link className="link-btn" to="/inscription">Créer un compte</Link>
                        </div>
                    </div>
                </section>
            </main>
        < Footer />
        </>
    );
};

export default Login;