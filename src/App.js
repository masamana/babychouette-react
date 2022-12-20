import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Qsn from "./pages/Qsn";
import ListArticles from "./pages/ListArticles";
import ShowArticle from "./pages/ShowArticle";
import CreateArticle from "./pages/CreateArticle";
import UpdateArticle from "./pages/UpdateArticle";
import Mam from "./pages/Mam";



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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
