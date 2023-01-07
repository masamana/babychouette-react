import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Mam = () => {
    return (
        <>
        <Header />
        <main>
            <h1>Visite de la Mam</h1>
            <section className="mam">
            <div className="container">
              <div className="content">
                <img className="img-size" src="/img/2020-10-13.jpg" alt="" />
                <h2>Notre havre de paix !</h2>
                <p>Chez Babychouette bienveillance et empathie sont nos valeurs fondamentales. Notre Mam se veut être un endroit où les enfants et les parents sont traités avec respect et compréhension. 
                Les enfants sont encouragés à explorer et à apprendre de manière stimulante et sûre. Les assistantes maternelles sont des professionnelles de la petite enfance qui connaissent les meilleures pratiques en matière de soins, et qui sont également à l'écoute des préoccupations des parents. 
                Les parents sont invités à participer à la vie de la Mam et à travailler en collaboration avec nous pour discuter des besoins des enfants. Nous encouragons la communication positive et les relations saines entre parents et enfants, et souhaitons offrir un environnement positif où chacun se sent écouté et entendu.
                </p>
              </div>
            </div>

            </section>
        
        </main>
        <Footer />
        </>

    )

}

export default Mam;