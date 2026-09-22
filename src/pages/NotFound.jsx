import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Cette page n'existe pas.</p>
            <Link to='/'>Retour à l'acceuil</Link>
        </div>
    );
};

export default NotFound;