import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const FeedBack = () => {


    return (
        <>
        <Header />
        <main>
            <section className="feedback">
                <p>Vous avez maintenant la possibilité de laisser un petit mot et apporter votre avis en décrivant votre expérience au sein de la Mam. <br/>
                Nous vous remercions de votre confiance et de tous les moments partagés ensemble !</p>

            </section>
        </main>
        
        <Footer />
        </>
    )
}

export default FeedBack; 