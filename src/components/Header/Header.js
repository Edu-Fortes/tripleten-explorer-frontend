import { Link, useLocation } from 'react-router-dom';

export default function Header({ children }) {
  const location = useLocation();
  return (
    <header
      className={location.pathname === '/' ? 'header' : 'header header_black'}
    >
      <Link to='/'>
        <h1 className='header__logo'>NewsExplorer</h1>
      </Link>
      {children}
    </header>
  );
}
