import logo from '../images/LOGO.svg';
import '../assets/scss/Header.scss';
import { Link, useLocation } from "react-router-dom";

export default function Header(){
  const location = useLocation();
    return(
        <nav className='nav-Header'>
     <img className='logo-Nav' src={logo} alt='logo kasa'></img>
     
     <ul className='nav-listes' >
        <li>
          <Link to="/" className={ location.pathname === '/' ? 'active' : '' } >Accueil</Link>
        </li>
        <li>
          <Link to="/About" className={ location.pathname === '/About' ? 'active' :'' } >A propos</Link>
        </li>
     </ul>

        </nav>
    )
}