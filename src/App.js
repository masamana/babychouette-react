// J'importe ici tous les fichiers que je vais utliser dans l'application
import "./assets/scss/style.scss";
// Pour le style de l'application
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pour créer mes Url 

// Les composants de l'application
import Accueil from "./pages/Accueil";
import Qsn from "./pages/Qsn";
import ShowArticle from "./pages/ShowArticle";
import CreateArticle from "./pages/CreateArticle";
import SignUp from "./pages/SignUp";
import UpdateArticle from "./pages/UpdateArticle";
import Mam from "./pages/Mam";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import DashboardAdmin from "./pages/DashboardAdmin";
// import AccountUser from "./pages/AccountUser";
// import EspaceUser from "./pages/EspaceUser";
import Avis from "./pages/Avis";
import ArticleById from "./pages/ArticleById";
import Blog from "./pages/Blog";


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/qui-sommes-nous" element={<Qsn />}/>
          <Route path="/mam-babychouette" element={<Mam />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/inscription" element={<SignUp />} />
          <Route path="/avis" element={<Avis />} />

          <Route path="/articles" element={<Blog />} />
          <Route path="/article/:id" element={<ShowArticle />} />
          
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/article/admin/:id" element={<ArticleById />} />
          <Route path="/article/update/:id" element={<UpdateArticle />} />
          

          <Route path="/espace-admin" element={<DashboardAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
