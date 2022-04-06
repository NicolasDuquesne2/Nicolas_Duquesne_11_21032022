import './carrousel.scss'
import { useRef, useState } from 'react'


function Carrousel({pictures}) {

    const imgREf = useRef(null)
    const [index, setIndex] = useState(0)
    const uboundPictures = pictures.length -1

    function handleClick(e) {

        if(e.target.className === 'previous') {

            if (index === 0) {
                setIndex(uboundPictures)
            } else {
                setIndex(index -1 )
            }

            imgREf.current.attributes[1].value = pictures[index]
        } else if (e.target.className === 'next') {

            if (index === uboundPictures) {
                setIndex(0)
            } else {
                setIndex( index + 1)
            }

            imgREf.current.attributes[1].value = pictures[index]
        }
    }
    
    return (
        <div className='carrousel'>
            <button className='previous' onClick={handleClick}></button>
            <img ref={imgREf} className ='carrousel__img' src={pictures[index]} alt='carrousel'></img>
            <button className='next' onClick={handleClick}></button>
        </div>
    )
}

export default Carrousel
