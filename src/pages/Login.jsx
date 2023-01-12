import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    
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

        const loginData = await jwtResponse.json();
        console.log(loginData);
        
        if (jwtResponse.status === 200 && loginData.roles === 'user') {
          localStorage.setItem ('jwt', JSON.stringify(loginData))
          navigate('/avis');
        } else if (jwtResponse.status === 200 && loginData.roles === 'admin') {
            localStorage.setItem ('jwt', JSON.stringify(loginData))
          navigate('/espace-admin');
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