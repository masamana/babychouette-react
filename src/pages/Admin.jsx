import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Admin = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // récupérer les paramètres de connexion pour vérifier le rôle dans le jwt et redigirer en fonction
    
        
    
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    
    
        fetch("http://localhost:8080/api/login/admin", {
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
            <h1>Connexion Admin</h1>
            <section className="admin-login">
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
                            
                            <button className="link-btn" type="submit">Connexion</button>
                        </form>
                    </div>
            </section>
        </main>
        
        </>

    )


};


export default Admin;