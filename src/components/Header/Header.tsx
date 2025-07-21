import "./Header.scss";

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-header__title">Sheldon Groeneveld</h1>
      <div className="site-header__container">
        <button className="site-header__button">
          <h2>SOFTWARE</h2>
        </button>
        <button className="site-header__button">
          <h2>CAD</h2>
        </button>
      </div>
    </header>
  );
}

export default Header;
