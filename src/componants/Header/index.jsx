import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './header.scss'

function Header({selected}) {

    let home = ""
    let about = ""

    if (selected === 'home') {
        home = <Link to='/' className='selected'>Accueil</Link>
        about = <Link to='/A-propos'>A Propos</Link>
    } else if (selected === 'about') {
        home = <Link to='/'>Accueil</Link>
        about = <Link to='/A-propos' className='selected'>A Propos</Link>
    } else {
        home = <Link to='/'>Accueil</Link>
        about = <Link to='/A-propos'>A Propos</Link>
    }
    
    return (
        <div className='header'>
            <img src={logo} alt='Kasa' />
            <nav>
            {home}
            {about}
            </nav>
        </div>
    )
}

export default Header

