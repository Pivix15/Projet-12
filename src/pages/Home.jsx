import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
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