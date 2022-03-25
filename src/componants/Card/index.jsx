import './card.scss'

function Card({title}) {
    return (
    <div className='card-wrapper'>
        <p className='card-text'>
            {title}
        </p>
    </div>
    )
}


export default Card