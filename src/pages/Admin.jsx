import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Admin = () => {
    return (
        <>
        <Header />
        <main>
            <h1>Connexion Admin</h1>
            <section className="admin-login">
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
            </section>
        </main>
        
        </>

    )


};


export default Admin;