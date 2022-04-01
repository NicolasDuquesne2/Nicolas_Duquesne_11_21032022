import { Link } from 'react-router-dom'
import './card.scss'

function Card({id, title}) {


    return (
    <div className='card-wrapper'>
        <Link to={`/Logements/${id}`}>
            <p className='card-text'>
                {title}
            </p>
        </Link>
    </div>
    )
}


export default Card