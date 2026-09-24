import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" aria-label='Accueil - Stevy.Dev' className='header__logo'>
                <img src={logo} alt="Logo du site" aria-hidden="true" />
            </NavLink>
            <nav className='navbar' aria-label="Navigation principale">
                <ul>
                    <li><NavLink to="/" aria-label="Retour à la page d'accueil du portfolio" className={({ isActive }) => isActive ? 'n-active' : ''}>Acceuil</NavLink></li>
                    <li><NavLink to="/projets" className={({ isActive }) => isActive ? 'n-active' : ''}>Projets</NavLink></li>
                    <li><NavLink to="/propos" className={({ isActive }) => isActive ? 'n-active' : ''}>A Propos</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'n-active' : ''}>Contact</NavLink></li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
};

export default Header;