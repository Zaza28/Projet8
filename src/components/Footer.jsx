import '../assets/scss/Footer.scss';
import logo from '../images/LOGO.svg';


export default function Footer() {
   return  (

  <footer className="footer-container">
     <img className='logo-footer' src={logo} alt='logo kasa'></img>
<p className='footer-text'>© 2020 Kasa. All rights reserved</p>
  </footer>
  )
}
