import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListArticlesAdmin from "./ListArticlesAdmin";



const DashboardAdmin = (props) => {
    // const [articles, setArticles] = useState([]);
    const [role, setRole] = useState(null);
    // Ici je créé un état pour stocker le rôle
    const navigate = useNavigate();
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
      const jwtRole = JSON.parse(jwtLocalStorage).roles;
      // Ici ce sont les variables pour stocker les valeurs du jwt et du rôle et pouvoir les utiliser 
      // dans la suite du code
      
        setRole(jwtRole);

        if (!jwtConnexion) {
          alert('vous devez être connecté.')
          navigate('/login');
        } 
        
        else if (jwtRole === 'user') {
          alert("Vous devez être administrateur pour accéder à cette page.")
          navigate('/avis')
        }
        

    }, [navigate]);

    return (
        <>
        <Header />
        {role === 'admin' &&
          <main>
            <h1>Bienvenue dans l'espace Admin</h1>

              <ListArticlesAdmin />
              
          </main>
        } 
        <Footer />
        </>
    )
};

export default DashboardAdmin;