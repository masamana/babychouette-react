import Header from "../components/Header";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import LogoutBtn from "../components/LogoutBtn";
import { useState, useEffect } from "react";

const Avis = () => {

    const [role, setRole] = useState(null);

    useEffect(() => {
        const jwtLocalStorage = localStorage.getItem('jwt');
        const jwtRole = JSON.parse(jwtLocalStorage).roles;
        // Ici ce sont les variables pour stocker les valeurs du jwt et du rôle et pouvoir les utiliser 
        // dans la suite du code
        setRole(jwtRole);
      }, []);

    return (
        <>
        <Header />
        {role === 'user' &&

        <main>
            <section className="avis">
                <p>Vous avez maintenant la possibilité de laisser un petit mot et apporter votre avis en décrivant votre expérience au sein de la Mam. <br/>
                Nous vous remercions de votre confiance et de tous les moments partagés ensemble !</p>
                <LogoutBtn />
            </section>
        </main>
        }
        
        <Footer />
        </>
    )
}

export default Avis; 