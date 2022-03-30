import { Link } from 'react-router-dom'
import './card.scss'

function Card({title}) {
    return (
    <div className='card-wrapper'>
        <Link to={`/Logements/${title}`}>
            <p className='card-text'>
                {title}
            </p>
        </Link>
    </div>
    )
}


export default Card