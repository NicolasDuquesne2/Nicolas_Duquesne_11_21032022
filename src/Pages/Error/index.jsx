import './error.scss'
import Header from "../../componants/Header"
import { Link } from 'react-router-dom'

function Error() {
    return (
      <div className='wrapper'>
        <Header
            selected= ''
        />
        <div className="error-wrapper">
          <h1 className='error-code'>404</h1>
          <p className='error-text'>Oups! La page que vous demandez n'existe pas</p>
          <Link to='/' className='error-link'>Retourner sur la page d'accueil</Link>
        </div>
      </div>
    )
  }
  
  export default Error