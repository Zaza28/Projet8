import logo from '../images/LOGO.svg';
import '../assets/scss/Header.scss';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav className='nav-Header'>
     <img className='logo-Nav' src={logo} alt='logo kasa'></img>
     
     <ul className='nav-listes' >
        <li>
          <Link to="/" >Accueil</Link>
        </li>
        <li>
          <Link to="/About" >A propos</Link>
        </li>
     </ul>

        </nav>
    )
}