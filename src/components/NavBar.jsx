import '../styles/App.css'
import logo from '../assets/fitbit_logo.png'

export default function NavBar() {
    return(
        <nav>
            <span className='logo'><img src={logo} alt="logo"/></span>
            <ul className='font'>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Enroll Now</a></li>
            </ul>
        </nav>
    )
}