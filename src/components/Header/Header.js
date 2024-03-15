export default function Header({ children }) {
  return (
    <header className="header">
      <h1 className="header__logo">NewsExplorer</h1>
      {children}
    </header>
  );
}
