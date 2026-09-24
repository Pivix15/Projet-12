import { useParams, Link, Navigate } from 'react-router-dom';
import projets from '@/data/projets.json';
import { ArrowLeft } from 'lucide-react';

const ProjetDetail = () => {
    const { id } = useParams();
    const projet = projets.find((p) => p.id === id);

    if (!projet) {
        return <Navigate to="/projets" replace />;
    }

    const { detail } = projet;

    return (
        <section className="projet-detail" aria-labelledby="projet-title">
            <Link to="/projets" className="back-link">
                <ArrowLeft size={16} strokeWidth={2} />
                Tous les projets
            </Link>

            <div className="projet-detail__header">
                <div className="projet-detail__titre">
                    <h1 id="projet-title">{projet.titre}</h1>
                    <div className="projet-detail__tags">
                        {projet.tags.map((tag) => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="projet-detail__actions">
                    {projet.siteUrl && projet.siteUrl !== '#' && (
                        <a href={projet.siteUrl} className="btn btn--primary" target="_blank" rel="noreferrer">
                            Voir le site
                        </a>
                    )}
                    <a href={projet.lien} className="btn btn--secondary" target="_blank" rel="noreferrer">
                        Voir le code
                    </a>
                </div>
            </div>

            <div className="projet-detail__visuel">
                <img src={projet.image} alt={`Capture d'écran du projet ${projet.titre}`} />
            </div>

            <div className="projet-detail__contenu">
                <div className="projet-detail__texte">
                    <div className="projet-detail__bloc">
                        <h2>Contexte</h2>
                        <p>{detail.contexte}</p>
                    </div>
                    <div className="projet-detail__bloc">
                        <h2>Ce que j'ai fait</h2>
                        <p>{detail.ceQueJaiFait}</p>
                    </div>
                    <div className="projet-detail__bloc">
                        <h2>Ce que ça m'a appris</h2>
                        <p>{detail.ceQueJaiAppris}</p>
                    </div>
                </div>

                <aside className="info-card">
                    <div className="info-row">
                        <span className="info-label">Rôle</span>
                        <span className="info-value">{detail.role}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Stack</span>
                        <span className="info-value">{detail.stack}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Formation</span>
                        <span className="info-value">{detail.formation}</span>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ProjetDetail;