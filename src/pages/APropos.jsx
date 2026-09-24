import { Link } from 'react-router-dom';
import parcours from '@/data/parcours.json';
import {
    SiHtml5,
    SiSass,
    SiJavascript,
    SiReact,
    SiRedux,
    SiGit,
    SiFigma,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { ShieldCheck, Search } from 'lucide-react';
import profile from '@/assets/profile/Profile.webp'

const competences = [
    { nom: 'HTML5', Icon: SiHtml5, couleur: '#E4572E' },
    { nom: 'CSS3', Icon: FaCss3Alt, couleur: '#2E6FE0' },
    { nom: 'Sass', Icon: SiSass, couleur: '#CC6699' },
    { nom: 'JavaScript', Icon: SiJavascript, couleur: '#C9A227' },
    { nom: 'React', Icon: SiReact, couleur: '#149ECA' },
    { nom: 'Redux Toolkit', Icon: SiRedux, couleur: '#764ABC' },
    { nom: 'Accessibilité (RGAA)', Icon: ShieldCheck, couleur: '#2E8B74' },
    { nom: 'SEO', Icon: Search, couleur: '#4C6FA5' },
    { nom: 'Git / GitHub', Icon: SiGit, couleur: '#F1502F' },
    { nom: 'Figma', Icon: SiFigma, couleur: '#A259FF' },
];

const APropos = () => {
    return (
        <section className="apropos">
            <div className="apropos__intro">
                <div className="apropos__texte">
                    <p className="apropos__eyebrow">À propos</p>
                    <h1>Le développeur derrière l'écran</h1>
                    <p className="apropos__bio">
                        En reconversion vers le développement web, je me forme chez OpenClassrooms au métier d'intégrateur front-end.
                        J'aime construire des interfaces claires, accessibles, et fidèles à une maquette sans jamais perdre de vue l'utilisateur final.
                    </p>
                    <div className="apropos__actions">
                        <Link to="/contact" className="btn btn--primary">Me contacter</Link>
                        <Link to="/projets" className="btn btn--secondary">Voir mes projets</Link>
                    </div>
                </div>
                <div className="apropos__photo">
                    <img src={profile} alt="Photo de profil de Stevy Nguyen"/>
                </div>
            </div>

            <div className="apropos__bloc">
                <h2>Compétences</h2>
                <div className="apropos__competences">
                    {competences.map(({ nom, Icon, couleur }) => (
                        <div className="skill-card" key={nom}>
                            <div className="skill-card__icon">
                                <Icon size={20} color={couleur} />
                            </div>
                            <span className="skill-card__nom">{nom}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="apropos__bloc">
                <h2>Parcours</h2>
                <div className="timeline">
                    {parcours.map((etape, index) => (
                        <div className="timeline__item" key={etape.titre}>
                            <div className="timeline__marker">
                                <span className="timeline__dot" />
                                {index !== parcours.length - 1 && <span className="timeline__line" />}
                            </div>
                            <div className="timeline__contenu">
                                <p className="timeline__periode">{etape.periode}</p>
                                <h3>{etape.titre}</h3>
                                <p>{etape.texte}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default APropos;