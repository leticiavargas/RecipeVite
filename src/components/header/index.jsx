import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return(
    <header className='headerContainer'>
      Header
      <nav>
        <ul className='navList'>
          <li><NavLink to="/profile">Perfil</NavLink></li>
          <li><NavLink to="/recipe">Receitas</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;