export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="/">Home</a>
        </li>
        <li className="navbar__item">
          <a href="/about">Artigos Salvos</a>
        </li>
        <li>{children}</li>
      </ul>
    </nav>
  );
}
