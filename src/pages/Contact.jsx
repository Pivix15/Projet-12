import { useState } from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const Contact = () => {
    const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });
    const [statut, setStatut] = useState('idle'); // idle | envoi | succes | erreur

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatut('envoi');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        })
            .then(() => {
                setStatut('succes');
                setFormData({ nom: '', email: '', sujet: '', message: '' });
            })
            .catch(() => setStatut('erreur'));
    };

    return (
        <section className="contact">
            <div className="contact__intro">
                <p className="contact__eyebrow">Contact</p>
                <h1>Discutons de votre projet</h1>
                <p className="contact__texte">
                    Une question, une opportunité, ou juste envie d'échanger ? N'hésitez pas à m'écrire.
                </p>
            </div>

            <div className="contact__grille">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="contact__form"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="contact__honeypot">
                        <label>
                            Ne pas remplir : <input name="bot-field" onChange={handleChange} />
                        </label>
                    </p>

                    <div className="contact__row">
                        <div className="field">
                            <label htmlFor="nom">Nom</label>
                            <input
                                id="nom"
                                name="nom"
                                type="text"
                                required
                                value={formData.nom}
                                onChange={handleChange}
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="vous@exemple.com"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="sujet">Sujet</label>
                        <input
                            id="sujet"
                            name="sujet"
                            type="text"
                            required
                            value={formData.sujet}
                            onChange={handleChange}
                            placeholder="Objet de votre message"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message..."
                        />
                    </div>

                    <button type="submit" className="btn btn--primary" disabled={statut === 'envoi'}>
                        {statut === 'envoi' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>

                    {statut === 'succes' && <p className="contact__feedback contact__feedback--succes">Message envoyé, merci !</p>}
                    {statut === 'erreur' && <p className="contact__feedback contact__feedback--erreur">Une erreur est survenue, réessayez.</p>}
                </form>

                <aside className="info-card">
                    <div className="info-item">
                        <div className="info-item__icon"><Mail size={18} /></div>
                        <div>
                            <p className="info-label">Email</p>
                            <p className="info-value">stevynguyen@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item__icon"><Clock size={18} /></div>
                        <div>
                            <p className="info-label">Disponibilité</p>
                            <p className="info-value">Ouvert aux opportunités</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item__icon"><MapPin size={18} /></div>
                        <div>
                            <p className="info-label">Localisation</p>
                            <p className="info-value">France - mobile à l'international</p>
                        </div>
                    </div>

                    <div className="info-card__socials">
                        <a href="https://github.com/Pivix15" aria-label="Profil GitHub" className="icon-btn" target="_blank" rel="noreferrer">
                            <SiGithub size={18} />
                        </a>
                        <a href="https://linkedin.com/in/ton-profil" aria-label="Profil LinkedIn" className="icon-btn" target="_blank" rel="noreferrer">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;