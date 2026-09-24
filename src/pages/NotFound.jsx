import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found">
            <svg
                className="not-found__illustration"
                width="120"
                height="100"
                viewBox="0 0 200 160"
                aria-hidden="true"
            >
                <rect x="93" y="20" width="14" height="45" fill="#C8442F" />
                <rect x="10" y="18" width="180" height="16" rx="3" fill="#C8442F" />
                <rect x="0" y="34" width="200" height="6" fill="#C8442F" />
                <rect x="25" y="56" width="150" height="11" fill="#C8442F" />
                <rect x="30" y="20" width="15" height="132" fill="#C8442F" />
                <rect x="155" y="20" width="15" height="132" fill="#C8442F" />
            </svg>

            <p className="not-found__code" aria-hidden="true">404</p>

            <div className="not-found__texte">
                <h1>Cette page n'existe pas</h1>
                <p>La page que vous cherchez a été déplacée, supprimée, ou n'a jamais existé.</p>
            </div>

            <Link to="/" className="btn btn--primary">Retour à l'accueil</Link>
        </section>
    );
};

export default NotFound;