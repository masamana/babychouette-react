import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Qsn from "./pages/Qsn";
import ListArticles from "./pages/ListArticles";
import ShowArticle from "./pages/ShowArticle";
import CreateArticle from "./pages/CreateArticle";
import SignUp from "./pages/SignUp";
import UpdateArticle from "./pages/UpdateArticle";
import Mam from "./pages/Mam";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import DashboardAdmin from "./pages/DashboardAdmin";
import FeedBack from "./pages/FeedBack";
import ArticleById from "./pages/ArticleById";




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

          <Route path="/creation-compte" element={<SignUp />} />
          <Route path="/avis-parents" element={<FeedBack />} />

          <Route path="/articles" element={<ListArticles />} />
          <Route path="/article/show/:id" element={<ShowArticle />} />
          
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/article/:id" element={<ArticleById />} />
          <Route path="/article/update/:id" element={<UpdateArticle />} />
          

          <Route path="/dashboard" element={<DashboardAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
