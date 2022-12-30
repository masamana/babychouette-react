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
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";



function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/qui-sommes-nous" element={<Qsn />}/>
          <Route path="/mam-babychouette" element={<Mam />}/>
          <Route path="/articles" element={<ListArticles />} />
          <Route path="/article/show/:id" element={<ShowArticle />} />
          <Route path="/article/create" element={<CreateArticle />} />
          <Route path="/article/update/:id" element={<UpdateArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creation-compte" element={<SignUp />} />
          <Route path="/login/admin" element={<Admin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
