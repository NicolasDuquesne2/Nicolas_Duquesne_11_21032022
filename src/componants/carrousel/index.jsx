import './carrousel.scss'
import image from '../../assets/carrousel.png'

function Carrousel() {
    return (
        <div className='carrousel'>
            <img src={image} alt='carrousel'></img>
        </div>
    )
}


export default Carrousel