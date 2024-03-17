import { NavLink } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to='saved-news'>Artigos Salvos</NavLink>
        </li>
        <li>{children}</li>
      </ul>
    </nav>
  );
}
