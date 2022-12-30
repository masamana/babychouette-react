// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const AdminPanel = () => {
    return (
        <>
        <Header />
        <main>
            <h1>Bienvenue dans l'espace Admin</h1>
            <section className="admin-panel">
            <Link className="link-btn" to="/article/create">Créer un article</Link>

            </section>
        </main>
        </>
    )


};
export default AdminPanel;