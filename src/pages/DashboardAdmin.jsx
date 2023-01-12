import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListArticlesAdmin from "./ListArticlesAdmin";


const DashboardAdmin = (props) => {
    const [articles, setArticles] = useState([]);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
      const jwtRole = JSON.parse(jwtLocalStorage).roles;
      
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
    }, []);

    return (
        <>
        <Header />
        {role === 'admin' &&
        <main>
          <h1>Bienvenue dans l'espace Admin</h1>
             

          <section className="dashboard">
              <h2>Les articles du blog</h2>
              
              <ListArticlesAdmin />

          </section>
        </main>
        } 
        <Footer />
        </>
    )
};

export default DashboardAdmin;