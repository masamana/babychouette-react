import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListArticlesAdmin from "./ListArticlesAdmin";



const DashboardAdmin = (props) => {
    const [articles, setArticles] = useState([]);
    const [role, setRole] = useState(null);
    // Ici je créé un état pour stocker le rôle
    const navigate = useNavigate();
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
      const jwtRole = JSON.parse(jwtLocalStorage).roles;
      // Ici ce sont les variables pour stocker les valeurs du jwt et du rôle et pouvoir les utiliser 
      // dans la suite du code
      
      (async () => {
        const response = await fetch('http://localhost:8080/api/babychouette/articles', {
          method: 'get', 
          headers: {
            'authorization': 'Bearer' + " " + jwtConnexion,
            'Content-Type': 'application.json'
          },
        });
        
        const articles = await response.json();
        
        setArticles(articles);
        setRole(jwtRole);

        if (jwtRole != 'admin') {
          alert("Vous devez être administrateur pour accéder à cette page.")
          navigate('/login');
        }

      })();
    }, [navigate]);
    // je passe navigate en dépendance car console m'indique une erreur, avant fonctionnait sans dépendance
  //   WARNING in [eslint] 
  // src\pages\DashboardAdmin.jsx
  // Line 9:12:   'articles' is assigned a value but never used  no-unused-vars
  // Line 25:39:  Unexpected string concatenation of literals    no-useless-concat
  // Line 35:21:  Expected '!==' and instead saw '!='            eqeqeq

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