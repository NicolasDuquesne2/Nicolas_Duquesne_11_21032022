import './banner.scss'
import mountainsPic from '../../assets/mountains.png'
import shorePic from '../../assets/shore.png'



function Banner({pageName}) {

    let content = ''

    if (pageName === 'home') {
        content =  <div className='banner banner--home'>
                        <p className="banner__text">Chez vous, partout et ailleurs</p>
                        <img className="banner__image banner__image--home" src= {shorePic} alt='landscape'/>
                   </div>
    } else if (pageName === 'about') {
        content = <div className="banner banner--about">
                        <img className="banner__image banner__image--about" src= {mountainsPic} alt='landscape'/>
                  </div>
    }

    return (
        content
    )
}


export default Banner