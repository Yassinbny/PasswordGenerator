import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <h1>
        <Link className="custom-links" to="/">
          Password Generator
        </Link>
      </h1>
      <nav className="links">
        <ul>
          <li>
            <NavLink className="custom-links" to="/passgenerator">
              Generar contraseña
            </NavLink>
          </li>
          <li>
            <NavLink className="custom-links" to="/keepedpasswords">
              Contraseñas guardadas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
