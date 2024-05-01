import logo from '../images/LOGO.svg';
import '../assets/scss/Header.scss';

export default function Header(){
    return(
        <nav className='nav-Header'>
     <img className='logo-Nav' src={logo} alt='logo kasa'></img>
     
     <ul className='nav-listes' >
        <li>
            <a href='./pages/Home'>Accueil</a>
        </li>
        <li>
          <a href='./pages/About'>A propos</a>
        </li>
     </ul>

        </nav>
    )
}