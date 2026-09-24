import { useState } from 'react';
import { Link } from 'react-router-dom';
import projets from '@/data/projets.json';

const FILTRES = ['Tous', 'React', 'JavaScript', 'Node.js', 'SEO', 'Accessibilité', 'HTML/CSS'];

const Projets = () => {
    const [filtreActif, setFiltreActif] = useState('Tous')

    const projetsFiltres =
        filtreActif === 'Tous'
            ? projets
            : projets.filter((projet) => projet.tags.includes(filtreActif))

    return (
        <section className="projets" aria-labelledby="projets-title">
            <div className="projets__intro">
                <h1 id="projets-title">Mes projets</h1>
                <p>Une sélection de projets réalisés durant ma formation d'intégrateur web front-end.</p>
            </div>

            <div className="projets__filtres" role="group" aria-label="Filtrer les projets par technologie">
                {FILTRES.map((filtre) => (
                    <button
                        key={filtre}
                        type="button"
                        className={`filter-btn${filtre === filtreActif ? ' filter-btn--active' : ''}`}
                        aria-pressed={filtre === filtreActif}
                        onClick={() => setFiltreActif(filtre)}
                    >
                        {filtre}
                    </button>
                ))}
            </div>

            <div className="projets__grille">
                {projetsFiltres.map((projet) => (
                    <Link to={`/projets/${projet.id}`} className="card" key={projet.id}>
                        <div className="card__image">
                            <img src={projet.image} alt="" />
                        </div>
                        <div className="card__body">
                            <h2>{projet.titre}</h2>
                            <p>{projet.description}</p>
                            <div className="card__tags">
                                {projet.tags.map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Projets;