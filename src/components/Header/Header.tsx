import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <NavLink to={"/"}>
        <h1 className="site-header__title">Sheldon Groeneveld</h1>
      </NavLink>

      <nav className="site-header__nav">
        <NavLink to={"/software"} className="site-header__button">
          <h2>SOFTWARE</h2>
        </NavLink>
        <NavLink to={"/CAD"} className="site-header__button">
          <h2>CAD</h2>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
