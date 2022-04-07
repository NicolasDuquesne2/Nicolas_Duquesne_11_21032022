import './carrousel.scss'
import { useRef, useState, Fragment } from 'react'


function Carrousel({pictures}) {

    const imgREf = useRef(null)
    const [index, setIndex] = useState(0)
    const uboundPictures = pictures.length -1
    let content = ''

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

    if (pictures.length === 1) {
        content = <img ref={imgREf} className ='carrousel__img' src={pictures[index]} alt='carrousel'></img>
    } else if(pictures.length > 1) {
        content = <Fragment>
                    <button className='previous' onClick={handleClick}></button>
                    <img ref={imgREf} className ='carrousel__img' src={pictures[index]} alt='carrousel'></img>
                    <button className='next' onClick={handleClick}></button>
                  </Fragment>
    }
    
    return (
        <div className='carrousel'>
            {content}
        </div>
    )
}

export default Carrousel
