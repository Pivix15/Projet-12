import { Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copy">© 2026 Stevy Nguyen</p>
            <div className="footer__socials">
                <a href="https://github.com/Pivix15" aria-label="Profile Github" className="icon-btn" target="_blank" rel="noreferrer">
                    <SiGithub size={18} color="currentColor" />
                </a>

                <a href="https://www.linkedin.com/in/stevy-nguyen-dinh-8b6b83279/" aria-label="Profile Linkedin" className="icon-btn" target="_blank" rel="noreferrer">
                    <FaLinkedin size={18} color="currentColor" />
                </a>

                <a href="mailto:stevynguyen@gmail.com" aria-label="M'envoyer un e-mail" className="icon-btn">
                    <Mail size={18} strokeWidth={1.8} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;