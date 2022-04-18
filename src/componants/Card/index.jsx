import { Link } from 'react-router-dom'
import './card.scss'

function Card({id, title, image}) {

    let content = null
    let classCard = ''

    if (image) {
        content = <Link to={`/Logements/${id}`}>
                    <img className='card-wrapper--image__img' alt={title} src={image}></img>
                    <p className='card-text'>
                        {title}
                    </p>
                  </Link>
        classCard = ' card-wrapper card-wrapper--image'
    } else {
        content = <Link to={`/Logements/${id}`}>
                    <p className='card-text'>
                        {title}
                    </p>
                  </Link>
        classCard = 'card-wrapper card-wrapper--thumb'
    }

    return (
        <div className={classCard}>
            {content}
        </div>
    )
}


export default Card