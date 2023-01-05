import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ListArticlesAdmin from "./ListArticlesAdmin";


const DashboardAdmin = (props) => {
    const [articles, setArticles] = useState([]);
    const [role, setRole] = useState(null);
  
    useEffect(() => {
      const jwtLocalStorage = localStorage.getItem('jwt');
      const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
      const jwtRole = JSON.parse(jwtLocalStorage).roles;
      
      (async () => {
        const response = await fetch('http://localhost:8080/api/articles', {
          method: 'get', 
          headers: {
            'authorization': 'Bearer' + " " + jwtConnexion,
            'Content-Type': 'application.json'
          },
        });
        
        const articles = await response.json();
  
        setArticles(articles);
        setRole(jwtRole);
        
      })();
    }, []);

    return (
        <>
        <Header />
        {role === 'admin' &&
        <main>
          <h1>Bienvenue dans l'espace Admin</h1>
             

          <section className="dashboard">
              <h3>Articles</h3>
              
              <ListArticlesAdmin />

          </section>
        </main>
        } 
        </>
    )
};

export default DashboardAdmin;