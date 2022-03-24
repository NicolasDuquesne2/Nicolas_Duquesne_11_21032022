import logo from '../../assets/logo-white.svg'
import './footer.scss'

function Footer() {
    return(
        <div className='footer'>
            <img  className="footer-logo" src={logo} alt='Kasa' />
            <p className='footer-text'>&#xA9;2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer