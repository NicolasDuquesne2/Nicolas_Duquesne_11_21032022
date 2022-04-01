import './carrousel.scss'

function Carrousel({cover, pictures}) {
    return (
        <div className='carrousel'>
            <img className ='carrousel__img' src={cover} alt='carrousel'></img>
        </div>
    )
}


export default Carrousel
