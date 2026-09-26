import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Stevy Nguyen - Développeur Front-End</title>
                <meta name="description" content="Portfolio de Stevy Nguyen, développeur front-end. Découvrez mes projets React, mon parcours et mes compétences en accessibilité et performance web." />
                <meta property="og:title" content="Stevy Nguyen - Développeur Front-End" />
                <meta property="og:description" content="Portfolio de Stevy Nguyen, développeur front-end. Découvrez mes projets React, mon parcours et mes compétences en accessibilité et performance web." />
                <meta property="og:url" content="https://pivix15-portfolio.netlify.app/" />
                <meta name="twitter:title" content="Stevy Nguyen - Développeur Front-End" />
                <meta name="twitter:description" content="Portfolio de Stevy Nguyen, développeur front-end. Découvrez mes projets React, mon parcours et mes compétences en accessibilité et performance web." />
            </Helmet>

            <section className="hero">
                <div className="hero__content">
                    <p className="hero__eyebrow">Intégrateur web front-end</p>
                    <h1 id="hero-title">Bonjour, je suis <br />Stevy Nguyen</h1>
                    <p className="hero__text">
                        Passionné par le développement web, je conçois des interfaces modernes et accessibles avec React,
                        en accordant une attention particulière aux détails, aux performances et à l’expérience utilisateur.
                    </p>
                </div>
                <div className="hero__buttons">
                    <Link to="/projets" className="btn btn--primary">Voir mes projets</Link>
                    <Link to="/contact" className="btn btn--secondary">Me contacter</Link>
                </div>
                <div className="hero__tori">
                    <svg viewBox="0 0 200 160" aria-hidden="true" className="tori">
                        <rect x="93" y="20" width="14" height="45" />
                        <rect x="10" y="18" width="180" height="16" rx="3" />
                        <rect x="0" y="34" width="200" height="6" />
                        <rect x="25" y="56" width="150" height="11" />
                        <rect x="30" y="20" width="15" height="132" />
                        <rect x="155" y="20" width="15" height="132" />
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Home;