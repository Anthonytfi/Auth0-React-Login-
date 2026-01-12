import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li>Home</li>
                <li>Sobre nosotros</li>
                <li>Contactos</li>
            </ul>

            <div className="nav-login">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
        </div>
    );
};

export default Navbar;
